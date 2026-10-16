import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "./container";

const NAV_LINKS = [
  { href: "#loves", label: "What I love" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#francais", label: "Français" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Container className="flex min-h-[84px] items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display inline-flex items-center gap-2.5 text-[22px] font-extrabold tracking-tight text-ink"
        >
          <span className="size-3.5 rounded-full bg-teal" aria-hidden="true" />
          hayden
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-1 py-3 text-[15px] font-medium text-ink hover:text-teal-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-[15px] font-semibold text-sage hover:bg-forest"
          >
            Say hello
          </a>
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex size-11 items-center justify-center rounded-full bg-ink text-sage md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="md:hidden">
          <Container className="flex flex-col pb-4">
            {[...NAV_LINKS, { href: "#contact", label: "Say hello" }].map(
              (link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-sage-line py-3 text-lg font-medium text-ink"
                >
                  {link.label}
                </a>
              ),
            )}
          </Container>
        </nav>
      )}
    </header>
  );
}
