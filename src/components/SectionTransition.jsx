import { useEffect, useRef, useState } from "react";
import "./SectionTransition.css";

function SectionTransition({ children }) {
  const sectionRef = useRef(null);
  const previousScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0,
  );

  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < previousScrollY.current) {
        setScrollDirection("up");
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "-5% 0px -12% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const transitionClass = [
    "section-transition",
    isVisible ? "section-transition--visible" : "",
    `section-transition--${scrollDirection}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={sectionRef}
      className={transitionClass}
    >
      {children}
    </div>
  );
}

export default SectionTransition;