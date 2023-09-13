import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import workSchema from "./sanity/schemas/workExperience";
import {schemaTypes} from "./sanity/schemas";

const config = defineConfig({
    name: 'default',
    title: "epicdevler's Project",

    projectId: '5gjaba6t',
    dataset: 'production',
    apiVersion: '2023-09-12',

    basePath: '/admin',
    plugins: [deskTool(), visionTool()],
    schema: {types: schemaTypes}
})

export default config
