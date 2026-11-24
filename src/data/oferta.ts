export type OfertaPackageGroupId =
  "koncepcja" | "projekt" | "analityka" | "przekazanie"

export interface OfertaPackageGroup {
  id: OfertaPackageGroupId
  letter: string
  title: string
  description: string
}

export interface OfertaPackageItem {
  title: string
  summary: string
  group: OfertaPackageGroupId
  description: string[]
  effect: string
}

export const ofertaPackageGroups: OfertaPackageGroup[] = [
  {
    id: "koncepcja",
    letter: "A",
    title: "Koncepcja i zakres",
    description: "Ustalamy, co ma powstać i po czym poznamy, że działa.",
  },
  {
    id: "projekt",
    letter: "B",
    title: "Projekt i produkt",
    description: "Projektujemy, budujemy i uruchamiamy pierwszą wersję.",
  },
  {
    id: "analityka",
    letter: "C",
    title: "Analityka i pierwsze testy",
    description: "Sprawdzamy, co robią użytkownicy i co warto przetestować.",
  },
  {
    id: "przekazanie",
    letter: "D",
    title: "Koordynacja i przekazanie",
    description: "Prowadzę prace, testy i przekazanie produktu.",
  },
]

export const ofertaPackage: OfertaPackageItem[] = [
  {
    title: "Wybierzemy najważniejszą funkcję i zakres pierwszej wersji",
    summary:
      "Plan pierwszej wersji: cel, użytkownicy, najważniejszy scenariusz i funkcje odłożone na później.",
    group: "koncepcja",
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
    summary:
      "Zasady działania, kryteria odbioru i wstępne rozpoznanie ograniczeń.",
    group: "koncepcja",
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
    summary: "Projekt kluczowych ekranów i sposób obsługi aplikacji.",
    group: "projekt",
    description: [
      "Przygotujemy projekt najważniejszych ekranów aplikacji, uwzględniając jej cel i sposób korzystania przez użytkowników.",
      "Zaproponuję rozwiązanie, które moim zdaniem najlepiej sprawdzi się w pierwszej wersji.",
      "Wspólnie omówimy projekt i wprowadzimy uzgodnione poprawki przed rozpoczęciem dalszych prac.",
    ],
    effect: "zaakceptowany wygląd i sposób obsługi kluczowych ekranów.",
  },
  {
    title: "Zbudujemy działającą aplikację",
    summary: "Działająca aplikacja w przeglądarce z najważniejszą funkcją.",
    group: "projekt",
    description: [
      "Mój zespół przygotuje uzgodnione funkcje i uruchomi pierwszą wersję w przeglądarce.",
      "To nie będzie tylko zestaw ekranów ani prezentacja pokazująca, jak aplikacja mogłaby kiedyś działać.",
      "Będziesz mógł ją samodzielnie uruchomić i sprawdzić najważniejszą funkcję.",
    ],
    effect: "działająca pierwsza wersja produktu uruchamiana w przeglądarce.",
  },
  {
    title: "Przygotujemy prostą stronę internetową produktu",
    summary: "Prosta strona produktu z przejściem do aplikacji lub kontaktu.",
    group: "projekt",
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
    summary: "Pomiar wybranych działań użytkowników i dostęp do danych.",
    group: "analityka",
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
    summary:
      "Plan testów, pytania do użytkowników i sposób udostępnienia wersji.",
    group: "analityka",
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
    summary: "Jeden kontakt, organizacja zespołu i trzy punkty kontrolne.",
    group: "przekazanie",
    description: [
      "Nie musisz samodzielnie szukać programistów, dzielić zadań ani pilnować, kto co robi.",
      "Zajmuję się organizacją prac, komunikacją z zespołem i rozwiązywaniem bieżących problemów technicznych.",
      "Regularnie pokazuję Ci efekty. Jeśli pojawi się decyzja dotycząca Twojego produktu, omawiamy ją wspólnie.",
    ],
    effect: "jeden kontakt i uporządkowany proces realizacji.",
  },
  {
    title: "Sprawdzimy produkt przed przekazaniem",
    summary:
      "Testy zgodności z zakresem, poprawki i 10 dni roboczych na odbiór.",
    group: "przekazanie",
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
    summary:
      "Kod, dostępy i prawa w zakresie umowy oraz podsumowanie kolejnych kroków.",
    group: "przekazanie",
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

export interface OfertaAfterLaunchItem {
  title: string
  summary: string
  paragraphs: string[]
  effect?: string
  note?: string
}

export const ofertaAfterLaunch: OfertaAfterLaunchItem[] = [
  {
    title: "Audyt aplikacji po uruchomieniu",
    summary:
      "Analiza dostępnej analityki i sposobu korzystania z produktu. Raport i plan usprawnień.",
    paragraphs: [
      "Masz działający produkt, ale nie wiesz, co warto poprawić?",
      "Przyjrzę się dostępnej analityce, sposobowi korzystania z aplikacji i najważniejszym problemom.",
      "Przygotuję rekomendacje zmian, uporządkowane według priorytetów, żebyś wiedział, od czego moim zdaniem warto zacząć.",
    ],
    effect: "konkretny raport i plan możliwych usprawnień.",
  },
  {
    title: "Rozwój kolejnych funkcji",
    summary:
      "Ocena nowych pomysłów, ustalenie zakresu i organizacja kolejnego etapu prac.",
    paragraphs: [
      "Wiesz już, co chcesz dodać do aplikacji?",
      "Pomogę Ci ocenić nowe pomysły, ustalić zakres i zorganizować kolejny etap prac.",
      "Nie musimy budować wszystkiego od razu. Możemy rozwijać produkt stopniowo, na podstawie uzgodnionego planu i budżetu.",
    ],
    effect: "kolejna wersja aplikacji z nowymi, uzgodnionymi funkcjami.",
  },
  {
    title: "Opieka i wsparcie technologiczne",
    summary:
      "Przeglądy techniczne, planowanie prac i bieżące wsparcie lub koordynacja zespołu.",
    paragraphs: [
      "Jeżeli potrzebujesz stałej pomocy w utrzymaniu i rozwijaniu aplikacji, możemy ustalić zasady dłuższej współpracy.",
      "W zależności od potrzeb może ona obejmować przeglądy techniczne, planowanie dalszych prac, bieżące wsparcie lub koordynację zespołu.",
    ],
    note: "Zakres, dostępność i wynagrodzenie ustalam indywidualnie.",
  },
]

export interface OfertaPaymentStage {
  share: string
  amount: string
  title: string
  description: string
}

export const ofertaPayments: OfertaPaymentStage[] = [
  {
    share: "40%",
    amount: "11 800 zł",
    title: "Na rozpoczęcie realizacji",
    description:
      "Po ustaleniu zakresu, podpisaniu umowy i wpłacie pierwszej części.",
  },
  {
    share: "40%",
    amount: "11 800 zł",
    title: "Gdy pierwsza wersja jest gotowa do testów",
    description:
      "Gdy otrzymasz działającą aplikację, stronę produktu i uzgodnioną analitykę.",
  },
  {
    share: "20%",
    amount: "5 900 zł",
    title: "Po odbiorze technicznym",
    description:
      "Po sprawdzeniu zgodności z zakresem, poprawkach i rozliczeniu.",
  },
]

export interface OfertaSecurityPoint {
  title: string
  description: string
}

export const ofertaSecurity: OfertaSecurityPoint[] = [
  {
    title: "Poufność i NDA",
    description:
      "Umowę o zachowaniu poufności możemy podpisać przed szczegółową rozmową o pomyśle.",
  },
  {
    title: "Uzgodniony zakres i cena",
    description:
      "Przed startem zapisujemy w umowie, co ma powstać, ile kosztuje realizacja i jakie są terminy.",
  },
  {
    title: "Kod, dostępy i prawa",
    description:
      "Po zakończeniu i rozliczeniu otrzymujesz kod źródłowy, dostępy i prawa w zakresie określonym w umowie. Licencje komponentów zewnętrznych ustalamy osobno.",
  },
  {
    title: "Gwarancja techniczna",
    description:
      "3 miesiące gwarancji na usterki objęte umową, na zasadach w niej zapisanych.",
  },
]

export const ofertaFitGood = [
  "Najważniejszą funkcję można zbudować i uruchomić w ciągu czterech tygodni.",
  "Produkt działa w przeglądarce i nie wymaga publikacji w sklepach mobilnych.",
  "Wystarczy jedna wersja językowa dopasowana do pierwszych użytkowników.",
  "Integracje i zależności są standardowe i możliwe do sprawdzenia przed startem.",
]

export const ofertaFitComplex = [
  "Potrzebna jest osobna aplikacja na Androida i iPhone'a.",
  "Zakres obejmuje wiele języków, rozbudowane integracje lub nietypowe obliczenia.",
  "Wymagane są testy penetracyjne, audyt bezpieczeństwa albo obsługa prawna.",
  "Projekt zakłada rekrutację testerów, badania rynku lub stałe utrzymanie.",
]

export const ofertaFitNote =
  "To wstępne kryteria, nie gwarancja przyjęcia projektu. Ostateczną ocenę podejmujemy po rozmowie i ustaleniu zakresu."

export const ofertaExclusions = [
  "Osobne aplikacje mobilne w App Store i Google Play.",
  "Dodatkowe wersje językowe poza jedną wersją dopasowaną do pierwszych użytkowników.",
  "Rozbudowane integracje z zewnętrznymi systemami — sprawdzamy je przed zatwierdzeniem zakresu, w miarę możliwości.",
  "Audyt bezpieczeństwa i testy penetracyjne.",
  "Obsługa prawna znaków towarowych, uzyskiwanie zgód i kwestie licencyjne wymagające doradcy prawnego.",
  "Rekrutacja testerów i prowadzenie badań z użytkownikami — pomagam zaplanować test, nie organizuję go za Ciebie.",
  "Koszty zewnętrzne: domena, hosting, serwery i usługi innych dostawców — omawiamy je przed startem.",
  "Materiały inwestorskie, model finansowy i badanie rynku.",
  "Stałe utrzymanie, administracja i monitoring produktu po zakończeniu projektu.",
]

export type OfertaFaqGroupId = "zakres" | "budzet" | "wspolpraca"

export interface OfertaFaqItem {
  question: string
  answer: string
  group: OfertaFaqGroupId
}

export const ofertaFaqGroups: {
  id: OfertaFaqGroupId
  title: string
  description: string
}[] = [
  {
    id: "zakres",
    title: "Zakres i wymagania",
    description: "Co powstaje, jak działa i czego potrzebujesz na starcie.",
  },
  {
    id: "budzet",
    title: "Budżet i terminy",
    description: "Cena, koszty zewnętrzne i tempo pracy.",
  },
  {
    id: "wspolpraca",
    title: "Dalsza współpraca",
    description: "Rozwój produktu, opieka i przekazanie praw.",
  },
]

export const ofertaFaq: OfertaFaqItem[] = [
  {
    question: "Jak będę wiedział, że prace idą zgodnie z planem?",
    group: "zakres",
    answer:
      "W trakcie realizacji mamy trzy punkty kontrolne: po tygodniu 1 pokazuję projekt kluczowych ekranów, po tygodniu 2 działającą najważniejszą funkcję, a na koniec tygodnia 4 wersję gotową do testów.\n\nNa każdym z tych momentów widzisz efekty i wspólnie podejmujemy decyzje. Między punktami kontrolnymi pracuję dalej, więc nie musisz czekać z uwagami do prezentacji. Postępy pokazuję również na bieżąco.",
  },
  {
    question: "Czy po czterech tygodniach dostanę prawdziwą aplikację?",
    group: "zakres",
    answer:
      "Tak, celem pierwszych czterech tygodni jest przygotowanie działającej wersji przeglądarkowej w uzgodnionym zakresie, a nie tylko projektu graficznego. Odbiory i ewentualne poprawki są realizowane w dalszej części procesu.",
  },
  {
    question: "Czy muszę znać się na programowaniu?",
    group: "zakres",
    answer:
      "Nie. Potrzebuję Twojej wiedzy o pomyśle i decyzji dotyczących produktu. Sprawy techniczne oraz organizację pracy biorę na siebie.",
  },
  {
    question: "Czy za 29 500 zł otrzymam aplikację na Androida i iPhone'a?",
    group: "zakres",
    answer:
      "Standardowy pakiet dotyczy aplikacji działającej w przeglądarce. Osobne aplikacje publikowane w sklepach mobilnych wymagają odrębnego ustalenia zakresu i wyceny.",
  },
  {
    question: "Czy aplikacja będzie w języku polskim i angielskim?",
    group: "zakres",
    answer:
      "Interfejs przygotujemy w języku odpowiednim dla grupy, do której kierujesz produkt. Standardowy pakiet obejmuje jedną wersję językową, dopasowaną do pierwszych użytkowników.\n\nJeżeli potrzebujesz również drugiej wersji językowej, możemy uwzględnić ją w ustalanym zakresie. Nie jest to jednak automatyczny element każdej realizacji — decydujemy o tym podczas ustalania zakresu.",
  },
  {
    question: "Czy po uruchomieniu będą jeszcze jakieś koszty?",
    group: "budzet",
    answer:
      "Mogą pojawić się koszty zewnętrzne, takie jak domena, hosting, usługi innych dostawców lub późniejsza opieka techniczna. Omawiamy je przed rozpoczęciem realizacji w zakresie, w jakim można je przewidzieć.",
  },
  {
    question: "Co jeśli mój pomysł wymaga większego budżetu?",
    group: "budzet",
    answer:
      "Po wstępnym poznaniu projektu powiem Ci, czy widzę taką możliwość. Sprawdzimy, czy można zacząć od mniejszego zakresu albo czy potrzebne będzie dokładniejsze rozpoznanie przed wyborem innego modelu realizacji.",
  },
  {
    question: "Czy później mogę rozwijać aplikację z innym wykonawcą?",
    group: "wspolpraca",
    answer:
      "Tak. Po zakończeniu i rozliczeniu otrzymujesz kod źródłowy oraz prawa do produktu w zakresie określonym w umowie. Zasady wykorzystania komponentów zewnętrznych ustalamy osobno.",
  },
  {
    question:
      "Czy muszę mieć dokładnie rozpisane wszystkie funkcje i zasady działania aplikacji?",
    group: "zakres",
    answer:
      "Nie. Wystarczy, że potrafisz mi własnymi słowami opowiedzieć, co chcesz stworzyć i do czego ma służyć Twój produkt.\n\nPodczas ustalania zakresu przejdziemy przez najważniejsze scenariusze działania. Będę zadawał pytania, pokazywał możliwe rozwiązania i pomagał Ci podejmować decyzje.\n\nNie musisz znać technicznych odpowiedzi. Ważne, żebyśmy przed rozpoczęciem prac mieli wspólne rozumienie tego, co ma powstać.",
  },
  {
    question: "Co dokładnie obejmuje podstawowa analityka?",
    group: "zakres",
    answer:
      "Przed rozpoczęciem prac ustalimy kilka najważniejszych zdarzeń, które warto mierzyć w pierwszej wersji produktu.\n\nW ramach pakietu wdrożę uzgodniony pomiar i przekażę Ci dostęp do odpowiednich narzędzi.\n\nRozbudowane raporty, regularna analiza wyników, eksperymenty A/B oraz dalsza optymalizacja mogą być realizowane jako osobny etap współpracy.",
  },
  {
    question: "Czy pomożesz mi również po uruchomieniu aplikacji?",
    group: "wspolpraca",
    answer:
      "Tak, możemy współpracować także po zakończeniu pierwszego etapu.\n\nMogę pomóc Ci przeanalizować zachowanie użytkowników, zaplanować usprawnienia, rozbudować aplikację albo ustalić zasady opieki technicznej.\n\nTakie prace wyceniam osobno. Nie musisz jednak decydować się na dalszą współpracę — po przekazaniu i rozliczeniu produktu możesz rozwijać go również z innym zespołem.",
  },
  {
    question: "Czy mogę zamówić samą analizę pomysłu, bez budowy aplikacji?",
    group: "wspolpraca",
    answer:
      "Tak. Analiza pomysłu i plan realizacji aplikacji to osobna, płatna usługa, której zakres i cenę ustalam indywidualnie.\n\nOtrzymujesz propozycję najważniejszej funkcji pierwszej wersji, wstępne rozpoznanie ograniczeń i zależności, podział projektu na etapy, pisemne podsumowanie oraz spotkanie omawiające rekomendacje.\n\nNie musisz później zamawiać u mnie realizacji. Przygotowany plan możesz wykorzystać również podczas rozmów z innymi wykonawcami.",
  },
  {
    question: "Czy mogę najpierw porozmawiać bez zobowiązań?",
    group: "budzet",
    answer:
      "Oczywiście. Pierwsza rozmowa jest bezpłatna i trwa około 20 minut. Nie musisz na tym etapie zamawiać żadnych prac.",
  },
]
