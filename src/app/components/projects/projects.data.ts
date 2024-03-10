import { Project } from "../../models/project";

export const PROJECTS: Project[] = [
  { 
    images: ['', ''],
    title: 'Boooks',
    technologies: [
      { image_url: '../../assets/images/html-icon.png', title: 'HTML'}, 
      { image_url: '../../assets/images/sass-icon.png', title: 'SCSS' }
    ],
    description: 'Its a project',
    repository_link: 'https://github.com/kiboma2021/capstone-project-front-end',
    instructions: 'Download and try',
  },
];
