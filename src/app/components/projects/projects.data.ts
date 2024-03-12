import { Project } from "../../models/project";
import { TECH } from "./technologies.data";

export const PROJECTS: Project[] = [
  {
    images: [
      '../../assets/images/showcase/cover1.webp',
      '../../assets/images/showcase/refenrence.jpg'
    ],
    title: 'Boooks',
    technologies: [ TECH.HTML, TECH.SCSS ],
    description: 'Its a project',
    repository_link: 'https://github.com/kiboma2021/capstone-project-front-end',
    instructions: 'Download and try',
  },
  {
    images: [
      '../../assets/images/showcase/reference2.jpg',
      '../../assets/images/showcase/cover4.jpeg'
    ],
    title: 'Another project',
    technologies: [ TECH.HTML, TECH.SCSS, TECH.JS ],
    description: `
      dsasdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsaddsdsdfsfsfsf
      asadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaassasaasda
      adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassdsdsdsddsfdffffffffffffffffffffffffffdf
      asassasaassa
      dsasdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsaddsdsdfsfsfsf
      asadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaassasaasda
      adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassdsdsdsddsfdffffffffffffffffffffffffffdf
      asassasaassa
      dsasdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsaddsdsdfsfsfsf
      asadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaassasaasda
      adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassdsdsdsddsfdffffffffffffffffffffffffffdf
      asassasaassa
      dsasdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsaddsdsdfsfsfsf
      asadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaassasaasda
      adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassdsdsdsddsfdffffffffffffffffffffffffffdf
      asassasaassa
      dsasdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsaddsdsdfsfsfsf
      asadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaassasaasda
      adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassdsdsdsddsfdffffffffffffffffffffffffffdf
      asassasaassa
      dsasdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsaddsdsdfsfsfsf
      asadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaassasaasda
      adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassdsdsdsddsfdffffffffffffffffffffffffffdf
      asassasaassa
      dsasdsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsaddsdsdfsfsfsf
      asadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaassasaasda
      adaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassdsdsdsddsfdffffffffffffffffffffffffffdf
      asassasaassa
    `,
    repository_link: 'https://github.com/kiboma2021/capstone-project-front-end',
    instructions: 'Download and try',
  },
  {
    images: [
      '../../assets/images/showcase/cover3.jpg',
      '../../assets/images/showcase/reference5.jpg',
      '../../assets/images/showcase/reference3.jpg'
    ],
    title: 'Another project',
    technologies: [ TECH.HTML, TECH.SCSS, TECH.JS, TECH.Angular, TECH.Git, 
      TECH.PostgreSQL, TECH.Rails, TECH.React, TECH.Rspec],
    description: 'Its a project',
    repository_link: 'https://github.com/kiboma2021/capstone-project-front-end',
    instructions: 'Download and try',
  },
];
