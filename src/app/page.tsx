'use client'
import HeroSection from "@/app/home/sections/hero/Hero";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import TechnologiesSection from "@/app/home/sections/technologies/TechnologiesSection";
import AboutSection from "@/app/home/sections/about/AboutSection";
import ProjectsSection from "@/app/home/sections/projects/ProjectsSection";
import WorkSection from "@/app/home/sections/work/WorkSection";
import ContactSection from "@/app/home/sections/contact/ContactSection";
import Footer from "@/app/home/footer/_footer";
import {createContext, useContext, useState} from "react";

const theme = extendTheme({
    colors: {
        brand: '#6842EF',
        white: '#F6F6F6'
    },
})

export type NavbarState = {
    isToggled: boolean,
    toggle: () => void
}
const NavBarContext = createContext({
    isToggled: false,
    toggle: () => {
    }
});

export const useGlobalNavbarStateContext = () => useContext(NavBarContext);

export default function Home() {

    const [isToggled, setIsToggled] = useState<boolean>(false)

    const toggle = () => {
        setIsToggled(!isToggled)
    }


    return (
        <ChakraProvider theme={theme}>
            <NavBarContext.Provider value={{isToggled: isToggled, toggle: toggle}}>
                <HeroSection/>
                <main>
                    <TechnologiesSection/>
                    <ProjectsSection/>
                    <AboutSection/>
                    <WorkSection/>
                    <ContactSection/>
                </main>
                <Footer/>
            </NavBarContext.Provider>
        </ChakraProvider>
    )
}
