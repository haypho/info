import { BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { AppHeader } from "@/features/app-header/app-header";

export default function HomePage() {
  return (
    <>
      <AppHeader>
        <BreadcrumbItem>
          <BreadcrumbPage>Home</BreadcrumbPage>
        </BreadcrumbItem>
      </AppHeader>
      <div className="flex flex-1 flex-col p-4">
        <h1 className="text-3xl font-bold">Full-Stack Web Developer</h1>
        <p>Specializing in Frontend Engineering</p>
      </div>
    </>
  );
}
