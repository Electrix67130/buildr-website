"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { SIGNUP_URL } from "@/lib/links";

export default function Cta() {
  const { t } = useI18n();
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 to-orange-500 p-12 text-center text-white shadow-2xl shadow-orange-200/50 sm:p-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-orange-100">{t("cta.subtitle")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:contact@getbuildr.fr"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              {t("cta.email")}
            </a>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("cta.signup")}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
