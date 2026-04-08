import { Box } from "@chakra-ui/react";
import Navbar from "./navbar/Navbar";
import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import HeroSection from "./sections/hero";
import ProjectsSection from "./sections/projects";
import TechnologiesSection from "./sections/technologies";
import WorkSection from "./sections/work";
import { APP_DATA } from "@/data/data/appData";

const appData = APP_DATA;
export default function HomePageContent() {
  return (
    <>
      <Box w="100%" overflowX={"hidden"}>
        <Navbar />
        {/* <MotionConfig transition={{ duration: 0.3 }}> */}
        <HeroSection />
        <TechnologiesSection technologies={appData.technologies} />
        <AboutSection />
        <WorkSection workItems={appData.experience.toReversed()} />
        <ProjectsSection />
        <ContactSection />
        {/* </MotionConfig> */}
      </Box>
    </>
  );
}
