import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Services from "@/components/home/Services";
import Methodology from "@/components/home/Methodology";
import CodexSection from "@/components/home/CodexSection";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import WhyTLP from "@/components/home/WhyTLP";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import InsightsPreview from "@/components/home/InsightsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Methodology />
      <CodexSection />
      <IndustriesGrid />
      <WhyTLP />
      <ProcessSection />
      <Testimonials />
      <InsightsPreview />
    </>
  );
}
