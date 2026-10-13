// Projets du portfolio. Pour en ajouter un : ajouter un objet à `projects`, rien d'autre.
//
//   id    identifiant unique. Si public/projects/<id>.webp existe, l'aperçu et la
//         modale affichent cette capture ; sinon ils gardent la couverture générée.
//   t     titre                    cat   catégorie (clé de `categories`)
//   k     type affiché             d     accroche courte (ligne de l'index)
//   c     couleur d'accent         bg    fond de la couverture générée
//   desc  description longue       role, for, year, stack   fiche de la modale
//   url   lien du site ('' = pas de lien)      soon  texte du bouton sans lien
//   ents  entités [nom, description]           sym   true = emblème SANKORA HAUSS
export const projects = [
 {id:'kart',t:'KART',cat:'saas',k:'Produit SaaS',d:'Cartes de visite digitales et NFC : une carte, un lien, un scan.',c:'#5B8CFF',bg:'#071A2E',
  desc:"Application de cartes de visite digitales. Chaque utilisateur crée sa carte, la partage par QR code ou par carte NFC physique, et personnalise sa page publique parmi cinq dispositions. Application mobile, site public et espace d'administration.",
  role:'Co-fondateur, développement complet',for:'ORYZA (studio SaaS)',year:'2026 · en ligne',stack:['Flutter','Laravel','Vue 3','NFC'],url:'https://www.kart.business'},
 {id:'oryza',t:'ORYZA',cat:'site',k:'Site · studio',d:'Le site du startup studio que je cofonde.',c:'#6A7BFF',bg:'#0A0C1F',
  desc:"Site du startup studio ORYZA, qui conçoit et lance des solutions digitales : présentation du studio, de sa méthode et de ses produits, dont KART.",
  role:'Cofondateur, design et développement',for:'ORYZA',year:'2026 · en ligne',stack:['React'],url:'https://oryza.digital'},
 {id:'nexlog',t:'Nexlog',cat:'saas',k:'Plateforme',d:'Commandes, livraisons et encaissements des e-commerçants au même endroit.',c:'#FF6A3D',bg:'#1C0A05',
  desc:"Plateforme logistique pour les e-commerçants sénégalais qui jonglent entre WhatsApp, Excel et les appels : création de boutique, livraison le jour même à Dakar et sous 48 h ailleurs, encaissement Wave, Orange Money ou à la livraison, suivi des colis en temps réel et synchronisation Shopify.",
  role:'Développeur',for:'Nexlog',year:'En ligne',stack:['Vue.js'],url:'https://nexlog-sigma.vercel.app'},
 {id:'altiora',t:'Altiora',cat:'saas',k:'Produit SaaS',d:"Le système d'exploitation des agences de voyage.",c:'#7FB2FF',bg:'#081426',
  desc:"Logiciel central pour les agences de voyage : gestion des clients, des dossiers et des documents, suivi des obligations de conformité, avec une assistance par intelligence artificielle.",
  role:'Conception et développement',for:'Altiora',year:'En ligne',stack:['Vue.js'],url:'https://altiorapp.com'},
 {id:'kaisse',t:'Kaisse',cat:'saas',k:'Produit SaaS',d:'Caisse PWA premium pour les fast-foods sénégalais.',c:'#FF8A3D',bg:'#24130A',
  desc:"Logiciel de caisse installable comme une application, pensé pour les fast-foods : prise de commande rapide, impression des tickets sur imprimante thermique en Bluetooth, connexion par code PIN et couleurs propres à chaque restaurant.",
  role:'Conception et développement',for:'SANKORA HAUSS',year:'2026 · en développement',stack:['React 19','TypeScript','Zustand','Web Bluetooth'],url:'',soon:'Développé · déploiement à venir'},
 {id:'boutik',t:'Boutik',cat:'saas',k:'Produit SaaS',d:'Gestion des boutiques de quartier : ventes, stock, crédit client.',c:'#3DDC84',bg:'#06190F',
  desc:"Plateforme multi-boutiques pour les commerces de quartier : ventes, stock, caisse, suivi des crédits clients et tableau de bord superadmin. Fonctionne comme une application, même avec une connexion instable.",
  role:'Conception et développement',for:'SANKORA HAUSS',year:'2026 · en développement',stack:['React','Vite','TypeScript','Laravel','MariaDB'],url:'',soon:'Développé · déploiement à venir'},
 {id:'agri',t:'AgriManage',cat:'saas',k:'Produit SaaS',d:"ERP agricole : parcelles, récoltes et équipes au même endroit.",c:'#9BD66B',bg:'#012D1D',
  desc:"ERP pour les exploitations agricoles, avec des parcours distincts pour l'exploitant et l'administrateur : 13 écrans couvrant le suivi des activités de l'exploitation.",
  role:'Conception et développement',for:'SANKORA HAUSS',year:'2026 · en développement',stack:['Vue 3','Pinia','Laravel'],url:'',soon:'Développé · déploiement à venir'},
 {id:'nour',t:'Nouroudarayni',cat:'saas',k:'Application mobile',d:"Application mobile d'un SaaS développé en partenariat.",c:'#C8A2FF',bg:'#160C24',
  desc:"Développement de l'application mobile Flutter d'un SaaS mené en partenariat, construite sur un backend existant.",
  role:'Développeur mobile',for:'Partenariat',year:'2026 · en cours',stack:['Flutter'],url:'',soon:'Application mobile · site vitrine à venir'},
 {id:'pmd',t:'PMD',cat:'site',k:'Site client',d:'Site de la certification de conducteurs professionnels.',c:'#E5484D',bg:'#1E0709',
  desc:"Site de la certification Professional Mobility Driver, programme porté par Yello UPSKILL : neuf pages fidèles à la maquette validée, formulaires de candidature et de contact, paramètres de session centralisés.",
  role:'Intégration et développement',for:'PMD · Yello UPSKILL',year:'2026 · en ligne',stack:['React','Vite','React Router'],url:'https://certificationpmd.com'},
 {id:'cxbd',t:'CXBD',cat:'site',k:'Projet ORYZA',d:'Centre Expérimental en Business Design, incubateur.',c:'#22C7A9',bg:'#03171A',
  desc:"Site du CXBD, Centre Expérimental en Business Design : un incubateur stratégique qui accompagne les entrepreneurs sénégalais dont les projets s'alignent sur les priorités nationales.",
  role:'Développement, au sein du studio',for:'ORYZA · pour le CXBD',year:'En ligne',stack:['React'],url:'https://cxbd-app-gkk4.vercel.app'},
 {id:'noir',t:'NØIR',cat:'site',k:'E-commerce',d:'Boutique en ligne de bijoux premium.',c:'#D9D4C7',bg:'#0B0B0B',
  desc:"Boutique en ligne de bijoux haut de gamme pour hommes et femmes : chaînes, bagues, bracelets, pendentifs, colliers et boucles d'oreilles, dans un univers noir et épuré.",
  role:'Développeur, en binôme',for:'NØIR',year:'En ligne',stack:['Vue.js'],url:'https://noir-frontend-red.vercel.app'},
 {id:'ndiaga',t:'Ndiaga Euro Electronics',cat:'site',k:'E-commerce',d:"Boutique d'électronique premium au Sénégal.",c:'#38BDF8',bg:'#04121C',
  desc:"Site e-commerce d'une boutique d'électronique haut de gamme au Sénégal, installable sur l'écran d'accueil du téléphone comme une application.",
  role:'Développeur, en binôme',for:'Ndiaga Euro Electronics',year:'En ligne',stack:['Laravel','Vue.js'],url:'https://ndiagaeuroelectronics.com'},
 {id:'club',t:'Club Mobile',cat:'site',k:'Site client',d:'Boutique de téléphones à Ouakam, commande sur WhatsApp.',c:'#4FD1C5',bg:'#04191A',
  desc:"Site catalogue pour une boutique de téléphones et d'électroménager à Ouakam : les clients parcourent les produits et commandent directement sur WhatsApp.",
  role:'Design et développement',for:'Club Mobile, Dakar',year:'2026',stack:['React','Vite','Tailwind'],url:'https://club-mobile-sable.vercel.app/'},
 {id:'photo',t:'Photolive',cat:'site',k:'Plateforme client',d:"Galeries photo d'événement accessibles par QR code.",c:'#FF7A1A',bg:'#140A02',
  desc:"Plateforme de galeries photo pour les événements : les invités scannent un QR code et retrouvent les photos en direct. Première phase (MVP) réalisée pour CID EYES Consulting.",
  role:'Conception et développement',for:'CID EYES Consulting',year:'2026 · phase 1',stack:['Laravel','MySQL'],url:'',soon:'Développé · déploiement à venir'},
 {id:'obad',t:'OBAD DRESS',cat:'site',k:'Site + logiciel',d:'Boutique de tenues à Dakar : site catalogue et gestion de stock.',c:'#E2C27B',bg:'#17120A',
  desc:"Site de la boutique OBAD DRESS à Dakar : collections thématiques de tenues et de costumes, prix et tailles, envoi des mesures pour le sur-mesure et commande par WhatsApp ou e-mail. S'y ajoute une application de bureau de gestion de stock et de facturation, dans une identité ivoire, or et noir chaud.",
  role:'Design, développement et supervision de la boutique',for:'OBAD DRESS',year:'En ligne',stack:['Vue 3','Desktop'],url:'https://obaddress.netlify.app/'},
 {id:'yello',t:'Yello · automatisation',cat:'auto',k:'Automatisation',d:'Système marketing automatisé en 8 modules.',c:'#FFD43B',bg:'#191502',
  desc:"Système complet d'automatisation marketing pour une edtech : collecte, qualification et relances automatiques entre n8n, Airtable et Gmail, organisé en 8 modules et documenté pour l'équipe.",
  role:'Architecture et développement des flux',for:'Yello',year:'2026',stack:['n8n','Airtable','Gmail API'],url:'',soon:'Outil interne · pas de lien public'},
 {id:'sankora',t:'SANKORA HAUSS',cat:'brand',k:'Groupe · identité',d:'Mon groupe, ses entités et leur identité visuelle.',c:'#E7BD43',bg:'#031633',
  desc:"SANKORA HAUSS est l'entité mère qui porte mes activités entrepreneuriales. Son nom vient de l'histoire de mon père et de son attachement à la kora : le symbole est un S d'or tracé d'un seul trait, qui traverse le H de la maison, dans le chevalet de la kora. J'ai créé l'identité complète du groupe : charte graphique, emblème de HAUSS TECHNIK et cartes de visite NFC prêtes à imprimer.",
  ents:[['HAUSS TECHNIK','Matériel électronique, maintenance, développement et conseil technologique'],['HAUSS WATER','Solutions connectées et gestion intelligente de l\'eau'],['HAUSS IMMO','Immobilier et solutions numériques associées · en projet']],
  role:'Fondateur, direction artistique',for:'SANKORA HAUSS',year:'Depuis 2022 · sites en préparation',stack:['Identité','Charte graphique','Print','NFC'],url:'',soon:'Site en préparation',sym:true}
];

// Filtres de l'index : [clé, libellé]. 'all' affiche tout.
export const categories = [['all','Tout'],['saas','Produits SaaS'],['site','Sites & logiciels'],['auto','Automatisation'],['brand','Identité']];

// Cartes « Ce que je fais ». Le compteur est calculé à partir de `projects`.
export const domains = [
  { cat: 'saas', t: 'Produits SaaS', p: "Du besoin terrain à l'abonnement : caisses, gestion de boutique, ERP, cartes digitales." },
  { cat: 'site', t: 'Sites sur-mesure', p: 'Sites vitrines et plateformes codés à la main, rapides, fidèles à la maquette.' },
  { cat: 'auto', t: 'Automatisation', p: 'Flux n8n, Airtable et e-mail qui remplacent des heures de travail manuel.' },
  { cat: 'brand', t: 'Identité visuelle', p: "Logos, chartes graphiques et supports imprimés, jusqu'aux cartes NFC." },
]
