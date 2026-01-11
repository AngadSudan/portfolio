import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Updates from "@/components/Home/Updates";
import IntegrationHero from "@/components/integration-hero";

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <IntegrationHero />
      <Projects />
      <Updates />
      <Footer />
    </div>
  );
}

export default page;
