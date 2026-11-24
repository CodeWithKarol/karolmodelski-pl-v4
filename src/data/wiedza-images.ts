import type { ImageMetadata } from "astro"
import odCzegoZaczac from "@/assets/images/wiedza/od-czego-zaczac.webp"
import ileKosztuje from "@/assets/images/wiedza/ile-kosztuje-aplikacja.webp"
import jakZabezpieczyc from "@/assets/images/wiedza/jak-zabezpieczyc-pomysl.webp"
import freelancerPartner from "@/assets/images/wiedza/freelancer-software-house-partner.webp"
import jakSprawdzic from "@/assets/images/wiedza/jak-sprawdzic-pomysl.webp"
import czyMoznaZa from "@/assets/images/wiedza/czy-mozna-za-10-20-tys-zl.webp"
import ileTrwa from "@/assets/images/wiedza/ile-trwa-aplikacja.webp"
import jakStworzycBezProgramowania from "@/assets/images/wiedza/jak-stworzyc-bez-programowania.webp"
import prototypMvp from "@/assets/images/wiedza/prototyp-mvp-gotowa-aplikacja.webp"
import jakPrzygotowacDoRozmowy from "@/assets/images/wiedza/jak-przygotowac-do-rozmowy.webp"
import coPoUruchomieniu from "@/assets/images/wiedza/co-po-uruchomieniu.webp"

interface WiedzaImage {
  src: ImageMetadata
  alt: string
}

/**
 * Miniatury artykułów „Wiedza”. Klucz to slug wpisu w kolekcji,
 * dzięki czemu ten sam obraz można użyć w kartach i na stronie artykułu.
 */
export const wiedzaImages: Record<string, WiedzaImage> = {
  "masz-pomysl-na-aplikacje-od-czego-zaczac": {
    src: odCzegoZaczac,
    alt: "Szkice interfejsu i schemat działania aplikacji na biurku",
  },
  "ile-kosztuje-stworzenie-aplikacji-2026": {
    src: ileKosztuje,
    alt: "Kalkulator i notatki na biurku",
  },
  "jak-zabezpieczyc-pomysl-na-aplikacje": {
    src: jakZabezpieczyc,
    alt: "Czarna teczka z dokumentami na biurku",
  },
  "freelancer-software-house-czy-partner-technologiczny": {
    src: freelancerPartner,
    alt: "Trzy grupy minimalistycznych klocków symbolizujące modele współpracy",
  },
  "jak-sprawdzic-pomysl-na-aplikacje": {
    src: jakSprawdzic,
    alt: "Szkic interfejsu na papierze i lupa — sprawdzanie pomysłu",
  },
  "czy-mozna-stworzyc-aplikacje-za-10-20-tys-zl": {
    src: czyMoznaZa,
    alt: "Szkic procesu z zaznaczonymi krokami mieszczącymi się w budżecie",
  },
  "ile-trwa-stworzenie-aplikacji": {
    src: ileTrwa,
    alt: "Zegar i oś czasu na minimalistycznym biurku",
  },
  "jak-stworzyc-aplikacje-bez-programowania": {
    src: jakStworzycBezProgramowania,
    alt: "Ceramiczne klocki ułożone w ramę aplikacji — budowanie bez kodu",
  },
  "prototyp-mvp-czy-gotowa-aplikacja": {
    src: prototypMvp,
    alt: "Od szkicu interfejsu przez makietę do gotowej gry Numerabble",
  },
  "jak-przygotowac-pomysl-na-aplikacje-do-rozmowy": {
    src: jakPrzygotowacDoRozmowy,
    alt: "Otwarty notatnik z listą pytań przed rozmową",
  },
  "co-po-stworzeniu-aplikacji-koszty-utrzymania": {
    src: coPoUruchomieniu,
    alt: "Klocki i szkic rozbudowy architektury produktu",
  },
}

export function wiedzaImageFor(id: string) {
  return wiedzaImages[id]
}
