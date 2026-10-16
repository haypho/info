import { JOBS } from "@/constants";
import { Container } from "./container";

export function Work() {
  return (
    <section id="work" className="bg-white">
      <Container className="flex flex-wrap gap-8 py-14 md:gap-14 md:py-24">
        <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-4">
          <h2 className="font-display text-[32px] leading-[1.05] font-extrabold tracking-[-0.03em] md:text-[52px]">
            Where I&apos;ve been building.
          </h2>
          <p className="text-ink-muted">
            B.S. Computer Science, Boise State University, 2019.
          </p>
        </div>
        <ol className="flex min-w-0 flex-[2_1_600px] flex-col gap-3.5">
          {JOBS.map((job) => (
            <li
              key={job.company}
              className="flex flex-wrap justify-between gap-x-5 gap-y-2 rounded-[20px] bg-sage px-5 py-5 md:px-7 md:py-6"
            >
              <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-1.5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    {job.company}
                  </h3>
                  <span className="text-[15px] text-ink-muted">{job.role}</span>
                </div>
                <p className="text-[15px] text-ink-soft md:text-base">
                  {job.summary}
                </p>
              </div>
              <span className="order-first text-sm font-semibold whitespace-nowrap text-ink-muted md:order-none">
                {job.dates}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
