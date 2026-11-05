export interface OfertaPackageItem {
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
    description:
      "Na początku dokładnie omawiamy Twój pomysł. Pomogę Ci określić najważniejszą funkcję aplikacji, ustalić zakres pierwszej wersji i oddzielić rzeczy niezbędne od tych, które mogą poczekać. Dzięki temu jeszcze przed rozpoczęciem prac wiesz, co powstanie i co zostawiamy na później.",
  },
  {
    title: "Przygotujemy wygląd aplikacji",
    description:
      "Otrzymasz dwa kierunki wizualne, spośród których wybierzemy rozwiązanie do dalszej realizacji. Nie musisz samodzielnie szukać projektanta ani tłumaczyć kilku osobom, jak wszystko ma wyglądać.",
  },
  {
    title: "Zbudujemy działającą pierwszą wersję",
    description:
      "Przygotujemy najważniejszą funkcję Twojego produktu w uzgodnionym zakresie. Nie będzie to wyłącznie obrazek ani klikalna prezentacja ekranów. Otrzymasz aplikację, którą można uruchomić w przeglądarce i sprawdzić jej działanie.",
  },
  {
    title: "Przygotujemy wersję polską i angielską",
    description:
      "Interfejs produktu przygotujemy w dwóch językach w ramach ustalonego zakresu. Dzięki temu możesz pokazać go również osobom, które nie mówią po polsku.",
  },
  {
    title: "Stworzymy stronę internetową produktu",
    description:
      "Powstanie strona, na której możesz przedstawić swoją aplikację, wyjaśnić, do czego służy, i zaprosić pierwsze osoby do jej wypróbowania. Nie musisz od razu zlecać wykonania osobnej witryny.",
  },
  {
    title: "Dodamy podstawową analitykę",
    description:
      "Przygotujemy narzędzia, które pomogą Ci obserwować korzystanie z aplikacji. W zależności od uzgodnionego zakresu będziesz mógł sprawdzać wybrane działania użytkowników i lepiej zrozumieć, co dzieje się po udostępnieniu produktu. To ważne, bo same opinie nie zawsze pokazują, jak ludzie rzeczywiście korzystają z aplikacji.",
  },
  {
    title: "Przygotujemy materiały do rozmów z partnerami i inwestorami",
    description:
      "Otrzymasz uzgodnione materiały pomagające w przedstawieniu produktu i jego dalszych możliwości. Łatwiej rozmawiać o rozwiązaniu, które można już pokazać i uruchomić, niż o pomyśle istniejącym tylko w dokumentach.",
  },
  {
    title: "Ustalimy możliwe kolejne etapy",
    description:
      "Po pierwszej wersji nie musisz od razu zamawiać dalszych prac. Omówimy możliwości rozwoju, funkcje, które warto rozważyć, i to, co wymaga jeszcze sprawdzenia.",
  },
  {
    title: "Zajmę się koordynacją całej realizacji",
    description:
      "Nie musisz organizować pracy programistów, projektanta i pozostałych specjalistów. To ja odpowiadam za koordynację techniczną i dopilnowanie uzgodnionego zakresu. Ty pozostajesz zaangażowany w decyzje dotyczące produktu, ale nie musisz samodzielnie zarządzać codzienną pracą zespołu.",
  },
  {
    title: "Otrzymasz kod i uzgodnione prawa do produktu",
    description:
      "Po zakończeniu i rozliczeniu projektu przekażę Ci kod źródłowy, odpowiednie dostępy i prawa autorskie zgodnie z umową. Nie musisz kontynuować współpracy ze mną tylko dlatego, że nie masz dostępu do swojej aplikacji.",
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
      "Sprawdzamy zgodność produktu z ustalonym zakresem. Masz 10 dni roboczych na odbiór techniczny i zgłoszenie niezgodności. Wymagane poprawki wykonujemy zgodnie z umową. Po zakończeniu odbioru i rozliczeniu przekazuję kod, dostępy i uzgodnione prawa.",
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
      "Sprawdzasz zgodność aplikacji z ustaleniami. Po zakończeniu odbioru, wymaganych poprawkach i rozliczeniu ostatniej części przekazuję Ci kod źródłowy, odpowiednie dostępy i uzgodnione prawa.",
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
    title: "Kod i prawa autorskie",
    description:
      "Po zakończeniu i rozliczeniu otrzymujesz kod oraz prawa w zakresie określonym w umowie, z uwzględnieniem zasad korzystania z komponentów zewnętrznych.",
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
      "Tak. Po zakończeniu i rozliczeniu otrzymujesz kod i uzgodnione prawa do produktu. Zasady wykorzystania komponentów zewnętrznych określa umowa.",
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
