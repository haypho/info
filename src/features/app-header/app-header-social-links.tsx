import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ASSET_PDF_RESUME,
  PERSONAL_EMAIL,
  PERSONAL_EMAIL_URL,
  PERSONAL_GITHUB_URL,
  PERSONAL_LINKEDIN_URL,
} from "@/constants";
import { cn } from "@/lib/utils";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileUser, Mail } from "lucide-react";
import Link from "next/link";

export function AppHeaderSocialLinks(props: React.HTMLProps<HTMLDivElement>) {
  const { open, isMobile } = useSidebar();

  if (isMobile) {
    return null;
  }

  return (
    <div
      {...props}
      className={cn(
        "flex flex-row items-center gap-2 opacity-100 transition-opacity",
        {
          "opacity-0 pointer-events-none": open,
        },
        props.className,
      )}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild variant="outline" disabled={open}>
            <Link href={PERSONAL_GITHUB_URL} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>GitHub</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild variant="outline" disabled={open}>
            <Link href={PERSONAL_LINKEDIN_URL} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>LinkedIn</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild variant="outline" disabled={open}>
            <Link href={ASSET_PDF_RESUME} target="_blank">
              <FileUser />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Résumé</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild variant="outline" disabled={open}>
            <Link href={PERSONAL_EMAIL_URL} target="_blank">
              <Mail />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{PERSONAL_EMAIL}</TooltipContent>
      </Tooltip>
    </div>
  );
}
