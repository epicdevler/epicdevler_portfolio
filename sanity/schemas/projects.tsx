export type Technology = {
    briefMessage: string,
    technologies: TechnologyItem[]
}
export type TechnologyItem = {
    iconUrl: string,
    alt: string,
    refUrl: string
}

const technologySchema = {
    name: 'technology',
    title: 'Technology',
    type: 'document',
    fields: [
        {name: 'message', type: 'string', title: 'Brief Message'},
        {
            type: 'array',
            name: 'technologies',
            title: 'Technologies',
            of: [
                {
                    type: 'document',
                    fields: [
                        {name: 'alt', type: 'string', title: 'Alternate Name'},
                        {name: 'imgUrl', type: 'image', title: 'Image'},
                        {name: 'refUrl', type: 'url', title: 'Reference URL'},
                    ]
                },
            ]
        }
    ]
}

export default technologySchema