import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import BackToTop from "./BackToTop.jsx";
import CustomCursor from "./CustomCursor.jsx";
import AppointmentBanner from "../clinic/AppointmentBanner.jsx";
import ScrollToTop from "../utility/ScrollToTop.jsx";
import SmoothScroll from "../utility/SmoothScroll.jsx";
import PageMeta from "../utility/PageMeta.jsx";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-paper-50">
      <PageMeta />
      <SmoothScroll />
      <ScrollToTop />
      <div className="fixed inset-x-0 top-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <main className="relative">
        <Outlet />
      </main>
      {pathname !== "/" && <AppointmentBanner />}
      <Footer />
      <BackToTop />
      <CustomCursor />
    </div>
  );
}
