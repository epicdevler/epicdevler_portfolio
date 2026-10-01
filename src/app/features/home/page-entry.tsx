import { Box } from "@chakra-ui/react";
import { AboutSection } from "./sections/about/AboutSection";
import { ApproachSection } from "./sections/approach/ApproachSection";
import { CapabilitiesSection } from "./sections/capabilities/CapabilitiesSection";
import { ContactSection } from "./sections/contact/ContactSection";
import { DoSection } from "./sections/do/DoSection";
import { ExperienceSection } from "./sections/experience/ExperienceSection";
import { HeroSection } from "./sections/hero/HeroSection";
import { ToolkitSection } from "./sections/toolkit/ToolkitSection";
import { WorkSection } from "./sections/work/WorkSection";

/** Home page composition (server component). Order matches the design. */
export default function HomePageEntry() {
  return (
    <Box as="main" id="main">
      <HeroSection />
      <DoSection />
      <WorkSection />
      <CapabilitiesSection />
      <ApproachSection />
      <AboutSection />
      <ToolkitSection />
      <ExperienceSection />
      <ContactSection />
    </Box>
  );
}
