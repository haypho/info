import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AppHeader } from "@/features/app-header/app-header";
import { House } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
          <BreadcrumbPage>About</BreadcrumbPage>
        </BreadcrumbItem>
      </AppHeader>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold">About Me</h1>
          <p>
            Hey, I&apos;m Hayden! I&apos;m a Full-Stack Web Developer by trade,
            but I&apos;m always up for learning something new!
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Learning Languages</h1>
          <p>
            You might assume that I mean programming languages, but I&apos;m
            currently on a journey to learn French 🇫🇷
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Thanks!</h1>
          <p>
            If you&apos;ve made it this far, I would like to personally thank
            you for taking the time to look over my portfolio.
          </p>
          <p>
            It is extremely unlikely you made it this far on purpose, but I
            appreciate the happy little accidents 😊
          </p>
        </div>
      </div>
    </>
  );
}
