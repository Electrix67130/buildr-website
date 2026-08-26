import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "CGV — Buildr",
  description: "Conditions Générales de Vente de Buildr.",
};

export default function CgvPage() {
  return <LegalPage slug="cgv" titleKey="legal.cgv" />;
}
