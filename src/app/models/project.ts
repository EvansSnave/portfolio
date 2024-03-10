export interface Project {
  images: Array<string>,
  title: string,
  technologies: Array<{ image_url: string, title: string }>,
  description: string,
  repository_link: string,
  instructions: string
}
