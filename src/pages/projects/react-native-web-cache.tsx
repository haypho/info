import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PROJECTS } from "@/constants";
import { AppHeader } from "@/features/app-header/app-header";
import { ProjectDetails } from "@/features/projects/project-details";
import { House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProjectsImageographyPage() {
  const pathname = usePathname();
  const project = PROJECTS.find((p) => p.href === pathname);
  return (
    <>
      <AppHeader>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <House className="size-4" />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink asChild>
            <Link href="/projects">Projects</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>React-Native Web Cache</BreadcrumbPage>
        </BreadcrumbItem>
      </AppHeader>
      <div className="flex flex-1 flex-col p-4">
        <ProjectDetails project={project} />
      </div>
    </>
  );
}
