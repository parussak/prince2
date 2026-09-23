# PRINCE2 — pliki do redakcji

**Do pracy nad treścią używaj katalogu `editor/`.** Pliki `modules/` są wynikiem składania i są wczytywane przez `index.html`. Nie redaguj obu kopii niezależnie.

```text
editor/
  pl/module-07/
    content.html      tekst lekcji, historia, tabele i wizualizacje
    storyQuiz.json    pytania do historii
    examQuiz.json     pytania egzaminacyjne
    flashcards.json   fiszki
    meta.json         tytuł, etykieta i ewentualna flaga placeholdera
  en/module-07/        te same części po angielsku
modules/pl/module-07.js    wygenerowany plik aplikacji
modules/en/module-07.js    wygenerowany plik aplikacji
```

## Praca krok po kroku

1. Edytuj wybrany plik w `editor/pl/` lub `editor/en/`. Każda lekcja jest osobnym plikiem HTML z normalnymi znakami nowej linii; pytania i fiszki są czytelnym JSON-em.
2. W katalogu głównym projektu uruchom `python tools/build.py` (w Windows może to być `py tools/build.py`). Skrypt sprawdza strukturę pytań, a następnie odtwarza wszystkie 40 plików JS.
3. Uruchom `python -m http.server 8000` i otwórz `http://localhost:8000/` w przeglądarce. Otwieranie `index.html` jako `file://` może zablokować wczytywanie skryptów modułów.
4. Przy zmianach pytań sprawdź również ich odpowiedzi, indeks `correct` (od 0 do 3) i wyjaśnienia. Skrypt kontroluje format, lecz nie potrafi potwierdzić poprawności merytorycznej.

Przykładowy przegląd rozdziału 7: `editor/pl/module-07/content.html` oraz `editor/pl/module-07/examQuiz.json`. Dla pytania egzaminacyjnego z listą odpowiedź pozostaje **jednym** indeksem kombinacji; wcześniejsza wersja wymagająca dwóch kliknięć nie odpowiada formatowi Foundation.

Nie zmieniaj identyfikatorów `id="m...-story-quiz"`, `id="m...-exam-quiz"` i `id="m...-flashcards"` w lekcji: aplikacja używa ich do umieszczania quizów i fiszek. W rozdziałach 15 i 17 znajdują się odsyłacze (`_placeholder`); puste `content.html` jest celowe. Globalny silnik i style pozostają w `index.html`.

Opcjonalnie `node tools/export.cjs` ponownie wyeksportuje zawartość *aktualnych* plików `modules/` do `editor/`, **nadpisując** pliki redakcyjne. Używaj go tylko przy imporcie innej wersji aplikacji.
