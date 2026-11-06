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
        answer: `Od rozmowy o tym, co właściwie chcesz stworzyć.

Nie musisz na początku wybierać programisty, technologii ani przygotowywać szczegółowej dokumentacji.

Najpierw warto ustalić, komu aplikacja ma służyć, jaki problem rozwiązuje i co powinno działać w jej pierwszej wersji.

Właśnie od tego zaczynam współpracę. Pomogę Ci uporządkować pomysł, zastanowić się nad możliwościami i ustalić, jaki pierwszy krok ma sens.`,
      },
      {
        id: "pytanie-2",
        question: "Czy muszę znać się na programowaniu?",
        answer: `Nie.

Nie oczekuję, że będziesz rozumieć kod, wybierać technologie czy wiedzieć, czym różnią się poszczególne sposoby budowania aplikacji. To moja odpowiedzialność.

Od Ciebie potrzebuję przede wszystkim wiedzy o pomyśle, którym chcesz się zająć.

Ty wiesz, co ma robić produkt. Ja pomagam przełożyć to na rozwiązanie, które będzie można zbudować i uruchomić.`,
      },
      {
        id: "pytanie-3",
        question: "Czy muszę mieć gotowy projekt albo dokumentację?",
        answer: `Nie.

Możesz przyjść z notatkami, szkicem na kartce, opisem w kilku zdaniach albo samym pomysłem.

Jeżeli masz już dokumentację lub projekt graficzny, oczywiście możemy z nich skorzystać. Ale nie są one wymagane, żeby rozpocząć rozmowę.

Wspólnie ustalimy, jakie informacje są potrzebne przed rozpoczęciem prac.`,
      },
      {
        id: "pytanie-4",
        question: "Co to właściwie jest MVP?",
        answer: `MVP to pierwsza, uproszczona wersja produktu, która zawiera najważniejsze funkcje potrzebne do jego używania i sprawdzania podstawowych założeń.

Brzmi technicznie, ale chodzi o coś prostego. Jeżeli planujesz dużą aplikację z kilkudziesięcioma funkcjami, niekoniecznie musisz budować je wszystkie od razu. Możesz zacząć od jednej lub kilku najważniejszych rzeczy.

Na przykład podczas tworzenia gry Numerabble zaczęliśmy od wersji, w której można rozegrać partię z komputerem, zamiast od razu budować rozgrywki online, rankingi i turnieje. Dzięki temu mogliśmy uruchomić grę i rozpocząć testy.

MVP nie oznacza aplikacji zrobionej byle jak. Oznacza świadomie wybrany, mniejszy zakres.`,
      },
      {
        id: "pytanie-5",
        question: "Czy prototyp i działająca aplikacja to to samo?",
        answer: `Nie. I to bardzo ważna różnica.

Projekt graficzny pokazuje, jak aplikacja może wyglądać. Klikalny prototyp pozwala przechodzić między przykładowymi ekranami, ale nie musi wykonywać prawdziwych działań. Działająca aplikacja ma zaprogramowane funkcje, z których można rzeczywiście korzystać.

W moim standardowym pakiecie celem jest właśnie pierwsza działająca wersja aplikacji w uzgodnionym zakresie. Nie tylko obrazki ani prezentacja tego, jak produkt mógłby kiedyś wyglądać.`,
      },
      {
        id: "pytanie-6",
        question: "Czy od razu muszę budować wszystkie zaplanowane funkcje?",
        answer: `Nie. Zwykle wręcz odradzam takie podejście.

Na początku często pojawia się mnóstwo pomysłów: dodatkowe ekrany, konta użytkowników, płatności, powiadomienia i kolejne możliwości. Wiele z nich może być przydatnych. Tylko każda dodatkowa funkcja oznacza więcej pracy, czasu i kosztów.

Dlatego najpierw wybieramy to, co naprawdę potrzebne do uruchomienia pierwszej wersji. Pozostałe pomysły możemy zaplanować na później.

Nie musisz rezygnować z całej swojej wizji. Warto po prostu realizować ją w rozsądnej kolejności.`,
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
        answer: `Mój standardowy pakiet kosztuje 29 500 zł brutto.

Obejmuje przygotowanie pierwszej działającej wersji aplikacji internetowej w wcześniej uzgodnionym zakresie, wraz z pracami projektowymi, koordynacją realizacji i pozostałymi elementami pakietu.

Nie jest to jednak cena za dowolnie rozbudowaną aplikację. Przed rozpoczęciem współpracy sprawdzamy, co chcesz stworzyć i czy można wybrać taki pierwszy etap, który zmieści się w tym budżecie.`,
      },
      {
        id: "pytanie-8",
        question: "Co dokładnie otrzymam za 29 500 zł?",
        answer: `W standardowym pakiecie przewidziane są:`,
        items: [
          "Pomoc w ustaleniu najważniejszych funkcji i zakresu pierwszej wersji.",
          "Dwa kierunki wizualne aplikacji.",
          "Pierwsza działająca wersja aplikacji w przeglądarce.",
          "Polski i angielski interfejs w ustalonym zakresie.",
          "Strona internetowa produktu.",
          "Podstawowa analityka.",
          "Uzgodnione materiały pomocne w prezentacji produktu.",
          "Plan możliwego dalszego rozwoju.",
          "Organizacja i koordynacja technicznej realizacji.",
          "Przekazanie kodu i uzgodnionych praw zgodnie z umową.",
        ],
      },
      {
        id: "pytanie-9",
        question: "Czy za 29 500 zł mogę zbudować dowolną aplikację?",
        answer: `Nie.

Aplikacja służąca do prostego zarządzania danymi to zupełnie inny projekt niż rozbudowana platforma z płatnościami, transmisjami na żywo i wieloma rodzajami użytkowników.

Dlatego każdą koncepcję trzeba najpierw ocenić. Czasem wystarczy ograniczyć pierwszą wersję do najważniejszych funkcji. A czasem projekt rzeczywiście wymaga większego budżetu albo innego sposobu realizacji.

Jeżeli tak będzie, powiem Ci o tym przed rozpoczęciem prac.`,
      },
      {
        id: "pytanie-10",
        question: "Czy cena jest stała, czy może wzrosnąć podczas realizacji?",
        answer: `Cena jest stała dla zakresu, który wspólnie ustalimy i zapiszemy w umowie.

Jeżeli w trakcie prac pojawi się pomysł na dodatkową funkcję, najpierw porozmawiamy o tym, czy warto ją dodać. Jeśli będzie wymagała osobnych prac, ustalimy ich cenę i wpływ na harmonogram przed podjęciem decyzji.

Nie dokładamy nowych kosztów bez uzgodnienia.`,
      },
      {
        id: "pytanie-11",
        question: "Czy muszę wpłacić całą kwotę na początku?",
        answer: `Nie.

Płatność dzielimy na trzy części: 40% — 11 800 zł brutto na rozpoczęcie prac, 40% — 11 800 zł brutto, gdy pierwsza wersja jest gotowa do testów, oraz 20% — 5 900 zł brutto po odbiorze technicznym.

Szczegółowe terminy i warunki płatności określamy w umowie oraz harmonogramie realizacji. Dzięki temu nie płacisz całej kwoty jednorazowo.`,
      },
      {
        id: "pytanie-12",
        question:
          "Czy po uruchomieniu aplikacji będę ponosić dodatkowe koszty?",
        answer: `Mogą pojawić się koszty potrzebne do utrzymania aplikacji w internecie.

Na przykład domena, serwer, zewnętrzne usługi, wysyłka wiadomości albo płatne narzędzia, jeżeli będą wykorzystywane w Twoim projekcie. Ich wysokość zależy od rodzaju aplikacji i sposobu korzystania z niej.

Nie chcę podawać jednej kwoty, która miałaby pasować do każdego projektu. Przed rozpoczęciem realizacji omawiamy przewidywane koszty zewnętrzne, abyś wiedział, z czym wiąże się późniejsze utrzymanie produktu.`,
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
        answer: `Tak, ale pod warunkiem że mówimy o pierwszej wersji z odpowiednio dobranym i uzgodnionym zakresem.

Cztery tygodnie to przewidywany czas prac nad taką wersją, liczony od rozpoczęcia realizacji po ustaleniu zakresu i skompletowaniu potrzebnych materiałów oraz dostępów.

To nie oznacza, że w tym czasie można stworzyć dowolnie rozbudowany system. Dlatego zanim zaczniemy, sprawdzamy, co rzeczywiście da się wykonać w tym terminie.`,
      },
      {
        id: "pytanie-14",
        question:
          "Dlaczego cały proces trwa zwykle 6–8 tygodni, skoro pierwsza wersja powstaje w 4 tygodnie?",
        answer: `Bo stworzenie aplikacji i jej ostateczny odbiór to dwie różne rzeczy.

Pierwsze cztery tygodnie przeznaczamy na przygotowanie działającej wersji w ustalonym zakresie. Następnie potrzebny jest czas na sprawdzenie efektów, zgłoszenie ewentualnych niezgodności, wymagane poprawki i formalne zakończenie projektu.

Dlatego cały proces zwykle zajmuje około 6–8 tygodni.`,
      },
      {
        id: "pytanie-15",
        question: "Czy będę musiał codziennie pilnować pracy programistów?",
        answer: `Nie.

Zajmuję się organizacją realizacji i koordynacją techniczną. Nie musisz samodzielnie szukać specjalistów, rozdzielać im zadań ani codziennie sprawdzać kodu.

Potrzebuję jednak Twojego udziału w ustaleniach i ważnych decyzjach dotyczących produktu. Regularnie pokazuję postępy, żebyś wiedział, co powstaje i mógł oceniać efekty.`,
      },
      {
        id: "pytanie-16",
        question: "Czy podczas realizacji będę widział, co powstaje?",
        answer: `Tak.

Nie zakładam modelu, w którym przez kilka tygodni nie masz żadnych informacji, a potem dostajesz gotowy produkt.

Regularnie pokazuję postępy i omawiam z Tobą sprawy wymagające decyzji. Dzięki temu możesz wcześniej zwrócić uwagę, jeśli coś odbiega od uzgodnionego kierunku.`,
      },
      {
        id: "pytanie-17",
        question:
          "Co jeśli po zobaczeniu pierwszej wersji będę chciał coś zmienić?",
        answer: `To normalne.

Dopiero kiedy zaczynasz korzystać z aplikacji, możesz zauważyć rzeczy, których wcześniej nie było widać.

Najpierw sprawdzamy jednak, z jaką zmianą mamy do czynienia. Jeżeli uzgodniona funkcja nie działa prawidłowo, traktujemy to jako kwestię odbioru lub poprawienia błędu. Jeżeli chcesz dodać nową funkcję albo zmienić wcześniej ustalony zakres, omawiamy to osobno.

Dzięki temu możemy rozwijać pomysł bez utraty kontroli nad budżetem i terminem.`,
      },
      {
        id: "pytanie-18",
        question: "Jak wygląda odbiór aplikacji?",
        answer: `Po zakończeniu uzgodnionych prac otrzymujesz możliwość sprawdzenia produktu.

Masz 10 dni roboczych na odbiór techniczny i zgłoszenie niezgodności. Sprawdzamy, czy aplikacja odpowiada ustaleniom zapisanym w umowie. Jeżeli występują wady objęte obowiązkiem ich usunięcia, poprawiamy je na zasadach określonych w umowie.

Po zakończeniu odbioru i rozliczeniu przechodzimy do formalnego przekazania projektu.`,
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
        answer: `Tak.

Jeżeli zależy Ci na poufności, możemy podpisać umowę o zachowaniu poufności (NDA), zanim opowiesz mi o szczegółach swojego rozwiązania. Nie musisz również wpisywać poufnych informacji do formularza umawiania rozmowy.

Warto jednak pamiętać, że NDA jest zobowiązaniem do zachowania poufności, a nie gwarancją, że podobny pomysł nigdy nie pojawi się u kogoś innego. Jeżeli Twój projekt dotyczy rozwiązania, które może wymagać szczególnej ochrony prawnej, warto omówić to również z odpowiednim prawnikiem.`,
      },
      {
        id: "pytanie-20",
        question: "Czy po zakończeniu projektu aplikacja będzie moja?",
        answer: `Tak — w zakresie określonym w umowie.

Po zakończeniu i rozliczeniu projektu przekazuję Ci kod źródłowy oraz uzgodnione autorskie prawa majątkowe do przygotowanych elementów.

Musimy też uwzględnić zasady korzystania z komponentów i usług zewnętrznych, które mogą mieć własne licencje. Te kwestie ustalamy przed rozpoczęciem realizacji.`,
      },
      {
        id: "pytanie-21",
        question: "Czy będę mógł rozwijać aplikację z innym wykonawcą?",
        answer: `Tak.

Nie buduję aplikacji po to, żebyś był zmuszony korzystać wyłącznie z moich usług.

Po zakończeniu i rozliczeniu projektu otrzymujesz uzgodniony kod, dostępy i prawa, które pozwalają na dalszy rozwój zgodnie z umową i właściwymi licencjami. Możesz zdecydować, czy chcesz kontynuować współpracę ze mną, czy z innym wykonawcą.`,
      },
      {
        id: "pytanie-22",
        question: "A jeśli po zakończeniu projektu pojawi się błąd?",
        answer: `W standardowym pakiecie masz 3 miesiące gwarancji technicznej.

Jeżeli po odbiorze ujawni się usterka objęta gwarancją, zgłaszasz problem, a my zajmujemy się jego usunięciem zgodnie z warunkami umowy.

Gwarancja nie oznacza jednak bezpłatnego dodawania nowych funkcji ani nieograniczonej opieki technicznej.`,
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
        answer: `Standardowy pakiet dotyczy aplikacji internetowej, czyli takiej, którą uruchamiasz w przeglądarce.

Można z niej korzystać na urządzeniach obsługujących przeglądarkę, w zakresie dostosowanym do konkretnego projektu. Nie jest to automatycznie równoznaczne z przygotowaniem osobnych aplikacji do sklepów Google Play i App Store.

Jeżeli Twój projekt wymaga takiego rozwiązania, omówimy to podczas ustalania zakresu.`,
      },
      {
        id: "pytanie-24",
        question:
          "Czy będę mógł pokazać aplikację inwestorowi albo pierwszym klientom?",
        answer: `Tak. To jeden z najważniejszych celów pierwszej działającej wersji.

Zamiast opowiadać wyłącznie o pomyśle, będziesz mógł pokazać produkt w praktyce. Osoba zainteresowana będzie mogła zobaczyć, jak działa jego najważniejsza funkcja.

Nie oznacza to jednak, że każda pierwsza wersja jest od razu gotowa do obsługi dużej liczby użytkowników albo pełnej sprzedaży. Takie kwestie zależą od ustalonego zakresu i wymagań produktu.`,
      },
      {
        id: "pytanie-25",
        question:
          "Czy pomożesz mi sprawdzić, czy ludzie rzeczywiście chcą korzystać z mojej aplikacji?",
        answer: `W standardowym pakiecie przygotowujemy podstawową analitykę, która umożliwia obserwowanie wybranych zachowań użytkowników.

Możesz dzięki temu lepiej zrozumieć, jak ludzie korzystają z aplikacji, gdzie napotykają trudności i które elementy wymagają uwagi.

Samo uruchomienie aplikacji nie gwarantuje jednak zainteresowania rynku. Ważne jest również dotarcie do odpowiednich odbiorców, zebranie opinii i wyciąganie wniosków z testów.`,
      },
      {
        id: "pytanie-26",
        question: "Czy po pierwszej wersji mogę dodać kolejne funkcje?",
        answer: `Oczywiście.

Pierwsza wersja nie musi zawierać całej Twojej wizji. Po jej uruchomieniu możesz sprawdzić, jak działa, zebrać doświadczenia i zdecydować o dalszym rozwoju.

Nowe funkcje, integracje albo większe zmiany omawiamy i wyceniamy osobno. Nie musisz podejmować tej decyzji już przy pierwszej umowie.`,
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
        answer: `Tak.

Pierwsza rozmowa trwa około 20 minut i jest bezpłatna. Nie zobowiązuje Cię do podpisania umowy ani zamówienia realizacji.

Chcę poznać Twój pomysł, zrozumieć najważniejsze założenia i wstępnie ocenić, czy mój sposób pracy będzie dla Ciebie odpowiedni.`,
      },
      {
        id: "pytanie-28",
        question: "Co muszę przygotować na pierwszą rozmowę?",
        answer: `Nie musisz przygotowywać żadnych dokumentów.

Warto jedynie zastanowić się, co chcesz stworzyć, kto miałby korzystać z aplikacji i co jest w niej najważniejsze.

Jeżeli masz szkice albo notatki, możesz z nich skorzystać. Ale jeśli masz wyłącznie pomysł w głowie, to również wystarczy, żeby zacząć rozmawiać.`,
      },
      {
        id: "pytanie-29",
        question:
          "Co jeśli mój projekt nie mieści się w standardowym pakiecie?",
        answer: `Powiem Ci o tym.

Nie każdy pomysł da się sensownie zrealizować w cztery tygodnie albo za 29 500 zł brutto.

Jeżeli projekt wymaga większego zakresu, możemy zastanowić się nad podzieleniem go na mniejsze etapy. Jeśli takie podejście nie będzie miało sensu, wyjaśnię Ci, dlaczego.

Wolę ustalić to na początku, niż obiecywać coś, czego później nie da się odpowiedzialnie dostarczyć.`,
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
