import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import AuroraBackground from "./AuroraBackground.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import BackToTop from "./BackToTop.jsx";

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <ScrollToTop />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
