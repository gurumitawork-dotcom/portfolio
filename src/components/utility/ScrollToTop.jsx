import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollTo } from "./SmoothScroll.jsx";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    smoothScrollTo(0, { immediate: true });
  }, [pathname]);
  return null;
}
