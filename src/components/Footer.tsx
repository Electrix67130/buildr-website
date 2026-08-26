"use client";

import Link from "next/link";
import { useI18n } from "@/contexts/I18nContext";
import { SIGNUP_URL } from "@/lib/links";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-sm font-bold text-white">
                B
              </div>
              <span className="text-lg font-bold text-zinc-900">Buildr</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-zinc-600">{t("footer.tagline")}</p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {t("footer.product")}
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.features")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.pricing")}
                </Link>
              </li>
              <li>
                <a
                  href={SIGNUP_URL}
                  className="text-sm text-zinc-600 hover:text-zinc-900"
                >
                  {t("footer.signup")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {t("footer.company")}
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.support")}
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.cgu")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-zinc-600 hover:text-zinc-900">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-zinc-600 hover:text-zinc-900"
                >
                  {t("footer.legal")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-200 pt-6">
          <p className="text-xs text-zinc-500">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
