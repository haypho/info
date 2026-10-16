import {
  PERSONAL_EMAIL,
  PERSONAL_EMAIL_URL,
  PERSONAL_GITHUB_URL,
  PERSONAL_LINKEDIN_URL,
} from "@/constants";
import { Container } from "./container";

const OUTLINE_LINK =
  "inline-flex min-h-[52px] items-center justify-center rounded-full border-[1.5px] border-ink px-6 font-semibold text-ink hover:bg-white";

export function Contact() {
  return (
    <footer id="contact">
      <Container className="flex flex-col items-start gap-6 pt-14 pb-10 md:gap-8 md:pt-26 md:pb-16">
        <h2 className="font-display max-w-[900px] text-[42px] leading-none font-extrabold tracking-[-0.04em] md:text-[72px]">
          Let&apos;s build something{" "}
          <span className="highlight">people love.</span>
        </h2>
        <p className="max-w-[620px] text-ink-soft md:text-xl">
          Always happy to talk frontend, zero-to-one products, or AI-assisted
          workflows.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <a
            href={PERSONAL_EMAIL_URL}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-teal px-6 font-semibold text-white hover:bg-teal-darker"
          >
            {PERSONAL_EMAIL}
          </a>
          <a
            href={PERSONAL_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className={OUTLINE_LINK}
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className={OUTLINE_LINK}
          >
            GitHub
          </a>
        </div>
        <p className="pt-6 text-sm text-ink-muted md:pt-10">
          Made in Seattle. And yes, I can exit Vim.
        </p>
      </Container>
    </footer>
  );
}
