export type ProjectLink = {
  url: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  href: string;
  github?: string;
  ios?: string;
  android?: string;
  npm?: string;
  yarn?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Imageography",
    description: "A mobile application built on the React-Native framework.",
    techStack: ["React-Native", "Redux", "TypeScript", "Firebase"],
    href: "/projects/imageography",
    github: "https://github.com/haypho/imageography",
  },
  {
    title: "React-Native Web Cache",
    description:
      "An LRU cache. This is the first NPM/Yarn package that I published to the registries.",
    techStack: ["NodeJS", "NPM/Yarn", "TypeScript"],
    href: "/projects/react-native-web-cache",
    github: "https://github.com/haypho/react-native-web-cache",
    npm: "https://www.npmjs.com/package/react-native-web-cache",
    yarn: "https://yarnpkg.com/package/react-native-web-cache",
  },
  {
    title: "Portfolio",
    description:
      "This website! A living document for my projects and completed coding challenges.",
    techStack: [
      "NextJS",
      "React",
      "MaterialUI",
      "StyledComponents",
      "TypeScript",
    ],
    href: "/projects/portfolio",
    github: "https://github.com/haypho/info",
  },
];
