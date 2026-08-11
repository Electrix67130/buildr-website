"use client";

import { ArrowRight, Check, Sparkles, Gift } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const PRO_FEATURES = [
  "pricing.feature.modules",
  "pricing.feature.media",
  "pricing.feature.sync",
  "pricing.feature.calendars",
  "pricing.feature.support",
  "pricing.feature.eu",
];

const ENTERPRISE_FEATURES = [
  "enterprise.feature.volume",
  "enterprise.feature.sla",
  "enterprise.feature.support",
  "enterprise.feature.sso",
  "enterprise.feature.integrations",
  "enterprise.feature.hosting",
];

export default function Pricing() {
  const { t } = useI18n();
  return (
    <section className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            {t("pricing.kicker")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">{t("pricing.subtitle")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Plan Pro — beta gratuite */}
          <div className="relative flex flex-col rounded-3xl border-2 border-orange-600 bg-white p-10 shadow-xl shadow-orange-100/50">
            <div className="absolute -top-3 left-10 inline-flex items-center gap-1.5 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              <Gift size={12} />
              {t("pricing.beta.badge")}
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                Pro
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-zinc-900">
                  {t("pricing.beta.title")}
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-600">
                {t("pricing.beta.desc")}
              </p>

              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
                <span className="font-semibold">⚠️ </span>
                {t("pricing.beta.note")}
              </div>

              <div className="mt-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-600">
                <span className="font-semibold text-zinc-700">
                  {t("pricing.future.label")} :
                </span>{" "}
                <span className="font-semibold text-zinc-900">
                  {t("pricing.amount")}
                </span>
                <span> {t("pricing.unit")}</span>
                <span className="mt-1 block text-zinc-500">
                  {t("pricing.hint")}
                </span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
              {PRO_FEATURES.map((k) => (
                <div
                  key={k}
                  className="flex items-start gap-2 text-sm text-zinc-700"
                >
                  <Check
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-orange-600"
                  />
                  <span>{t(k)}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-700"
              >
                {t("pricing.cta")}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Plan Enterprise — sur devis */}
          <div className="flex flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-900 p-10 text-white shadow-xl shadow-zinc-900/30">
            <div>
              <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-orange-400">
                <Sparkles size={14} />
                {t("enterprise.kicker")}
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                {t("enterprise.title")}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold">
                  {t("enterprise.price")}
                </span>
              </div>
              <p className="mt-3 text-sm text-zinc-300">
                {t("enterprise.subtitle")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
              {ENTERPRISE_FEATURES.map((k) => (
                <div
                  key={k}
                  className="flex items-start gap-2 text-sm text-zinc-200"
                >
                  <Check
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-orange-400"
                  />
                  <span>{t(k)}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <a
                href="mailto:contact@getbuildr.fr"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                {t("enterprise.cta")}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
