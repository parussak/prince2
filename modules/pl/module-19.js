window.MODULE_DATA = window.MODULE_DATA || {};
window.MODULE_DATA[19] = {
  "title": "Rozdział 19: Zamykanie projektu",
  "navLabel": "13. Zamykanie projektu",
  "contentHtml": "\n<h1 class=\"module-heading\">Moduł 13: Zamykanie projektu</h1><p class=\"ov-source\">PDF • moduł 13 • strony 294–303. Dotychczasowy moduł 10; cała jego zawartość została zachowana.</p>\n\n<section class=\"study-extension\" aria-label=\"Rozszerzenie modułu 13\">\n <div class=\"card\"><h2 class=\"card-title\">Kontrolowane zamknięcie i odpowiedzialność po projekcie</h2><p>Zamykanie projektu (CP) sprawdza, czy uzgodnione produkty zostały przekazane i zaakceptowane oraz czy można zamknąć projekt w sposób kontrolowany. Obejmuje zamknięcie planowane i przedwczesne. Kierownik projektu przygotowuje dowody akceptacji, ocenę względem Dokumentacji Inicjującej Projekt i Uzasadnienia Biznesowego, zalecenia działań następczych i rekomendację. Rada Projektu autoryzuje zamknięcie w procesie Ukierunkowywanie projektu. Praktyki Jakość, Postępy, Uzasadnienie Biznesowe i Ryzyko dostarczają informacji.</p></div>\n <div class=\"scenario-box\"><h2>Historia SnakeBite: decyzja i jej skutek</h2><p>W wydaniu SnakeBite Maya potwierdza, że gra spełnia kryteria akceptacji opisane w Opisie Produktu Końcowego Projektu. Tomek przekazuje wersję i instrukcję eksploatacji, a Zosia uzgadnia właściciela utrzymania API. Zosia porównuje rezultat z DIP, Planem Projektu i aktualnym Uzasadnieniem Biznesowym, tworzy Raport Końcowy Projektu, Raport z Lekcji i listę zaleceń dotyczących otwartych zagadnień oraz ryzyk. Korzyści, których nie można jeszcze zmierzyć, zostają objęte uzgodnionym przeglądem po projekcie. Zosia prosi Radę o zamknięcie. Gdyby Artur wcześniej wycofał finansowanie, Zosia nadal przeprowadziłaby przedwczesne zamknięcie: sprawdziłaby, co można bezpiecznie przekazać, i udokumentowała pozostałe zobowiązania.</p></div>\n <figure class=\"study-figure\"><div class=\"study-flow\"><div class=\"study-step\"><span>1</span><strong>Planowane lub przedwczesne zamknięcie</strong></div><div class=\"study-step\"><span>2</span><strong>Przekazanie i potwierdzenie akceptacji</strong></div><div class=\"study-step\"><span>3</span><strong>Ocena projektu, lekcje i zalecenia</strong></div><div class=\"study-step\"><span>4</span><strong>Rekomendacja PM → autoryzacja Rady</strong></div></div><figcaption><strong>Jak czytać schemat.</strong> Zamknięcie nie kończy automatycznie pomiaru korzyści. Odbiór produktu jest dowodem spełnienia uzgodnionych kryteriów; Rada podejmuje formalną decyzję o zamknięciu.</figcaption></figure>\n <div class=\"card\"><h2 class=\"card-title\">Role, pojęcia i produkty zarządcze</h2><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Pojęcie / produkt</th><th>Wejście lub informacja</th><th>Działanie, rezultat i odpowiedzialność</th></tr></thead><tbody><tr><td>Akceptacja i przekazanie</td><td>Opis Produktu Końcowego Projektu, dowody jakości</td><td>Potwierdź kryteria akceptacji i uzgodnij odpowiedzialność operacyjną.</td></tr><tr><td>Raport Końcowy Projektu</td><td>Porównanie wykonania z DIP, planem i Uzasadnieniem Biznesowym</td><td>Uwzględnij odchylenia, aktualne korzyści i koszty.</td></tr><tr><td>Raport z Lekcji / zalecenia</td><td>Wnioski i otwarte ryzyka lub zagadnienia</td><td>Przekaż właścicielom działań po projekcie.</td></tr><tr><td>Podejście do Zarządzania Korzyściami</td><td>Przeglądy korzyści po zamknięciu</td><td>Zidentyfikuj terminy i odpowiedzialnych za przyszły pomiar.</td></tr></tbody></table></div><p class=\"study-trap\"><strong>Pułapka egzaminacyjna:</strong> Ukończenie implementacji nie jest dowodem akceptacji produktu ani powodem do samodzielnego zamknięcia przez kierownika projektu. Przedwczesne zamknięcie także wymaga kontrolowanej oceny.</p><p><strong>Przykład IT:</strong> Historia pokazuje przepływ decyzji przy wydaniu gry i integracji API. Zespół może używać tablicy pracy, automatycznych testów i iteracji, lecz uzgodnione produkty, jakość, tolerancje oraz uprawnienia pozostają podstawą decyzji PRINCE2.</p></div>\n <div class=\"card\"><strong id=\"study-score-13\">Wynik: 0/0</strong> <button class=\"btn-submit\" type=\"button\" onclick=\"resetStudyModule(13)\">Resetuj odpowiedzi tego modułu</button></div>\n</section><div class=\"scenario-box\">\n<p><em>Gra SnakeBite trafiła na sklepowe serwery Google Play i App Store. Zbiera rewelacyjne opinie graczy! Maya (Główny Użytkownik) uroczyście podpisuje protokół końcowego odbioru.</em></p>\n<p><em>Zosia w procesie **Closing a Project (CP)** dopina wszystko na ostatni guzik: przekazuje utrzymanie gry do działu operacyjnego (**BAU - Business as Usual**), sporządza **Raport Końcowy Projektu**, zbiera wnioski wyciągnięte z prac do **Raportu z Lekcji**, a pomysły na przyszłość (np. tryb Multiplayer) spisuje jako **Rekomendacje Działań Następczych (Follow-on action recommendations)**. Wreszcie przedstawia Radzie Projektu wniosek o formalne zamknięcie projektu.</em></p>\n</div>\n<div class=\"card\">\n<h2 class=\"card-title\">🏁 Główny Cel i Zadania Procesu CP (Odwracane Kafelki)</h2>\n<p style=\"margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem;\">\n          Zamknięcie projektu w PRINCE2 to proces planowy i ustrukturyzowany. Kliknij kafelki:\n        </p>\n<div class=\"tile-grid\">\n<div class=\"flip-tile\" onclick=\"this.classList.toggle('flipped')\">\n<div class=\"flip-tile-inner\">\n<div class=\"tile-front\">\n<div>\n<div class=\"tile-icon\">✅</div>\n<div class=\"tile-title\">1. Potwierdzenie Akceptacji</div>\n<div class=\"tile-desc\">Formalny odbiór produktów przez użytkowników.</div>\n</div>\n<div class=\"flip-prompt\">🔄 Kliknij po szczegóły</div>\n</div>\n<div class=\"tile-back\">\n<div class=\"tile-back-header\">\n<span class=\"tile-back-title\">Akceptacja Odbioru</span>\n<span class=\"tile-back-badge\">CP</span>\n</div>\n<div class=\"tile-back-body\">\n                  Upewnienie się, że wszystkie produkty specjalistyczne zostały odebrane przez Głównego Użytkownika i spełniają kryteria akceptacji z Opisu Produktu Projektu.\n                </div>\n<div class=\"flip-prompt\">🔄 Kliknij, aby powrócić</div>\n</div>\n</div>\n</div>\n<div class=\"flip-tile\" onclick=\"this.classList.toggle('flipped')\">\n<div class=\"flip-tile-inner\">\n<div class=\"tile-front\">\n<div>\n<div class=\"tile-icon\">🔄</div>\n<div class=\"tile-title\">2. Przekazanie do BAU</div>\n<div class=\"tile-desc\">Przejście produktów do utrzymania operacyjnego.</div>\n</div>\n<div class=\"flip-prompt\">🔄 Kliknij po szczegóły</div>\n</div>\n<div class=\"tile-back\">\n<div class=\"tile-back-header\">\n<span class=\"tile-back-title\">Przekazanie do BAU</span>\n<span class=\"tile-back-badge\">CP</span>\n</div>\n<div class=\"tile-back-body\">\n                  Upewnienie się, że jednostki operacyjne (Business as Usual) są w pełni przygotowane do utrzymywania i wspierania produktów po rozformowaniu zespołu projektowego.\n                </div>\n<div class=\"flip-prompt\">🔄 Kliknij, aby powrócić</div>\n</div>\n</div>\n</div>\n<div class=\"flip-tile\" onclick=\"this.classList.toggle('flipped')\">\n<div class=\"flip-tile-inner\">\n<div class=\"tile-front\">\n<div>\n<div class=\"tile-icon\">📈</div>\n<div class=\"tile-title\">3. Przegląd Korzyści</div>\n<div class=\"tile-desc\">Aktualizacja planu pomiaru korzyści po projekcie.</div>\n</div>\n<div class=\"flip-prompt\">🔄 Kliknij po szczegóły</div>\n</div>\n<div class=\"tile-back\">\n<div class=\"tile-back-header\">\n<span class=\"tile-back-title\">Plan Korzyści</span>\n<span class=\"tile-back-badge\">CP</span>\n</div>\n<div class=\"tile-back-body\">\n                  Ocena już osiągniętych korzyści oraz aktualizacja Podejścia do Zarządzania Korzyściami o harmonogram przeglądów poprojektowych dla korzyści mierzalnych w czasie.\n                </div>\n<div class=\"flip-prompt\">🔄 Kliknij, aby powrócić</div>\n</div>\n</div>\n</div>\n<div class=\"flip-tile\" onclick=\"this.classList.toggle('flipped')\">\n<div class=\"flip-tile-inner\">\n<div class=\"tile-front\" style=\"border: 2px solid #ef4444;\">\n<div>\n<div class=\"tile-icon\">⚠️</div>\n<div class=\"tile-title\">4. Przedwczesne Zamknięcie</div>\n<div class=\"tile-desc\">Premature closure – zamknięcie przed terminem.</div>\n</div>\n<div class=\"flip-prompt\">🔄 Kliknij po szczegóły</div>\n</div>\n<div class=\"tile-back\">\n<div class=\"tile-back-header\">\n<span class=\"tile-back-title\">Premature Closure</span>\n<span class=\"tile-back-badge\">Awarie/Decyzja</span>\n</div>\n<div class=\"tile-back-body\">\n                  Proces CP jest uruchamiany RÓWNIEŻ w przypadku przedwczesnego zamknięcia projektu (np. brak opłacalności). Zapewnia zabezpieczenie dotychczas wytworzonych produktów i odzyskanie zasobów.\n                </div>\n<div class=\"flip-prompt\">🔄 Kliknij, aby powrócić</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"remember-box\">\n<div class=\"remember-badge\">💡 Zapamiętaj na egzamin!</div>\n<div class=\"remember-text\">\n          Kierownik Projektu **NIE ZAMYKA** projektu samodzielnie! W procesie CP Kierownik Projektu przygotowuje wniosek o zamknięcie, a ostateczną decyzję o formalnym zamknięciu projektu podejmuje **Rada Projektu w procesie Directing a Project (DP)**.\n        </div>\n</div>\n<div class=\"card quiz-section\">\n<h2 class=\"card-title\">Scenariusz SnakeBite: Finałowe Zamknięcie</h2>\n<div id=\"m13-story-quiz\"></div>\n</div>\n<div class=\"hard-knowledge-header\">\n<div class=\"hard-knowledge-title\">🎓 Twarda wiedza pod egzamin Foundation (Closing)</div>\n<div class=\"hard-knowledge-subtitle\">Oficjalne definicje, produkty zarządcze i test pytaniowy.</div>\n</div>\n<div class=\"hard-knowledge-content\">\n<div class=\"definition-item\">\n<div class=\"definition-term\">Raport Końcowy Projektu <span class=\"definition-term-en\">(End project report)</span></div>\n<div style=\"font-size: 0.92rem; color: #334155; margin-top: 0.2rem;\">Dokument sporządzany przez PM w procesie CP, podsumowujący wykonanie projektu w stosunku do pierwotnych linii bazowych (czas, koszt, zakres, jakość, korzyści, ryzyko, zrównoważony rozwój).</div>\n</div>\n<div class=\"definition-item\">\n<div class=\"definition-term\">Rekomendacje działań następczych <span class=\"definition-term-en\">(Follow-on action recommendations)</span></div>\n<div style=\"font-size: 0.92rem; color: #334155; margin-top: 0.2rem;\">Dokument przekazujący jednostkom operacyjnym otwarte ryzyka, nierozwiązane zagadnienia oraz pomysły na udoskonalenia po zamknięciu projektu.</div>\n</div>\n<h3 style=\"margin-top:1.5rem; margin-bottom:0.8rem; font-size:1.05rem; color:var(--text-dark);\">📄 Produkty Zarządcze Procesu Zamknięcia</h3>\n<div class=\"doc-table-container\">\n<table class=\"doc-table\">\n<thead>\n<tr>\n<th>Dokument Zarządczy</th>\n<th>Twórca</th>\n<th>Cel i Zawartość</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Raport Końcowy Projektu</strong><br/><em>(End project report)</em></td>\n<td>Kierownik Projektu (PM)</td>\n<td>Ocena realizacji celów wykonawczych, podsumowanie wyników, potwierdzenie odbioru produktów przez klientów.</td>\n</tr>\n<tr>\n<td><strong>Raport z Lekcji</strong><br/><em>(Lessons report)</em></td>\n<td>Kierownik Projektu (PM)</td>\n<td>Dokument zawierający udokumentowane doświadczenia, dobre praktyki i błędy z projektu do wykorzystania w przyszłych przedsięwzięciach.</td>\n</tr>\n<tr>\n<td><strong>Rekomendacje Działań Następczych</strong><br/><em>(Follow-on action recommendations)</em></td>\n<td>Kierownik Projektu (PM)</td>\n<td>Lista otwartych spraw, ryzyk oraz zalecanych prac eksploatacyjnych przekazywana do zespołu BAU.</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"quiz-section\">\n<div id=\"m13-exam-quiz\"></div>\n</div>\n</div>\n<div style=\"text-align: center; margin-top: 2rem;\"><h2 style=\"color: var(--accent-purple);\">🎴 Fiszki - Moduł 13</h2></div>\n<div class=\"flashcards-container\" id=\"m13-flashcards\"></div>\n",
  "storyQuiz": [
    {
      "question": "1. Gra SnakeBite została oficjalnie odebrana przez Mayę. Zosia przygotowuje dokumentację do przekazania gry do stałego utrzymania. Jak nazywamy to środowisko docelowe?",
      "options": [
        "BAU (Business as Usual)",
        "Projekt powiązany",
        "Środowisko testowe",
        "Etap Inicjowania"
      ],
      "correct": 0,
      "explanation": "BAU (Business as Usual) to działalność operacyjna, do której trafiają produkty po zamknięciu projektu."
    },
    {
      "question": "2. Podczas prac pojawiły się pomysły na nowe funkcje (tryb Multiplayer), na które zabrakło budżetu. Gdzie Zosia zapisuje te propozycje na przyszłość?",
      "options": [
        "W Rekomendacjach Działań Następczych (Follow-on action recommendations)",
        "W Dzienniku Projektu",
        "W Rejestrze Jakości",
        "Wyrzuca je do kosza"
      ],
      "correct": 0,
      "explanation": "Rekomendacje działań następczych przekazują do BAU otwarte sprawy, ryzyka i pomysły na rozwój."
    },
    {
      "question": "3. Zarząd PixelBite skasował inny projekt z powodu braku opłacalności. W jakim procesie nastąpi jego kontrolowane zamknięcie?",
      "options": [
        "W procesie CP (Closing a Project) - przedwczesne zamknięcie",
        "W procesie SU",
        "W procesie MP",
        "Projekt kasuje się bez żadnego procesu"
      ],
      "correct": 0,
      "explanation": "Proces CP realizuje się zarówno przy planowym zakończeniu, jak i przy przedwczesnym zamknięciu (premature closure)."
    },
    {
      "question": "4. Zosia zbiera wnioski i dobre praktyki z całego okresu trwania projektu SnakeBite. W jakim dokumencie je publikuje?",
      "options": [
        "W Raportie z Lekcji (Lessons report)",
        "W Planie Etapu",
        "W Rejestrze Interesariuszy",
        "W PID"
      ],
      "correct": 0,
      "explanation": "Raport z Lekcji dokumentuje doświadczenia projektowe do wykorzystania w przyszłości."
    },
    {
      "question": "5. Zosia kończy przygotowywać Raport Końcowy Projektu. Kto podejmuje OSTATECZNĄ decyzję o formalnym zamknięciu projektu?",
      "options": [
        "Rada Projektu (w procesie DP)",
        "Kierownik Projektu samodzielnie",
        "Główny Programista",
        "Testerzy"
      ],
      "correct": 0,
      "explanation": "Rada Projektu podejmuje formalną decyzję o zamknięciu projektu na wniosek PM z procesu CP."
    },
    {
      "question": "6. Co dzieje się z Podejściem do Zarządzania Korzyściami pod koniec procesu CP?",
      "options": [
        "Jest niszczone.",
        "Jest aktualizowane o plan i harmonogram przeglądów poprojektowych.",
        "Jest wysyłane do urzędu.",
        "Zostaje zamienione na Rejestr Ryzyk."
      ],
      "correct": 1,
      "explanation": "W CP aktualizuje się plan pomiaru korzyści, które zmaterializują się po zamknięciu projektu."
    },
    {
      "question": "Maya porównuje wydanie z wymaganiami graczy. Co potwierdza spełnienie kryteriów akceptacji SnakeBite?",
      "options": [
        "Dowody jakości i formalna akceptacja właściwego odbiorcy",
        "Samo ukończenie kodowania",
        "Wyłącznie Raport Okresowy",
        "Wyłącznie zamknięcie repozytorium"
      ],
      "correct": 0,
      "explanation": "Akceptacja odnosi się do Opisu Produktu Końcowego Projektu."
    },
    {
      "question": "Zosia zebrała dowody odbioru i zalecenia. Kto przygotowuje rekomendację zamknięcia?",
      "options": [
        "Kierownik projektu",
        "Kierownik zespołu samodzielnie",
        "Każdy programista",
        "Biuro rachunkowe"
      ],
      "correct": 0,
      "explanation": "PM wykonuje CP i zwraca się do Rady o decyzję."
    },
    {
      "question": "Zosia występuje do Rady z rekomendacją. Kto formalnie autoryzuje zamknięcie?",
      "options": [
        "Rada Projektu",
        "Kierownik projektu bez Rady",
        "Wyłącznie zespół testowy",
        "System CI"
      ],
      "correct": 0,
      "explanation": "Autoryzacja zamknięcia należy do DP."
    },
    {
      "question": "Artur rozważa wcześniejsze wycofanie finansowania. Czy CP stosuje się przy przedwczesnym zamknięciu?",
      "options": [
        "Tak, przygotowuje kontrolowane zakończenie",
        "Nie, projekt znika bez śladu",
        "Tylko gdy wszystkie produkty są gotowe",
        "Wyłącznie w projektach bez dostawców"
      ],
      "correct": 0,
      "explanation": "Przedwczesne zamknięcie wymaga oceny i przekazania odpowiedzialności."
    },
    {
      "question": "Zosia sporządza ocenę całości SnakeBite. Z czym Zosia porównuje wynik całości w Raporcie Końcowym Projektu?",
      "options": [
        "Z DIP, Planem Projektu i Uzasadnieniem Biznesowym",
        "Wyłącznie z ostatnim sprintem",
        "Wyłącznie z budżetem Tomka",
        "Wyłącznie z listą commitów"
      ],
      "correct": 0,
      "explanation": "Raport ocenia wyniki wobec zatwierdzonych podstaw projektu."
    },
    {
      "question": "Po przekazaniu gry zostaje otwarte ryzyko API. Co zrobić z otwartym ryzykiem utrzymania API?",
      "options": [
        "Ująć je w zaleceniach działań następczych i przypisać właściciela",
        "Usunąć je bez informacji",
        "Uznać za osiągniętą korzyść",
        "Automatycznie przedłużyć etap"
      ],
      "correct": 0,
      "explanation": "Po zamknięciu ktoś musi przejąć odpowiedzialność."
    },
    {
      "question": "Korzyści ze sprzedaży będą widoczne dopiero za pół roku. Co zrobić z korzyściami możliwymi do pomiaru dopiero po wydaniu?",
      "options": [
        "Zaplanować przegląd zgodnie z Podejściem do Zarządzania Korzyściami",
        "Uznawać je już za osiągnięte",
        "Zignorować je po zamknięciu",
        "Zastąpić je liczbą testów"
      ],
      "correct": 0,
      "explanation": "Pomiar korzyści może następować po rozwiązaniu projektu."
    },
    {
      "question": "Tomek kończy przekazanie do eksploatacji. Co powinno zostać przekazane do eksploatacji?",
      "options": [
        "Zaakceptowane produkty i odpowiedzialność za ich utrzymanie",
        "Wyłącznie hasło do repozytorium",
        "Wyłącznie Raport z Punktu Kontrolnego",
        "Wyłącznie niezaakceptowane szkice"
      ],
      "correct": 0,
      "explanation": "Przekazanie zapewnia ciągłość działania po projekcie."
    }
  ],
  "examQuiz": [
    {
      "type": "standard",
      "question": "Jaki jest główny cel procesu Closing a Project (CP)?",
      "options": [
        "Napisanie pierwszej wersji kodu aplikacji.",
        "Zapewnienie stałego punktu, w którym potwierdzany jest odbiór produktów i kontrolowane zamknięcie projektu.",
        "Wykupienie nowej licencji na oprogramowanie.",
        "Zatwierdzenie Planu Inicjowania."
      ],
      "correct": 1,
      "explanation": "CP zapewnia kontrolowane i uporządkowane zamknięcie prac i przekazanie produktów."
    },
    {
      "type": "missing-word",
      "question": "Uzupełnij poniższe zdanie:\nDokument przekazujący do działalności operacyjnej (BAU) nierozwiązane zagadnienia oraz rekomendacje rozwoju to Rekomendacje Działań [...].",
      "options": [
        "Korygujących",
        "Następczych (Follow-on action recommendations)",
        "Awarjnych",
        "Zwrotnych"
      ],
      "correct": 1,
      "explanation": "Rekomendacje działań następczych zawierają wykaz otwartych spraw dla zespołu operacyjnego."
    },
    {
      "type": "standard",
      "question": "Które DWA dokumenty są bezpośrednio tworzone lub aktualizowane w procesie CP?<br>1. Raport Końcowy Projektu (End project report)<br>2. Raport z Lekcji (Lessons report)<br>3. Zarys Projektu (Project Brief)<br>4. Dokumentacja Inicjująca Projekt (PID)<br>Która kombinacja jest poprawna?",
      "options": [
        "1 i 2",
        "1 i 3",
        "2 i 4",
        "3 i 4"
      ],
      "correct": 0,
      "explanation": "W CP powstaje Raport Końcowy Projektu oraz Raport z Lekcji."
    },
    {
      "type": "negative",
      "question": "Które ze stwierdzeń NIE JEST prawdziwe dla procesu Closing a Project (CP)?",
      "options": [
        "Jest uruchamiany również w przypadku przedwczesnego skasowania projektu.",
        "Kierownik Projektu zamyka w nim projekt samodzielnie bez pytania Rady o zgodę.",
        "Obejmuje przekazanie produktów do środowiska BAU.",
        "Weryfikuje wydajność projektu względem pierwotnych linii bazowych."
      ],
      "correct": 1,
      "explanation": "PM nie ma uprawnień do samodzielnego zamknięcia – wniosek zatwierdza Rada Projektu w procesie DP."
    },
    {
      "type": "missing-word",
      "question": "Uzupełnij poniższe zdanie:\nDocelowe środowisko operacyjne organizacji, do którego przekazywane są produkty projektu po zamknięciu, określa się skrótem [...].",
      "options": [
        "PID",
        "BAU (Business as Usual)",
        "PBS",
        "PFD"
      ],
      "correct": 1,
      "explanation": "BAU (Business as Usual) oznacza stałą działalność operacyjną firmy."
    },
    {
      "type": "standard",
      "question": "Co dzieje się z niezagospodarowanymi zasobami i sprzętem pod koniec procesu CP?",
      "options": [
        "Są wyrzucane.",
        "Następuje formalne zwolnienie zasobów i ich powrót do organizacji.",
        "Przechodzą na własność PM.",
        "Są zamrażane na 10 lat."
      ],
      "correct": 1,
      "explanation": "Zwolnienie zasobów projektowych jest jednym z wymogów kontrolowanego zamknięcia."
    },
    {
      "type": "standard",
      "question": "Które DWA cele realizuje proces CP w przypadku PRZEDWCZESNEGO zamknięcia projektu?<br>1. Zabezpieczenie i udokumentowanie dotychczas wytworzonych produktów<br>2. Odzyskanie i zwolnienie zaangażowanych zasobów<br>3. Udawanie przed inwestorami, że projekt nadal trwa<br>4. Automatyczne wypłacenie premii całemu zespołowi<br>Która kombinacja jest poprawna?",
      "options": [
        "1 i 2",
        "1 i 3",
        "2 i 4",
        "3 i 4"
      ],
      "correct": 0,
      "explanation": "Przedwczesne zamknięcie wymaga zabezpieczenia dorobku oraz uwolnienia zasobów."
    },
    {
      "type": "standard",
      "question": "Które działanie wykonuje kierownik projektu przy zamknięciu projektu?",
      "options": [
        "Samodzielnie autoryzuje zamknięcie.",
        "Zwalnia Radę z oceny projektu.",
        "Przygotowuje Raport Końcowy Projektu.",
        "Jednoosobowo rozwiązuje spółkę inwestora."
      ],
      "correct": 2,
      "explanation": "Kierownik projektu przygotowuje Raport Końcowy Projektu i rekomendację zamknięcia; Rada autoryzuje zamknięcie."
    },
    {
      "question": "Co potwierdza spełnienie kryteriów akceptacji SnakeBite?",
      "options": [
        "Dowody jakości i formalna akceptacja właściwego odbiorcy",
        "Samo ukończenie kodowania",
        "Wyłącznie Raport Okresowy",
        "Wyłącznie zamknięcie repozytorium"
      ],
      "correct": 0,
      "explanation": "Akceptacja odnosi się do Opisu Produktu Końcowego Projektu."
    },
    {
      "question": "Kto przygotowuje rekomendację zamknięcia?",
      "options": [
        "Kierownik projektu",
        "Kierownik zespołu samodzielnie",
        "Każdy programista",
        "Biuro rachunkowe"
      ],
      "correct": 0,
      "explanation": "PM wykonuje CP i zwraca się do Rady o decyzję."
    },
    {
      "question": "Kto formalnie autoryzuje zamknięcie?",
      "options": [
        "Rada Projektu",
        "Kierownik projektu bez Rady",
        "Wyłącznie zespół testowy",
        "System CI"
      ],
      "correct": 0,
      "explanation": "Autoryzacja zamknięcia należy do DP."
    },
    {
      "question": "Czy CP stosuje się przy przedwczesnym zamknięciu?",
      "options": [
        "Tak, przygotowuje kontrolowane zakończenie",
        "Nie, projekt znika bez śladu",
        "Tylko gdy wszystkie produkty są gotowe",
        "Wyłącznie w projektach bez dostawców"
      ],
      "correct": 0,
      "explanation": "Przedwczesne zamknięcie wymaga oceny i przekazania odpowiedzialności."
    },
    {
      "question": "Z czym Zosia porównuje wynik całości w Raporcie Końcowym Projektu?",
      "options": [
        "Z DIP, Planem Projektu i Uzasadnieniem Biznesowym",
        "Wyłącznie z ostatnim sprintem",
        "Wyłącznie z budżetem Tomka",
        "Wyłącznie z listą commitów"
      ],
      "correct": 0,
      "explanation": "Raport ocenia wyniki wobec zatwierdzonych podstaw projektu."
    },
    {
      "question": "Co zrobić z otwartym ryzykiem utrzymania API?",
      "options": [
        "Ująć je w zaleceniach działań następczych i przypisać właściciela",
        "Usunąć je bez informacji",
        "Uznać za osiągniętą korzyść",
        "Automatycznie przedłużyć etap"
      ],
      "correct": 0,
      "explanation": "Po zamknięciu ktoś musi przejąć odpowiedzialność."
    },
    {
      "question": "Co zrobić z korzyściami możliwymi do pomiaru dopiero po wydaniu?",
      "options": [
        "Zaplanować przegląd zgodnie z Podejściem do Zarządzania Korzyściami",
        "Uznawać je już za osiągnięte",
        "Zignorować je po zamknięciu",
        "Zastąpić je liczbą testów"
      ],
      "correct": 0,
      "explanation": "Pomiar korzyści może następować po rozwiązaniu projektu."
    },
    {
      "question": "Co powinno zostać przekazane do eksploatacji?",
      "options": [
        "Zaakceptowane produkty i odpowiedzialność za ich utrzymanie",
        "Wyłącznie hasło do repozytorium",
        "Wyłącznie Raport z Punktu Kontrolnego",
        "Wyłącznie niezaakceptowane szkice"
      ],
      "correct": 0,
      "explanation": "Przekazanie zapewnia ciągłość działania po projekcie."
    },
    {
      "question": "Co ocenia Raport Końcowy Projektu?",
      "options": [
        "Wykonanie projektu i odchylenia względem jego podstaw",
        "Wyłącznie codzienny status zespołu",
        "Wyłącznie liczbę błędów w backlogu",
        "Wyłącznie kandydatury do Rady"
      ],
      "correct": 0,
      "explanation": "To podsumowanie całości na zamknięcie."
    },
    {
      "question": "Czego dotyczy Raport z Lekcji?",
      "options": [
        "Doświadczeń przydatnych w przyszłych projektach",
        "Wyłącznie prognozy kosztów jutro",
        "Wyłącznie zatwierdzenia nowego etapu",
        "Wyłącznie odbioru pojedynczego API"
      ],
      "correct": 0,
      "explanation": "Lekcje dokumentują wiedzę do ponownego użycia."
    },
    {
      "question": "Co należy zrobić przy planowanym zamknięciu?",
      "options": [
        "Sprawdzić dostarczenie, akceptację, przekazanie i działania następcze",
        "Przerwać rejestrację otwartych spraw",
        "Pozwolić zespołowi samodzielnie autoryzować zamknięcie",
        "Zaniechać przeglądu korzyści"
      ],
      "correct": 0,
      "explanation": "CP przygotowuje kontrolowaną rekomendację dla Rady."
    },
    {
      "question": "Co jest prawidłowe przy przedwczesnym zamknięciu?",
      "options": [
        "Ocenić osiągnięte produkty oraz nierozstrzygnięte zobowiązania",
        "Uznawać wszystkie produkty za ukończone",
        "Pominąć Raport Końcowy Projektu",
        "Ukryć powody decyzji"
      ],
      "correct": 0,
      "explanation": "Należy bezpiecznie rozliczyć to, co powstało, i pozostające sprawy."
    }
  ],
  "flashcards": [
    {
      "q": "Jaki jest cel procesu CP (Closing a Project)?",
      "a": "Zapewnienie kontrolowanego zamknięcia, potwierdzenie odbioru i przekazanie produktów do BAU."
    },
    {
      "q": "Kto formalnie zamyka projekt?",
      "a": "Rada Projektu (Project Board) w procesie DP, na wniosek PM z procesu CP."
    },
    {
      "q": "Co to jest BAU (Business as Usual)?",
      "a": "Działalność operacyjna firmy, do której przekazywane są produkty projektu."
    },
    {
      "q": "Co zawiera Raport Końcowy Projektu (End project report)?",
      "a": "Ocena wykonania projektu względem pierwotnych celów i linii bazowych."
    },
    {
      "q": "Co zawiera Raport z Lekcji (Lessons report)?",
      "a": "Doświadczenia, wnioski i dobre praktyki z projektu do wykorzystania w przyszłości."
    },
    {
      "q": "Co to są Rekomendacje Działań Następczych?",
      "a": "Wykaz otwartych ryzyk, zagadnień i sugestii rozwoju przekazywany do zespołu BAU."
    },
    {
      "q": "Czy proces CP stosuje się przy przedwczesnym zamknięciu?",
      "a": "Tak, CP obsługuje również przedwczesne zakończenie projektu (premature closure)."
    },
    {
      "q": "Co dzieje się z korzyściami w procesie CP?",
      "a": "Oceniane są korzyści już uzyskane, a plan pomiaru pozostałych korzyści jest aktualizowany."
    },
    {
      "q": "Co potwierdza spełnienie kryteriów akceptacji SnakeBite?",
      "a": "Dowody jakości i formalna akceptacja właściwego odbiorcy. Akceptacja odnosi się do Opisu Produktu Końcowego Projektu."
    },
    {
      "q": "Kto przygotowuje rekomendację zamknięcia?",
      "a": "Kierownik projektu. PM wykonuje CP i zwraca się do Rady o decyzję."
    },
    {
      "q": "Kto formalnie autoryzuje zamknięcie?",
      "a": "Rada Projektu. Autoryzacja zamknięcia należy do DP."
    },
    {
      "q": "Czy CP stosuje się przy przedwczesnym zamknięciu?",
      "a": "Tak, przygotowuje kontrolowane zakończenie. Przedwczesne zamknięcie wymaga oceny i przekazania odpowiedzialności."
    },
    {
      "q": "Z czym Zosia porównuje wynik całości w Raporcie Końcowym Projektu?",
      "a": "Z DIP, Planem Projektu i Uzasadnieniem Biznesowym. Raport ocenia wyniki wobec zatwierdzonych podstaw projektu."
    },
    {
      "q": "Co zrobić z otwartym ryzykiem utrzymania API?",
      "a": "Ująć je w zaleceniach działań następczych i przypisać właściciela. Po zamknięciu ktoś musi przejąć odpowiedzialność."
    },
    {
      "q": "Co zrobić z korzyściami możliwymi do pomiaru dopiero po wydaniu?",
      "a": "Zaplanować przegląd zgodnie z Podejściem do Zarządzania Korzyściami. Pomiar korzyści może następować po rozwiązaniu projektu."
    },
    {
      "q": "Co powinno zostać przekazane do eksploatacji?",
      "a": "Zaakceptowane produkty i odpowiedzialność za ich utrzymanie. Przekazanie zapewnia ciągłość działania po projekcie."
    },
    {
      "q": "Co ocenia Raport Końcowy Projektu?",
      "a": "Wykonanie projektu i odchylenia względem jego podstaw. To podsumowanie całości na zamknięcie."
    },
    {
      "q": "Czego dotyczy Raport z Lekcji?",
      "a": "Doświadczeń przydatnych w przyszłych projektach. Lekcje dokumentują wiedzę do ponownego użycia."
    },
    {
      "q": "Co należy zrobić przy planowanym zamknięciu?",
      "a": "Sprawdzić dostarczenie, akceptację, przekazanie i działania następcze. CP przygotowuje kontrolowaną rekomendację dla Rady."
    },
    {
      "q": "Co jest prawidłowe przy przedwczesnym zamknięciu?",
      "a": "Ocenić osiągnięte produkty oraz nierozstrzygnięte zobowiązania. Należy bezpiecznie rozliczyć to, co powstało, i pozostające sprawy."
    }
  ]
};
