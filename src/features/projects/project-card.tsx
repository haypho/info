import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/constants";
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, LinkIcon } from "lucide-react";
import Link from "next/link";

export type ProjectCardProps = React.ComponentProps<typeof Card> & {
  project: Project;
};

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>{props.project.title}</CardTitle>
        <CardDescription>{props.project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1"></CardContent>
      <CardFooter className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          {props.project.github && (
            <Button asChild variant="outline">
              <Link href={props.project.github} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Button>
          )}
          {props.project.npm && (
            <Button asChild variant="outline">
              <Link href={props.project.npm} target="_blank">
                <FontAwesomeIcon icon={faNpm} />
              </Link>
            </Button>
          )}
        </div>
        <Button asChild>
          <Link href={props.project.href}>
            <span>See More</span>
            <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
