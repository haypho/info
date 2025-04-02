import { Detail } from "@/constants";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ProjectDetailProps = Detail & {
  heading?: number;
  children?: ReactNode;
};

export function ProjectDetail({ heading = 2, ...props }: ProjectDetailProps) {
  return (
    <>
      <h2
        className={cn("font-bold", {
          "text-3xl": heading === 1,
          "text-2xl": heading === 2,
          "text-xl": heading === 3,
          "text-lg": heading === 4,
          "text-md": heading === 5,
          "text-sm": heading === 6,
        })}
      >
        {props.headline}
      </h2>
      {typeof props.body === "string" ? (
        <p>{props.body}</p>
      ) : (
        props.body.map((detail, index) => (
          <ProjectDetail key={index} {...detail} heading={heading + 1} />
        ))
      )}
      {props.children}
    </>
  );
}
