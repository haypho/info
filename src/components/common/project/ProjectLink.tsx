import { Link, LinkProps } from "@mui/material";
import React, { FC, ReactNode } from "react";

export type ProjectLinkProps = LinkProps & {
  href?: string;
  icon: ReactNode;
};

export const ProjectLink: FC<ProjectLinkProps> = ({ href, icon, ...props }) =>
  !href ? null : (
    <Link {...props} href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </Link>
  );
