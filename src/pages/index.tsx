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
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h1 className="text-3xl font-bold">Full-Stack Web Developer</h1>
          <p>Specializing in Frontend Engineering</p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">TypeScript Enthusiast</h1>
          <p>
            I wasn&apos;t always a TypeScript enthusiast. I actually didn&apos;t
            even get my start in web technologies. When I first started learning
            programming, I was learning Java. As I experienced different
            technologies, I learned that I really enjoyed Frontend Engineering.
            This is where the love for JavaScript began. However, I will always
            have a special place for Java.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            React, React Native, and More React
          </h1>
          <p>
            My first experience with frontend frameworks was Angular. As I
            learned more about the frontend ecosystem, I started working with
            Vue and React as well. I now have 5+ years of experience working
            with React. I also managed to launch my own app using React Native
            (and Expo by association). With the large adoption of these
            frameworks, I imagine I will accumulate a few more years of
            experience with them 😅
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Can Exit Vim</h1>
          <p>
            All great developers know how to exit Vim... But the even better
            ones know how to use NeoVim 👀
          </p>
        </div>
      </div>
    </>
  );
}
