import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { guidesBySection } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Centre d'aide — Buildr",
  description:
    "Guides pas à pas pour utiliser Buildr : inviter votre équipe, suivre vos chantiers, valider les étapes avec une photo.",
};

export default function AidePage() {
  const sections = guidesBySection();

  return (
    <div className="bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">Centre d&apos;aide</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Comment pouvons-nous vous aider ?
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Des guides courts, étape par étape, pour le dashboard et l&apos;application mobile.
        </p>

        {sections.map((section) => (
          <section key={section.id} className="mt-14">
            <h2 className="text-xl font-bold text-zinc-900">{section.title}</h2>
            <ul className="mt-4 divide-y divide-zinc-200 rounded-2xl border border-zinc-200">
              {section.guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/aide/${guide.slug}`}
                    className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-orange-50"
                  >
                    <div>
                      <p className="font-semibold text-zinc-900 group-hover:text-orange-700">{guide.title}</p>
                      <p className="mt-1 text-sm text-zinc-600">{guide.summary}</p>
                    </div>
                    <ArrowRight size={18} className="shrink-0 text-zinc-400 group-hover:text-orange-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <Link
          href="/support"
          className="mt-16 flex items-center gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-orange-600 hover:bg-orange-50"
        >
          <Mail className="shrink-0 text-orange-600" size={24} />
          <div>
            <p className="font-semibold text-zinc-900">Vous ne trouvez pas votre réponse ?</p>
            <p className="text-sm text-zinc-600">Écrivez-nous, nous répondons sous 24 à 48 h ouvrées.</p>
          </div>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
