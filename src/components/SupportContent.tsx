"use client";

import { Mail, Clock, MessageCircle } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

// Le contenu visible vit dans un composant client : la page reste un composant
// serveur pour continuer d'exporter `metadata`, que Next resout au build et qui
// ne peut donc pas dependre de la langue choisie cote navigateur.
const FAQ_KEYS = ["account", "password", "invite", "security", "delete", "pricing"] as const;

export default function SupportContent() {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
        {t("support.kicker")}
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        {t("support.title")}
      </h1>
      <p className="mt-4 text-lg text-zinc-600">{t("support.subtitle")}</p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <a
          href="mailto:support@getbuildr.fr"
          className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:border-orange-600 hover:bg-orange-50"
        >
          <Mail className="text-orange-600" size={24} />
          <div>
            <p className="font-semibold text-zinc-900">{t("support.emailLabel")}</p>
            <p className="text-sm text-zinc-600">support@getbuildr.fr</p>
          </div>
        </a>
        <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <Clock className="text-orange-600" size={24} />
          <div>
            <p className="font-semibold text-zinc-900">{t("support.delayLabel")}</p>
            <p className="text-sm text-zinc-600">{t("support.delayValue")}</p>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-zinc-900">
          <MessageCircle size={22} className="text-orange-600" />
          {t("support.faqTitle")}
        </h2>
        <div className="mt-6 divide-y divide-zinc-200">
          {FAQ_KEYS.map((key) => (
            <details key={key} className="group py-4">
              <summary className="cursor-pointer list-none text-base font-semibold text-zinc-900 group-open:text-orange-700">
                {t(`support.faq.${key}.q`)}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {t(`support.faq.${key}.a`)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
