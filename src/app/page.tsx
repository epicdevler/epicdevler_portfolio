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
import {NavBarContext} from "@/app/context/_navbar_state_context";
import {FullScreenNav} from "@/app/home/navbar/_navbar";
import { Technology, TechnologyItem } from "../../sanity/schemas/technology";
import { WorkExperience } from "../../sanity/schemas/workExperience";
import { getPortfolioData } from "../../sanity/utils/utils";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
const theme = extendTheme({
    config,
    colors: {
        brand: '#6842EF',
        white: '#F6F6F6'
    },
})


const _works: WorkExperience[] = [
    {
        name: 'Cedars Productivity Centre',
        role: 'Android Developer',
        darkLogo: '/work/cedars_logo.png',
        lightLogo: '/work/cedars_logo.png',
        websiteUrl: 'https://www.cedarsprohub.com',
        duration: '2020 - 2023',
    }
]

const _technologies: TechnologyItem[] = [
    {
        iconUrl: '/technologies/FastAPI.svg',
        alt: 'FastAPI Logo',
        refUrl: ""
    },
    {iconUrl: '/technologies/Figma.svg', alt: 'Figma Logo', refUrl: ""},
    {iconUrl: '/technologies/Firebase.svg', alt: 'Firebase Logo', refUrl: ""},
    {iconUrl: '/technologies/Git.svg', alt: 'Git Logo', refUrl: ""},
    {iconUrl: '/technologies/GitHub.svg', alt: 'GitHub Logo', refUrl: ""},
    {iconUrl: '/technologies/Kotlin.svg', alt: 'Kotlin Logo', refUrl: ""},
    {iconUrl: '/technologies/Ktor.svg', alt: 'Ktor Logo', refUrl: ""},
    {iconUrl: '/technologies/Python.svg', alt: 'Python Logo', refUrl: ""},
    {iconUrl: '/technologies/MongoDB.svg', alt: 'MongoDB Logo', refUrl: ""},
]


export default function Home() {

    const [workExperience, setWorkExperience] = useState<WorkExperience[]>([])
    const [technologies, setTechnologies] = useState<Technology[]>([])

    
    useEffect(() => {
        getPortfolioData().then(
            (value) => {
                setWorkExperience(value.works)
                setTechnologies(value.technology)
                console.log(value)
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
