export interface ProcessTimelineStep {
  label: string
  title: string
  description: string
  you: string
  me: string
  effect: string
}

export const processTimeline: ProcessTimelineStep[] = [
  {
    label: "Przed startem",
    title: "Ustalamy zakres i warunki",
    description:
      "Rozmawiamy o pomyśle, wybieramy najważniejsze funkcje i zapisujemy ustalenia w umowie. Znasz zakres, cenę i termin.",
    you: "Opowiadasz o pomyśle i pomagasz wybrać, co jest najważniejsze. Podpisujesz umowę i wnosisz pierwszą płatność.",
    me: "Prowadzę ustalenia, przygotowuję zakres i organizuję start prac.",
    effect: "Uzgodniony zakres, cena, termin i umowa.",
  },
  {
    label: "Tydzień 1",
    title: "Wygląd i sposób korzystania",
    description:
      "Przygotowuję dwa kierunki wizualne. Omawiamy wygląd ekranów i sposób poruszania się po aplikacji.",
    you: "Oceniasz propozycje i mówisz, co chcesz doprecyzować.",
    me: "Organizuję projektowanie i pilnuję zgodności z ustalonym zakresem.",
    effect: "Wybrany kierunek wyglądu i obsługi.",
  },
  {
    label: "Tydzień 2",
    title: "Budowa najważniejszych funkcji",
    description:
      "Zaczynam programować najważniejszą część produktu. Sprawdzamy, czy funkcje działają zgodnie z ustaleniami.",
    you: "Wyjaśniasz wątpliwości i podejmujesz decyzje produktowe.",
    me: "Koordynuję pracę techniczną i pilnuję zakresu.",
    effect: "Najważniejsza część aplikacji zaczyna działać.",
  },
  {
    label: "Tygodnie 3–4",
    title: "Pierwsza działająca wersja",
    description:
      "Kończę uzgodnione funkcje, uruchamiam aplikację w przeglądarce i przygotowuję stronę produktu oraz analitykę.",
    you: "Samodzielnie sprawdzasz działanie najważniejszych funkcji.",
    me: "Doprowadzam zakres do gotowości do odbioru i pokazuję Ci produkt.",
    effect: "Pierwsza działająca wersja do uruchomienia i pokazania.",
  },
  {
    label: "Zwykle tygodnie 5–8",
    title: "Odbiór, poprawki i przekazanie",
    description:
      "Sprawdzasz zgodność produktu z zakresem. Masz 10 dni roboczych na odbiór i zgłoszenie niezgodności. Wymagane poprawki wykonujemy zgodnie z umową.",
    you: "Testujesz produkt i zgłaszasz niezgodności w uzgodnionym zakresie.",
    me: "Wprowadzam wymagane poprawki i po rozliczeniu przekazuję kod, dostępy i prawa.",
    effect: "Odebrany produkt, kod i uzgodnione prawa.",
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
      "Nie. Możesz przyjść z samym pomysłem. Pomogę Ci określić, co powinno powstać w pierwszej kolejności.",
  },
  {
    question: "Czy będę rozmawiał bezpośrednio z Tobą?",
    answer:
      "Tak. To ja prowadzę ustalenia dotyczące zakresu, koordynuję realizację i omawiam z Tobą postępy projektu. W pracach technicznych mogą uczestniczyć odpowiedni specjaliści.",
  },
  {
    question:
      "Czy po czterech tygodniach aplikacja będzie już całkowicie gotowa?",
    answer:
      "Po czterech tygodniach prac celem jest pierwsza działająca wersja w uzgodnionym zakresie. Na odbiór i ewentualne poprawki przewidujemy dodatkowy czas. Cały proces trwa zwykle 6–8 tygodni.",
  },
  {
    question: "Czy mogę zmieniać funkcje w trakcie realizacji?",
    answer:
      "Możemy omawiać nowe pomysły, ale większe zmiany zakresu mogą wymagać osobnej wyceny i zmiany harmonogramu.",
  },
  {
    question: "Czy po zakończeniu projektu mogę współpracować z kimś innym?",
    answer:
      "Tak. Po zakończeniu i rozliczeniu otrzymujesz kod oraz uzgodnione prawa, z uwzględnieniem zasad korzystania z komponentów zewnętrznych.",
  },
  {
    question: "Czy muszę od razu zamawiać dalszy rozwój?",
    answer:
      "Nie. Możesz zacząć od pierwszej wersji, przetestować ją i dopiero później zdecydować, co dalej.",
  },
]
