import fs from "node:fs/promises";
import path from "node:path";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalHeading from "@/components/LegalHeading";

type LegalPageProps = {
  slug: "cgu" | "cgv" | "privacy" | "mentions-legales" | "supprimer-compte";
  /** Cle i18n du titre. Le corps du document, lui, reste en francais. */
  titleKey: string;
};

async function loadHtml(slug: string): Promise<string> {
  const filePath = path.join(process.cwd(), "src/content/legal", `${slug}.html`);
  return fs.readFile(filePath, "utf8");
}

export default async function LegalPage({ slug, titleKey }: LegalPageProps) {
  const html = await loadHtml(slug);

  return (
    <div className="bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mb-8">
          <LegalHeading titleKey={titleKey} />
        </div>
        <article
          className="prose prose-zinc max-w-none prose-headings:font-semibold prose-h1:hidden prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-xl prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-blockquote:border-l-orange-600 prose-blockquote:bg-orange-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-zinc-700 prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <Footer />
    </div>
  );
}
