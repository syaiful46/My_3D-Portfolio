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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  animelist,
  sampapp,
  sampapp2,
  zelos,
  celebes,
  absolutesn,
  suzuki,
  mci,
  canisnfelis,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Millionaire Group Indonesia (MCI)",
    icon: mci,
    iconBg: "#383E56",
    date: "June 2023 - December 2023",
    points: [
      "Developing and maintaining mobile applications using React-native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and mobile compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Canisnfelis",
    icon: canisnfelis,
    iconBg: "#E6DEDD",
    date: "October 2022 - April 2023",
    points: [
      "Developing and maintaining mobile applications using React-native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and mobile compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Sampapp",
    description:
      "A mobile application about waste education, that allows users to take part in quizzes and video missions to get a certificate, live on Playstore.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "red-text-gradient",
      },
      {
        name: "react-hooks",
        color: "pink-text-gradient",
      },
      {
        name: "ui/ux",
        color: "green-text-gradient",
      },
    ],
    image: sampapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Zelos",
    description:
      "A mobile application that presents information from church services, which has several features such as schedules, announcements to event rundowns and feedback",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "red-text-gradient",
      },
      {
        name: "react-hooks",
        color: "pink-text-gradient",
      },
      {
        name: "ui/ux",
        color: "green-text-gradient",
      },
    ],
    image: zelos,
    source_code_link: "https://github.com/",
  },
  {
    name: "CelebesMedia",
    description:
      "A mobile application that presents news from Celebesmedia, has many features ranging from searching for news, radio to video streaming",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "red-text-gradient",
      },
      {
        name: "react-hooks",
        color: "pink-text-gradient",
      },
      {
        name: "ui/ux",
        color: "green-text-gradient",
      },
    ],
    image: celebes,
    source_code_link: "https://github.com/",
  },
  {
    name: "Kehadiran",
    description:
      "A special mobile application created for the Absolute Service Nusantara company, which has complex features ranging from Attendance, Service/Overtime Applications to Employee Reports, live on Playstore",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "red-text-gradient",
      },
      {
        name: "react-hooks",
        color: "pink-text-gradient",
      },
      {
        name: "ui/ux",
        color: "green-text-gradient",
      },
    ],
    image: absolutesn,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Suzuki mobile app",
  //   description:
  //     "A special mobile application created for the Suzuki company which has features ranging from Attendance, Announcements to Loan Reports.",
  //   tags: [
  //     {
  //       name: "reactnative",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "git",
  //       color: "red-text-gradient",
  //     },
  //     {
  //       name: "react-hooks",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "ui/ux-design",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: suzuki,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
