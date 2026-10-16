import { ASSET_PDF_RESUME, BASE_PATH } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import profile from "../../../public/profile.jpg";
import { Container } from "./container";

export function Hero() {
  return (
    <section id="top">
      <Container className="flex flex-wrap items-center gap-10 pt-6 pb-12 md:gap-14 md:pt-14 md:pb-[72px]">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-6 md:gap-7">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-sage-line bg-white px-3.5 py-1.5 text-sm font-medium">
            <span className="size-2 rounded-full bg-leaf" aria-hidden="true" />
            Senior Frontend Engineer at SoFi · Seattle
          </span>
          <h1 className="font-display text-[46px] leading-none font-extrabold tracking-[-0.04em] md:text-7xl lg:text-[84px] lg:leading-[0.98]">
            Hi, I&apos;m Hayden.
            <br />I build things people{" "}
            <span className="highlight">enjoy using.</span>
          </h1>
          <p className="max-w-[580px] text-[17px] leading-relaxed text-ink-soft md:text-xl">
            I care about the details that make an interface feel right, and
            about the whole trip from &ldquo;what if&hellip;&rdquo; to shipped.
            Seven-plus years in, I&apos;m happiest in React and TypeScript, and
            at home anywhere else in the stack the product needs me.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-teal px-6 font-semibold text-white hover:bg-teal-darker"
            >
              See what I&apos;ve built
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`${BASE_PATH}${ASSET_PDF_RESUME}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-[1.5px] border-ink px-6 font-semibold text-ink hover:bg-white"
            >
              Résumé (PDF)
            </a>
          </div>
        </div>
        <figure className="relative m-0 w-full min-w-[280px] flex-[0_1_420px]">
          <Image
            src={profile}
            alt="Hayden in sunglasses in front of the Louvre pyramid"
            priority
            className="aspect-square w-full rounded-3xl object-cover md:aspect-[4/5] md:rotate-[1.5deg] md:rounded-[28px]"
          />
          <figcaption className="absolute bottom-3 left-3 flex -rotate-3 flex-col gap-0.5 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_30px_rgba(29,38,33,0.14)] md:bottom-9 md:-left-6">
            <span className="font-display text-lg font-bold">Bonjour !</span>
            <span className="text-[13px] text-ink-muted">
              At the Louvre, Paris
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
