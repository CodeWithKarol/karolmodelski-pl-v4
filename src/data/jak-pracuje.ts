export interface ProcessTimelineStep {
  label: string
  title: string
  description: string
  you: string
  me: string
  effect: string
  checkpoint?: boolean
}

export const processTimeline: ProcessTimelineStep[] = [
  {
    label: "Przed startem",
    title: "Ustalamy zakres i warunki",
    description:
      "Ustalamy najważniejszą funkcję, zakres, cenę i termin. Podpisujemy umowę, a prace startują po wpłacie pierwszej części i skompletowaniu materiałów oraz dostępów.",
    you: "Opowiadasz o pomyśle i wybierasz priorytety. Podpisujesz umowę i wnosisz pierwszą płatność.",
    me: "Prowadzę ustalenia, przygotowuję plan pierwszej wersji i organizuję start prac.",
    effect: "Uzgodniony zakres, cena, termin, kryteria odbioru i umowa.",
  },
  {
    label: "Tydzień 1",
    title: "Projekt kluczowych ekranów",
    description:
      "Przygotowuję projekt najważniejszych ekranów i sposób obsługi. To pierwszy punkt kontrolny — oceniasz kierunek, zanim zaczniemy programować te ekrany.",
    you: "Oceniasz projekt i decydujesz o wyglądzie oraz zasadach działania.",
    me: "Organizuję pracę projektową, pilnuję zakresu i doradzam rozwiązania.",
    effect: "Zaakceptowany projekt kluczowych ekranów.",
    checkpoint: true,
  },
  {
    label: "Tydzień 2",
    title: "Działa najważniejsza funkcja",
    description:
      "Budujemy główną część aplikacji. To drugi punkt kontrolny — pokazuję działającą najważniejszą funkcję i sprawdzamy ją na konkretnych scenariuszach.",
    you: "Odpowiadasz na pytania i oceniasz pokazywane efekty.",
    me: "Koordynuję zespół, rozwiązuję kwestie techniczne i pokazuję postępy.",
    effect: "Działająca najważniejsza funkcja aplikacji.",
    checkpoint: true,
  },
  {
    label: "Tygodnie 3–4",
    title: "Pierwsza działająca wersja",
    description:
      "Kończymy uzgodnione funkcje, uruchamiamy aplikację w przeglądarce i przygotowujemy stronę produktu, analitykę oraz plan testów. Trzeci punkt kontrolny wypada na koniec tygodnia 4.",
    you: "Sprawdzasz działanie najważniejszych funkcji.",
    me: "Doprowadzam pierwszą wersję do testów i pokazuję jej działanie.",
    effect: "Pierwsza wersja gotowa do testów i pokazania użytkownikom.",
    checkpoint: true,
  },
  {
    label: "Zwykle tygodnie 5–8",
    title: "Odbiór, poprawki i przekazanie",
    description:
      "Sprawdzasz produkt według kryteriów odbioru. Masz 10 dni roboczych na zgłoszenie niezgodności; wymagane poprawki wykonujemy zgodnie z umową. Po rozliczeniu przekazuję kod, dostępy i prawa.",
    you: "Testujesz produkt i zgłaszasz niezgodności w uzgodnionym zakresie.",
    me: "Wprowadzam poprawki i przekazuję produkt oraz podsumowanie kolejnych kroków.",
    effect: "Odebrany produkt, kod źródłowy, dostępy, prawa i kolejne kroki.",
  },
]

export interface ProcessFaqItem {
  question: string
  answer: string
}

export const processFaq: ProcessFaqItem[] = [
  {
    question: "Czy muszę mieć gotowy projekt aplikacji?",
    answer:
      "Nie. Wystarczy pomysł — pomogę wybrać najważniejszą funkcję i zakres pierwszej wersji.",
  },
  {
    question: "Kiedy potrzebna jest osobna analiza pomysłu?",
    answer:
      "Gdy masz rozbudowany pomysł, kilka możliwych kierunków albo potrzebujesz pisemnego planu przed decyzją o realizacji. Analiza jest opcjonalna i płatna. Przy standardowym pakiecie podstawowe ustalenie zakresu jest już częścią współpracy.",
  },
  {
    question: "Czy będę rozmawiał bezpośrednio z Tobą?",
    answer:
      "Tak. Prowadzę ustalenia, koordynuję realizację i omawiam z Tobą postępy. W pracach technicznych mogą uczestniczyć specjaliści.",
  },
  {
    question: "Czy zobaczę produkt przed zakończeniem prac?",
    answer:
      "Tak. Mamy trzy punkty kontrolne: po tygodniu 1 projekt ekranów, po tygodniu 2 działającą najważniejszą funkcję, a na koniec tygodnia 4 wersję do testów. Między nimi prace trwają dalej, a uwagi możesz zgłaszać na bieżąco.",
  },
  {
    question:
      "Czy po czterech tygodniach aplikacja będzie już całkowicie gotowa?",
    answer:
      "Po czterech tygodniach otrzymujesz pierwszą działającą wersję w uzgodnionym zakresie. Odbiór i poprawki zajmują dodatkowy czas; cały proces trwa zwykle 6–8 tygodni.",
  },
  {
    question: "Czy mogę zmieniać funkcje w trakcie realizacji?",
    answer:
      "Możemy omawiać nowe pomysły. Większe zmiany zakresu wymagają osobnego ustalenia kosztu, terminu i wpływu na umowę.",
  },
  {
    question: "Czy po zakończeniu projektu mogę współpracować z kimś innym?",
    answer:
      "Tak. Po zakończeniu i rozliczeniu otrzymujesz kod źródłowy oraz prawa w zakresie określonym w umowie. Zasady korzystania z komponentów zewnętrznych ustalamy osobno.",
  },
  {
    question: "Czy muszę od razu zamawiać dalszy rozwój?",
    answer:
      "Nie. Możesz zacząć od pierwszej wersji, przetestować ją i dopiero później zdecydować, co dalej.",
  },
  {
    question:
      "Czy po zakończeniu projektu będę musiał płacić za utrzymanie aplikacji?",
    answer:
      "To zależy od hostingu, serwerów i usług zewnętrznych. Koszty omawiamy przed uruchomieniem. Stała opieka techniczna jest opcjonalna i wyceniana osobno.",
  },
]
