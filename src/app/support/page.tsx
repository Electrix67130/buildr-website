import type { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support — Buildr",
  description:
    "Besoin d'aide ? Contactez l'équipe Buildr ou consultez les questions fréquentes.",
};

const FAQ = [
  {
    q: "Comment créer un compte Buildr ?",
    a: "Téléchargez l'application Buildr sur l'App Store ou Google Play, puis suivez les étapes d'inscription depuis l'écran d'accueil. La création de compte est gratuite pendant la phase beta.",
  },
  {
    q: "J'ai oublié mon mot de passe, que faire ?",
    a: "Depuis l'écran de connexion, appuyez sur « Mot de passe oublié » et saisissez votre email. Vous recevrez un lien de réinitialisation valable 24h.",
  },
  {
    q: "Comment inviter mon équipe sur un chantier ?",
    a: "Dans l'application, ouvrez le chantier concerné, allez dans l'onglet « Membres » puis « Inviter ». Saisissez l'email de la personne et son rôle (admin, manager, employé, client ou gestionnaire réseau).",
  },
  {
    q: "Mes photos sont-elles stockées en sécurité ?",
    a: "Oui. Toutes les données (photos, documents, comptes) sont chiffrées en transit (HTTPS) et au repos. Le stockage est assuré sur des serveurs situés dans l'Union européenne.",
  },
  {
    q: "Comment supprimer mon compte ?",
    a: "Envoyez un email à support@getbuildr.fr depuis l'adresse associée à votre compte. La suppression est effective sous 30 jours, conformément au RGPD.",
  },
  {
    q: "Buildr est-il payant ?",
    a: "Buildr est actuellement en beta publique gratuite jusqu'à fin 2026, pour tous les utilisateurs sans exception. Ce n'est pas un essai de 6 mois par compte : c'est la phase beta du produit qui est gratuite pour tout le monde, jusqu'à une date commune. Vous serez informé par email au moins 30 jours avant la mise en place de la tarification.",
  },
];

export default function SupportPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
          Support
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          On est là pour vous aider
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          Une question, un bug, une suggestion ? Voici comment nous joindre.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href="mailto:support@getbuildr.fr"
            className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-orange-600 hover:bg-orange-50"
          >
            <Mail className="text-orange-600" size={24} />
            <div>
              <p className="font-semibold text-zinc-900">Email support</p>
              <p className="text-sm text-zinc-600">support@getbuildr.fr</p>
            </div>
          </a>
          <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <Clock className="text-orange-600" size={24} />
            <div>
              <p className="font-semibold text-zinc-900">Délai de réponse</p>
              <p className="text-sm text-zinc-600">Sous 24 à 48h ouvrées</p>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-zinc-900">
            <MessageCircle size={22} className="text-orange-600" />
            Questions fréquentes
          </h2>
          <div className="mt-6 divide-y divide-zinc-200">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-zinc-900 group-open:text-orange-700">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
