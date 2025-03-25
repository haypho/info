import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ASSET_PDF_RESUME,
  PERSONAL_EMAIL,
  PERSONAL_EMAIL_URL,
  PERSONAL_GITHUB_URL,
  PERSONAL_LINKEDIN_URL,
} from "@/constants";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileUser, Mail } from "lucide-react";
import Link from "next/link";

export function AppSidebarFooter() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={PERSONAL_GITHUB_URL} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={PERSONAL_LINKEDIN_URL} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem></SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href={ASSET_PDF_RESUME} target="_blank">
            <FileUser />
            <span>Résumé</span>
          </Link>
        </SidebarMenuButton>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href={PERSONAL_EMAIL_URL} target="_blank">
              <Mail />
              <span>{PERSONAL_EMAIL}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
