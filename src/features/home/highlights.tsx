import { HIGHLIGHTS } from "@/constants";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Highlights() {
  return (
    <section aria-label="Highlights">
      <Container className="pb-14 md:pb-26">
        <ul className="grid grid-cols-2 gap-2.5 md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] md:gap-4">
          {HIGHLIGHTS.map((highlight) => (
            <li
              key={highlight.value}
              className={cn(
                "flex flex-col gap-1.5 rounded-[18px] p-4 md:rounded-[22px] md:p-6",
                highlight.featured ? "bg-ink text-sage" : "bg-white",
              )}
            >
              <span
                className={cn(
                  "font-display text-[28px] leading-tight font-extrabold tracking-tight md:text-[40px]",
                  highlight.featured && "text-honey",
                )}
              >
                {highlight.value}
              </span>
              <span
                className={cn(
                  "text-[13px] leading-snug md:text-[15px]",
                  highlight.featured ? "text-mist" : "text-ink-soft",
                )}
              >
                {highlight.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
