import type { ImageMetadata } from "astro"
import heroImage from "@/assets/images/numerabble-hero.webp"
import { numerabbleTestimonial } from "@/data/testimonials"
import type { Testimonial } from "@/data/testimonials"

export interface ProjectFact {
  label: string
  value: string
}

export interface NarrativeItem {
  label: string
  text: string
}

export interface ProjectMedia {
  video: string
  poster: string
  ariaLabel: string
  caption: string
  note: string
}

export interface PortfolioProject {
  slug: string
  name: string
  type: string
  summary: string
  facts: ProjectFact[]
  narrative: NarrativeItem[]
  deliverables: string[]
  hero: {
    src: ImageMetadata
    alt: string
    caption: string
  }
  media?: ProjectMedia
  testimonial?: Testimonial
  caseStudyHref: string
}

export const numerabble: PortfolioProject = {
  slug: "numerabble",
  name: "Numerabble",
  type: "Strategiczna gra matematyczna w przeglądarce",
  summary:
    "Pomysł rozwijany od prawie 30 lat. Pierwsza grywalna wersja powstała w cztery tygodnie zaplanowanych prac.",
  facts: [
    { label: "Projekt", value: "Numerabble" },
    {
      label: "Typ produktu",
      value: "Strategiczna gra matematyczna",
    },
    { label: "Platforma", value: "Przeglądarka — komputer i telefon" },
    { label: "Zakres", value: "Pierwsza grywalna wersja" },
    { label: "Czas prac", value: "4 tygodnie nad pierwszą wersją" },
    { label: "Rezultat", value: "Działająca rozgrywka i strona produktu" },
  ],
  narrative: [
    {
      label: "Wyzwanie",
      text: "Przenieść wieloletni pomysł na grę matematyczną do świata aplikacji.",
    },
    {
      label: "Decyzja",
      text: "Zacząć od rozgrywki z komputerem w przeglądarce, zamiast od razu budować wszystkie funkcje.",
    },
    {
      label: "Rezultat",
      text: "Pierwsza działająca wersja do rozgrywki, testów i dalszego rozwoju.",
    },
  ],
  deliverables: [
    "Działająca gra w przeglądarce",
    "Rozgrywka z przeciwnikiem komputerowym",
    "Sprawdzanie zasad i naliczanie punktów",
    "Projekt wyglądu i obsługi",
    "Strona produktu",
    "Narzędzia do obserwowania zachowań graczy",
  ],
  hero: {
    src: heroImage,
    alt: "Numerabble na laptopie i telefonie — strona produktu oraz rozgrywka z planszą i żetonami",
    caption:
      "Numerabble — strona produktu i rozgrywka na komputerze oraz telefonie.",
  },
  media: {
    video: "/showcase/numerabble-gameplay.webm",
    poster: "/showcase/numerabble-gameplay.webp",
    ariaLabel:
      "Fragment rozgrywki Numerabble — plansza, ułożone działanie i panel z żetonami",
    caption:
      "Fragment rzeczywistej rozgrywki — plansza, ułożone działanie i panel z żetonami.",
    note: "Nagranie bez dźwięku.",
  },
  testimonial: numerabbleTestimonial,
  caseStudyHref: "/realizacje/numerabble/",
}
