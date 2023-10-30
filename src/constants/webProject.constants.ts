import { ProjectLink } from "./project.constants";

export type WebProject = {
  name: string;
  description?: string;
  src: string;
  gitHub: ProjectLink;
};

export const WEB_PROJECTS: Record<string, WebProject> = {
  prefixTree: {
    name: "Prefix Tree Auto-Complete",
    src: "https://hphothong.github.io/prefix-tree-autocomplete",
    gitHub: {
      url: "https://github.com/hphothong/prefix-tree-autocomplete",
    },
  },
};
