import Experience from '@/components/Experience/Experience';
import Footer from '@/components/Home/Footer';
import Header from '@/components/Home/Header';
import Hero from '@/components/Home/Hero';
import Projects from '@/components/Projects/v1/Projects';
import Updates from '@/components/updates/Updates';
function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Projects />
      <Experience />
      <Updates />
      <Footer />
    </div>
  )
}

export default page