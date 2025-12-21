import Experience from "@/components/Home/Experience";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Updates from "@/components/Home/Updates";

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Updates />
      <Footer />
    </div>
  );
}

export default page;
