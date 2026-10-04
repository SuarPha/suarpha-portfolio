import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import SelectedWork from "@/components/SelectedWork";
import PreviousWork from "@/components/PreviousWork";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        <Hero />
        <Capabilities />
        <SelectedWork />
        <PreviousWork />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
