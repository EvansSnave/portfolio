interface Technology {
  image_url: string;
  title: string;
  link: string;
}

export interface TechnologyObject {
  [key: string]: Technology;
}
