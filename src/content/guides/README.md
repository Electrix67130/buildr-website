# Centre d'aide — articles

Publie sur **getbuildr.fr/aide**. Un fichier `.md` = un article ; l'adresse est
le nom du fichier (`inviter-equipe.md` → `/aide/inviter-equipe`).

Apres toute modification : `npm run build:guides` (regenere `guides.json`), puis
commit. Le push sur `main` deploie.

## Regle

L'aide decrit les ecrans tels qu'ils sont. Toute modification visible dans
l'API, l'app ou le dashboard met les articles concernes a jour dans le meme lot
de travail (voir le `CLAUDE.md` de chaque depot).

## Format d'un article

```
---
title: Comment … ?                      (une question)
section: equipe                          (id d'une section de src/lib/guides.ts)
audience: Administrateur — dashboard     (pour qui, ou)
summary: Une phrase (liste et description Google).
order: 1                                 (rang dans la section)
related: slug-1, slug-2                  (verifies au build)
---
```

- 3 a 6 etapes numerotees, verbes a l'imperatif, **vouvoiement**.
- Libelles des boutons **en gras, a l'identique de l'ecran** (francais).
- Un encadre `> **Bon a savoir**` en fin d'article.
- Une ou deux captures, faites sur le compte demo (voir plus bas).
- Pas de facturation pendant la beta.
- Noms des roles : ceux de l'ecran (Admin, Manager, Employe, Client,
  Gestionnaire reseau).

## Captures

Images dans `public/aide/<slug>/`, referencees en Markdown :
`![Texte alternatif](/aide/<slug>/01-xxx.png)`.

- **App** : telephone Android branche, connecte au compte demo
  (`demo@getbuildr.fr`, seed `01_demo_organization.js` relance juste avant).
  `adb exec-out screencap -p > brut.png`, puis rognage des barres systeme :
  `sips -c 2160 1080 --cropOffset 120 0 brut.png --out net.png`, puis
  reduction a 540 px de large (`sips -Z 1080` sur la hauteur).
- **App sur iPhone** : captures faites sur le telephone (bouton lateral +
  volume haut), envoyees par AirDrop dans Telechargements. Recadrer la barre
  d'etat, la barre Safari et le clavier, puis reduire a 600 px de large en JPEG :
  `sips -c <h> 1206 --cropOffset <y> 0 in.jpg --out c.jpg && sips --resampleWidth 600 -s format jpeg -s formatOptions 82 c.jpg --out out.jpg`.
- Theme sombre de l'app : garder le meme theme pour toutes les captures.
- **Dashboard** : navigateur a 1280 px de large, compte demo.
- **Page d'invitation** : pas de vraie invitation a envoyer. Le dashboard est
  construit en local contre une fausse API (`NEXT_PUBLIC_API_URL=http://<ip du Mac>:3099`)
  qui repond a `GET /invitations/by-token/demo`, `POST /auth/register` et
  `GET /auth/me`, puis ouvert depuis le telephone sur `http://<ip du Mac>:3078/invite/demo`.
  Le telephone doit etre sur le meme Wi-Fi.

## Plan (★ = prioritaire, ✓ = publie)

### Demarrer (`demarrer`)
- ★ Qu'est-ce que Buildr ? Dashboard ou app : qui utilise quoi
- ★ Creer votre entreprise sur Buildr
- ★✓ Rejoindre votre entreprise depuis une invitation — `rejoindre-invitation`
- ★ Installer l'app et vous connecter
- Mot de passe oublie
- Changer la langue

### Equipe et droits (`equipe`)
- ★✓ Inviter votre equipe — `inviter-equipe`
- ★ Les roles
- Regler les droits par defaut de chaque role
- Ajouter ou retirer quelqu'un d'un chantier
- Desactiver un compte, renvoyer une invitation

### Chantiers (`chantiers`)
- ★ Creer un chantier (adresse, dates, equipe)
- Partir d'un modele, creer vos modeles
- Retrouver un chantier : recherche, filtres, carte
- Modifier un chantier, obtenir l'itineraire
- Archiver et restaurer un chantier

### Sur le chantier, au quotidien (`quotidien`)
- ★ Suivre les etapes et cocher les sous-etapes
- ★✓ Valider une etape avec une photo — `valider-etape-photo`
- ★ Prendre et partager des photos
- Ajouter et consulter des documents (plans, DICT, arretes)
- ★ Discuter avec l'equipe : repondre, reagir, mentionner avec @
- Utiliser l'app sans reseau

### Urgences (`urgences`)
- ★ Signaler une urgence avec des photos
- Suivre et cloturer une urgence

### Notifications et agenda (`notifications`)
- ★ Choisir les notifications que vous recevez
- Synchroniser vos chantiers avec Google Agenda ou Outlook (a confirmer avant d'ecrire)

### Pour les clients (`clients`)
- Ce que vous voyez de votre chantier

### Compte et securite (`compte`)
- Modifier votre profil
- ★ Signaler un contenu, bloquer quelqu'un
- Traiter les signalements de votre equipe
- Supprimer votre compte
- Vos donnees : hebergement en Europe, export
- Contacter le support
