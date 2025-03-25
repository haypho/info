import { BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { AppHeaderBreadcrumbs } from "@/features/app-header/app-header";
import { Projects } from "@/features/projects/projects";

export default function ProjectsPage() {
  return (
    <>
      <AppHeaderBreadcrumbs>
        <BreadcrumbItem>
          <BreadcrumbPage>Projects</BreadcrumbPage>
        </BreadcrumbItem>
      </AppHeaderBreadcrumbs>
      <Projects />
    </>
  );
}
