export interface FaqItem {
  id: string
  question: string
  answer: string
  items?: string[]
}

export interface FaqCategory {
  id: string
  title: string
  navLabel: string
  questions: FaqItem[]
  link?: { label: string; href: string }
}

export const faqCategories: FaqCategory[] = [
  {
    id: "pomysl",
    navLabel: "Pomysł i MVP",
    title: "Od pomysłu do pierwszej aplikacji",
    link: {
      label: "Zobacz, jak powstało Numerabble",
      href: "/realizacje/numerabble/",
    },
    questions: [
      {
        id: "pytanie-1",
        question: "Mam pomysł na aplikację. Od czego powinienem zacząć?",
        answer: `Od rozmowy o tym, co chcesz stworzyć. Nie potrzebujesz dokumentacji ani wyboru technologii.

Najpierw ustalamy, komu ma służyć aplikacja, jaki problem rozwiązuje i co powinno działać w pierwszej wersji. Od tego zaczynam współpracę.`,
      },
      {
        id: "pytanie-2",
        question: "Czy muszę znać się na programowaniu?",
        answer: `Nie. Kod, technologie i organizacja pracy są po mojej stronie.

Od Ciebie potrzebuję wiedzy o pomyśle i jego odbiorcach. Ty opowiadasz, co chcesz osiągnąć; ja przekładam to na działające rozwiązanie.`,
      },
      {
        id: "pytanie-3",
        question: "Czy muszę mieć gotowy projekt albo dokumentację?",
        answer: `Nie. Wystarczy pomysł, notatka albo szkic.

Jeśli masz dokumentację lub projekt graficzny, chętnie z nich skorzystamy, ale nie są wymagane na start. Zakres potrzebnych informacji ustalamy wspólnie.`,
      },
      {
        id: "pytanie-4",
        question: "Co to właściwie jest MVP?",
        answer: `MVP to pierwsza, uproszczona wersja produktu z najważniejszymi funkcjami, które pozwalają go używać i sprawdzać założenia.

Nie oznacza bylejakości — to świadomie wybrany mniejszy zakres. W Numerabble zaczęliśmy od partii z komputerem, zamiast od razu budować rankingi i turnieje.`,
      },
      {
        id: "pytanie-5",
        question: "Czy prototyp i działająca aplikacja to to samo?",
        answer: `Nie. Projekt graficzny pokazuje wygląd, klikalny prototyp pozwala przechodzić między ekranami, a działająca aplikacja ma zaprogramowane funkcje, z których można korzystać.

W standardowym pakiecie celem jest pierwsza działająca wersja w uzgodnionym zakresie.`,
      },
      {
        id: "pytanie-6",
        question: "Czy od razu muszę budować wszystkie zaplanowane funkcje?",
        answer: `Nie — zwykle odradzam budowanie wszystkiego od razu. Każda funkcja to więcej pracy, czasu i kosztów.

Najpierw wybieramy to, co potrzebne do uruchomienia pierwszej wersji; pozostałe pomysły planujemy na później. To nie rezygnacja z wizji, tylko rozsądna kolejność.`,
      },
    ],
  },
  {
    id: "cena",
    navLabel: "Cena",
    title: "Cena i zakres oferty",
    link: { label: "Zobacz pełny zakres pakietu", href: "/oferta/" },
    questions: [
      {
        id: "pytanie-7",
        question: "Ile kosztuje stworzenie pierwszej wersji aplikacji?",
        answer: `Standardowy pakiet kosztuje 29 500 zł brutto. Obejmuje pierwszą działającą wersję aplikacji internetowej w uzgodnionym zakresie, wraz z pracami projektowymi i koordynacją.

Nie jest to cena dowolnie rozbudowanej aplikacji — zakres oceniamy przed startem.`,
      },
      {
        id: "pytanie-8",
        question: "Co dokładnie otrzymam za 29 500 zł?",
        answer: `W standardowym pakiecie otrzymujesz:`,
        items: [
          "Plan pierwszej wersji i listę funkcji odłożonych na później.",
          "Zasady działania i kryteria odbioru.",
          "Projekt kluczowych ekranów z rundą poprawek.",
          "Działającą aplikację w przeglądarce w jednej wersji językowej.",
          "Prostą stronę produktu.",
          "Podstawową analitykę wybranych działań użytkownika.",
          "Plan pierwszych testów i pytań do użytkowników.",
          "Testy, poprawki oraz przekazanie kodu i uzgodnionych praw.",
        ],
      },
      {
        id: "pytanie-9",
        question: "Czy za 29 500 zł mogę zbudować dowolną aplikację?",
        answer: `Nie. Proste narzędzie do zarządzania danymi to inny projekt niż platforma z płatnościami i wieloma typami użytkowników.

Czasem wystarczy ograniczyć pierwszą wersję, a czasem potrzebny jest większy budżet lub inne podejście. Powiem o tym przed rozpoczęciem prac.`,
      },
      {
        id: "pytanie-10",
        question: "Czy cena jest stała, czy może wzrosnąć podczas realizacji?",
        answer: `Tak, cena jest stała dla zakresu zapisanego w umowie.

Nową funkcję wyceniamy i ustalamy osobno, wraz z wpływem na harmonogram, zanim podejmiesz decyzję. Bez uzgodnienia nie dokładamy kosztów.`,
      },
      {
        id: "pytanie-11",
        question: "Czy muszę wpłacić całą kwotę na początku?",
        answer: `Nie. Płatność dzielimy na trzy części: 40% (11 800 zł brutto) na start, 40% (11 800 zł brutto) przed testami i 20% (5 900 zł brutto) po odbiorze technicznym.

Terminy i warunki określa umowa.`,
      },
      {
        id: "pytanie-12",
        question:
          "Czy po uruchomieniu aplikacji będę ponosić dodatkowe koszty?",
        answer: `Tak, utrzymanie aplikacji może wiązać się z kosztami: domena, serwer, usługi zewnętrzne, wysyłka wiadomości czy płatne narzędzia.

Ich wysokość zależy od projektu. Przewidywane koszty omawiamy przed realizacją.`,
      },
    ],
  },
  {
    id: "proces",
    navLabel: "Proces",
    title: "Terminy i przebieg współpracy",
    link: {
      label: "Zobacz cały proces krok po kroku",
      href: "/jak-pracuje/",
    },
    questions: [
      {
        id: "pytanie-13",
        question:
          "Czy naprawdę można stworzyć działającą aplikację w 4 tygodnie?",
        answer: `Tak — dla pierwszej wersji z dobrze dobranym zakresem. Cztery tygodnie liczymy od startu po ustaleniu zakresu i skompletowaniu materiałów oraz dostępów.

To nie oznacza dowolnie rozbudowanego systemu. Zakres sprawdzamy przed startem.`,
      },
      {
        id: "pytanie-14",
        question:
          "Dlaczego cały proces trwa zwykle 6–8 tygodni, skoro pierwsza wersja powstaje w 4 tygodnie?",
        answer: `Bo pierwsza wersja i odbiór to dwa etapy. Cztery tygodnie to prace nad wersją, a potem potrzebny jest czas na testy, zgłoszenie niezgodności, poprawki i formalne zakończenie.

Dlatego cały proces zwykle zajmuje 6–8 tygodni.`,
      },
      {
        id: "pytanie-15",
        question: "Czy będę musiał codziennie pilnować pracy programistów?",
        answer: `Nie. Organizuję realizację i koordynuję specjalistów, więc nie musisz rozdzielać zadań ani sprawdzać kodu.

Potrzebuję Twojego udziału w ustaleniach i decyzjach o produkcie. Postępy pokazuję regularnie.`,
      },
      {
        id: "pytanie-16",
        question: "Czy podczas realizacji będę widział, co powstaje?",
        answer: `Tak. Mamy trzy punkty kontrolne: po tygodniu 1 projekt kluczowych ekranów, po tygodniu 2 najważniejszą funkcję, a na koniec tygodnia 4 wersję do testów.

Między nimi prace trwają, a uwagi możesz zgłaszać na bieżąco.`,
      },
      {
        id: "pytanie-17",
        question:
          "Co jeśli po zobaczeniu pierwszej wersji będę chciał coś zmienić?",
        answer: `To normalne — dopiero w użyciu widać niektóre rzeczy.

Najpierw sprawdzamy charakter zmiany: błąd w uzgodnionej funkcji poprawiamy w ramach odbioru, a nową funkcję lub zmianę zakresu omawiamy i wyceniamy osobno. Dzięki temu budżet i termin zostają pod kontrolą.`,
      },
      {
        id: "pytanie-18",
        question: "Jak wygląda odbiór aplikacji?",
        answer: `Po zakończeniu prac masz 10 dni roboczych na odbiór techniczny i zgłoszenie niezgodności.

Sprawdzamy zgodność z umową; wady objęte obowiązkiem usunięcia poprawiamy na jej zasadach. Po odbiorze i rozliczeniu przekazujemy projekt.`,
      },
    ],
  },
  {
    id: "bezpieczenstwo",
    navLabel: "Bezpieczeństwo",
    title: "Bezpieczeństwo pomysłu i prawa autorskie",
    link: { label: "Poznaj mnie i moje podejście", href: "/o-mnie/" },
    questions: [
      {
        id: "pytanie-19",
        question:
          "Boję się, że ktoś wykorzysta mój pomysł. Czy możemy podpisać NDA?",
        answer: `Tak. Możemy podpisać umowę o zachowaniu poufności (NDA) przed szczegółową rozmową, a poufnych informacji nie musisz wpisywać w formularzu rezerwacji.

NDA chroni poufność, ale nie gwarantuje, że podobny pomysł nie pojawi się gdzie indziej. W sprawach ochrony prawnej skonsultuj się z prawnikiem.`,
      },
      {
        id: "pytanie-20",
        question: "Czy po zakończeniu projektu aplikacja będzie moja?",
        answer: `Tak, w zakresie określonym w umowie. Po zakończeniu i rozliczeniu przekazuję kod źródłowy oraz uzgodnione autorskie prawa majątkowe.

Komponenty i usługi zewnętrzne mogą mieć własne licencje — te zasady ustalamy przed startem.`,
      },
      {
        id: "pytanie-21",
        question: "Czy będę mógł rozwijać aplikację z innym wykonawcą?",
        answer: `Tak. Po rozliczeniu otrzymujesz uzgodniony kod, dostępy i prawa, które pozwalają rozwijać aplikację zgodnie z umową i licencjami.

Sam decydujesz, czy kontynuujesz ze mną, czy z innym wykonawcą.`,
      },
      {
        id: "pytanie-22",
        question: "A jeśli po zakończeniu projektu pojawi się błąd?",
        answer: `W standardowym pakiecie masz 3 miesiące gwarancji technicznej. Usterki objęte gwarancją usuwamy zgodnie z umową.

Gwarancja nie obejmuje dodawania nowych funkcji ani nieograniczonego wsparcia.`,
      },
    ],
  },
  {
    id: "rozwoj",
    navLabel: "Dalszy rozwój",
    title: "Działanie aplikacji i dalszy rozwój",
    questions: [
      {
        id: "pytanie-23",
        question: "Czy otrzymam aplikację na Androida i iPhone'a?",
        answer: `Standardowy pakiet dotyczy aplikacji internetowej, uruchamianej w przeglądarce — na komputerze i telefonie, w zakresie dostosowanym do projektu.

Nie oznacza to osobnych aplikacji w Google Play i App Store. Jeśli ich potrzebujesz, omówimy to przy ustalaniu zakresu.`,
      },
      {
        id: "pytanie-24",
        question:
          "Czy będę mógł pokazać aplikację inwestorowi albo pierwszym klientom?",
        answer: `Tak, to jeden z celów pierwszej wersji. Zamiast opowiadać o pomyśle, pokażesz działającą funkcję.

Gotowość do obsługi dużej liczby użytkowników lub pełnej sprzedaży zależy od zakresu i wymagań produktu.`,
      },
      {
        id: "pytanie-25",
        question:
          "Czy pomożesz mi sprawdzić, czy ludzie rzeczywiście chcą korzystać z mojej aplikacji?",
        answer: `W pakiecie przygotowujemy podstawową analitykę wybranych zachowań i plan pierwszych testów wraz z pytaniami do użytkowników.

Pomagam zaplanować test, ale nie wyszukuję testerów ani nie prowadzę badań rynku. Uruchomienie aplikacji nie gwarantuje zainteresowania rynku.`,
      },
      {
        id: "pytanie-26",
        question: "Czy po pierwszej wersji mogę dodać kolejne funkcje?",
        answer: `Tak. Pierwsza wersja nie musi zawierać całej wizji. Po uruchomieniu sprawdzasz, co działa, i decydujesz o dalszym rozwoju.

Nowe funkcje i integracje wyceniamy osobno; decyzji nie musisz podejmować przy pierwszej umowie.`,
      },
    ],
  },
  {
    id: "rozmowa",
    navLabel: "Rozmowa",
    title: "Pierwsza rozmowa",
    link: { label: "Umów bezpłatną rozmowę", href: "/rozmowa/" },
    questions: [
      {
        id: "pytanie-27",
        question: "Czy pierwsza rozmowa jest naprawdę bezpłatna?",
        answer: `Tak. Trwa około 20 minut, jest bezpłatna i nie zobowiązuje do współpracy.

Poznaję Twój pomysł i wstępnie oceniam, czy mój sposób pracy będzie odpowiedni.`,
      },
      {
        id: "pytanie-28",
        question: "Co muszę przygotować na pierwszą rozmowę?",
        answer: `Nic dokumentowego. Warto przemyśleć, co chcesz stworzyć, kto ma korzystać z aplikacji i co jest najważniejsze.

Szkice lub notatki mogą pomóc, ale wystarczy pomysł w głowie.`,
      },
      {
        id: "pytanie-29",
        question:
          "Co jeśli mój projekt nie mieści się w standardowym pakiecie?",
        answer: `Powiem Ci o tym wprost. Nie każdy projekt da się zrealizować w cztery tygodnie za 29 500 zł brutto.

Możemy podzielić go na mniejsze etapy; jeśli to nie ma sensu, wyjaśnię dlaczego. Wolę ustalić to na początku.`,
      },
    ],
  },
]

export const faqHighlights = [
  {
    question: "Czy dostanę coś, co naprawdę działa?",
    category: "Terminy i proces",
    target: "pytanie-13",
  },
  {
    question: "Czy mój pomysł zmieści się w budżecie 29 500 zł?",
    category: "Cena i płatności",
    target: "pytanie-9",
  },
  {
    question: "Czy możemy podpisać NDA przed rozmową?",
    category: "Poufność i prawa",
    target: "pytanie-19",
  },
  {
    question: "Czy będę mógł później rozwijać aplikację z innym wykonawcą?",
    category: "Poufność i prawa",
    target: "pytanie-21",
  },
]

export const faqAll = faqCategories.flatMap((category) => category.questions)
