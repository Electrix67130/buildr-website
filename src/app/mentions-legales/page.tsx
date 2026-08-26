import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales — Buildr",
  description: "Mentions légales et informations sur l'éditeur du site Buildr.",
};

export default function MentionsLegalesPage() {
  return <LegalPage slug="mentions-legales" titleKey="legal.mentions" />;
}
