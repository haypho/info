import { ALONG_THE_WAY, SHIPPING_STEPS } from "@/constants";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Passions() {
  return (
    <section id="loves">
      <Container className="flex flex-col gap-6 pb-14 md:gap-10 md:pb-26">
        <h2 className="font-display max-w-[760px] text-[32px] leading-[1.05] font-extrabold tracking-[-0.03em] md:text-[52px]">
          Two things I can&apos;t stop doing.
        </h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <article className="flex flex-col gap-4 rounded-[22px] bg-white p-6 md:gap-5 md:rounded-[28px] md:p-9">
            <span className="text-sm font-semibold text-teal">01</span>
            <h3 className="font-display text-2xl leading-tight font-bold tracking-tight md:text-[32px]">
              Sweating the UI details
            </h3>
            <p className="text-ink-soft">
              The parts people touch are the parts I love: a loan application
              that doesn&apos;t feel like paperwork, a bank-linking step that
              just works, a rich-text editor with undo you can trust. At AWS I
              wrote the plan to move Data Stories&apos; editor onto Lexical so
              history would never lose your work.
            </p>
            <div className="mt-2 flex flex-col items-start gap-4 rounded-[18px] bg-sage-soft p-5 md:p-7">
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="inline-flex min-h-11 items-center rounded-xl bg-ink px-5 text-[15px] font-semibold text-white">
                  Link your bank
                </span>
                <span className="inline-flex min-h-11 items-center rounded-xl bg-ink px-5 text-[15px] font-semibold text-white outline-3 outline-offset-3 outline-teal">
                  Link your bank
                </span>
              </div>
              <p className="text-[13px] text-ink-muted">
                default · :focus-visible, 3px ring · ease-out 150ms
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-4 rounded-[22px] bg-ink p-6 text-sage md:gap-5 md:rounded-[28px] md:p-9">
            <span className="text-sm font-semibold text-honey">02</span>
            <h3 className="font-display text-2xl leading-tight font-bold tracking-tight md:text-[32px]">
              Taking ideas all the way to shipped
            </h3>
            <p className="text-mist">
              Zero-to-one is my favorite place to be. I built the frontend for
              SoFi&apos;s brand-new small-business lending funnel, and on my own
              time I&apos;m building a social fitness app end to end: client,
              cloud, push notifications and all.
            </p>
            <ol className="mt-2 flex flex-wrap gap-2.5">
              {SHIPPING_STEPS.map((step, index) => (
                <li
                  key={step}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-[15px]",
                    index === SHIPPING_STEPS.length - 1
                      ? "bg-honey font-semibold text-ink"
                      : "border border-forest-line",
                  )}
                >
                  {step}
                </li>
              ))}
            </ol>
          </article>
        </div>
        <div className="flex flex-col gap-1.5 rounded-[20px] border-[1.5px] border-dashed border-sage-dash px-5 py-4 text-[15px] text-ink-soft md:flex-row md:flex-wrap md:items-center md:gap-x-7 md:px-7 md:py-5">
          <span className="font-semibold text-ink">Along the way I also…</span>
          {ALONG_THE_WAY.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Container>
    </section>
  );
}
