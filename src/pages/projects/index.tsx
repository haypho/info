import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppHeader } from "@/features/app-header/app-header";
import { Projects } from "@/features/projects/projects";
import { House } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
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
        <BreadcrumbItem>
          <BreadcrumbPage>Projects</BreadcrumbPage>
        </BreadcrumbItem>
      </AppHeader>
      <Projects />
    </>
  );
}
