import BestSelling from "@/components/BestSelling";
import DesignCloth from "@/components/DesginCloth";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Newest from "@/components/Newest";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <BestSelling />
      <Offer />
      <DesignCloth />
      <Feedback />
    </div>
  );
}
