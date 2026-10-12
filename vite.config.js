import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Public URL of the site, without trailing slash (e.g. SITE_URL=https://example.com).
// Set it in the host's environment variables once the domain is known: social
// networks only accept an absolute URL for the share image.
const SITE_URL = (process.env.SITE_URL ?? '').replace(/\/+$/, '')

// Exposes the ids of the screenshots found in public/projects/ as
// `virtual:project-shots`, so the app knows at build time which projects have a
// real capture and never requests a missing file.
function projectShots() {
  const dir = fileURLToPath(new URL('./public/projects/', import.meta.url))
  const virtualId = 'virtual:project-shots'
  const resolvedId = '\0' + virtualId

  return {
    name: 'project-shots',
    resolveId(source) {
      if (source === virtualId) return resolvedId
    },
    load(id) {
      if (id !== resolvedId) return
      let ids = []
      try {
        ids = readdirSync(dir)
          .filter((file) => file.endsWith('.webp'))
          .map((file) => file.slice(0, -'.webp'.length))
      } catch {
        // No public/projects folder: every project keeps its generated cover.
      }
      return `export default ${JSON.stringify(ids)}`
    },
    configureServer(server) {
      server.watcher.on('all', (event, file) => {
        if (!file.startsWith(dir) || (event !== 'add' && event !== 'unlink')) return
        const mod = server.moduleGraph.getModuleById(resolvedId)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.hot.send({ type: 'full-reload' })
      })
    },
  }
}

// Adds the tags that depend on the public URL: share image, og:url, canonical.
function socialMeta() {
  return {
    name: 'social-meta',
    transformIndexHtml() {
      const image = `${SITE_URL}/og.png`
      const tags = [
        { tag: 'meta', attrs: { property: 'og:image', content: image }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:image', content: image }, injectTo: 'head' },
      ]
      if (SITE_URL) {
        tags.push(
          { tag: 'meta', attrs: { property: 'og:url', content: `${SITE_URL}/` }, injectTo: 'head' },
          { tag: 'link', attrs: { rel: 'canonical', href: `${SITE_URL}/` }, injectTo: 'head' },
        )
      }
      return tags
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), projectShots(), socialMeta()],
  server: {
    port: 5180,
    strictPort: true,
  },
})
