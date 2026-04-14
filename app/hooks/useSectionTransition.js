import { useEffect, useRef } from "react";

const useSectionTransition = ({ pageId, duration = 1000 }) => {
  const indexRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    if (!pageId) return;

    const container = document.getElementById(pageId);
    if (!container) return;

    container.style.transitionDuration = `${duration}ms`;
    const sections = container.querySelectorAll("section");

    // Wheel scroll logic
    const handleWheel = (e) => {
      if (isAnimatingRef.current) return;

      isAnimatingRef.current = true;
      const windowHeight = window.innerHeight;

      if (e.deltaY > 0) {
        indexRef.current = Math.min(indexRef.current + 1, sections.length - 1);
      } else {
        indexRef.current = Math.max(indexRef.current - 1, 0);
      }

      container.style.transform = `translateY(-${indexRef.current * windowHeight}px)`;

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, duration);
    };

    window.addEventListener("wheel", handleWheel);

    // IntersectionObserver for fade in/out
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 }, // adjust sensitivity
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("wheel", handleWheel);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pageId, duration]);
};

export default useSectionTransition;
