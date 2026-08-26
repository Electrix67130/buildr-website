"use client";

import { useI18n } from "@/contexts/I18nContext";

/**
 * Titre d'une page legale, traduit.
 *
 * Le corps du document reste en francais : c'est la version qui fait foi
 * juridiquement, et la traduire sans qu'un juriste l'ait redigee dans l'autre
 * langue creerait un texte opposable qu'on n'a pas valide. D'ou la mention
 * sous le titre, qui evite au lecteur de croire a un oubli.
 */
export default function LegalHeading({ titleKey }: { titleKey: string }) {
  const { t, locale } = useI18n();

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        {t(titleKey)}
      </h1>
      {locale !== "fr" ? (
        <p className="mt-3 text-sm text-zinc-500">{t("legal.frenchNotice")}</p>
      ) : null}
    </>
  );
}
