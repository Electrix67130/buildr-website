"use client";

import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useI18n } from "@/contexts/I18nContext";
import { SIGNUP_URL } from "@/lib/links";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white">
      <Header />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              {t("nav.contact")}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              {t("cta.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">{t("cta.subtitle")}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <a
              href="mailto:contact@getbuildr.fr"
              className="group flex flex-col items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-transform group-hover:scale-110">
                <Mail size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Email</h2>
                <p className="mt-1 text-sm text-zinc-600">contact@getbuildr.fr</p>
              </div>
            </a>

            <a
              href={SIGNUP_URL}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-transform group-hover:scale-110">
                <MessageCircle size={22} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">{t("cta.signup")}</h2>
                <p className="mt-1 text-sm text-zinc-600">{t("nav.start")}</p>
              </div>
              <ArrowRight size={16} className="ml-auto text-zinc-400 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
