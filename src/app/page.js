import AboutMeSection from "./components/AboutMeSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <div className=" bg-[#121212] p-5 py-3">
        <NavBar />
      </div>

      <main className=" bg-[#121212] flex flex-col  min-h-screen lg:p-20 p-10 pb-20 sm:pt-0 pt-8">
        <HeroSection />
        <Achievements />
        <AboutMeSection />
        <Projects />
        <ContactSection />
      </main>
    </div>
  );
}
