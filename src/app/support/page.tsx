import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportContent from "@/components/SupportContent";

export const metadata: Metadata = {
  title: "Support — Buildr",
  description:
    "Besoin d'aide ? Contactez l'équipe Buildr ou consultez les questions fréquentes.",
};

export default function SupportPage() {
  return (
    <div className="bg-white">
      <Header />
      <SupportContent />
      <Footer />
    </div>
  );
}
