"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import LanguagePicker from "./LanguagePicker";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/links";

const NAV = [
  { href: "/features", key: "nav.features" },
  { href: "/how-it-works", key: "nav.how" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/contact", key: "nav.contact" },
];

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6 md:py-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600 text-xl font-bold text-white shadow-md shadow-orange-600/20">
            B
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-zinc-900">Buildr</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-zinc-700 transition-colors hover:text-orange-600"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguagePicker />
          <a
            href={LOGIN_URL}
            className="text-base font-semibold text-zinc-700 hover:text-zinc-900"
          >
            {t("nav.signIn")}
          </a>
          <a
            href={SIGNUP_URL}
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-zinc-700"
          >
            {t("nav.start")}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguagePicker />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="rounded-lg p-2 text-zinc-700 hover:bg-zinc-100"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-100"
              >
                {t(item.key)}
              </Link>
            ))}
            <a
              href={LOGIN_URL}
              className="rounded-lg px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              {t("nav.signIn")}
            </a>
            <a
              href={SIGNUP_URL}
              className="mt-2 rounded-lg bg-zinc-900 px-3 py-3 text-center text-base font-semibold text-white"
            >
              {t("nav.start")}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
