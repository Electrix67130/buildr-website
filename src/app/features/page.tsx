import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/sections/Features";
import ForWho from "@/components/sections/ForWho";
import Cta from "@/components/sections/Cta";

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <Header />
      <Features />
      <ForWho />
      <Cta />
      <Footer />
    </div>
  );
}
