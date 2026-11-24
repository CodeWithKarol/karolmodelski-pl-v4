# System publikacji „Wiedza”

Szablon artykułu znajduje się w `src/pages/wiedza/[...slug].astro`. Treść
artykułów pozostaje w Markdown (`src/content/wiedza/*.md`), więc moduły
redakcyjne wewnątrz treści to semantyczne fragmenty HTML stylowane przez
`src/styles/article.css`. Dzięki temu istniejący proces publikacji działa bez
zmian również dla starszych artykułów.

## Frontmatter (all optional except the existing fields)

```yaml
keyTakeaways:
  - "Jeden konkretny wniosek."
  - "Drugi wniosek."
tocLabels:
  "slug-naglowka-h2": "Krótsza etykieta"
sourcesIntro: "Skąd pochodzą materiały."
sourcesNote: "Czym różnią się źródła od doświadczenia autora."
sources:
  - group: "Nazwa grupy"
    items:
      - title: "Tytuł źródła"
        url: "https://example.com/"
        description: "Krótki opis."
download:
  title: "Tytuł materiału"
  description: "Co zawiera."
  href: "/checklista/"
  label: "Pobierz checklistę"
  meta: "PDF · 4 strony · Bez rejestracji"
  note: "Dodatkowa informacja o ścieżce pobrania."
```

`keyTakeaways`, `sources` and `download` are rendered only when present.
`tocLabels` is keyed by the heading slug (or the full heading text). Without it,
the TOC uses the heading with its leading number removed.

## Template components

- `ArticleHeader` — breadcrumbs, category, H1, lead, author, dates, cover.
- `ReadingProgress` — 2 px bar measured against the article, not the footer.
- `ArticleTOC` — sticky desktop sidebar and native mobile `<details>`.
- `KeyTakeaways` — 3–5 points, after the lead.
- `ArticleFAQ` — renders only when `faq` is present.
- `ArticleChecklistCTA` — renders only when `download` is present.
- `ArticleSources` — editorial bibliography from frontmatter.
- `ArticleAuthor` — portrait, bio, link to `/o-mnie/`.
- `RelatedArticles` — manual `related` first, then thematic fallback, max 3.
- `ArticleFinalCTA` — calm invitation, no price/package details.

## Inline modules

Use a top-level HTML block in the Markdown. The classes are the public API.

Three questions:

```html
<div class="article-module article-questions" role="group" aria-labelledby="pytania-na-start">
  <p class="article-module__eyebrow" id="pytania-na-start">Trzy pytania na start</p>
  <ol>
    <li><strong>Pytanie?</strong> Krótkie wyjaśnienie.</li>
  </ol>
</div>
```

Comparison:

```html
<div class="article-module article-compare" role="group" aria-labelledby="porownanie">
  <p class="article-module__eyebrow" id="porownanie">Co daje więcej</p>
  <div class="article-compare__grid">
    <div class="article-compare__col">
      <h3>Mniej pomocne</h3>
      <ul><li>Przykład.</li></ul>
    </div>
    <div class="article-compare__col article-compare__col--signal">
      <h3>Bardziej pomocne</h3>
      <ul><li>Przykład.</li></ul>
    </div>
  </div>
  <p class="article-module__note">Jedno zdanie podsumowania.</p>
</div>
```

Diagram:

```html
<figure class="article-module article-diagram" aria-labelledby="diagram">
  <p class="article-module__eyebrow" id="diagram">Przykład</p>
  <div class="article-diagram__grid">
    <div class="article-diagram__col">
      <p class="article-diagram__label">Pełna wizja</p>
      <ul><li>Element.</li></ul>
    </div>
    <div class="article-diagram__arrow" aria-hidden="true">→</div>
    <div class="article-diagram__col article-diagram__col--focus">
      <p class="article-diagram__label">Pierwsza wersja</p>
      <ul><li>Element.</li></ul>
    </div>
  </div>
  <figcaption>Co pokazuje diagram.</figcaption>
</figure>
```

Pull quote:

```html
<blockquote class="article-pullquote">
  <p>Jedno zdanie, które warto wyeksponować.</p>
</blockquote>
```

Case study:

```html
<div class="article-module article-case-study" role="group" aria-labelledby="case">
  <p class="article-module__eyebrow" id="case">Case study · Nazwa</p>
  <div class="article-case-study__head">
    <h3>Tytuł przypadku</h3>
    <p class="article-case-study__meta">Fakty · zakres · czas</p>
  </div>
  <figure>
    <!-- existing video/figure markup -->
  </figure>
  <a class="article-case-study__link" href="/realizacje/.../">Zobacz studium →</a>
</div>
```

Cost factors:

```html
<div class="article-module article-factors" role="group" aria-labelledby="czynniki">
  <p class="article-module__eyebrow" id="czynniki">Co wpływa na cenę</p>
  <ol>
    <li><span class="article-factors__num">01</span><div><strong>Czynnik</strong><span>Krótki opis.</span></div></li>
  </ol>
</div>
```

Process:

```html
<div class="article-module article-process" role="group" aria-labelledby="etapy">
  <p class="article-module__eyebrow" id="etapy">Etapy realizacji</p>
  <ol>
    <li><strong>Etap</strong><span>Co się dzieje.</span></li>
  </ol>
</div>
```

Exercise:

```html
<div class="article-module article-exercise" data-article-exercise>
  <p class="article-module__eyebrow">Ćwiczenie · 10 minut</p>
  <h3 id="exercise-title">Tytuł ćwiczenia</h3>
  <p class="article-exercise__intro">Instrukcja.</p>
  <div class="article-exercise__fields" role="group" aria-labelledby="exercise-title">
    <div>
      <label for="exercise-audience">Pole</label>
      <textarea id="exercise-audience" name="audience" rows="2"></textarea>
    </div>
  </div>
  <div class="article-exercise__actions">
    <button type="button" class="article-exercise__button" data-exercise-copy hidden>Kopiuj odpowiedzi</button>
    <span class="article-exercise__status" data-exercise-status aria-live="polite"></span>
  </div>
  <p class="article-exercise__note">Odpowiedzi nie są nigdzie wysyłane.</p>
</div>
```

Editorial image (Markdown image + caption):

```md
![Opis obrazu](../../assets/images/wiedza/nazwa.webp)

<p class="article-caption">Podpis pod obrazem.</p>
```

Images use the existing Astro pipeline (`loading="lazy"`, WebP, explicit
dimensions). The hero image in `ArticleHeader` is eager with high priority
because it can be the LCP element.
## Rozszerzenia biblioteki (W02–W11)

### RangeChart

```html
<div class="article-module article-range" role="group" aria-labelledby="zakres">
  <p class="article-module__eyebrow" id="zakres">Orientacyjne przedziały</p>
  <ul>
    <li>
      <div class="article-range__head"><span>Prototyp</span><strong>5–10 tys. zł</strong></div>
      <div class="article-range__track" aria-hidden="true">
        <span class="article-range__bar" style="--from:1;--to:2"></span>
      </div>
    </li>
  </ul>
  <p class="article-module__note">Skala i zastrzeżenia.</p>
</div>
```

`--from` i `--to` to procenty skali. Wartości liczbowe zawsze pozostają
widoczne w tekście; pasek jest tylko wizualizacją.

### InteractiveChecklist

```html
<div class="article-module article-checklist" data-article-checklist role="group" aria-labelledby="lista">
  <p class="article-module__eyebrow" id="lista">Lista kontrolna</p>
  <ul>
    <li><label><input type="checkbox"> <span>Punkt do sprawdzenia.</span></label></li>
  </ul>
  <p class="article-checklist__status" data-checklist-status aria-live="polite">Zaznacz pozycje</p>
</div>
```

Skrypt w `[...slug].astro` aktualizuje licznik. Bez JavaScriptu lista nadal
działa jako zwykłe pola wyboru, a status pozostaje instrukcją.

### EducationalCalculator

```html
<div class="article-module article-calculator" data-calculator="hours-rate">
  <p class="article-module__eyebrow">Kalkulator orientacyjny</p>
  <div class="article-calculator__fields">
    <label for="calc-hours">Liczba godzin<input id="calc-hours" data-calc="hours" type="number" min="0"></label>
    <label for="calc-rate">Stawka netto (zł)<input id="calc-rate" data-calc="rate" type="number" min="0"></label>
  </div>
  <div class="article-calculator__results" aria-live="polite">
    <p><span>Koszt netto</span><strong data-calc-output="net">—</strong></p>
    <p><span>Koszt brutto (VAT 23%)</span><strong data-calc-output="gross">—</strong></p>
  </div>
  <p class="article-calculator__note">To obliczenie orientacyjne, a nie wycena.</p>
</div>
```

Dostępne tryby: `hours-rate` (godziny × stawka, netto i brutto 23%) oraz
`first-year` (infrastruktura + usługi + opieka miesięcznie, rocznie i pierwszy
rok). Puste lub ujemne wartości dają „—”. Kalkulator nigdy nie jest ofertą.

### TechnologyLayers

```html
<div class="article-module article-layers" role="group" aria-labelledby="warstwy">
  <p class="article-module__eyebrow" id="warstwy">Warstwy aplikacji</p>
  <ol>
    <li><strong>Frontend</strong><span>Interfejs użytkownika.</span></li>
    <li><strong>Backend</strong><span>Logika i reguły.</span></li>
    <li><strong>Baza danych</strong><span>Przechowywanie informacji.</span></li>
  </ol>
</div>
```

### DecisionList

```html
<div class="article-module article-decision" role="group" aria-labelledby="wybor">
  <p class="article-module__eyebrow" id="wybor">Od czego zacząć?</p>
  <ul>
    <li><strong>Sytuacja użytkownika</strong><span>Rekomendacja</span></li>
  </ul>
</div>
```

To lekki diagram decyzyjny: pytanie/sytuacja po lewej, kierunek po prawej.
Nie zastępuje rankingu ani punktacji wykonawców.

### ExperimentCard

```html
<div class="article-module article-experiment" role="group" aria-labelledby="eksperyment">
  <p class="article-module__eyebrow" id="eksperyment">Karta eksperymentu</p>
  <dl>
    <div><dt>Hipoteza</dt><dd>...</dd></div>
    <div><dt>Grupa</dt><dd>...</dd></div>
    <div><dt>Sygnał</dt><dd>...</dd></div>
    <div><dt>Próg</dt><dd>...</dd></div>
  </dl>
</div>
```

### Levels

```html
<div class="article-module article-levels" role="group" aria-labelledby="poziomy">
  <p class="article-module__eyebrow" id="poziomy">Trzy poziomy</p>
  <div class="article-levels__grid">
    <div class="article-levels__item article-levels__item--signal">
      <span class="article-levels__num">01 · Teraz</span>
      <h3>Poziom</h3>
      <p>Opis.</p>
    </div>
  </div>
</div>
```

### ProductBriefBuilder

Użyj znacznika `data-article-brief` i tych samych klas co ćwiczenie:

```html
<div class="article-module article-exercise" data-article-brief>
  <p class="article-module__eyebrow">Brief w skrócie</p>
  <h3 id="brief-title">Tytuł</h3>
  <p class="article-exercise__intro">Instrukcja.</p>
  <div class="article-exercise__fields" role="group" aria-labelledby="brief-title">
    <div><label for="brief-name">Pole</label><textarea id="brief-name"></textarea></div>
  </div>
  <div class="article-exercise__actions">
    <button type="button" class="article-exercise__button" data-exercise-copy hidden>Kopiuj brief</button>
    <span class="article-exercise__status" data-exercise-status aria-live="polite"></span>
  </div>
  <p class="article-exercise__note">Odpowiedzi nie są nigdzie wysyłane.</p>
</div>
```

Wszystkie pola z `id` są kopiowane lokalnie. Brak rejestracji, brak requestów
sieciowych, brak zapisu poza formularzem.

### Obrazy w treści

```md
![Opis obrazu](../../assets/images/journey-o02-planning.webp)

<p class="article-caption">Podpis pod obrazem.</p>
```

Obrazy z Markdown przechodzą przez pipeline Astro (WebP, `loading="lazy"`,
wymiary). Nie dodawaj zdjęć wyłącznie dla ozdoby — każde powinno ilustrować
konkretny fragment treści.

## Mapa dodatkowych materiałów A01–A08

| ID | Plik | Wykorzystanie |
| --- | --- | --- |
| A01 | `editorial/a01-focus-on-essentials.webp` | W06 — priorytety funkcji |
| A02 | `editorial/a02-understanding-user-needs.webp` | W05 — rozmowy i potrzeby użytkowników |
| A03 | `editorial/a03-from-idea-to-first-action.webp` | W10 — brief i pierwszy krok |
| A04 | `editorial/a04-complexity-and-scope.webp` | W02 — prosty i rozbudowany zakres |
| A05 | `editorial/a05-controlled-access.webp` | W03 — kontrola dostępu i własności |
| A06 | `editorial/a06-testing-hypotheses.webp` | W05 — walidacja i obserwacja |
| A07 | `editorial/a07-layers-of-technology.webp` | W08 — warstwy technologii |
| A08 | `editorial/a08-stable-foundations.webp` | W09 — fundamenty gotowego produktu |

Wszystkie są 16:9, WebP, lazy i mają jawne wymiary. Nie używaj ich jako
dekoracji — każde zdjęcie ma podpis i odnosi się do konkretnego fragmentu.

| A09 | `editorial/a09-collaboration-models.webp` | W04 — trzy modele współpracy (materiał dodatkowy) |
