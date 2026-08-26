import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "CGU — Buildr",
  description: "Conditions Générales d'Utilisation de Buildr.",
};

export default function CguPage() {
  return <LegalPage slug="cgu" titleKey="legal.cgu" />;
}
