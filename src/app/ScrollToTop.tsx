import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component - resets scroll position on navigation
 * Triggered on location.key (not just pathname) to handle back/forward
 * Uses behavior: "auto" per specification
 */
export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.key]);

  return null;
}

export default ScrollToTop;
