# Déploiement — Buildr Website

Site vitrine `getbuildr.fr` — Next.js 16 + Tailwind v4, hébergé sur **Vercel**.

---

## Première mise en ligne

### 1. Push GitHub
```bash
cd buildr-website
git add .
git commit -m "feat: pages légales + adaptation beta"
git push origin master
```

### 2. Importer le repo sur Vercel
1. Aller sur https://vercel.com/new
2. Se connecter avec GitHub
3. Importer le repo `buildr-website`
4. Vercel détecte automatiquement Next.js, aucun réglage à changer
5. **Cliquer "Deploy"** — premier build ~1-2 min
6. URL de preview générée : `buildr-website-xxx.vercel.app`

### 3. Vérifier la preview
Avant de brancher le domaine, vérifier sur l'URL Vercel :
- [ ] Accueil chargé sans erreur
- [ ] `/pricing` affiche la bannière "Beta gratuite"
- [ ] `/cgu`, `/privacy`, `/mentions-legales` rendent bien le markdown
- [ ] `/support` affiche la FAQ et l'email de contact
- [ ] Le footer contient les liens légaux
- [ ] Le switcher de langue fonctionne

### 4. Brancher le domaine `getbuildr.fr`
Dans Vercel : **Project → Settings → Domains → Add Domain** → `getbuildr.fr` et `www.getbuildr.fr`.

Vercel affiche les enregistrements DNS à créer chez ton registrar (OVH, Gandi, Cloudflare…). Les deux options :

#### Option A — Vercel comme registrar DNS (recommandé si simple)
- Configurer les nameservers chez ton registrar pour pointer sur ceux de Vercel :
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`
- Vercel gère tout : DNS + HTTPS + redirections www → apex

#### Option B — Garder ton DNS chez ton registrar (si tu veux Cloudflare devant)
Chez le registrar, ajouter :

| Type | Nom | Valeur | TTL |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | Auto |
| `CNAME` | `www` | `cname.vercel-dns.com` | Auto |

Pour les autres sous-domaines à venir :

| Sous-domaine | Pointe vers | Notes |
|---|---|---|
| `app.getbuildr.fr` | Dashboard (Vercel) | À configurer plus tard |
| `api.getbuildr.fr` | VPS Scaleway | `A` record vers l'IP du VPS |
| `mail.getbuildr.fr` | Email provider | MX records selon ton provider |

### 5. Attendre la propagation DNS
- 5 min à 48h (généralement <1h)
- Vercel certificate HTTPS (Let's Encrypt) auto-issued une fois le DNS résolu
- Vérifier avec : `dig getbuildr.fr` ou https://dnschecker.org

### 6. Vérifier en prod
- [ ] `https://getbuildr.fr` → 200 OK
- [ ] `https://www.getbuildr.fr` → redirige vers apex (ou inverse, au choix)
- [ ] HTTPS valide (cadenas vert)
- [ ] `https://getbuildr.fr/privacy` accessible → **URL à donner à Apple/Google**

---

## Déploiements suivants

Push sur `master` = déploiement auto en production. Les PRs créent des previews automatiques.

```bash
git push origin master  # → déploie en prod
git push origin feature/foo  # → preview URL générée
```

---

## Variables d'environnement (à configurer dans Vercel Project Settings)

Pour l'instant aucune variable n'est requise — toutes les pages sont statiques.

À ajouter quand le formulaire de contact sera connecté :
- `CONTACT_FORM_WEBHOOK` (Formspree, Resend, ou route API custom)

---

## Domaine — où l'acheter ?

Si `getbuildr.fr` n'est pas encore acheté :
- **OVH** : ~7€/an .fr, interface en français
- **Gandi** : ~12€/an, panneau DNS clair
- **Cloudflare Registrar** : prix coûtant (~10€/an), nécessite le DNS Cloudflare

Pour la simplicité au démarrage : **OVH**. Pour la performance (DNS + CDN + WAF) : **Cloudflare**.

---

## Côté légal après mise en ligne

Une fois `getbuildr.fr/privacy` accessible publiquement, tu peux :
1. Soumettre l'app iOS à l'App Store en utilisant cette URL dans App Store Connect
2. Soumettre l'app Android en utilisant cette URL dans Play Console
3. Mettre à jour `src/content/legal/mentions-legales.md` avec les vraies valeurs :
   - `{{RAISON_SOCIALE}}` → ton nom ou ta société
   - `{{SIREN}}` → SIRET (si auto-entrepreneur ou société)
   - `{{SIEGE_ADRESSE}}` → adresse de domiciliation
   - etc.
4. Push pour redéployer.
