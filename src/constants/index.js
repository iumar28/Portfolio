import {
  frontend,
  backend,
  wordpress,
  shopify,
  ecommerce,
  ibmicon,
  glabbricon,
  leadzen,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  superspace,
  property10x,
  knyo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Development',
    icon: frontend,
  },
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Wordpress Development',
    icon: wordpress,
  },
  {
    title: 'Shopify Development',
    icon: shopify,
  },
  {
    title: 'Ecommerce Development',
    icon: ecommerce,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    description: '',
    company_name: 'IBM',
    icon: ibmicon,
    iconBg: '#333333',
    date: 'December 2023 - Current',
},
{
    title: 'SDE1',
    company_name: 'Leadzen ai',
    description: `As an SDE, I played a pivotal role in the development of an AI-powered interactive content platform aimed at 
                  transforming the customer journey. I contributed to key features including seamless screen recording conversion 
                  into interactive demos and guides, integration via the Chrome extension framework, and implementation of AI-generated 
                  voiceovers and caption. My contributions reflect my proficiency in software development and dedication to delivering 
                  innovative solutions that enhance user engagement and productivity.`,
    icon: leadzen,
    iconBg: '#333333',
    date: 'Jan 2023 - December 2023',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Glabbr Technologies Pvt Ltd',
    description: 'Worked as a backend developer at Glabbr Technologies, a cloud-hosted SaaS product used by manufacturers in various \
                  domains. I played a key role in creating a powerful Product Data Management (PDM) tool. Utilizing my Go programming skills, \
                  I developed scalable Restful APIs and performed rigorous QA testing. I also managed and optimized the platform\'s database \
                  within the MVC architecture framework, ensuring maximum uptime, scalability, and data security.',
    icon: glabbricon,
    iconBg: '#333333',
    date: 'Oct 2021 - April 2022',
}

];

const projects = [
  {
    id: 'project-1',
    name: 'KNYO CLOUD',
    description: 'A PDM software that manages data specially for automobile industry',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: knyo,
    repo: 'https://github.com/iumar28',
    demo: 'https://knyo.cloud',
  },
  {
    id: 'project-2',
    name: 'Property10x',
    description:
      'A Real Estate Web App made to list the projects and provide a good experience of real estate properties.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: property10x,
    repo: 'https://github.com/iumar28',
    demo: 'https://theproperty10x.com/',
  },
  {
    id: 'project-3',
    name: 'Superspace',
    description: 'This is web app tells you all the products that are available to you nearby',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: superspace,
    repo: 'https://github.com/iumar28',
    demo: 'https://superspace.netlify.app/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
