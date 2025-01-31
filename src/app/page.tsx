'use client'
import HeroSection from "@/app/home/sections/hero/Hero";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import TechnologiesSection from "@/app/home/sections/technologies/TechnologiesSection";
import AboutSection from "@/app/home/sections/about/AboutSection";
import ProjectsSection from "@/app/home/sections/projects/ProjectsSection";
import WorkSection from "@/app/home/sections/work/WorkSection";
import ContactSection from "@/app/home/sections/contact/ContactSection";
import { use, useEffect, useState } from "react";
import { Technology } from "../../sanity/schemas/technology";
import { WorkExperience } from "../../sanity/schemas/workExperience";
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import Navbar from "./home/navbar/_navbar";


export default function Home() {

    const [workExperience, setWorkExperience] = useState<WorkExperience[]>([])
    const [technologies, setTechnologies] = useState<Technology[]>([])
    const [api, setApi] = useState<null | fullpageApi>(null)
    const [sectionCount, setSectionCount] = useState<number>(0)
    const [initialized, setInitialized] = useState<boolean>(false)
    

    useEffect(() => {
        const currentHash = window.location.hash

        if(api != null || api != undefined){
            
            switch (currentHash) {
                case "#about":
                    api.moveTo(2)
                    break;
                case "#projects":
                    api.moveTo(3+2)
                    break;
                case "#contact":
                    api.moveTo(4+2)
                    break;
                default:
                    break;
            }
        }

    }, [initialized, api])

    return (
        <>

            <Navbar fullpageSectionCount={sectionCount} fullpageApi={api} />

            <ReactFullpage
                lockAnchors={true}
                licenseKey={''}
                afterLoad={function (origin, destination, direction) {
                    const currentIndex = destination.index
                    console.log("Less && Greater", currentIndex < 2 || currentIndex > 3)
                    if(currentIndex < 2 || currentIndex > 3){
                        if(currentIndex > 3){
                            setSectionCount(destination.index - 2)
                        }else{
                            setSectionCount(destination.index)
                        }
                    }
                  }}
                scrollingSpeed={1000}
                credits={{}}
                render={({ state, fullpageApi }) => {                    
                    setApi(fullpageApi)
                    setInitialized(state.intialized || false)
                    return (
                        <ReactFullpage.Wrapper>
                            <HeroSection />
                            <AboutSection />
                            <TechnologiesSection data={technologies} />
                            <WorkSection data={workExperience} />
                            <ProjectsSection />
                            <ContactSection />

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    )
}
