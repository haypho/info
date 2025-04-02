import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/constants";
import { AppHeader } from "@/features/app-header/app-header";
import { ProjectDetails } from "@/features/projects/project-details";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SCREENSHOTS = [
  {
    src: "/info/imageography-1.png",
    alt: "Imageography map screen",
  },
  {
    src: "/info/imageography-2.png",
    alt: "Imageography new map marker dialog",
  },
  {
    src: "/info/imageography-3.png",
    alt: "Imageography map marker list screen",
  },
  {
    src: "/info/imageography-4.png",
    alt: "Imageography edit map marker screen",
  },
];

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
          <BreadcrumbPage>Imageography</BreadcrumbPage>
        </BreadcrumbItem>
      </AppHeader>
      <div className="flex flex-1 flex-col p-4">
        <ProjectDetails project={project} />
        <Carousel className="self-center m-12 w-full max-w-2/3">
          <CarouselContent>
            {SCREENSHOTS.map(({ src, alt }) => (
              <CarouselItem
                key={src}
                className="relative md:basis-1/2 lg:basis-1/3 aspect-[9/16]"
              >
                <Image className="p-4 rounded-3xl" fill alt={alt} src={src} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
