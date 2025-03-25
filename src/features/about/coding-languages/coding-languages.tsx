import "@xyflow/react/dist/style.css";

import { ProOptions, ReactFlow } from "@xyflow/react";
import { CodingLanguageNode } from "./coding-language-node";

const REACT_FLOW_PRO_OPTIONS: ProOptions = {
  hideAttribution: true,
};

const REACT_FLOW_NODE_TYPES = {
  [CodingLanguageNode.name]: CodingLanguageNode,
};

const REACT_FLOW_NODES = [
  {
    id: "me",
    type: CodingLanguageNode.name,
    position: { x: 0, y: 100 },
    data: { label: "Me" },
  },
  {
    id: "js",
    type: CodingLanguageNode.name,
    position: { x: 0, y: 0 },
    data: { label: "JavaScript" },
  },
  {
    id: "ts",
    type: CodingLanguageNode.name,
    position: { x: 0, y: 200 },
    data: {
      label: "TypeScript",
    },
  },
];

const REACT_FLOW_EDGES = [{ id: "me-js", source: "me", target: "js" }];

export function CodingLanguages() {
  return (
    <ReactFlow
      fitView={true}
      proOptions={REACT_FLOW_PRO_OPTIONS}
      nodeTypes={REACT_FLOW_NODE_TYPES}
      nodes={REACT_FLOW_NODES}
      edges={REACT_FLOW_EDGES}
    />
  );
}
