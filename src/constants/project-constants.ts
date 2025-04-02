export type ProjectLink = {
  url: string;
};

export type Detail = {
  headline: string;
  body: Detail[] | string;
};

export type Project = {
  title: string;
  description: string;
  details: Detail[];
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
    techStack: ["React-Native", "Expo", "Redux", "TypeScript", "Firebase"],
    href: "/projects/imageography",
    github: "https://github.com/haypho/imageography",
    details: [
      {
        headline: "Overview",
        body: `
          My first mobile app built on Expo (i.e., React Native) and Firebase that allows
          users to store potential photoshoot and modeling locations on a map.
          The app was originally published to the Apple App Store and Google Play Store.
          It has since been removed as I work towards launching a new app!
        `,
      },
      {
        headline: "Learnings",
        body: [
          {
            headline: "Learning #1: A good app name makes all the difference",
            body: `
              Creating an app name gives you the chance to be creative and have fun
              discussions with friends and family. The app name "Imageography" came
              from a play on words (i.e., "image" and "geography"). Although I thought
              the app name was pretty clever, I quickly realized how bad the name actually
              was when trying to share it with potential users. Five sylables, difficult to
              spell, too long to search in the app store, too similar to other "image" based
              apps, etc. The list keeps going for this mistake. I probably should have
              realized this issue sooner in conversations, but most of my time was spent
              actually building the thing!
            `,
          },
          {
            headline: "Learning #2: Online vs Offline Apps",
            body: `
              The plan from the beginning was to allow the users to store locations on their
              devices. I compromised with online capabilities to reduce cost initially, but
              little did I know that this would be the downfall of the app almost instantly.
              In today's world, everything is online. I know this, you know this, and the
              users definitely expected this. When I lauched V1 of the app, the very first
              question every user had for me was "How do I share this location with my friends?"
              with the second one being "How do I get these markers on my other device?". The
              expectation for online presence was overwhelming... I attempted to pivot to an
              online version of the app via Firebase, but I was working on this project during
              the nights/weekends. Each day I worked on a new online feature, I could see the
              users leaving the app. This ultimately led me to remove the app from the app store.
            `,
          },
        ],
      },
    ],
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
    details: [],
  },
  {
    title: "Portfolio",
    description:
      "This website! A living document for my projects and expertise.",
    techStack: ["NextJS", "React", "Shadcn", "TailwindCSS", "TypeScript"],
    href: "/projects/portfolio",
    github: "https://github.com/haypho/info",
    details: [],
  },
];
