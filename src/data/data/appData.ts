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
type Category = {
    title: string,
    refUrl: string | undefined
}
export type WorkExperience = {
    role: string,
    company: string,
    year: string,
    categories: Category[],
    description: string
  }

export type Technology = {
    name: string,
    imgUrl?: string | undefined,
    core?: boolean,
}

type APP_DATA_TYPE = {
    experience: WorkExperience[],
    technologies: Technology[]
}

export const APP_DATA: APP_DATA_TYPE = {
    experience: [
        {
            role: "Intern",
            company: "Cedars Productivity Center",
            year: "2020-2023",
            categories: [
                {
                    title: "App",
                    refUrl: undefined
                },
                {
                    title: "Web Developer",
                    refUrl: undefined
                },
                {
                    title: "Programming Instructor",
                    refUrl: undefined
                },
                {
                    title: "IT System Support",
                    refUrl: undefined
                },
            ],
            description: 
            `
#### **Summary:**  
As an intern at Cedars Productivity Centre, I actively contributed to the development of Android applications and web-based solutions while also assisting in IT system support. Additionally, I served as an instructor, teaching the fundamentals of computing with a focus on HTML, CSS, JavaScript, and PowerPoint.  

#### **Key Responsibilities:**  

##### **Android & Web Development:**  
- Developed and maintained Android applications using modern frameworks and best practices.  
- Contributed to the development of web applications and websites.  
- Assisted in UI/UX improvements and debugging software issues.  

##### **Instruction & Training:**  
- Served as a **Programming Basics & Computing Instructor**, teaching foundational concepts in:  
  - HTML, CSS, and JavaScript.  
  - Presentation skills using Microsoft PowerPoint.  
- Provided hands-on guidance and mentorship to beginners in programming and computing.  

##### **IT System Support:**  
- Assisted in troubleshooting and maintaining IT systems.  
- Provided technical support for software and hardware issues within the organization.  
- Supported network setup and system configurations.  

#### **Skills & Technologies Used:**  
- **Android Development:** Java/Kotlin, Jetpack Compose/XML.  
- **Web Development:** HTML, CSS, JavaScript.  
- **IT Support:** System troubleshooting, basic networking.  
- **Teaching & Training:** Course structuring, practical demonstrations.  
`,
        },
        {
            role: "Android Developer",
            company: "Freelance",
            year: "2020-2023",
            categories: [
                {
                    title: "Logistics",
                    refUrl: undefined
                },
                {
                    title: "Ride Hailing",
                    refUrl: undefined
                },
                {
                    title: "Staff Management",
                    refUrl: undefined
                },
                {
                    title: "Student Management",
                    refUrl: undefined
                },
                {
                    title: "Inventory Management",
                    refUrl: undefined
                },
            ],
            description: 
            `
#### **Summary:**  
As a freelance Android Developer, I design and develop mobile applications tailored to various industries, including **logistics, ride-hailing, staff management, student management, and inventory management**. My expertise lies in building high-performance, scalable Android applications while ensuring seamless API integration and backend connectivity. While I am not a UI/UX designer, I collaborate with UI/UX professionals when required to implement user-friendly interfaces.  

#### **Key Responsibilities:**  

##### **1. Android App Development**  
- Developed functional and scalable Android applications based on client requirements.  
- Built and maintained apps using **Kotlin**, **Jetpack Compose**, and modern Android development best practices.  
- Followed **MVVM architecture** and leveraged Jetpack components for efficient app structure and maintainability.  
- Ensured smooth API integration for real-time and offline functionalities.  

##### **2. Industry-Specific Solutions**  
- **Logistics:** Implemented real-time tracking, fleet management, and route optimization.  
- **Ride-Hailing:** Developed ride-booking systems with GPS tracking, fare calculations, and driver-rider matching.  
- **Staff Management:** Built attendance tracking, task management, and payroll processing applications.  
- **Student Management:** Created timetable scheduling, academic performance tracking, and student portal apps.  
- **Inventory Management:** Designed systems for stock tracking, order processing, and report generation.  

##### **3. Backend & API Integration**  
- Integrated RESTful APIs and Firebase for authentication, database storage, and push notifications.  
- Developed offline-first applications using **Room Database** for local data storage.  
- Worked with cloud services such as Firebase Firestore and AWS for scalable app architecture.  

##### **4. Collaboration & Project Management**  
- Worked closely with clients to understand business needs and translate them into functional applications.  
- When UI/UX designs were not provided, collaborated with UI/UX designers to ensure intuitive user interfaces.  
- Utilized **Git** for version control and collaborated with teams through **GitHub/GitLab**.  

##### **5. Performance Optimization & Testing**  
- Conducted unit and integration testing to ensure app stability and performance.  
- Optimized network calls, memory usage, and UI rendering for a smooth user experience.  
- Published and maintained applications on the **Google Play Store**.  

#### **Skills & Technologies Used:**  
- **Languages:** Kotlin, Java  
- **Frameworks & Tools:** Jetpack Compose, ViewModel, LiveData, Coroutines, Room Database  
- **Backend & API Integration:** Retrofit, Firebase, GraphQL  
- **Architecture:** MVVM, Clean Architecture  
- **Testing & Optimization:** JUnit, Espresso, LeakCanary  
- **Version Control:** Git, GitHub, GitLab  

#### **Key Achievements:**  
- Delivered multiple Android applications across different industries, improving efficiency in logistics, inventory, and staff management.  
- Enhanced ride-hailing platforms with optimized **driver-rider matching algorithms**.  
- Successfully built offline-first applications to ensure seamless operation in low-connectivity environments.  

            `,
        },
        {
            role: "Front End Developer",
            company: "Freelance",
            year: "2020-2023",
            categories: [
                {
                    title: "City Directory",
                    refUrl: undefined
                },
                {
                    title: "Business Websites",
                    refUrl: undefined
                }
            ],
            description: 
            `
#### **Summary:**  
As a freelance Front-End Developer, I specialize in building **responsive, scalable, and interactive** web applications, including **city directories and business websites (single and multi-page)**. I leverage modern web technologies such as **React.js, Next.js, and Chakra UI** to create seamless user experiences with optimized performance and accessibility.  

#### **Key Responsibilities:**  

##### **1. Front-End Web Development**  
- Built responsive and interactive **city directories** and **business websites** using **React.js and Next.js**.  
- Used **Chakra UI**, **Tailwind CSS**, and **SCSS** for fast, consistent, and visually appealing designs.  
- Ensured **cross-browser compatibility and mobile responsiveness** for a smooth user experience.  

##### **2. City Directory Development**  
- Developed **city directory web applications** with real-time search, filtering, and business listing functionalities.  
- Integrated **Google Maps API** for location-based services.  
- Optimized **large datasets** to ensure fast performance and seamless user interactions.  

##### **3. Business Website Development**  
- Built **single-page and multi-page** business websites tailored to client needs.  
- Integrated **CMS solutions** (WordPress, Strapi, Sanity) for easy content management.  
- Implemented **SEO best practices** to improve website visibility on search engines.  

##### **4. API & Backend Integration**  
- Connected front-end applications with **RESTful APIs** and **GraphQL** for dynamic data retrieval.  
- Integrated **Firebase and Supabase** for authentication, real-time databases, and cloud storage.  
- Utilized **Next.js API routes** and **server-side rendering (SSR)** for improved performance.  

##### **5. Performance Optimization & Testing**  
- Optimized applications using **Core Web Vitals** to ensure high performance.  
- Conducted testing with **Jest, React Testing Library, and Cypress** for stability and reliability.  
- Debugged and enhanced website speed and UX by implementing **lazy loading, code splitting, and caching**.  

##### **6. Collaboration & Project Management**  
- Worked closely with **clients** to understand their business goals and deliver tailored solutions.  
- When UI/UX designs were not provided, collaborated with **UI/UX designers** to ensure user-friendly interfaces.  
- Managed projects using **Git, GitHub, and project tracking tools** (Trello, Jira).  

#### **Skills & Technologies Used:**  
- **Languages & Frameworks:** JavaScript, TypeScript, React.js, Next.js  
- **UI Libraries & Styling:** Chakra UI, Tailwind CSS, Bootstrap, SCSS  
- **State Management:** Redux, React Context API  
- **Backend & APIs:** Firebase, Supabase, Node.js, GraphQL, RESTful APIs  
- **Performance & Testing:** Core Web Vitals, Jest, Cypress, React Testing Library  
- **Version Control & Deployment:** Git, GitHub, Vercel, Netlify  

#### **Key Achievements:**  
- Developed **high-performance city directories**, improving local business discovery.  
- Designed and launched multiple **responsive business websites**, increasing online engagement.  
- Implemented **SEO-friendly, fast-loading applications** using Next.js and Chakra UI.  

            `,
        },
    ],
    technologies: [
        {
            name: "Python",
            imgUrl: "",
        },
        {
            name: "Kotlin",
            imgUrl: "",
            core: true
        },
        {
            name: "React",
            imgUrl: "",
        },
        {
            name: "Next.Js",
            imgUrl: "",
            core: true
        },
        {
            name: "GitHub",
            imgUrl: "",
            core: true
        },
        {
            name: "Figma",
            imgUrl: "",
        },
        {
            name: "Git",
            imgUrl: "",
        },
        {
            name: "Ktor",
            imgUrl: "",
        },
        {
            name: "Firebase",
            imgUrl: "",
        },
        {
            name: "MongoDB",
            imgUrl: "",
        },
        {
            name: "FastAPI",
            imgUrl: "",
        },
        {
            name: "React",
            imgUrl: "",
            core: true
        },
        {
            name: "HTML",
            imgUrl: "",
        },
        {
            name: "CSS",
            imgUrl: "",
        },
        {
            name: "Gradle",
            imgUrl: "",
        },
        {
            name: "TypeScript",
            imgUrl: "",
            core: true
        },
    ]
}