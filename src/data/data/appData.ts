export type Project = {
  imgUrl: string;
  imgAlt: string;
  tags: string[];
  title: string;
  descr?: string;
  startDate?: string;
  endDate?: string;
  liveUrl?: string;
  githubUrl?: string;
};
type Category = {
  title: string;
  refUrl: string | undefined;
};
export type WorkExperience = {
  role: string;
  company: string;
  year: string;
  categories: Category[];
  description: string;
};

export type Technology = {
  name: string;
  imgUrl?: string | undefined;
  core?: boolean;
  type?: string;
};

type APP_DATA_TYPE = {
  experience: WorkExperience[];
  technologies: Technology[];
};

export const APP_DATA: APP_DATA_TYPE = {
  experience: [
    {
      role: "Technical Intern",
      company: "Cedars Productivity Center",
      year: "2020 - 2023",
      categories: [
        {
          title: "Font-End Development",
          refUrl: undefined,
        },
        {
          title: "Instructor",
          refUrl: undefined,
        },
        {
          title: "IT System Support",
          refUrl: undefined,
        },
      ],
      description: `
#### **Summary:**  
Built foundational engineering expertise while contributing to software projects, technical training programs, and IT infrastructure support. Operated in a hybrid role combining development execution, technical mentoring, and operational troubleshooting.

**Core Contributions**

* Developed web applications and supported UI improvements across internal projects.
* Assisted in debugging, performance tuning, and interface refinement.
* Delivered structured training sessions covering HTML, CSS, JavaScript, and presentation tools.
* Mentored beginner developers through hands-on coding sessions.
* Provided system support, network configuration assistance, and troubleshooting.

**Business Value Delivered**

* Accelerated learner onboarding into programming fundamentals.
* Strengthened internal technical operations through proactive support.
* Contributed to improved usability of internal tools and applications.

**Technologies Used**

HTML · CSS · JavaScript · Kotlin · Android Frameworks · System Diagnostics · Networking Basics


<!--
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
      role: "Software Developer",
      company: "Freelance",
      year: "2023 - Till Date",
      categories: [
        {
          title: "Front-End Engineering",
          refUrl: undefined,
        },
        {
          title: "Web Applications",
          refUrl: undefined,
        },
        {
          title: "Scalable Systems",
          refUrl: undefined,
        },
        {
          title: "Client Solutions",
          refUrl: undefined,
        },
      ],
      description: `
#### **Summary:**  
Delivered production-grade responsive web  solutions, translating business workflows into performant digital products. Specialized in front-end architecture, API-driven interfaces, and scalable UI systems that support real-time operations.	

**Strategic Contributions**

* Engineered responsive web applications using modern frameworks and modular architecture patterns.
* Built data-driven interfaces for logistics, ride-hailing, inventory, education, and workforce systems.
* Implemented robust API integrations.
* Designed scalable component structures optimized for maintainability and performance.
* Deployed live platforms using cloud hosting and CI-based workflows.


**Technology Stack**

React · Next.js · TypeScript · REST APIs · Supabase · Firebase · Zustand · TanStack Query · Git · Cloud Deployments
<!--

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
- Collaborated with UI/UX designers to ensure intuitive user interfaces.  
- Utilized **Git** for version control and collaborated with teams through **GitHub**.  

##### **5. Performance Optimization & Testing**  
- Conducted unit and integration testing to ensure app stability and performance.  
- Optimized network calls, memory usage, and UI rendering for a smooth user experience.  
- Published and maintained applications on the **Google Play Store**.  

#### **Skills & Technologies Used:**  
- **Languages:** Kotlin, TypeScript  
- **Frameworks & Tools:** Jetpack Compose, React.js, ViewModel, Axios, Zustand, LiveData, Coroutines, TanStackQuery, Room Database  
- **Backend & API Integration:** Retrofit,, GraphQL, RESTful APIs  
- **Cloud Services:** Firebase, AWS, MongoDB
- **Architecture:** MVVM, Clean Architecture, Repository Pattern
- **Testing & Optimization:** JUnit, Espresso, LeakCanary  
- **Version Control:** Git, GitHub,  

#### **Key Achievements:**  
- Delivered multiple Android and Web applications across different industries, improving efficiency in logistics, inventory, and staff management.  
- Enhanced ride-hailing platforms with optimized **driver-rider matching algorithms**.  
- Successfully built offline-first applications to ensure seamless operation in low-connectivity environments.  
-->
            `,
    },
  ],
  technologies: [
    {
      name: "Python",
    },
    
    {
      name: "Next.Js",
      core: true,
      type: "Front End",
    },
    {
      name: "GitHub",
      core: true,
      type: "Version Control",
    },
    {
      name: "Kotlin",
      core: true,
      type: "Mobile",
    },
    {
      name: "Figma",
      type: "Design",
    },
    {
      name: "Git",
      type: "Version Control",
    },
    {
      name: "Ktor",
      type: "RESTfull API",
    },
    {
      name: "Firebase",
      type: "DaaS",
    },
    {
      name: "MongoDB",
      type: "DaaS",
    },
    {
      name: "FastAPI",
      type: "RESTfull API",
    },
    {
      name: "React",
      core: true,
      type: "Front End",
    },

    // {
    //   name: "Gradle",
    //   imgUrl: "",
    //   type: "B"
    // },
    {
      name: "TypeScript",
      core: true,
    },
  ],
};
