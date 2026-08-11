"use client";

import { Building2, Camera, FileText, ListChecks, Users, AlertTriangle } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const FEATURES = [
  { icon: Building2, titleKey: "features.chantiers.title", descKey: "features.chantiers.desc" },
  { icon: Camera, titleKey: "features.photos.title", descKey: "features.photos.desc" },
  { icon: FileText, titleKey: "features.documents.title", descKey: "features.documents.desc" },
  { icon: ListChecks, titleKey: "features.steps.title", descKey: "features.steps.desc" },
  { icon: AlertTriangle, titleKey: "features.emergencies.title", descKey: "features.emergencies.desc" },
  { icon: Users, titleKey: "features.team.title", descKey: "features.team.desc" },
];

export default function Features() {
  const { t } = useI18n();
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            {t("features.kicker")}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">{t("features.subtitle")}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.titleKey}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-transform group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-zinc-900">{t(f.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{t(f.descKey)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
