export type Highlight = {
  value: string;
  label: string;
  featured?: boolean;
};

export const HIGHLIGHTS: Highlight[] = [
  {
    value: "1.8B+",
    label: "monthly Groups users got Nicknames, which I built at Meta",
  },
  {
    value: "80K",
    label:
      "monthly users on SoFi's SMB lending funnel, growing 100% month over month",
  },
  {
    value: "re:Invent",
    label:
      "2023: QuickSight Q and Data Stories, frontends I built at AWS, launched",
  },
  {
    value: "7+ yrs",
    label: "across fintech, social, BI and HR tech",
    featured: true,
  },
];

export const SHIPPING_STEPS = [
  "Design doc",
  "Build",
  "Test",
  "Ship",
  "Watch people use it",
];

export const ALONG_THE_WAY = [
  "write the design docs that set direction",
  "bring Playwright tests and CI/CD to new teams",
  "teach teammates Claude Code and give company talks on new releases",
];

export type Job = {
  company: string;
  role: string;
  dates: string;
  summary: string;
};

export const JOBS: Job[] = [
  {
    company: "SoFi",
    role: "Senior Frontend Engineer",
    dates: "2025 to now",
    summary:
      "Built the frontend for a zero-to-one small-business lending funnel, including the loan application and Plaid bank linking, and led my team onto AI-assisted development.",
  },
  {
    company: "Meta",
    role: "Software Engineer",
    dates: "2024 to 2025",
    summary:
      "Built Nicknames for Facebook Groups on iOS and web: a persistent per-group pseudonym, launched globally and covered by TechCrunch.",
  },
  {
    company: "Amazon Web Services",
    role: "Front-End Engineer II",
    dates: "2022 to 2024",
    summary:
      "Built the frontends for QuickSight Q and Data Stories, generative BI features launched at re:Invent 2023. Promoted SDE I → II.",
  },
  {
    company: "Paylocity",
    role: "Software Engineer",
    dates: "2020 to 2022",
    summary:
      "Full-stack features for Community, a workplace social feed, and Rewards & Recognition. Promoted from Associate.",
  },
  {
    company: "Clearwater Analytics",
    role: "Software Engineer",
    dates: "2019 to 2020",
    summary:
      "Started my career on the stock-ticker pricing ingestion team, owning core ETL pipelines.",
  },
];

export const FITNESS_APP_STACK = [
  "Expo",
  "SST v3",
  "Lambda",
  "Aurora Postgres",
  "Drizzle",
  "Valkey",
  "Zod",
];

export type SideProject = {
  name: string;
  description: string;
  href: string;
};

export const SIDE_PROJECTS: SideProject[] = [
  {
    name: "Imageography",
    description:
      "My first app, shipped to both stores in 2019. It taught me that users expect sync, and that five-syllable names don't spread.",
    href: "https://github.com/haypho/imageography",
  },
  {
    name: "react-native-web-cache",
    description:
      "An LRU cache for React Native and web. My first package on npm.",
    href: "https://www.npmjs.com/package/react-native-web-cache",
  },
  {
    name: "This site",
    description:
      "A living document since 2020, rebuilt more times than I'll admit.",
    href: "https://github.com/haypho/info",
  },
];

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export type SpokenLanguage = {
  name: string;
  level: number;
  native?: boolean;
};

export const SPOKEN_LANGUAGES: SpokenLanguage[] = [
  { name: "English", level: 6, native: true },
  { name: "French", level: 2 },
];
