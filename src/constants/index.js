import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    edx,
    sovereign,
    carrent,
    jobit,
    tripguide,
    threejs,
    eurokit
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Wordpress Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Eurokit Hidraulica",
      icon: eurokit,
      iconBg: "#E6DEDD",
      date: "October 2021 - February 2021",
      points: [
        "Developed and optimized a hydraulics products website from scratch using ReactJS, Bootstrap, SASS, HTML, and Javascript.",
        "Collaborated with a backend developer to implement data retrieval for the product tables, ensuring accurate and up-to-date information for users.",
        "Designed and implemented user-friendly navigation for seamless browsing experiences on both mobile and desktop platforms.",
        "Implemented an email contact form to facilitate customer inquiries about products, streamlining communication and driving potential leads.",
        "Created custom SASS styles for all components on the website, enhancing visual appeal and brand consistency.",
      ],
    },
    {
      title: "React.js Developer - UI/UX Designer",
      company_name: "Meta Certificate",
      icon: meta,
      iconBg: "#383E56",
      date: "Dec 2022 - Apr 2023",
      points: [
        "Developed a WCAG-compliant, mobile-first website for Little Lemon restaurant, prioritizing UX.",
        "Executed end-to-end app development process, utilizing Figma for design and implementing designs with React, Semantic HTML5, Bootstrap/SCSS.",
        "Implemented Reserve-a-Table feature with react-router-dom for seamless navigation and client-side validation for error-free forms.",
        "Utilized react hooks, fetch for data fetching, and local storage for smooth form progress tracking and state management.",
        "Created an intuitive application meeting WCAG standards, providing validation, error-handling, and exceptional user experience.",
      ],
    },
    {
      title: "Team Leader - Web Developer",
      company_name: "edx Bootcamp",
      icon: edx,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Feb 2024",
      points: [
        "Led a collaborative effort in developing the TrimTutor Weekly Workout Planner, overseeing a team of developers during the edX FrontEnd Development Bootcamp.",
        "Successfully resolved GitHub conflict merges and efficiently managed the repository, ensuring smooth collaboration and version control. Implemented a Weekly Workout Planner with a calendar feature, enabling users to save and track their workout routines, coupled with video tutorial recommendations from YouTube for each planned exercise.",
        "Utilized jQuery for enhanced functionality, Bootstrap for responsive design, and Day.js for streamlined date handling. Integrated the YouTube API for dynamic video recommendations and leveraged the Ninjas Workout API for diverse exercise options. Demonstrated proficiency in JavaScript ES6, HTML5, and CSS3 to create an intuitive and visually appealing user interface. Integrated unit testing during development to ensure good coding practices.",
        "Received positive feedback on the project's functionality and design in the final presentation.",
      ],
    },
    {
      title: "Javascript Developer - Wordpress Developer",
      company_name: "Sovereign House GH",
      icon: sovereign,
      iconBg: "#383E56",
      date: "May 2024 - Present",
      points: [
        "Developed a charity website to enhance accessibility, improve User Experience and Interface, and created new sections for better visibility.",
        "Customized website elements using JavaScript, HTML, and CSS code injections in Wordpress.",
        "Optimized processes by reducing plugins and Pro versions, thus lowering platform upkeep costs and enhancing site load times.",
        "Significantly improved SEO and scores for performance and accessibility through enhancements on LCP, reduction of unused CSS, and elimination of render-block issues.",
        "Designed a new website for Sovereign House GH aiming to empower disadvantaged children in the UK and Ghana through education.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };