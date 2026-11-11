export interface OfertaPackageItem {
  title: string
  description: string[]
  effect: string
}

export interface OfertaAfterLaunchItem {
  title: string
  paragraphs: string[]
  effect?: string
  note?: string
}

export interface OfertaProcessStep {
  label: string
  title: string
  description: string
  you: string
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
    title: "Wybierzemy najważniejszą funkcję i zakres pierwszej wersji",
    description: [
      "Na początku dokładnie omówimy Twój pomysł i zastanowimy się, co użytkownik powinien móc zrobić w aplikacji.",
      "Jeśli masz wiele pomysłów na funkcje, pomogę Ci wybrać te, od których warto zacząć. Jeżeli da się coś zrobić prościej, zaproponuję Ci takie rozwiązanie.",
      "Ustalenia zbierzemy w krótkim planie pierwszej wersji: główny cel, pierwsza grupa użytkowników, najważniejszy scenariusz użycia, funkcje w zakresie i te odłożone na później.",
    ],
    effect:
      "uzgodniony plan pierwszej wersji z głównym celem, najważniejszymi funkcjami i listą rzeczy odłożonych na później.",
  },
  {
    title: "Dopracujemy zasady działania i kryteria odbioru",
    description: [
      "Nie musisz mieć gotowej dokumentacji technicznej ani przewidywać wszystkich sytuacji, które mogą pojawić się podczas korzystania z aplikacji.",
      "Wspólnie przejdziemy przez główne scenariusze działania, doprecyzujemy niejasności i ustalimy, jak powinny zachowywać się najważniejsze funkcje.",
      "Ustalimy też, po czym poznamy, że najważniejsze funkcje działają prawidłowo. Dzięki temu na końcu sprawdzamy produkt według wcześniej uzgodnionych kryteriów, a nie według ogólnego wrażenia.",
      "Sprawdzimy też, czy w uzgodnionym zakresie nie ma istotnych zależności lub ograniczeń, które warto wyjaśnić przed rozpoczęciem programowania.",
    ],
    effect:
      "ustalone główne scenariusze działania i kryteria odbioru pierwszej wersji.",
  },
  {
    title: "Zaprojektujemy wygląd i sposób obsługi",
    description: [
      "Przygotujemy projekt najważniejszych ekranów aplikacji, uwzględniając jej cel i sposób korzystania przez użytkowników.",
      "Zaproponuję rozwiązanie, które moim zdaniem najlepiej sprawdzi się w pierwszej wersji.",
      "Wspólnie omówimy projekt i wprowadzimy uzgodnione poprawki przed rozpoczęciem dalszych prac.",
    ],
    effect: "zaakceptowany wygląd i sposób obsługi kluczowych ekranów.",
  },
  {
    title: "Zbudujemy działającą aplikację",
    description: [
      "Mój zespół przygotuje uzgodnione funkcje i uruchomi pierwszą wersję w przeglądarce.",
      "To nie będzie tylko zestaw ekranów ani prezentacja pokazująca, jak aplikacja mogłaby kiedyś działać.",
      "Będziesz mógł ją samodzielnie uruchomić i sprawdzić najważniejszą funkcję.",
    ],
    effect: "działająca pierwsza wersja produktu uruchamiana w przeglądarce.",
  },
  {
    title: "Przygotujemy prostą stronę internetową produktu",
    description: [
      "Stworzymy stronę, na której przedstawisz swoją aplikację i pokażesz odwiedzającym, co mogą dzięki niej zrobić.",
      "Zadbamy o czytelny opis, najważniejsze informacje i wyraźne przejście do produktu lub uzgodnionego sposobu kontaktu.",
      "Zakres strony ustalamy przed rozpoczęciem prac. To prosta strona prezentująca produkt, a nie rozbudowany serwis marketingowy.",
    ],
    effect:
      "strona, którą możesz udostępniać pierwszym użytkownikom i zainteresowanym osobom.",
  },
  {
    title: "Przygotujemy podstawową analitykę pierwszej wersji",
    description: [
      "Samo uruchomienie aplikacji nie powie Ci jeszcze, czy ludzie korzystają z niej zgodnie z Twoimi założeniami.",
      "Dlatego ustalimy, które zachowania użytkowników warto obserwować.",
      "W zależności od rodzaju aplikacji może to być na przykład rozpoczęcie rozgrywki, wykonanie najważniejszej czynności albo zakończenie określonego procesu. Następnie wdrożymy uzgodniony, podstawowy pomiar.",
    ],
    effect:
      "możliwość sprawdzenia, jak użytkownicy wykonują wybrane działania w aplikacji.",
  },
  {
    title: "Przygotujemy pierwszą wersję do testów i pierwszych opinii",
    description: [
      "Ustalimy, jak udostępnić produkt pierwszym użytkownikom — jako publiczną wersję aplikacji albo dostęp dla ograniczonej grupy osób.",
      "Wspólnie ustalimy, co warto przetestować i jakie zachowania użytkowników obserwować.",
      "Przygotuję krótką listę najważniejszych rzeczy do sprawdzenia oraz pytań, które możesz zadać pierwszym użytkownikom.",
      "Pomagam zaplanować test, ale nie wyszukuję testerów ani nie prowadzę badań rynku.",
    ],
    effect:
      "krótki plan pierwszych testów i pytań do użytkowników, gotowy do wykorzystania po uruchomieniu.",
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
    title: "Sprawdzimy produkt przed przekazaniem",
    description: [
      "Zanim przekażę Ci produkt, mój zespół sprawdzi działanie aplikacji i jej zgodność z uzgodnionym zakresem.",
      "Wprowadzimy poprawki do funkcji, które nie działają zgodnie z ustalonymi zasadami i kryteriami odbioru.",
      "Ty również otrzymasz czas na sprawdzenie produktu i zgłoszenie niezgodności.",
    ],
    effect:
      "produkt sprawdzony pod kątem zgodności z uzgodnionym zakresem i poprawione wykryte usterki.",
  },
  {
    title: "Przekażę Ci produkt i podsumuję możliwe kolejne kroki",
    description: [
      "Po zakończeniu i rozliczeniu projektu otrzymasz kod źródłowy, odpowiednie dostępy i prawa do produktu w zakresie określonym w umowie. Zasady korzystania z komponentów i bibliotek zewnętrznych ustalamy osobno.",
      "Omówimy też najważniejsze wnioski z realizacji oraz możliwości dalszego rozwoju. Wskażę, które funkcje warto rozważyć w kolejnym etapie, a z którymi moim zdaniem nie trzeba się spieszyć.",
      "Otrzymasz jednostronicowe podsumowanie: co zostało zbudowane, gdzie znajduje się produkt, co warto teraz sprawdzić, co odłożyliśmy na później i które kroki rekomenduję.",
      "Nie musisz zamawiać u mnie kolejnego etapu. Możesz rozwijać produkt ze mną albo z innym wykonawcą.",
    ],
    effect:
      "przekazany produkt i jednostronicowe podsumowanie możliwych dalszych kroków.",
  },
]

export interface OfertaAnalysisService {
  name: string
  intro: string[]
  deliverables: string[]
  effect: string
  notes: string[]
}

export const ofertaAnalysis: OfertaAnalysisService = {
  name: "Analiza pomysłu i plan realizacji aplikacji",
  intro: [
    "Masz rozbudowany pomysł, ale nie wiesz, jak przejść od wizji do konkretnego planu?",
    "Nie musisz od razu zamawiać programowania. Mogę pomóc Ci przeanalizować najważniejsze założenia, wybrać rozsądny punkt startowy i zaplanować realizację w etapach.",
  ],
  deliverables: [
    "Omówienie Twojego pomysłu i jego głównego celu.",
    "Propozycję najważniejszej funkcji pierwszej wersji.",
    "Wstępne rozpoznanie istotnych ograniczeń i zależności technicznych.",
    "Rekomendowany podział projektu na etapy.",
    "Wskazanie największych ryzyk i kwestii do wyjaśnienia.",
    "Orientacyjne założenia dotyczące budżetu i czasu realizacji.",
    "Pisemne podsumowanie oraz spotkanie, podczas którego omówimy rekomendacje.",
  ],
  effect:
    "konkretny plan, który pomoże Ci zdecydować, od czego zacząć i jak podejść do dalszej realizacji.",
  notes: [
    "Zakres i cenę tej usługi ustalam indywidualnie.",
    "Nie musisz później zamawiać u mnie budowy aplikacji. Przygotowany plan możesz wykorzystać także podczas rozmów z innymi wykonawcami.",
  ],
}

export const ofertaAfterLaunch: OfertaAfterLaunchItem[] = [
  {
    title: "Audyt aplikacji po uruchomieniu",
    paragraphs: [
      "Masz działający produkt, ale nie wiesz, co warto poprawić?",
      "Przyjrzę się dostępnej analityce, sposobowi korzystania z aplikacji i najważniejszym problemom.",
      "Przygotuję rekomendacje zmian, uporządkowane według priorytetów, żebyś wiedział, od czego moim zdaniem warto zacząć.",
    ],
    effect: "konkretny raport i plan możliwych usprawnień.",
  },
  {
    title: "Rozwój kolejnych funkcji",
    paragraphs: [
      "Wiesz już, co chcesz dodać do aplikacji?",
      "Pomogę Ci ocenić nowe pomysły, ustalić zakres i zorganizować kolejny etap prac.",
      "Nie musimy budować wszystkiego od razu. Możemy rozwijać produkt stopniowo, na podstawie uzgodnionego planu i budżetu.",
    ],
    effect: "kolejna wersja aplikacji z nowymi, uzgodnionymi funkcjami.",
  },
  {
    title: "Opieka i wsparcie technologiczne",
    paragraphs: [
      "Jeżeli potrzebujesz stałej pomocy w utrzymaniu i rozwijaniu aplikacji, możemy ustalić zasady dłuższej współpracy.",
      "W zależności od potrzeb może ona obejmować przeglądy techniczne, planowanie dalszych prac, bieżące wsparcie lub koordynację zespołu.",
    ],
    note: "Zakres, dostępność i wynagrodzenie ustalam indywidualnie.",
  },
]

export interface OfertaResultOverviewItem {
  title: string
  description: string
}

export const ofertaResultOverview: OfertaResultOverviewItem[] = [
  {
    title: "Plan",
    description: "Wiem, co budujemy i czego nie robimy jeszcze teraz.",
  },
  {
    title: "Projekt",
    description: "Widzę, jak aplikacja będzie działać.",
  },
  {
    title: "Produkt",
    description: "Mogę uruchomić pierwszą wersję.",
  },
  {
    title: "Testy",
    description: "Wiem, co sprawdzić z użytkownikami.",
  },
  {
    title: "Przekazanie",
    description: "Mam kod, dostępy i jasne kolejne kroki.",
  },
]

export const ofertaExclusions = [
  "Audyt bezpieczeństwa i testy penetracyjne — to osobna usługa specjalistyczna.",
  "Obsługa prawna znaków towarowych i uzyskiwanie zgód od zewnętrznych dostawców.",
  "Stałe monitorowanie, administracja i utrzymanie produktu po zakończeniu projektu.",
  "Materiały inwestorskie, model finansowy i badanie rynku.",
  "Rekrutacja testerów i prowadzenie badań z użytkownikami — pomagam zaplanować test, nie organizuję go za Ciebie.",
  "Potwierdzenie dostępności wszystkich integracji z zewnętrznymi aplikacjami i systemami — sprawdzamy je przed zatwierdzeniem zakresu, w miarę możliwości.",
]

export const ofertaProcess: OfertaProcessStep[] = [
  {
    label: "Przed rozpoczęciem",
    title: "Ustalamy zakres",
    description:
      "Opowiadasz mi, co chcesz stworzyć. Wspólnie wybieramy najważniejsze funkcje, ustalamy ograniczenia i kryteria odbioru, a ustalenia zapisujemy w umowie. Wiesz, co dokładnie mamy zbudować i za jaką kwotę.",
    you: "Opowiadasz o pomyśle i pomagasz wybrać, co jest najważniejsze.",
  },
  {
    label: "Tygodnie 1–2",
    title: "Pomysł zaczyna nabierać kształtu",
    description:
      "Przygotowujemy projekt wyglądu i rozpoczynamy budowę najważniejszej części aplikacji. Ustalamy też szczegóły, które wymagają Twojej decyzji.",
    you: "Oceniasz projekt i decydujesz o wyglądzie oraz zasadach działania.",
  },
  {
    label: "Tygodnie 3–4",
    title: "Otrzymujesz pierwszą działającą wersję",
    description:
      "Kończymy podstawową funkcjonalność, uruchamiamy produkt w przeglądarce oraz przygotowujemy uzgodnioną stronę internetową, analitykę i plan pierwszych testów.",
    you: "Sprawdzasz produkt i zgłaszasz uwagi w uzgodnionym zakresie.",
  },
  {
    label: "Zwykle tygodnie 5–8",
    title: "Odbiór, poprawki i przekazanie",
    description:
      "Sprawdzamy zgodność produktu z ustalonym zakresem. Masz 10 dni roboczych na odbiór techniczny i zgłoszenie niezgodności. Wymagane poprawki wykonujemy zgodnie z umową. Po zakończeniu odbioru i rozliczeniu przekazuję kod źródłowy, dostępy i prawa do produktu w zakresie określonym w umowie.",
    you: "Testujesz produkt i zgłaszasz niezgodności w uzgodnionym zakresie.",
  },
]

export interface OfertaCheckpoint {
  when: string
  title: string
  description: string
}

export const ofertaCheckpoints: OfertaCheckpoint[] = [
  {
    when: "Po tygodniu 1",
    title: "Wygląd i sposób obsługi",
    description:
      "Pokazuję projekt kluczowych ekranów. Omawiamy poprawki, zanim rozpocznie się programowanie.",
  },
  {
    when: "Po tygodniu 2",
    title: "Działa najważniejsza funkcja",
    description:
      "Sprawdzasz, czy produkt robi to, co ustaliliśmy. Wątpliwości wyjaśniamy od razu, a nie na końcu.",
  },
  {
    when: "Koniec tygodnia 4",
    title: "Wersja gotowa do testów",
    description:
      "Uruchamiamy produkt w przeglądarce i przechodzimy przez uzgodnione kryteria odbioru.",
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
    title: "Poufność i NDA",
    description:
      "Możemy podpisać umowę o zachowaniu poufności, zanim opowiesz mi o szczegółach rozwiązania.",
  },
  {
    title: "Zakres i cena ustalone z góry",
    description:
      "Przed rozpoczęciem zapisujemy w umowie, co dokładnie ma powstać, ile kosztuje realizacja i jakie są terminy.",
  },
  {
    title: "Płacisz etapami",
    description:
      "Standardowo dzielimy wynagrodzenie na trzy części: 40% na start, 40% gdy wersja jest gotowa do testów i 20% po odbiorze technicznym.",
  },
  {
    title: "Widzisz postępy w ustalonych momentach",
    description:
      "W trakcie prac mamy trzy punkty kontrolne: po tygodniu 1, po tygodniu 2 i na koniec tygodnia 4. Pokazuję wtedy efekty i wspólnie podejmujemy decyzje.",
  },
  {
    title: "Odbiór według uzgodnionych kryteriów",
    description:
      "Masz czas na sprawdzenie produktu i zgłoszenie niezgodności z uzgodnionym zakresem oraz kryteriami odbioru.",
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
    question: "Jak będę wiedział, że prace idą zgodnie z planem?",
    answer:
      "W trakcie realizacji mamy trzy punkty kontrolne: po tygodniu 1 pokazuję projekt kluczowych ekranów, po tygodniu 2 działającą najważniejszą funkcję, a na koniec tygodnia 4 wersję gotową do testów.\n\nNa każdym z tych momentów widzisz efekty i wspólnie podejmujemy decyzje. Między punktami kontrolnymi pracuję dalej, więc nie musisz czekać z uwagami do prezentacji. Postępy pokazuję również na bieżąco.",
  },
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
    question: "Czy aplikacja będzie w języku polskim i angielskim?",
    answer:
      "Interfejs przygotujemy w języku odpowiednim dla grupy, do której kierujesz produkt. Standardowy pakiet obejmuje jedną wersję językową, dopasowaną do pierwszych użytkowników.\n\nJeżeli potrzebujesz również drugiej wersji językowej, możemy uwzględnić ją w ustalanym zakresie. Nie jest to jednak automatyczny element każdej realizacji — decydujemy o tym podczas ustalania zakresu.",
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
    question: "Czy mogę zamówić samą analizę pomysłu, bez budowy aplikacji?",
    answer:
      "Tak. Analiza pomysłu i plan realizacji aplikacji to osobna, płatna usługa, której zakres i cenę ustalam indywidualnie.\n\nOtrzymujesz propozycję najważniejszej funkcji pierwszej wersji, wstępne rozpoznanie ograniczeń i zależności, podział projektu na etapy, pisemne podsumowanie oraz spotkanie omawiające rekomendacje.\n\nNie musisz później zamawiać u mnie realizacji. Przygotowany plan możesz wykorzystać również podczas rozmów z innymi wykonawcami.",
  },
  {
    question: "Czy mogę najpierw porozmawiać bez zobowiązań?",
    answer:
      "Oczywiście. Pierwsza rozmowa jest bezpłatna i trwa około 20 minut. Nie musisz na tym etapie zamawiać żadnych prac.",
  },
]
