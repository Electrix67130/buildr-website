"use client";

import { useI18n } from "@/contexts/I18nContext";

const STEPS = [
  { n: "01", titleKey: "how.step1.title", descKey: "how.step1.desc" },
  { n: "02", titleKey: "how.step2.title", descKey: "how.step2.desc" },
  { n: "03", titleKey: "how.step3.title", descKey: "how.step3.desc" },
];

export default function How() {
  const { t } = useI18n();
  return (
    <section className="bg-zinc-900 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            {t("how.kicker")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {t("how.titleA")}
            <br />
            {t("how.titleB")}
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n}>
              <div className="text-5xl font-bold text-orange-500">{s.n}</div>
              <h3 className="mt-4 text-xl font-semibold">{t(s.titleKey)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t(s.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
