// Renders the share image and the PNG icons from scripts/og.html and
// scripts/icon.html, with the site's own fonts.
//
//   npm install --no-save playwright-core   (uses the Chrome installed on the machine)
//   node scripts/generate-assets.mjs
import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright-core'

const root = fileURLToPath(new URL('..', import.meta.url))
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.woff2': 'font/woff2' }

const server = createServer(async (req, res) => {
  try {
    const file = join(root, decodeURIComponent(new URL(req.url, 'http://localhost').pathname))
    const body = await readFile(file)
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(body)
  } catch {
    res.writeHead(404).end()
  }
})
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const origin = `http://127.0.0.1:${server.address().port}`

const shots = [
  { page: 'og.html', width: 1200, height: 630, out: 'public/og.png' },
  { page: 'icon.html', width: 180, height: 180, out: 'public/apple-touch-icon.png' },
  { page: 'icon.html', width: 32, height: 32, out: 'public/favicon-32.png' },
]

const browser = await chromium.launch({ channel: 'chrome' })
try {
  for (const shot of shots) {
    const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height } })
    await page.goto(`${origin}/scripts/${shot.page}`)
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({ path: join(root, shot.out) })
    await page.close()
    console.log(`✓ ${shot.out}`)
  }
} finally {
  await browser.close()
  server.close()
}
