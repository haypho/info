import { CEFR_LEVELS, SPOKEN_LANGUAGES } from "@/constants";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Francais() {
  return (
    <section id="francais" lang="fr" className="bg-ink text-sage">
      <Container className="flex flex-wrap items-center gap-10 py-14 md:gap-14 md:py-24">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
          <span lang="en" className="text-sm font-semibold text-honey">
            Off the clock
          </span>
          <h2 className="font-display text-4xl leading-[1.02] font-extrabold tracking-[-0.03em] md:text-[56px]">
            J&apos;apprends le français.
            <br />
            <span className="text-mist-muted">Petit à petit.</span>
          </h2>
          <p lang="en" className="max-w-[520px] text-mist">
            When I&apos;m not writing TypeScript I&apos;m conjugating verbs.
            Learning a language keeps me honest about what it&apos;s like to be
            a beginner. That&apos;s a useful thing to remember when you build
            for people seeing your app for the first time.
          </p>
        </div>
        <figure
          lang="en"
          className="m-0 flex min-w-0 flex-[1_1_420px] flex-col gap-6 rounded-3xl bg-forest p-5 md:p-8"
        >
          <table className="w-full border-separate border-spacing-1.5 text-xs text-mist-muted">
            <caption className="sr-only">
              Language levels on the CEFR scale
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-16 md:w-24">
                  <span className="sr-only">Language</span>
                </th>
                {CEFR_LEVELS.map((level) => (
                  <th key={level} scope="col" className="font-normal">
                    {level}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SPOKEN_LANGUAGES.map((language) => (
                <tr key={language.name}>
                  <th
                    scope="row"
                    className="text-left text-[13px] font-medium text-sage md:text-[15px]"
                  >
                    {language.name}
                  </th>
                  {CEFR_LEVELS.map((level, index) => {
                    const reached = index < language.level;
                    return (
                      <td key={level}>
                        <span
                          className={cn(
                            "block h-2.5 rounded md:h-3.5",
                            reached
                              ? language.native
                                ? "bg-sage"
                                : "bg-honey"
                              : "bg-forest-line",
                          )}
                        />
                        <span className="sr-only">
                          {reached ? "reached" : "not yet"}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <figcaption className="text-sm text-mist-muted">
            CEFR levels · next stop: B1
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
