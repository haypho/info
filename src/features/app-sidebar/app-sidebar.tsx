import { Sidebar } from "@/components/ui/sidebar";
import { AppSidebarHeader } from "./app-sidebar-header";
import { AppSidebarNavigation } from "./app-sidebar-navigation";
import { AppSidebarFooter } from "./app-sidebar-footer";

export const AppSidebar = (props: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar variant="inset" {...props}>
      <AppSidebarHeader />
      <AppSidebarNavigation />
      <AppSidebarFooter />
    </Sidebar>
  );
};
