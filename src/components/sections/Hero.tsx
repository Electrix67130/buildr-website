"use client";

import { ArrowRight, Building2, Smartphone, Cloud, ShieldCheck } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-white to-white" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
            {t("hero.badge")}
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
            {t("hero.titleA")}
            <br />
            <span className="text-orange-600">{t("hero.titleB")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-zinc-700"
            >
              {t("hero.ctaDemo")}
              <ArrowRight size={16} />
            </a>
            <a
              href="/features"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              {t("hero.ctaFeatures")}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Smartphone size={14} />
              {t("hero.trustMobile")}
            </div>
            <div className="flex items-center gap-1.5">
              <Cloud size={14} />
              {t("hero.trustSync")}
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} />
              {t("hero.trustEu")}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-2 shadow-2xl shadow-orange-100/40">
            <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-zinc-100 via-white to-orange-50">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <Building2 size={64} className="mx-auto text-orange-300" />
                  <p className="mt-4 text-sm font-medium text-zinc-400">{t("hero.mockup")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
