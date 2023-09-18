'use client'
import HeroSection from "@/app/home/sections/hero/Hero";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import TechnologiesSection from "@/app/home/sections/technologies/TechnologiesSection";
import AboutSection from "@/app/home/sections/about/AboutSection";
import ProjectsSection from "@/app/home/sections/projects/ProjectsSection";
import WorkSection from "@/app/home/sections/work/WorkSection";
import ContactSection from "@/app/home/sections/contact/ContactSection";
import Footer from "@/app/home/footer/_footer";
import {useState} from "react";
import {NavBarContext} from "@/app/context/_navbar_state_context";
import {FullScreenNav} from "@/app/home/navbar/_navbar";

const theme = extendTheme({
    colors: {
        brand: '#6842EF',
        white: '#F6F6F6'
    },
})


export default function Home() {


    return (
        <ChakraProvider theme={theme}>
                <HeroSection/>
                <main>
                    <TechnologiesSection/>
                    <ProjectsSection/>
                    <AboutSection/>
                    <WorkSection/>
                    <ContactSection/>
                </main>
                <Footer/>
        </ChakraProvider>
    )
}
