import guidesData from "@/content/guides/guides.json";

/**
 * Centre d'aide : sections et articles.
 *
 * Les articles sont ecrits en Markdown dans `src/content/guides/` et compiles
 * par `npm run build:guides` dans `guides.json`. Ils sont en francais pour
 * l'instant : les traduire avant que les textes aient servi serait du travail
 * perdu a chaque retouche.
 *
 * Une section sans article publie n'apparait pas sur la page d'accueil de
 * l'aide : on peut la declarer ici avant d'ecrire son premier article.
 */
export const GUIDE_SECTIONS = [
  { id: "demarrer", title: "Démarrer" },
  { id: "equipe", title: "Équipe et droits" },
  { id: "chantiers", title: "Chantiers" },
  { id: "quotidien", title: "Sur le chantier, au quotidien" },
  { id: "urgences", title: "Urgences" },
  { id: "notifications", title: "Notifications et agenda" },
  { id: "clients", title: "Pour les clients" },
  { id: "compte", title: "Compte et sécurité" },
] as const;

export type GuideSectionId = (typeof GUIDE_SECTIONS)[number]["id"];

export type Guide = {
  slug: string;
  title: string;
  section: GuideSectionId;
  audience: string;
  summary: string;
  order: number;
  related: string[];
  html: string;
};

const SECTION_IDS = new Set<string>(GUIDE_SECTIONS.map((s) => s.id));

type RawGuide = Omit<Guide, "section"> & { section: string };

export const GUIDES: Guide[] = (guidesData as RawGuide[]).map((g) => {
  // Une faute de frappe dans l'en-tete d'un article le ferait disparaitre de
  // l'accueil sans bruit : mieux vaut casser le build.
  if (!SECTION_IDS.has(g.section)) {
    throw new Error(`Article ${g.slug} : section inconnue « ${g.section} »`);
  }
  return g as Guide;
});

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function guidesBySection(): { id: GuideSectionId; title: string; guides: Guide[] }[] {
  return GUIDE_SECTIONS.map((s) => ({
    ...s,
    guides: GUIDES.filter((g) => g.section === s.id).sort((a, b) => a.order - b.order),
  })).filter((s) => s.guides.length > 0);
}

export function sectionTitle(id: GuideSectionId): string {
  return GUIDE_SECTIONS.find((s) => s.id === id)?.title ?? "";
}
