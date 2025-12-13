export interface Projects{
  personal_projects: Personal_Projects[];
  contributed_to: Contributed[];
}

export interface Personal_Projects{
  stack: string[];
  name: string;
  description: string;
  image: string;
  live: string;
  code: string
}

export interface Contributed{
  stack: string[];
  name: string;
  contribution: string;
  image: string;
  live: string;
}