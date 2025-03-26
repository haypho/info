import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  CodeXml,
  FolderGit2,
  Info,
  LucideIcon,
  MapPinCheck,
  SquareStack,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

type Item = {
  title: string;
  icon: LucideIcon;
  href: string;
  items?: Item[];
};

const items: Item[] = [
  {
    title: "Projects",
    icon: FolderGit2,
    href: "/projects",
    items: [
      {
        title: "Imageography",
        icon: MapPinCheck,
        href: "/projects/imageography",
      },
      {
        title: "Web Cache",
        icon: SquareStack,
        href: "/projects/react-native-web-cache",
      },
      {
        title: "Portfolio",
        icon: UserCircle,
        href: "/projects/portfolio",
      },
    ],
  },
  {
    title: "About",
    icon: Info,
    href: "/about",
    items: [
      {
        title: "Coding Languages",
        icon: CodeXml,
        href: "/about/coding-languages",
      },
    ],
  },
];

export const AppSidebarNavigation = () => {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
              {item.items?.length && (
                <SidebarMenuSub>
                  {item.items.map((sub) => (
                    <SidebarMenuSubItem key={sub.href}>
                      <SidebarMenuSubButton asChild>
                        <Link href={sub.href}>
                          <sub.icon />
                          <span>{sub.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
};
