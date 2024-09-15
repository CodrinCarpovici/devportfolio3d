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
  bootstrap,
  git,
  figma,
  docker,
  meta,
  edx,
  bookbridge,
  threejs,
  eurokit,
  styledComponents,
  wordpress,
  sovereign,
  sovereignhouse,
  eurokitsite,
  trimtutor,
  littlelemon,
  irene,
  eurokitwhite,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "styled components",
    icon: styledComponents,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Eurokit Hidraulica",
    icon: eurokit,
    iconBg: "#E6DEDD",
    date: "October 2020 - February 2021",
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
      "Codrin pitched excellently, we went with his idea for theme guideline, which has proven to be an overall winner! Codrin is committed, dedicated, professional and happy to lead. He has learnt and used his skills effectively and he will go a long way as a professional website developer.",
    name: "Irene Lockett",
    designation: "Founder & CEO",
    company: "Sovereign House GH",
    image: irene,
  },
  {
    testimonial:
      "Codrin has helped us bring our business online by creating a perfect website for our specifications. We now use the website on a regular to promote our products and to increase our revenue from online customers too. It has also allowed us to reduce workload and we couldn't be more grateful for the work he has done. ",
    name: "Marius Butanu",
    designation: "Founder & CEO",
    company: "Eurokit Hidraulica",
    image: eurokitwhite,
  },
];

const projects = [
  {
    name: "Charity Website",
    description:
      "Web-based platform which allows users to search past and new events the charity has going on. Users can sign up to ongoing computer learning classes, donate for the different fundraisers going on and to get in touch with the charity either for volunteering or internships through application forms and by means of a contact form.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sovereignhouse,
    source_code_link: "https://wordpress.com/",
    live_site_link: "https://sovereignhousegh.com/",
  },
  {
    name: "Hidraulics Website",
    description:
      "Web application for a hydraulics business. The website is a showcase of the products the company has to offer. It has a contact form for users to get in touch with the company and a search bar for users to search for specific products.",
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
        name: "bootstrap",
        color: "purple-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: eurokitsite,
    source_code_link: "https://github.com/CodrinCarpovici/eurokit-hidraulica",
    live_site_link: "https://eurokit.org/",
  },
  {
    name: "Book Search & Online Bookshelf",
    description:
      "A platform which allows a search through the world's largest library(Google Books API) and to store your searched books in your personal Bookshelf, allowing you to change the status of the saved books depending on wheter you read them, are in progress or to be read.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "purple-text-gradient",
      },
      {
        name: "googleBooksAPI",
        color: "pink-text-gradient",
      },
    ],
    image: bookbridge,
    source_code_link: "https://github.com/CodrinCarpovici/bookbridge",
    live_site_link: "https://bookbridge.netlify.app/",
  },
  {
    name: "Workout Planner App",
    description:
      "Weekly Workout Planner app with saved workouts in calendar feature and video tutorial reccomendations from YouTube for the planned workouts.",
    tags: [
      {
        name: "jQuery",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "dayjs",
        color: "purple-text-gradient",
      },
      {
        name: "YoutubeAPI",
        color: "pink-text-gradient",
      },
    ],
    image: trimtutor,
    source_code_link: "https://github.com/CodrinCarpovici/trimtutor",
    live_site_link: "https://codrincarpovici.github.io/trimtutor/",
  },
  {
    name: "Restaurant Reservation App",
    description:
      "Reservation feature for a the Little Lemon restaurant website with client-side validation for error-free forms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: littlelemon,
    source_code_link: "https://github.com/CodrinCarpovici/projectcapstone",
    live_site_link: "https://github.com/CodrinCarpovici/projectcapstone",
  },
];

export { services, technologies, experiences, testimonials, projects };
