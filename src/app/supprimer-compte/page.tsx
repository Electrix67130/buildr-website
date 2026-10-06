import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Supprimer votre compte — Buildr",
  description:
    "Comment supprimer votre compte Buildr depuis l'application ou par e-mail, et ce qu'il advient de vos données.",
};

// Page exigee par Google Play et Apple : une URL publique qui decrit la
// procedure de suppression de compte et le sort des donnees.
export default function DeleteAccountPage() {
  return <LegalPage slug="supprimer-compte" titleKey="legal.deleteAccount" />;
}
