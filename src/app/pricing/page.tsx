import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/sections/Pricing";
import Cta from "@/components/sections/Cta";

export default function PricingPage() {
  return (
    <div className="bg-white">
      <Header />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
}
