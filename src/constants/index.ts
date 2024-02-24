import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Excelente trabajo, recomendable 100*100!.",
    name: "Juan Sanchez",
    designation: "Logistica Satelital",
    company: "Rosario",
    image: "https://scontent.fepa6-1.fna.fbcdn.net/v/t39.30808-6/276299799_5568999483127520_3278779032722138713_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGsVJ9fhVjTuxwKi8-2dRRLqh9DYIhdDc6qH0NgiF0NzlxaX0EZKGRY2Nn_g16EluTd9y3cSfKN1jfDr-szoXmm&_nc_ohc=2UuY9y0JFpYAX84eTy0&_nc_ht=scontent.fepa6-1.fna&oh=00_AfAIRSTpm7FsieoJdhG3PR7XUSNP90JH48knnYEm6fycpQ&oe=65DE6343",
  },
  {
    testimonial:
      "El sistema nos agiliza en gran manera la espera de los clientes y descomprime la caja humana.",
    name: "Emiliano Garate",
    designation: "Heladeria Kyndy",
    company: "Cordoba",
      image: "https://scontent.fepa6-1.fna.fbcdn.net/v/t1.6435-9/44261307_10209868832117102_3196224119477633024_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeHXpuyhJby4vklI5QhFy1wil9-hU46ISJOX36FTjohIk8juEZsm-2sqF3djARB_ju7I3g2PoO1KqObm7DJ7QDgQ&_nc_ohc=CY4w5-P6UqkAX8aYv9Y&_nc_ht=scontent.fepa6-1.fna&oh=00_AfAG9kO-4mkJPNSwcxuj5I9wIky7AKR81gbDGCwaeTrZkA&oe=66011653",
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

const projects: TProject[] = [
  {
    name: "Turnero App",
    description:
      "Aplicativo multiplataforma para la administracion de turnos presenciales.",
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Heladeria Suite Manager",
    description:
      "Sistema administrador de heladerias con pasarela de pago Mercado Pago QR. Terminal de autogestión con pago QR. Aplicaicon Móvil parar delivery con integracion de pago Mercado Pago (link de pago).",
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Mercado Pago",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Distri App Suite",
    description:
      "Sistema de punto de venta para distribuidoras con integracion de Mercado Pago. Aplicacion movil para pedidos con envio. .",
    tags: [
      {
        name: ".net",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Mercado Pago",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
