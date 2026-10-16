import { FITNESS_APP_STACK, SIDE_PROJECTS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import imageographyMap from "../../../public/imageography-1.png";
import { Container } from "./container";

function PipelineArrow() {
  return (
    <ArrowRight
      className="size-5 rotate-90 text-mist-muted md:rotate-0"
      aria-hidden="true"
    />
  );
}

export function Projects() {
  return (
    <section id="projects">
      <Container className="flex flex-col gap-4 py-14 md:gap-8 md:py-26">
        <h2 className="font-display mb-1.5 text-[32px] leading-[1.05] font-extrabold tracking-[-0.03em] md:mb-0 md:text-[52px]">
          Things I make on my own time.
        </h2>

        <article className="flex flex-col gap-6 rounded-[22px] bg-ink p-6 text-sage md:gap-7 md:rounded-[28px] md:p-10">
          <div className="flex flex-wrap justify-between gap-6 md:gap-8">
            <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-4">
              <span className="text-sm font-semibold text-honey">
                Solo full-stack build · in progress
              </span>
              <h3 className="font-display text-[28px] leading-[1.05] font-extrabold tracking-[-0.03em] md:text-[44px]">
                A social fitness app
              </h3>
              <p className="text-mist">
                Every layer is mine: an Expo / React Native client on an SST
                serverless backend, type-safe end to end with Zod contracts, and
                Apple and Google sign-in through Cognito.
              </p>
            </div>
            <ul
              aria-label="Tech stack"
              className="flex min-w-0 flex-[0_1_300px] flex-wrap content-start gap-2"
            >
              {FITNESS_APP_STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-forest-line px-3 py-1.5 text-[13px]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <figure className="m-0 flex flex-col gap-4 rounded-[20px] bg-forest p-5 md:p-7">
            <figcaption className="text-sm text-mist-muted">
              The push notification pipeline I designed
            </figcaption>
            <div className="flex flex-col items-start gap-2.5 md:flex-row md:flex-wrap md:items-center">
              <span className="rounded-[14px] bg-sage px-4 py-3 text-[15px] font-semibold text-ink">
                EventBridge
              </span>
              <PipelineArrow />
              <span className="rounded-[14px] bg-sage px-4 py-3 text-[15px] font-semibold text-ink">
                Lambda fan-out
              </span>
              <PipelineArrow />
              <span className="inline-flex flex-col gap-1.5">
                <span className="rounded-[10px] bg-honey px-3.5 py-2 text-sm font-semibold text-ink">
                  SQS · critical
                </span>
                <span className="rounded-[10px] bg-sage px-3.5 py-2 text-sm font-semibold text-ink">
                  SQS · default
                </span>
              </span>
              <PipelineArrow />
              <span className="rounded-[14px] bg-teal px-4 py-3 text-[15px] font-semibold text-white">
                Expo push
              </span>
            </div>
            <p className="text-sm text-mist">
              Plus Valkey-backed cooldowns and presence, batching, and receipt
              sweeps that keep APNs tokens healthy.
            </p>
          </figure>
        </article>

        <ul className="grid gap-3.5 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-5">
          {SIDE_PROJECTS.map((project, index) => (
            <li key={project.name} className="flex">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-5 rounded-[22px] bg-white p-5 text-ink hover:shadow-[0_6px_20px_rgba(29,38,33,0.08)] md:p-7"
              >
                {index === 0 && (
                  <Image
                    src={imageographyMap}
                    alt="Imageography map screen"
                    className="w-16 flex-none rounded-xl md:w-24"
                  />
                )}
                <span className="flex flex-col gap-1.5">
                  <span className="font-display text-lg font-bold md:text-[22px]">
                    {project.name}
                  </span>
                  <span className="text-[15px] text-ink-soft">
                    {project.description}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
