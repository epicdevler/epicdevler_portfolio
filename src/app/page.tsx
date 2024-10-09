'use client'
import HeroSection from "@/app/home/sections/hero/Hero";
import {ChakraProvider, DarkMode, ThemeConfig, extendTheme, useColorMode, useColorModeValue} from '@chakra-ui/react'
import TechnologiesSection from "@/app/home/sections/technologies/TechnologiesSection";
import AboutSection from "@/app/home/sections/about/AboutSection";
import ProjectsSection from "@/app/home/sections/projects/ProjectsSection";
import WorkSection from "@/app/home/sections/work/WorkSection";
import ContactSection from "@/app/home/sections/contact/ContactSection";
import Footer from "@/app/home/footer/_footer";
import {useEffect, useState} from "react";
import { Technology, TechnologyItem } from "../../sanity/schemas/technology";
import { WorkExperience } from "../../sanity/schemas/workExperience";
import { getPortfolioData } from "../../sanity/utils/utils";

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
const theme = extendTheme({
    config,
    colors: {
        brand: '#1D1CE3',
        white: '#F6F6F6'
    },
})


export default function Home() {

    const [workExperience, setWorkExperience] = useState<WorkExperience[]>([])
    const [technologies, setTechnologies] = useState<Technology[]>([])

    
    useEffect(() => {
        getPortfolioData().then(
            (value) => {
                setWorkExperience(value.works)
                setTechnologies(value.technology)
            },
            (reason) => {
                console.log(`${reason}`)
            }
        )
    }, []);



    return (
        <ChakraProvider theme={theme}>
                <HeroSection/>
                <main>
                    
                    <TechnologiesSection data={technologies} />
                    <ProjectsSection/>
                    <AboutSection/>
                    <WorkSection data={workExperience} />
                    <ContactSection/>
                </main>
                <Footer/>
        </ChakraProvider>
    )
}
