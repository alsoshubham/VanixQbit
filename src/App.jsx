import { useState } from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Service from "./pages/Service";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  const [openMenu, setOpenMenu] = useState(null);

  // SVG arrow icons
  const ArrowDown = (
    <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
  );
  const ArrowUp = (
    <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
  );

  // Helper to keep dropdown open if hovering menu or dropdown
  const handleMouseLeave = () => {
    setTimeout(() => {
      setOpenMenu(null);
    }, 100);
  };

  return (
      <div className="App">
        <Header
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          handleMouseLeave={handleMouseLeave}
          ArrowUp={ArrowUp}
          ArrowDown={ArrowDown}
        />
        <main>
          <Hero />
          <Service />
          <Testimonials />
        </main>
        <Footer />
      </div>
  );
}
