import { Handle, Position } from "@xyflow/react";

export type CodingLanguageNodeProps = {
  data: {
    label: string;
  };
};

export function CodingLanguageNode(props: CodingLanguageNodeProps) {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="shadow bg-background text-foreground rounded-full aspect-square border flex items-center px-2">
        <span>{props.data.label}</span>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}
