// import {createClient, groq} from 'next-sanity';

// const client = createClient(
//     {
//         projectId: '5gjaba6t',
//         dataset: 'production',
//         apiVersion: '2023-09-12',
//         useCdn: false,
//     perspective: 'previewDrafts',
//     }
// )
// export async function getPortfolioData() {

//     const workQueryRule = `
//     "works":*[_type == 'work']{
//         _id,
//         _createdAt,
//         name,
//         "darkLogo": darkLogo.asset->url,
//           "lightLogo": lightLogo.asset->url,
//         role,
//         websiteUrl,
//         duration,
//         }
//     `

//     const technologiesQueryRule = `
//   "technology":*[_type == 'technology']{
//         _id,
//         _createdAt,
//         "briefMessage":message,
//           "technologies":technologies[]{
//           alt,
//           "iconUrl":imgUrl.asset->url,
//           refUrl
//           }
  
//         }
//     `

//     return await client.fetch(
//         groq`
//         {
//         ${workQueryRule},
//         ${technologiesQueryRule}
//         }
//         `
//     )

// }