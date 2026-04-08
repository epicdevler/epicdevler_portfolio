import { useState, useEffect } from "react";

export default function useActiveSection(){


  const [activeSection, setActiveSection] = useState<string>("");

  const scrollEvent = () => {
    const a = document.querySelectorAll(".observe_view");

    if (a.length === 0) {
      return;
    }

    a.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const elementTop = rect.top + 200;
      const elementBottom = rect.bottom;
      const isVisible = elementTop < windowHeight && elementBottom >= 0;
      if (isVisible) {
        setActiveSection(
          element.id === "stacks" || element.id === "work"
            ? "about"
            : element.id,
        );
      }
    });
  };

  useEffect(() => {
    scrollEvent();
    // Initial check
    window.addEventListener("scroll", scrollEvent);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);


  return {activeSection}

}