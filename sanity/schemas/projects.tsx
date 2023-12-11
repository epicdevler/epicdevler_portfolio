

export type Project = {
    type: string,
    title: string,
    startDate: string,
    endDate: string,
    imgUrl: string,
    alt: string,
    descr: string,
    githubUrl: string,
    link?: string,
}
const projectSchema = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    groups: [
        {
            name: 'dates',
            title: "Dates"
        },
    ],
    fields: [
        { name: 'alt', type: 'string', title: 'Alternate Name' },
        { name: 'imgUrl', type: 'image', title: 'Image' },
        { name: 'descr', type: 'string', title: 'Description' },
        { name: 'type', type: 'string', title: 'Type' },
        { name: 'githubUrl', type: 'url', title: 'GitHub Link' },
        { name: 'link', type: 'url', title: 'Download / Link' },
        { name: 'startDate', group: 'dates', type: 'string', title: 'Start Date' },
        { name: 'endDate', group: 'dates', type: 'string', title: 'End Date' },
    ]
}

export default projectSchema