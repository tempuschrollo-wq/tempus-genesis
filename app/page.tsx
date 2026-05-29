import Nav from "@/components/Nav";
import HourglassScroll from "@/components/HourglassScroll";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Games from "@/components/sections/Games";
import Scholarship from "@/components/sections/Scholarship";
import About from "@/components/sections/About";
import Inside from "@/components/sections/Inside";
import Founders from "@/components/sections/Founders";
import Contact from "@/components/sections/Contact";
import Join from "@/components/sections/Join";
import Footer from "@/components/sections/Footer";
import SectionTransition from "@/components/SectionTransition";
import MobileCtaBar from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <>
      <Nav />
      <HourglassScroll />
      <MobileCtaBar />
      <Hero />
      <Ticker />
      <Games />
      <SectionTransition num="II" label="SCHOLARSHIP" major />
      <Scholarship />
      <SectionTransition num="III" label="MANIFESTO" major />
      <About />
      <SectionTransition num="IV" label="INSIDE" />
      <Inside />
      <SectionTransition num="V" label="FOUNDERS" className="to-founders" />
      <Founders />
      <SectionTransition num="VI" label="CONTACT" major />
      <Contact />
      <Join />
      <Footer />
    </>
  );
}
