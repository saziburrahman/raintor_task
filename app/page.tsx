import Contact from "./components/contact/Contact";
import ExperienceSection from "./components/Experience/ExperienceSection";
import Footer from "./components/footer/Footer";
import ContactInfo from "./components/Header/ContactInfo";
import HeroText from "./components/Header/HeroText";
import Navbar from "./components/Header/Navbar";
import SkillSection from "./components/SkillSection/SkillSection";
import MyWorkProcess from "./components/workProcess/MyWorkProcess";

export default function Home() {
  return (
    <>
      <header className="bg-[url('/9f0312342ccde1b50233bde5a875618e944ac805.png')] bg-cover bg-center bg-no-repeat lg:pb-5">
        <Navbar />
        <HeroText />
        <ContactInfo />
      </header>
      <section className="bg-black rounded-md m-2">
        <SkillSection />
      </section>
      <section className="relative w-full bg-[url('/vector-bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
        {/* <h1>Hello</h1> */}
        <ExperienceSection />
      </section>
      <section>
        <MyWorkProcess />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
