export type WorkExperience = {
  name: string,
  role: string,
  websiteUrl: string,
  duration: string,
  darkLogo: string
  lightLogo: string
}

const workSchema = {
  name: 'work',
  title: 'Works',
  type: 'document',
  groups: [
    {
      name: 'logo',
      title: "Logo"
    },
  ],
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'darkLogo', group: 'logo', options: {hotspot: true}, type: 'image', title: 'Logo On Dark'},
    {name: 'lightLogo', group: 'logo', options: {hotspot: true}, type: 'image', title: 'Logo On Light'},
    {name: 'role', type: 'string', title: 'Role'},
    {name: 'websiteUrl', type: 'string', title: 'Website URL'},
    {name: 'duration', type: 'string', title: 'Work Duration'}
  ]
}

export default workSchema