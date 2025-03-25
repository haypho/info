import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppHeaderBreadcrumbs } from "@/features/app-header/app-header";
import Link from "next/link";

export default function ProjectsImageographyPage() {
  return (
    <>
      <AppHeaderBreadcrumbs>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink asChild>
            <Link href="/projects">Projects</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>React-Native Web Cache</BreadcrumbPage>
        </BreadcrumbItem>
      </AppHeaderBreadcrumbs>
    </>
  );
}
