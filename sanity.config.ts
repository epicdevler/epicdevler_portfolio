import {defineConfig} from 'sanity'
import {deskTool} from "sanity/desk";
import {visionTool} from "@sanity/vision";



const sanityConfig = defineConfig({

    projectId: "5gjaba6t",
    dataset: "production",
    title: "epicdevler's Portfolio",
    apiVersion: '2023-04-14',
    basePath: '/admin',
    plugins: [deskTool(), visionTool()]
})

export default sanityConfig