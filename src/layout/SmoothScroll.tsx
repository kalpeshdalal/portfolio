import { type ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, duration: 1.2 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // New code to handle anchor link clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          lenis.scrollTo(href);
        }
      });
    });

  }, []);

  return <>{children}</>;
}