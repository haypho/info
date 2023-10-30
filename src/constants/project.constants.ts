export type ProjectLink = {
  url: string;
};

export type Project = {
  name: string;
  description: string;
  techStack: string[];
  github?: ProjectLink;
  ios?: ProjectLink;
  android?: ProjectLink;
  npm?: ProjectLink;
  yarn?: ProjectLink;
};

export const PROJECTS: Record<string, Project> = {
  imageography: {
    name: "Imageography",
    description: "A mobile application built on the React-Native framework.",
    techStack: ["React-Native", "Redux", "TypeScript", "Firebase"],
    ios: {
      url: "https://apps.apple.com/us/app/imageography/id1516408403",
    },
    android: {
      url: "https://play.google.com/store/apps/details?id=com.hphothong.imageography",
    },
  },
  reactNativeWebCache: {
    name: "React-Native Web Cache",
    description:
      "An LRU cache. This is the first NPM/Yarn package that I published to the registries.",
    techStack: ["NodeJS", "NPM/Yarn", "TypeScript"],
    github: {
      url: "https://github.com/hphothong/react-native-web-cache",
    },
    npm: {
      url: "https://www.npmjs.com/package/react-native-web-cache",
    },
    yarn: {
      url: "https://yarnpkg.com/package/react-native-web-cache",
    },
  },
  personalPortfolio: {
    name: "Personal Portfolio",
    description:
      "This website! A living document for my projects and completed coding challenges.",
    techStack: [
      "NextJS",
      "React",
      "MaterialUI",
      "StyledComponents",
      "TypeScript",
    ],
    github: {
      url: "https://github.com/hphothong/personal-portfolio",
    },
  },
};
