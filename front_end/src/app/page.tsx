'use client'
import HeroSection from "@/app/home/sections/hero/Hero";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import TechnologiesSection from "@/app/home/sections/technologies/TechnologiesSection";
import AboutSection from "@/app/home/sections/about/AboutSection";
import ProjectsSection from "@/app/home/sections/projects/ProjectsSection";
import WorkSection from "@/app/home/sections/work/WorkSection";
import ContactSection from "@/app/home/sections/contact/ContactSection";
import Footer from "@/app/home/footer/_footer";
import {useEffect, useState} from "react";
import {NavBarContext} from "@/app/context/_navbar_state_context";
import {FullScreenNav} from "@/app/home/navbar/_navbar";
import {getPortfolioData} from "../../sanity/utils/utils";
import {WorkExperience} from "../../sanity/schemas/workExperience";
import {Technology, TechnologyItem} from "../../sanity/schemas/technology";

const theme = extendTheme({
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
const _technologies = [
    {
        url: '/technologies/FastAPI.svg',
        alt: 'FastAPI Logo',
    },
    {url: '/technologies/Figma.svg', alt: 'Figma Logo'},
    {url: '/technologies/Firebase.svg', alt: 'Firebase Logo'},
    {url: '/technologies/Git.svg', alt: 'Git Logo'},
    {url: '/technologies/GitHub.svg', alt: 'GitHub Logo'},
    {url: '/technologies/Kotlin.svg', alt: 'Kotlin Logo'},
    {url: '/technologies/Ktor.svg', alt: 'Ktor Logo'},
    {url: '/technologies/Python.svg', alt: 'Python Logo'},
    {url: '/technologies/MongoDB.svg', alt: 'MongoDB Logo'},
]


export default function Home() {

    const [isToggled, setIsToggled] = useState<boolean>(false)
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

    const toggle = () => {
        setIsToggled(!isToggled)
    }

    return (
        <ChakraProvider theme={theme}>
            <NavBarContext.Provider value={{isToggled: isToggled, toggle: toggle}}>
                <FullScreenNav/>
                <HeroSection/>
                <main>
                    <TechnologiesSection data={technologies}/>
                    <ProjectsSection/>
                    <AboutSection/>
                    <WorkSection data={workExperience}/>
                    <ContactSection/>
                </main>
                <Footer/>
            </NavBarContext.Provider>
        </ChakraProvider>
    )
}
