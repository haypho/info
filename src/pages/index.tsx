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
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
