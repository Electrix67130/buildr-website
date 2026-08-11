import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Buildr",
  description:
    "Comment Buildr collecte, traite et protège vos données personnelles conformément au RGPD.",
};

export default function PrivacyPage() {
  return <LegalPage slug="privacy" title="Politique de confidentialité" />;
}
