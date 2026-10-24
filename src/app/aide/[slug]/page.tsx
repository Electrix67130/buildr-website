import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GUIDES, getGuide, sectionTitle } from "@/lib/guides";

// Tous les articles sont connus au build : une adresse inconnue est un 404,
// pas une page generee a la volee.
export const dynamicParams = false;

// Type ecrit a la main plutot que PageProps<"/aide/[slug]"> : ce dernier n'est
// genere qu'au build, et la CI lance tsc avant.
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return { title: `${guide.title} — Aide Buildr`, description: guide.summary };
}

export default async function GuidePage(props: Props) {
  const { slug } = await props.params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guide.related.map(getGuide).filter((g) => g !== undefined);

  return (
    <div className="bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          href="/aide"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-orange-600"
        >
          <ArrowLeft size={16} />
          Centre d&apos;aide
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-orange-600">
          {sectionTitle(guide.section)}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{guide.title}</h1>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
          <Users size={14} className="text-orange-600" />
          {guide.audience}
        </p>

        <article
          className="prose prose-zinc mt-10 max-w-none prose-headings:font-semibold prose-h2:mt-10 prose-h2:text-xl prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-blockquote:border-l-orange-600 prose-blockquote:bg-orange-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-zinc-700 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: guide.html }}
        />

        {related.length > 0 ? (
          <section className="mt-14 border-t border-zinc-200 pt-8">
            <h2 className="text-lg font-bold text-zinc-900">Voir aussi</h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/aide/${r.slug}`} className="font-semibold text-orange-600 hover:text-orange-700">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <p className="mt-14 text-sm text-zinc-600">
          Une question reste sans réponse ?{" "}
          <Link href="/support" className="font-semibold text-orange-600 hover:text-orange-700">
            Contactez le support
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
