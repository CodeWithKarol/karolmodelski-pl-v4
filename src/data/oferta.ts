export interface OfertaPackageItem {
  title: string
  description: string[]
  effect: string
}

export interface OfertaAfterLaunchItem {
  title: string
  description: string
}

export interface OfertaProcessStep {
  label: string
  title: string
  description: string
}

export interface OfertaPaymentStage {
  share: string
  amount: string
  title: string
  description: string
}

export interface OfertaSecurityPoint {
  title: string
  description: string
}

export interface OfertaFaqItem {
  question: string
  answer: string
}

export const ofertaPackage: OfertaPackageItem[] = [
  {
    title: "Ustalimy, co naprawdę warto zbudować",
    description: [
      "Na początku dokładnie omawiamy Twój pomysł. Sprawdzamy, co powinno działać w pierwszej wersji, które funkcje mogą poczekać i gdzie widzę największe ryzyka.",
      "Jeżeli da się coś zrobić prościej, zaproponuję Ci takie rozwiązanie.",
    ],
    effect: "uzgodniony zakres pierwszej wersji i plan realizacji.",
  },
  {
    title: "Dopracujemy sposób działania aplikacji",
    description: [
      "Nie musisz mieć gotowej dokumentacji technicznej ani przewidywać wszystkich możliwych sytuacji.",
      "Wspólnie przejdziemy przez główne scenariusze działania pierwszej wersji aplikacji. Doprecyzujemy, co ma się wydarzyć po wykonaniu konkretnych czynności i jak produkt powinien reagować w istotnych sytuacjach.",
      "Jeśli zauważymy niejasności lub sprzeczne założenia, omówimy je, zanim staną się problemem podczas programowania.",
    ],
    effect: "uzgodnione zasady działania najważniejszych funkcji.",
  },
  {
    title: "Przygotujemy wygląd i sposób obsługi",
    description: [
      "Przygotuję dwa kierunki wizualne aplikacji. Wspólnie wybierzemy ten, który najlepiej pasuje do Twojego produktu.",
      "Zadbamy nie tylko o wygląd, ale również o to, żeby użytkownik wiedział, gdzie kliknąć, co zrobić dalej i jak korzystać z najważniejszych funkcji.",
    ],
    effect: "uzgodniony wygląd i sposób obsługi pierwszej wersji.",
  },
  {
    title: "Zbudujemy działającą aplikację",
    description: [
      "Mój zespół przygotuje uzgodnione funkcje i uruchomi pierwszą wersję w przeglądarce.",
      "To nie będzie tylko zestaw ekranów ani prezentacja pokazująca, jak aplikacja mogłaby kiedyś działać.",
      "Będziesz mógł ją samodzielnie uruchomić i sprawdzić najważniejszą funkcję.",
    ],
    effect: "działająca pierwsza wersja produktu.",
  },
  {
    title: "Przygotujemy produkt w języku polskim i angielskim",
    description: [
      "W ramach uzgodnionego zakresu przygotujemy polską i angielską wersję interfejsu.",
      "Dzięki temu łatwiej pokażesz produkt również osobom, które nie mówią po polsku.",
    ],
    effect: "dwie wersje językowe uzgodnionych ekranów.",
  },
  {
    title: "Stworzymy stronę internetową produktu",
    description: [
      "Przygotujemy stronę, na której przedstawisz swoją aplikację i umożliwisz odwiedzającym przejście do jej pierwszej wersji.",
      "Zadbamy o zrozumiały opis, czytelną prezentację produktu i wyraźne wskazanie, co użytkownik może zrobić dalej.",
    ],
    effect:
      "strona, którą możesz wysyłać zainteresowanym osobom, partnerom i pierwszym użytkownikom.",
  },
  {
    title: "Dodamy podstawową analitykę",
    description: [
      "Samo uruchomienie aplikacji nie powie Ci jeszcze, jak ludzie z niej korzystają.",
      "Dlatego ustalimy najważniejsze zachowania, które warto mierzyć w pierwszej wersji, i wdrożymy uzgodniony pomiar.",
      "W zależności od rodzaju aplikacji może to być na przykład rozpoczęcie korzystania z produktu, wykonanie najważniejszej czynności albo powrót użytkownika.",
    ],
    effect: "możliwość obserwowania wybranych zachowań użytkowników.",
  },
  {
    title: "Przygotujemy materiały do rozmów z partnerami i inwestorami",
    description: [
      "Działająca aplikacja pozwala pokazać znacznie więcej niż sam opis pomysłu.",
      "Pomogę Ci uporządkować najważniejsze informacje o pierwszej wersji i przygotować uzgodnione materiały do jej przedstawienia.",
    ],
    effect:
      "działające demo i materiały prezentujące produkt w zakresie ustalonym przed rozpoczęciem prac.",
  },
  {
    title: "Będę prowadził całą realizację",
    description: [
      "Nie musisz samodzielnie szukać programistów, dzielić zadań ani pilnować, kto co robi.",
      "Zajmuję się organizacją prac, komunikacją z zespołem i rozwiązywaniem bieżących problemów technicznych.",
      "Regularnie pokazuję Ci efekty. Jeśli pojawi się decyzja dotycząca Twojego produktu, omawiamy ją wspólnie.",
    ],
    effect: "jeden kontakt i uporządkowany proces realizacji.",
  },
  {
    title: "Przekażę Ci produkt i pomożemy ustalić kolejne kroki",
    description: [
      "Po odbiorze i rozliczeniu otrzymasz kod źródłowy, odpowiednie dostępy i prawa do produktu w zakresie określonym w umowie. Zasady korzystania z komponentów i bibliotek zewnętrznych ustalamy osobno.",
      "Omówimy również możliwe kierunki dalszego rozwoju i funkcje, które warto rozważyć w następnej kolejności.",
      "Nie musisz zamawiać u mnie kolejnego etapu. Możesz rozwijać produkt ze mną albo z innym wykonawcą.",
    ],
    effect: "przekazany produkt i jasność co do dalszych możliwości.",
  },
]

export const ofertaAfterLaunch: OfertaAfterLaunchItem[] = [
  {
    title: "Analiza zachowania użytkowników",
    description:
      "Sprawdzimy dostępne dane i ustalimy, co z nich wynika oraz jakie problemy warto rozwiązać w pierwszej kolejności.",
  },
  {
    title: "Usprawnienie strony i aplikacji",
    description:
      "Przyjrzymy się elementom, które utrudniają użytkownikom wykonanie najważniejszych czynności, i zaproponujemy zmiany do sprawdzenia.",
  },
  {
    title: "Plan dalszego rozwoju",
    description:
      "Wybierzemy kolejne funkcje, uwzględniając potrzeby użytkowników, koszt i stopień trudności.",
  },
  {
    title: "Realizacja kolejnych funkcji",
    description:
      "Rozbudujemy działający produkt o wcześniej uzgodnione możliwości.",
  },
  {
    title: "Opieka techniczna",
    description:
      "Możemy również ustalić zasady późniejszego utrzymania, monitorowania i aktualizowania aplikacji.",
  },
]

export const ofertaOutcomes = [
  "Sam sprawdzić, jak działa Twój pomysł w praktyce.",
  "Pokazać aplikację partnerowi, inwestorowi lub pierwszym testerom.",
  "Zacząć zbierać opinie i obserwować wybrane zachowania użytkowników.",
  "Zdecydować, jakie funkcje warto rozważyć w kolejnym etapie.",
]

export const ofertaProcess: OfertaProcessStep[] = [
  {
    label: "Przed rozpoczęciem",
    title: "Ustalamy zakres",
    description:
      "Opowiadasz mi, co chcesz stworzyć. Wspólnie wybieramy najważniejsze funkcje, ustalamy ograniczenia i zapisujemy wszystko w umowie. Wiesz, co dokładnie mamy zbudować i za jaką kwotę.",
  },
  {
    label: "Tygodnie 1–2",
    title: "Pomysł zaczyna nabierać kształtu",
    description:
      "Przygotowujemy kierunki wizualne i rozpoczynamy budowę najważniejszej części aplikacji. Pokazuję Ci postępy i omawiam kwestie, które wymagają Twojej decyzji.",
  },
  {
    label: "Tygodnie 3–4",
    title: "Otrzymujesz pierwszą działającą wersję",
    description:
      "Kończymy podstawową funkcjonalność, uruchamiamy produkt w przeglądarce oraz przygotowujemy uzgodnioną stronę internetową i analitykę. Możesz zacząć samodzielnie sprawdzać aplikację.",
  },
  {
    label: "Zwykle tygodnie 5–8",
    title: "Odbiór, poprawki i przekazanie",
    description:
      "Sprawdzamy zgodność produktu z ustalonym zakresem. Masz 10 dni roboczych na odbiór techniczny i zgłoszenie niezgodności. Wymagane poprawki wykonujemy zgodnie z umową. Po zakończeniu odbioru i rozliczeniu przekazuję kod źródłowy, dostępy i prawa do produktu w zakresie określonym w umowie.",
  },
]

export const ofertaPayments: OfertaPaymentStage[] = [
  {
    share: "40%",
    amount: "11 800 zł",
    title: "Na rozpoczęcie realizacji",
    description:
      "Najpierw ustalamy dokładny zakres, podpisujemy umowę i kompletujemy niezbędne materiały oraz dostępy. Po wpłacie rozpoczynamy prace.",
  },
  {
    share: "40%",
    amount: "11 800 zł",
    title: "Gdy pierwsza wersja jest gotowa do testów",
    description:
      "Otrzymujesz działającą aplikację, stronę internetową i uzgodnioną analitykę. Możesz już sprawdzać produkt i rozpocząć pierwsze testy.",
  },
  {
    share: "20%",
    amount: "5 900 zł",
    title: "Po odbiorze technicznym",
    description:
      "Sprawdzasz zgodność aplikacji z ustaleniami. Po zakończeniu odbioru, wymaganych poprawkach i rozliczeniu ostatniej części przekazuję Ci kod źródłowy, odpowiednie dostępy i prawa do produktu w zakresie określonym w umowie.",
  },
]

export const ofertaSecurity: OfertaSecurityPoint[] = [
  {
    title: "Poufność",
    description:
      "Możemy podpisać umowę NDA, zanim opowiesz mi o szczegółach rozwiązania.",
  },
  {
    title: "Ustalony zakres i cena",
    description:
      "Przed rozpoczęciem zapisujemy w umowie, co dokładnie ma powstać, ile kosztuje realizacja i jakie są terminy.",
  },
  {
    title: "Możliwość sprawdzania postępów",
    description:
      "Regularnie pokazuję Ci efekty prac. Nie musisz czekać kilka tygodni bez żadnej informacji.",
  },
  {
    title: "Odbiór techniczny",
    description:
      "Masz czas na sprawdzenie produktu i zgłoszenie niezgodności z uzgodnionym zakresem.",
  },
  {
    title: "Kod źródłowy i prawa do produktu",
    description:
      "Po zakończeniu i rozliczeniu projektu otrzymujesz kod źródłowy oraz prawa do utworów powstałych w ramach realizacji, w zakresie określonym w umowie. Zasady korzystania z komponentów i bibliotek zewnętrznych ustalamy osobno.",
  },
  {
    title: "Trzy miesiące gwarancji technicznej",
    description:
      "Jeżeli po odbiorze okaże się, że funkcja nie działa zgodnie z uzgodnionymi wymaganiami, usuwamy usterki objęte gwarancją na zasadach zapisanych w umowie.",
  },
]

export const ofertaFaq: OfertaFaqItem[] = [
  {
    question: "Czy po czterech tygodniach dostanę prawdziwą aplikację?",
    answer:
      "Tak, celem pierwszych czterech tygodni jest przygotowanie działającej wersji przeglądarkowej w uzgodnionym zakresie, a nie tylko projektu graficznego. Odbiory i ewentualne poprawki są realizowane w dalszej części procesu.",
  },
  {
    question: "Czy muszę znać się na programowaniu?",
    answer:
      "Nie. Potrzebuję Twojej wiedzy o pomyśle i decyzji dotyczących produktu. Sprawy techniczne oraz organizację pracy biorę na siebie.",
  },
  {
    question: "Czy za 29 500 zł otrzymam aplikację na Androida i iPhone'a?",
    answer:
      "Standardowy pakiet dotyczy aplikacji działającej w przeglądarce. Osobne aplikacje publikowane w sklepach mobilnych wymagają odrębnego ustalenia zakresu i wyceny.",
  },
  {
    question: "Czy po uruchomieniu będą jeszcze jakieś koszty?",
    answer:
      "Mogą pojawić się koszty zewnętrzne, takie jak domena, hosting, usługi innych dostawców lub późniejsza opieka techniczna. Omawiamy je przed rozpoczęciem realizacji w zakresie, w jakim można je przewidzieć.",
  },
  {
    question: "Co jeśli mój pomysł wymaga większego budżetu?",
    answer:
      "Powiem Ci o tym po wstępnym poznaniu projektu. Sprawdzimy, czy można zacząć od mniejszego zakresu albo czy potrzebny będzie inny model realizacji.",
  },
  {
    question: "Czy później mogę rozwijać aplikację z innym wykonawcą?",
    answer:
      "Tak. Po zakończeniu i rozliczeniu otrzymujesz kod źródłowy oraz prawa do produktu w zakresie określonym w umowie. Zasady wykorzystania komponentów zewnętrznych ustalamy osobno.",
  },
  {
    question:
      "Czy muszę mieć dokładnie rozpisane wszystkie funkcje i zasady działania aplikacji?",
    answer:
      "Nie. Wystarczy, że potrafisz mi własnymi słowami opowiedzieć, co chcesz stworzyć i do czego ma służyć Twój produkt.\n\nPodczas ustalania zakresu przejdziemy przez najważniejsze scenariusze działania. Będę zadawał pytania, pokazywał możliwe rozwiązania i pomagał Ci podejmować decyzje.\n\nNie musisz znać technicznych odpowiedzi. Ważne, żebyśmy przed rozpoczęciem prac mieli wspólne rozumienie tego, co ma powstać.",
  },
  {
    question: "Co dokładnie obejmuje podstawowa analityka?",
    answer:
      "Przed rozpoczęciem prac ustalimy kilka najważniejszych zdarzeń, które warto mierzyć w pierwszej wersji produktu.\n\nW ramach pakietu wdrożę uzgodniony pomiar i przekażę Ci dostęp do odpowiednich narzędzi.\n\nRozbudowane raporty, regularna analiza wyników, eksperymenty A/B oraz dalsza optymalizacja mogą być realizowane jako osobny etap współpracy.",
  },
  {
    question: "Czy pomożesz mi również po uruchomieniu aplikacji?",
    answer:
      "Tak, możemy współpracować także po zakończeniu pierwszego etapu.\n\nMogę pomóc Ci przeanalizować zachowanie użytkowników, zaplanować usprawnienia, rozbudować aplikację albo ustalić zasady opieki technicznej.\n\nTakie prace wyceniam osobno. Nie musisz jednak decydować się na dalszą współpracę — po przekazaniu i rozliczeniu produktu możesz rozwijać go również z innym zespołem.",
  },
  {
    question: "Czy mogę najpierw porozmawiać bez zobowiązań?",
    answer:
      "Oczywiście. Pierwsza rozmowa jest bezpłatna i trwa około 20 minut. Nie musisz na tym etapie zamawiać żadnych prac.",
  },
]

export interface OfertaComparisonOption {
  name: string
  what: string
  use: string
}

export const ofertaComparison: OfertaComparisonOption[] = [
  {
    name: "Projekt graficzny",
    what: "Obrazy i widoki aplikacji",
    use: "Zobaczenie, jak produkt może wyglądać",
  },
  {
    name: "Klikalny prototyp",
    what: "Symulację przechodzenia między ekranami",
    use: "Wstępne sprawdzenie układu i doświadczenia użytkownika",
  },
  {
    name: "Pierwsza działająca wersja",
    what: "Funkcjonującą najważniejszą część produktu",
    use: "Sprawdzenie podstawowego działania z użytkownikami",
  },
  {
    name: "Pełna aplikacja",
    what: "Rozbudowany system z wieloma funkcjami",
    use: "Realizacja szerszej, wcześniej określonej wizji",
  },
]
