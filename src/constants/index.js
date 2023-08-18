import {
  frontend,
  backend,
  wordpress,
  shopify,
  ecommerce,
  ibmicon,
  glabbricon,
  propicon,
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
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    date: 'September 2023 - Current',
},
{
    title: 'Software Engineer',
    company_name: 'Property Pvt Ltd',
    description: 'As a Full Stack Developer at Property10X, I was part of a revolutionary team that is transforming the real \
                  estate industry through advanced technology solutions. I played a crucial role in designing and developing a \
                  cutting-edge real estate software platform that allows real estate users to post properties for Buy, Sell, Rent, \
                  and stay up-to-date with the latest news, trends, and projects. Working with ExpressJS, ReactJS, NodeJS, Firebase, \
                  Tailwind-CSS, and Bootstrap5, I contributed to the server-side application logic, RESTful APIs development, and \
                  data storage and retrieval implementation. My focus was on ensuring smooth and secure transactions by integrating \
                  various third-party APIs and modules. The platform was rigorously tested to guarantee the highest quality, security, \
                  and reliability.',
    icon: propicon,
    iconBg: '#333333',
    date: 'Jan 2022 - June 2023',
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
    demo: 'https://app.netlify.com/sites/creative-sable-c28d11/overview',
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
