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
      "Przygotujemy dwa kierunki wizualne i omówimy sposób korzystania z aplikacji.",
    you: "Oceniasz propozycje i podejmujesz decyzje dotyczące swojego produktu.",
    me: "Organizuję pracę projektową, pilnuję uzgodnionego zakresu i pomagam ocenić, które rozwiązania będą najwygodniejsze dla użytkowników.",
    effect: "Wybrany kierunek wyglądu i obsługi aplikacji.",
  },
  {
    label: "Tydzień 2",
    title: "Najważniejsze funkcje zaczynają działać",
    description:
      "Rozpoczynamy budowę głównej części aplikacji. Sprawdzamy również, czy poszczególne elementy zachowują się zgodnie z przyjętymi założeniami.",
    you: "Odpowiadasz na pytania dotyczące działania produktu i oceniasz pokazywane efekty.",
    me: "Koordynuję pracę zespołu, rozwiązuję kwestie techniczne i omawiam z Tobą sytuacje wymagające decyzji.",
    effect:
      "Najważniejsza część aplikacji zaczyna działać, a kluczowe założenia są stopniowo weryfikowane w praktyce.",
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
    effect: "Odebrany produkt, kod źródłowy i prawa do produktu.",
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
      "Tak. Po zakończeniu i rozliczeniu otrzymujesz kod źródłowy oraz prawa do produktu w zakresie określonym w umowie. Zasady korzystania z komponentów zewnętrznych ustalamy osobno.",
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
      "To zależy od tego, jak działa Twój produkt i jakich usług potrzebuje.\n\nNiektóre aplikacje wymagają tylko prostego hostingu. Inne korzystają z serwerów, baz danych albo płatnych usług zewnętrznych, których koszt może rosnąć wraz z liczbą użytkowników.\n\nPrzed uruchomieniem omówię z Tobą najważniejsze koszty zewnętrzne i wyjaśnię, od czego mogą zależeć przyszłe opłaty.\n\nNie musisz również wykupywać u mnie stałej opieki technicznej. Jeśli jednak będziesz jej potrzebować, możemy osobno ustalić jej zakres i cenę.",
  },
]
