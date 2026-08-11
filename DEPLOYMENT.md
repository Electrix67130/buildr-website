# Déploiement — Buildr Website

Site vitrine `getbuildr.fr` — Next.js 16 + Tailwind v4.

**Hébergement retenu : le VPS Scaleway**, aux côtés de l'API, de la base et du
dashboard (cf. `buildr-api/docs/HOSTING.md`). Le site tourne en conteneur Docker
derrière Caddy, qui gère HTTPS via Let's Encrypt.

> Une version antérieure de ce document décrivait un déploiement Vercel. Le choix
> a été tranché en faveur du VPS : tout est au même endroit, aucun coût
> supplémentaire, et aucune donnée ne transite par un hébergeur hors UE.
> Le `vercel.json` est conservé pour garder l'option ouverte.

---

## Architecture

```
getbuildr.fr      → Caddy (hôte) → 127.0.0.1:3001 → conteneur buildr-website
www.getbuildr.fr  → redirection permanente vers getbuildr.fr
app.getbuildr.fr  → Caddy (hôte) → 127.0.0.1:3002 → conteneur buildr-dashboard
api.getbuildr.fr  → Caddy (hôte) → 127.0.0.1:3000 → conteneur buildr-api
```

Le `docker-compose.prod.yml`, le `Caddyfile` et les scripts de déploiement
vivent dans le repo **buildr-api**. Sur le VPS :

```
/home/buildr/api        <- buildr-api
/home/buildr/website    <- ce repo
/home/buildr/dashboard  <- buildr-dashboard
```

---

## Première mise en ligne

### 1. DNS (chez Scaleway — le domaine y est enregistré)

Console Scaleway → **Domains & DNS** → `getbuildr.fr` → zone DNS. Ajouter :

| Type | Nom | Valeur | TTL |
|---|---|---|---|
| `A` | `@` | `51.15.214.102` | 3600 |
| `A` | `www` | `51.15.214.102` | 3600 |
| `A` | `app` | `51.15.214.102` | 3600 |

`api` pointe déjà vers cette IP. **Pas de proxy Cloudflare** devant : Caddy a
besoin d'un accès direct en HTTP/01 pour obtenir les certificats.

Vérifier la propagation : `dig +short getbuildr.fr` doit renvoyer l'IP du VPS.

### 2. Reverse proxy

Depuis le repo buildr-api, sur le VPS :

```bash
sudo cp /home/buildr/api/Caddyfile /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Caddy obtient les certificats automatiquement dès que le DNS résout.

### 3. Déploiement

```bash
/home/buildr/api/scripts/deploy-web.sh website   # vitrine seule
/home/buildr/api/scripts/deploy-web.sh           # vitrine + dashboard
```

Le script clone le repo au premier passage, puis build et démarre le conteneur.

### 4. Vérifier

- [ ] `https://getbuildr.fr` → 200, HTTPS valide
- [ ] `https://www.getbuildr.fr` → redirige vers l'apex
- [ ] `/pricing` affiche la bannière « Beta gratuite »
- [ ] `/cgu`, `/privacy`, `/mentions-legales` rendent bien le contenu
- [ ] `/support` affiche la FAQ et l'email de contact
- [ ] Le sélecteur de langue fonctionne

---

## Déploiements suivants

```bash
git push origin main
ssh buildr@51.15.214.102 '/home/buildr/api/scripts/deploy-web.sh website'
```

---

## Variables d'environnement

Aucune n'est requise : toutes les pages sont statiques. À ajouter quand le
formulaire de contact sera connecté : `CONTACT_FORM_WEBHOOK`.

---

## Avant de soumettre les apps mobiles

`https://getbuildr.fr/privacy` doit être accessible publiquement — c'est l'URL à
renseigner dans App Store Connect et dans la Play Console.

Les mentions légales contiennent encore des variables à remplacer dans
`src/content/legal/mentions-legales.md` avant la soumission :

`{{RAISON_SOCIALE}}`, `{{FORME_JURIDIQUE}}`, `{{CAPITAL}}`, `{{SIEGE_ADRESSE}}`,
`{{SIREN}}`, `{{VILLE_RCS}}`, `{{TVA_INTRACOM}}`, `{{TELEPHONE}}`,
`{{REPRESENTANT_LEGAL}}`, `{{FONCTION_REPRESENTANT}}`

Et dans `src/content/legal/cgu.md` : `{{HEBERGEUR}}` (Scaleway SAS, BP 438,
75366 Paris Cedex 08) et `{{COUR_APPEL}}`.

Régénérer ensuite le HTML avec `node scripts/build-legal.mjs`, puis redéployer.
