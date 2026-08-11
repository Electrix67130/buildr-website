"use client";

import { Check } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const TARGETS = [
  {
    titleKey: "for.artisan.title",
    itemKeys: ["for.artisan.item1", "for.artisan.item2", "for.artisan.item3"],
  },
  {
    titleKey: "for.sme.title",
    itemKeys: ["for.sme.item1", "for.sme.item2", "for.sme.item3"],
  },
  {
    titleKey: "for.major.title",
    itemKeys: ["for.major.item1", "for.major.item2", "for.major.item3"],
  },
];

export default function ForWho() {
  const { t } = useI18n();
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            {t("for.kicker")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {t("for.title")}
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TARGETS.map((target) => (
            <div key={target.titleKey} className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h3 className="text-lg font-bold text-zinc-900">{t(target.titleKey)}</h3>
              <ul className="mt-5 space-y-3">
                {target.itemKeys.map((k) => (
                  <li key={k} className="flex items-start gap-2 text-sm text-zinc-700">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-orange-600" />
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
