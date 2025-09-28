"use client";
import AboutSection from "@/app/home/sections/about/AboutSection";
import ContactSection from "@/app/home/sections/contact/ContactSection";
import HeroSection from "@/app/home/sections/hero/Hero";
import ProjectsSection from "@/app/home/sections/projects/ProjectsSection";
import TechnologiesSection from "@/app/home/sections/technologies/TechnologiesSection";
import WorkSection from "@/app/home/sections/work/WorkSection";
import { APP_DATA } from "@/data/data/appData";
import { Box } from "@chakra-ui/react";
import { MotionConfig } from "motion/react";
import Navbar from "./home/navbar/Navbar";
import { act, Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const appData = APP_DATA;

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
              : element.id
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

  return (
    <Suspense fallback={<Loading />}>
      <Box w="100%" overflowX={"hidden"}>
        <Navbar activeSection={activeSection} />
        {/* <MotionConfig transition={{ duration: 0.3 }}> */}
          <HeroSection />
          <TechnologiesSection technologies={appData.technologies} />
          <AboutSection />
          <WorkSection workItems={appData.experience} />
          <ProjectsSection />
          <ContactSection />
        {/* </MotionConfig> */}
      </Box>
    </Suspense>
  );
}
