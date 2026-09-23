window.MODULE_DATA = window.MODULE_DATA || {};
window.MODULE_DATA[16] = {
  "title": "Rozdział 16: Kontrolowanie etapu i zarządzanie dostarczaniem produktów",
  "navLabel": "9. Kontrolowanie etapu i zarządzanie dostarczaniem produktów",
  "contentHtml": "<h1 class=\"module-heading\">Moduł 9: Kontrolowanie etapu i zarządzanie dostarczaniem produktów</h1><p class=\"ov-source\">PDF • moduł 9 • strony 222–241. Historia i pytania są autorskim uzupełnieniem dydaktycznym.</p>\n<section class=\"study-extension\" aria-label=\"Rozszerzenie modułu 9\">\n <div class=\"card\"><h2 class=\"card-title\">Dwie pętle: sterowanie etapem i dostarczanie produktów</h2><p>Kontrolowanie etapu (CS) daje kierownikowi projektu bieżącą kontrolę nad przydzielaniem pracy, stanem etapu i raportowaniem Radzie Projektu. Zarządzanie dostarczaniem produktów (MP) reguluje uzgodnienie, wykonanie, ocenę i oddanie produktów przez kierownika zespołu. Oba procesy działają równolegle w każdym etapie dostarczania, po autoryzacji etapu. Łączą pryncypia koncentracji na produktach, etapowego zarządzania i zarządzania przez wyjątki z praktykami Plany, Jakość, Ryzyko, Zagadnienia i Postępy.</p></div>\n <div class=\"scenario-box\"><h2>Historia SnakeBite: decyzja i jej skutek</h2><p>W etapie bety SnakeBite Zosia (kierownik projektu) zleca Tomkowi (kierownik zespołu) pakiet integracji rankingu API. Uzgadniają opis Grupy Zadań: schemat danych, test opóźnienia, termin, tolerancje i rytm Raportów z Punktów Kontrolnych. Tomek najpierw ocenia wykonalność i przyjmuje pakiet; dopiero wtedy organizuje pracę. Dostawca API zapowiada zmianę limitu: Tomek odnotowuje zagadnienie i przekazuje prognozę Zosi. Zosia sprawdza konsekwencje dla etapu, uzgadnia działanie korygujące w granicach tolerancji i informuje Radę Raportem Okresowym. Gdyby prognoza przekroczyła tolerancję etapu, przygotowałaby Raport Nadzwyczajny. Po testach Tomek ocenia pakiet i zgłasza ukończenie, a Zosia odbiera potwierdzone produkty; samo „zielone CI” nie przesądza o jakości ani formalnej akceptacji.</p></div>\n <figure class=\"study-figure\"><div class=\"study-flow\"><div class=\"study-step\"><span>1</span><strong>CS: autoryzuj Grupę Zadań</strong></div><div class=\"study-step\"><span>2</span><strong>MP: przyjmij i wykonaj</strong></div><div class=\"study-step\"><span>3</span><strong>MP: oceń, raportuj i zgłoś ukończenie</strong></div><div class=\"study-step\"><span>4</span><strong>CS: odbierz, oceń etap i raportuj</strong></div></div><figcaption><strong>Jak czytać schemat.</strong> Cykl Grupy Zadań: strzałki pokazują przekazanie odpowiedzialności. Raport z Punktu Kontrolnego idzie od Tomka do Zosi; Raport Okresowy od Zosi do Rady. Zagadnienie lub ryzyko jest oceniane na właściwym poziomie tolerancji.</figcaption></figure>\n <div class=\"card\"><h2 class=\"card-title\">Role, pojęcia i produkty zarządcze</h2><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Pojęcie / produkt</th><th>Wejście lub informacja</th><th>Działanie, rezultat i odpowiedzialność</th></tr></thead><tbody><tr><td>Kierownik projektu / CS</td><td>Opis Grupy Zadań, Plan Etapu, Dziennik Projektu</td><td>Przydziela i monitoruje, odbiera pakiet, ocenia etap, reaguje i przekazuje Raport Okresowy lub Nadzwyczajny.</td></tr><tr><td>Kierownik zespołu / MP</td><td>Opis Grupy Zadań, Plan Zespołu (opcjonalny), Raport z Punktu Kontrolnego</td><td>Przyjmuje, wykonuje, sprawdza produkty i zgłasza ukończenie; informuje o prognozowanym przekroczeniu tolerancji pakietu.</td></tr><tr><td>Kontrola jakości</td><td>Opis Produktu, Rejestr Jakości, Rejestr Produktów</td><td>Wyniki przeglądów wspierają ocenę, czy produkt spełnia uzgodnione kryteria.</td></tr></tbody></table></div><p class=\"study-trap\"><strong>Pułapka egzaminacyjna:</strong> Przekroczenie tolerancji Grupy Zadań zgłasza się kierownikowi projektu; przekroczenie tolerancji etapu wymaga Raportu Nadzwyczajnego do Rady. Raport z Punktu Kontrolnego nie zastępuje Raportu Okresowego.</p><p><strong>Przykład IT:</strong> Historia pokazuje przepływ decyzji przy wydaniu gry i integracji API. Zespół może używać tablicy pracy, automatycznych testów i iteracji, lecz uzgodnione produkty, jakość, tolerancje oraz uprawnienia pozostają podstawą decyzji PRINCE2.</p></div>\n <div class=\"card\"><strong id=\"study-score-9\">Wynik: 0/0</strong> <button class=\"btn-submit\" type=\"button\" onclick=\"resetStudyModule(9)\">Resetuj odpowiedzi tego modułu</button></div>\n</section><div class=\"scenario-box\"><p>Zosia rozpoczyna etap budowy wersji beta SnakeBite. Uzgadnia z Tomkiem Grupę Zadań: sterowanie wężem, zapis wyników i integrację rankingu. Ustalają kryteria jakości, ograniczenia, tolerancje oraz częstotliwość raportowania.</p><p>Tomek przed przyjęciem pracy sprawdza zasoby i wykonalność. Podczas realizacji zespół testuje produkty, zapisuje wyniki kontroli jakości i przekazuje Zosi Raporty z Punktów Kontrolnych.</p><p>Awaria usługi rankingu zagraża terminowi Grupy Zadań. Tomek informuje Zosię. Ona analizuje wpływ na cały etap: jeżeli nadal mieści się w jego tolerancjach, może podjąć działanie korygujące; prognozowane przekroczenie tolerancji etapu wymaga eskalacji do Rady.</p></div><div class=\"card\"><h2 class=\"card-title\">Najważniejsze pojęcia — odwracane kafelki</h2><div class=\"tile-grid\"><div aria-pressed=\"false\" class=\"flip-tile\" onclick=\"this.classList.toggle('flipped');this.setAttribute('aria-pressed',this.classList.contains('flipped'))\" onkeydown=\"if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click()}\" role=\"button\" tabindex=\"0\"><div class=\"flip-tile-inner\" style=\"display:grid;height:auto;min-height:245px\"><div class=\"tile-front\" style=\"grid-area:1/1\"><div class=\"tile-title\">Kontrolowanie etapu (CS)</div><div class=\"flip-prompt\">Kliknij po szczegóły</div></div><div class=\"tile-back\" style=\"position:relative;grid-area:1/1\"><div class=\"tile-back-header\">Kontrolowanie etapu (CS)</div><div class=\"tile-back-body\">Kierownik projektu przydziela i monitoruje pracę, przegląda stan etapu, raportuje postępy, zajmuje się zagadnieniami i ryzykiem oraz reaguje na odchylenia.</div></div></div></div><div aria-pressed=\"false\" class=\"flip-tile\" onclick=\"this.classList.toggle('flipped');this.setAttribute('aria-pressed',this.classList.contains('flipped'))\" onkeydown=\"if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click()}\" role=\"button\" tabindex=\"0\"><div class=\"flip-tile-inner\" style=\"display:grid;height:auto;min-height:245px\"><div class=\"tile-front\" style=\"grid-area:1/1\"><div class=\"tile-title\">Zarządzanie dostarczaniem produktów (MP)</div><div class=\"flip-prompt\">Kliknij po szczegóły</div></div><div class=\"tile-back\" style=\"position:relative;grid-area:1/1\"><div class=\"tile-back-header\">Zarządzanie dostarczaniem produktów (MP)</div><div class=\"tile-back-body\">Kierownik zespołu przyjmuje Grupę Zadań, zarządza jej wykonaniem i przekazuje ukończone produkty. MP łączy dostarczanie specjalistyczne z zarządzaniem projektem.</div></div></div></div><div aria-pressed=\"false\" class=\"flip-tile\" onclick=\"this.classList.toggle('flipped');this.setAttribute('aria-pressed',this.classList.contains('flipped'))\" onkeydown=\"if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click()}\" role=\"button\" tabindex=\"0\"><div class=\"flip-tile-inner\" style=\"display:grid;height:auto;min-height:245px\"><div class=\"tile-front\" style=\"grid-area:1/1\"><div class=\"tile-title\">Grupa Zadań</div><div class=\"flip-prompt\">Kliknij po szczegóły</div></div><div class=\"tile-back\" style=\"position:relative;grid-area:1/1\"><div class=\"tile-back-header\">Grupa Zadań</div><div class=\"tile-back-body\">Uzgodnienie między kierownikiem projektu a kierownikiem zespołu dotyczące produktów i warunków ich dostarczenia. Nie jest po prostu listą zadań bez kryteriów jakości.</div></div></div></div><div aria-pressed=\"false\" class=\"flip-tile\" onclick=\"this.classList.toggle('flipped');this.setAttribute('aria-pressed',this.classList.contains('flipped'))\" onkeydown=\"if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click()}\" role=\"button\" tabindex=\"0\"><div class=\"flip-tile-inner\" style=\"display:grid;height:auto;min-height:245px\"><div class=\"tile-front\" style=\"grid-area:1/1\"><div class=\"tile-title\">Dwa kierunki raportowania</div><div class=\"flip-prompt\">Kliknij po szczegóły</div></div><div class=\"tile-back\" style=\"position:relative;grid-area:1/1\"><div class=\"tile-back-header\">Dwa kierunki raportowania</div><div class=\"tile-back-body\">Raport z Punktu Kontrolnego trafia od kierownika zespołu do kierownika projektu. Raport Okresowy trafia od kierownika projektu do Rady.</div></div></div></div><div aria-pressed=\"false\" class=\"flip-tile\" onclick=\"this.classList.toggle('flipped');this.setAttribute('aria-pressed',this.classList.contains('flipped'))\" onkeydown=\"if(event.key==='Enter'||event.key===' '){event.preventDefault();this.click()}\" role=\"button\" tabindex=\"0\"><div class=\"flip-tile-inner\" style=\"display:grid;height:auto;min-height:245px\"><div class=\"tile-front\" style=\"grid-area:1/1\"><div class=\"tile-title\">Granice uprawnień</div><div class=\"flip-prompt\">Kliknij po szczegóły</div></div><div class=\"tile-back\" style=\"position:relative;grid-area:1/1\"><div class=\"tile-back-header\">Granice uprawnień</div><div class=\"tile-back-body\">Zespół eskaluje prognozowane przekroczenie tolerancji Grupy Zadań do kierownika projektu; kierownik projektu eskaluje prognozowane przekroczenie tolerancji etapu do Rady.</div></div></div></div></div></div><div class=\"remember-box\"><div class=\"remember-badge\">Zapamiętaj</div><div class=\"remember-text\">Zespół eskaluje prognozowane przekroczenie tolerancji Grupy Zadań do kierownika projektu; kierownik projektu eskaluje prognozowane przekroczenie tolerancji etapu do Rady.</div></div><div class=\"card quiz-section\"><h2 class=\"card-title\">Scenariusz SnakeBite: sprawdź decyzje</h2><div id=\"m9-story-quiz\"></div></div><div class=\"hard-knowledge-header\"><div class=\"hard-knowledge-title\">🎓 Twarda wiedza pod egzamin Foundation</div><div class=\"hard-knowledge-subtitle\">Pojęcia, dokumentacja i pytania powtórkowe.</div></div><div class=\"hard-knowledge-content\"><div class=\"definition-item\"><div class=\"definition-term\">Kontrolowanie etapu (CS)</div><p>Kierownik projektu przydziela i monitoruje pracę, przegląda stan etapu, raportuje postępy, zajmuje się zagadnieniami i ryzykiem oraz reaguje na odchylenia.</p></div><div class=\"definition-item\"><div class=\"definition-term\">Zarządzanie dostarczaniem produktów (MP)</div><p>Kierownik zespołu przyjmuje Grupę Zadań, zarządza jej wykonaniem i przekazuje ukończone produkty. MP łączy dostarczanie specjalistyczne z zarządzaniem projektem.</p></div><div class=\"definition-item\"><div class=\"definition-term\">Grupa Zadań</div><p>Uzgodnienie między kierownikiem projektu a kierownikiem zespołu dotyczące produktów i warunków ich dostarczenia. Nie jest po prostu listą zadań bez kryteriów jakości.</p></div><div class=\"definition-item\"><div class=\"definition-term\">Dwa kierunki raportowania</div><p>Raport z Punktu Kontrolnego trafia od kierownika zespołu do kierownika projektu. Raport Okresowy trafia od kierownika projektu do Rady.</p></div><div class=\"definition-item\"><div class=\"definition-term\">Granice uprawnień</div><p>Zespół eskaluje prognozowane przekroczenie tolerancji Grupy Zadań do kierownika projektu; kierownik projektu eskaluje prognozowane przekroczenie tolerancji etapu do Rady.</p></div><h3>📄 Produkty zarządcze i materiały pomocnicze</h3><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Dokument / materiał</th><th>Odpowiedzialność</th><th>Cel</th></tr></thead><tbody><tr><td>Opis Grupy Zadań</td><td>Kierownik projektu uzgadnia z kierownikiem zespołu</td><td>Produkty, wymagania, tolerancje, ograniczenia i sposób raportowania.</td></tr><tr><td>Raport z Punktu Kontrolnego</td><td>Kierownik zespołu</td><td>Stan prac i prognoza wykonania Grupy Zadań.</td></tr><tr><td>Raport Okresowy</td><td>Kierownik projektu</td><td>Syntetyczna informacja o stanie etapu dla Rady Projektu.</td></tr></tbody></table></div><div class=\"quiz-section\"><div id=\"m9-exam-quiz\"></div></div></div><div style=\"text-align:center;margin-top:2rem\"><h2>🎴 Fiszki - Moduł 9</h2></div><div class=\"flashcards-container\" id=\"m9-flashcards\"></div>",
  "storyQuiz": [
    {
      "question": "Tomek przewiduje przekroczenie tolerancji Grupy Zadań. Kogo informuje?",
      "options": [
        "Zosię, kierownika projektu",
        "Bezpośrednio poziom biznesu",
        "Wyłącznie testerów",
        "Podejście do Zarządzania Kontraktami"
      ],
      "correct": 0,
      "explanation": "Granica uprawnień zespołu prowadzi do kierownika projektu."
    },
    {
      "question": "Kto przyjmuje, wykonuje i przekazuje Grupę Zadań?",
      "options": [
        "Rada Projektu",
        "Kierownik zespołu",
        "Nadzór projektu",
        "Podejście do Zarządzania Kontraktami"
      ],
      "correct": 1,
      "explanation": "To trzy główne działania MP."
    },
    {
      "question": "Zosia prognozuje przekroczenie tolerancji etapu. Co powinna zrobić?",
      "options": [
        "Poczekać na faktyczne opóźnienie",
        "Samodzielnie zwiększyć tolerancję",
        "Eskalować wyjątek do Rady",
        "Podejście do Zarządzania Kontraktami"
      ],
      "correct": 2,
      "explanation": "Eskalacja wynika z prognozy, nie dopiero z zaistniałego przekroczenia."
    },
    {
      "question": "Zosia uzgodniła z Tomkiem zakres integracji rankingu. Kto autoryzuje Grupę Zadań w etapie?",
      "options": [
        "Kierownik projektu",
        "Kierownik zespołu",
        "Główny dostawca",
        "Wsparcie projektu"
      ],
      "correct": 0,
      "explanation": "Kierownik projektu uzgadnia i autoryzuje pracę w CS."
    },
    {
      "question": "Tomek przed rozpoczęciem pracy sprawdza wykonalność. Co kierownik zespołu robi przed wykonaniem Grupy Zadań?",
      "options": [
        "Ocenia i przyjmuje uzgodniony pakiet",
        "Autoryzuje etap",
        "Zamyka projekt",
        "Zmienia Uzasadnienie Biznesowe"
      ],
      "correct": 0,
      "explanation": "MP rozpoczyna się od przyjęcia pakietu prac."
    },
    {
      "question": "Tomek co tydzień przekazuje Zosi stan API. Który raport przenosi postęp od zespołu do kierownika projektu?",
      "options": [
        "Raport z Punktu Kontrolnego",
        "Raport Okresowy",
        "Raport Końcowy Etapu",
        "Raport Końcowy Projektu"
      ],
      "correct": 0,
      "explanation": "Raport z Punktu Kontrolnego informuje kierownika projektu o pakiecie."
    },
    {
      "question": "Zosia informuje Artura i Radę o postępie etapu. Który raport kierownik projektu cyklicznie przekazuje Radzie?",
      "options": [
        "Raport Okresowy",
        "Raport z Punktu Kontrolnego",
        "Raport z Lekcji",
        "Opis Produktu"
      ],
      "correct": 0,
      "explanation": "Raport Okresowy obrazuje postęp etapu dla Rady."
    },
    {
      "question": "Limit API zagraża terminowi pakietu Tomka. Do kogo Tomek eskaluje prognozowane przekroczenie tolerancji pakietu?",
      "options": [
        "Do Zosi, kierownika projektu",
        "Bezpośrednio do warstwy biznesowej",
        "Do użytkownika końcowego",
        "Do biura rachunkowego"
      ],
      "correct": 0,
      "explanation": "Granica uprawnień pakietu biegnie między kierownikiem zespołu a kierownikiem projektu."
    },
    {
      "question": "Nowa prognoza zagroziła już tolerancji całego etapu. Co robi Zosia, gdy prognoza przekracza tolerancję etapu?",
      "options": [
        "Eskalacja do Rady przez Raport Nadzwyczajny",
        "Samodzielne podniesienie tolerancji etapu",
        "Czekanie na ostateczne przekroczenie",
        "Ukrycie problemu w raporcie zespołu"
      ],
      "correct": 0,
      "explanation": "Prognozowany wyjątek etapu wymaga informacji i decyzji Rady."
    },
    {
      "question": "Testy rankingu zostały zakończone. Co potwierdza ukończenie pakietu po wykonaniu i ocenie?",
      "options": [
        "Zgłoszenie ukończenia Grupy Zadań kierownikowi projektu",
        "Sam wpis w backlogu",
        "Autoryzacja zamknięcia całego projektu",
        "Zgoda warstwy biznesowej"
      ],
      "correct": 0,
      "explanation": "MP kończy się przekazaniem ukończonych produktów zgodnie z uzgodnieniem."
    },
    {
      "question": "Zosia porównuje opóźnienia z uzgodnioną jakością rankingu. Jakie kryteria ocenia Tomek podczas dostarczania rankingu?",
      "options": [
        "Uzgodnione kryteria jakości Opisu Produktu",
        "Wyłącznie subiektywną opinię programisty",
        "Wyłącznie liczbę commitów",
        "Wyłącznie koszt licencji"
      ],
      "correct": 0,
      "explanation": "Opis Produktu wyznacza podstawę kontroli jakości."
    }
  ],
  "examQuiz": [
    {
      "question": "Który raport Tomek przekazuje Zosi?",
      "options": [
        "Raport z Punktu Kontrolnego",
        "Raport Końcowy Projektu",
        "Raport Okresowy",
        "Podejście do Zarządzania Kontraktami"
      ],
      "correct": 0,
      "explanation": "Raport z Punktu Kontrolnego dotyczy dostarczania Grupy Zadań."
    },
    {
      "question": "Jaki jest główny zakres CS?",
      "options": [
        "Wytwarzanie kodu gry",
        "Bieżące zarządzanie etapem",
        "Zatwierdzanie projektu",
        "Podejście do Zarządzania Kontraktami"
      ],
      "correct": 1,
      "explanation": "CS jest procesem kierownika projektu."
    },
    {
      "question": "Kto autoryzuje Grupę Zadań w etapie?",
      "options": [
        "Kierownik projektu",
        "Kierownik zespołu",
        "Główny dostawca",
        "Wsparcie projektu"
      ],
      "correct": 0,
      "explanation": "Kierownik projektu uzgadnia i autoryzuje pracę w CS."
    },
    {
      "question": "Co kierownik zespołu robi przed wykonaniem Grupy Zadań?",
      "options": [
        "Ocenia i przyjmuje uzgodniony pakiet",
        "Autoryzuje etap",
        "Zamyka projekt",
        "Zmienia Uzasadnienie Biznesowe"
      ],
      "correct": 0,
      "explanation": "MP rozpoczyna się od przyjęcia pakietu prac."
    },
    {
      "question": "Który raport przenosi postęp od zespołu do kierownika projektu?",
      "options": [
        "Raport z Punktu Kontrolnego",
        "Raport Okresowy",
        "Raport Końcowy Etapu",
        "Raport Końcowy Projektu"
      ],
      "correct": 0,
      "explanation": "Raport z Punktu Kontrolnego informuje kierownika projektu o pakiecie."
    },
    {
      "question": "Który raport kierownik projektu cyklicznie przekazuje Radzie?",
      "options": [
        "Raport Okresowy",
        "Raport z Punktu Kontrolnego",
        "Raport z Lekcji",
        "Opis Produktu"
      ],
      "correct": 0,
      "explanation": "Raport Okresowy obrazuje postęp etapu dla Rady."
    },
    {
      "question": "Do kogo Tomek eskaluje prognozowane przekroczenie tolerancji pakietu?",
      "options": [
        "Do Zosi, kierownika projektu",
        "Bezpośrednio do warstwy biznesowej",
        "Do użytkownika końcowego",
        "Do biura rachunkowego"
      ],
      "correct": 0,
      "explanation": "Granica uprawnień pakietu biegnie między kierownikiem zespołu a kierownikiem projektu."
    },
    {
      "question": "Co robi Zosia, gdy prognoza przekracza tolerancję etapu?",
      "options": [
        "Eskalacja do Rady przez Raport Nadzwyczajny",
        "Samodzielne podniesienie tolerancji etapu",
        "Czekanie na ostateczne przekroczenie",
        "Ukrycie problemu w raporcie zespołu"
      ],
      "correct": 0,
      "explanation": "Prognozowany wyjątek etapu wymaga informacji i decyzji Rady."
    },
    {
      "question": "Co potwierdza ukończenie pakietu po wykonaniu i ocenie?",
      "options": [
        "Zgłoszenie ukończenia Grupy Zadań kierownikowi projektu",
        "Sam wpis w backlogu",
        "Autoryzacja zamknięcia całego projektu",
        "Zgoda warstwy biznesowej"
      ],
      "correct": 0,
      "explanation": "MP kończy się przekazaniem ukończonych produktów zgodnie z uzgodnieniem."
    },
    {
      "question": "Jakie kryteria ocenia Tomek podczas dostarczania rankingu?",
      "options": [
        "Uzgodnione kryteria jakości Opisu Produktu",
        "Wyłącznie subiektywną opinię programisty",
        "Wyłącznie liczbę commitów",
        "Wyłącznie koszt licencji"
      ],
      "correct": 0,
      "explanation": "Opis Produktu wyznacza podstawę kontroli jakości."
    },
    {
      "question": "Który proces przede wszystkim ocenia status etapu i podejmuje działania korygujące?",
      "options": [
        "Kontrolowanie etapu",
        "Zamykanie projektu",
        "Uruchamianie projektu",
        "Zarządzanie dostarczaniem produktów"
      ],
      "correct": 0,
      "explanation": "To zadania kierownika projektu w CS."
    },
    {
      "question": "Który proces kontroluje relację między kierownikiem projektu i zespołu przy dostawie?",
      "options": [
        "Zarządzanie dostarczaniem produktów",
        "Ukierunkowywanie projektu",
        "Zamykanie projektu",
        "Inicjowanie projektu"
      ],
      "correct": 0,
      "explanation": "MP obejmuje przyjęcie, wykonanie, ocenę i zgłoszenie ukończenia pakietu."
    },
    {
      "question": "Co stanowi podstawę uzgodnienia zakresu i tolerancji z Tomkiem?",
      "options": [
        "Opis Grupy Zadań",
        "Raport Końcowy Projektu",
        "Sam Raport Okresowy",
        "Rejestr Korzyści"
      ],
      "correct": 0,
      "explanation": "Opis Grupy Zadań wyznacza produkty, ograniczenia, tolerancje i raportowanie."
    },
    {
      "question": "Co robi Zosia, jeśli prognozowany poślizg mieści się w tolerancji etapu?",
      "options": [
        "Może podjąć działanie korygujące w swoich uprawnieniach",
        "Musi przerwać projekt",
        "Musi automatycznie uzyskać nową tolerancję projektu",
        "Zleca Tomkowi autoryzację następnego etapu"
      ],
      "correct": 0,
      "explanation": "W ramach tolerancji kierownik projektu zarządza bieżąco."
    }
  ],
  "flashcards": [
    {
      "q": "Kontrolowanie etapu (CS) — co zapamiętać?",
      "a": "Kierownik projektu przydziela i monitoruje pracę, przegląda stan etapu, raportuje postępy, zajmuje się zagadnieniami i ryzykiem oraz reaguje na odchylenia."
    },
    {
      "q": "Zarządzanie dostarczaniem produktów (MP) — co zapamiętać?",
      "a": "Kierownik zespołu przyjmuje Grupę Zadań, zarządza jej wykonaniem i przekazuje ukończone produkty. MP łączy dostarczanie specjalistyczne z zarządzaniem projektem."
    },
    {
      "q": "Grupa Zadań — co zapamiętać?",
      "a": "Uzgodnienie między kierownikiem projektu a kierownikiem zespołu dotyczące produktów i warunków ich dostarczenia. Nie jest po prostu listą zadań bez kryteriów jakości."
    },
    {
      "q": "Dwa kierunki raportowania — co zapamiętać?",
      "a": "Raport z Punktu Kontrolnego trafia od kierownika zespołu do kierownika projektu. Raport Okresowy trafia od kierownika projektu do Rady."
    },
    {
      "q": "Granice uprawnień — co zapamiętać?",
      "a": "Zespół eskaluje prognozowane przekroczenie tolerancji Grupy Zadań do kierownika projektu; kierownik projektu eskaluje prognozowane przekroczenie tolerancji etapu do Rady."
    },
    {
      "q": "Kto autoryzuje Grupę Zadań w etapie?",
      "a": "Kierownik projektu. Kierownik projektu uzgadnia i autoryzuje pracę w CS."
    },
    {
      "q": "Co kierownik zespołu robi przed wykonaniem Grupy Zadań?",
      "a": "Ocenia i przyjmuje uzgodniony pakiet. MP rozpoczyna się od przyjęcia pakietu prac."
    },
    {
      "q": "Który raport przenosi postęp od zespołu do kierownika projektu?",
      "a": "Raport z Punktu Kontrolnego. Raport z Punktu Kontrolnego informuje kierownika projektu o pakiecie."
    },
    {
      "q": "Który raport kierownik projektu cyklicznie przekazuje Radzie?",
      "a": "Raport Okresowy. Raport Okresowy obrazuje postęp etapu dla Rady."
    },
    {
      "q": "Do kogo Tomek eskaluje prognozowane przekroczenie tolerancji pakietu?",
      "a": "Do Zosi, kierownika projektu. Granica uprawnień pakietu biegnie między kierownikiem zespołu a kierownikiem projektu."
    },
    {
      "q": "Co robi Zosia, gdy prognoza przekracza tolerancję etapu?",
      "a": "Eskalacja do Rady przez Raport Nadzwyczajny. Prognozowany wyjątek etapu wymaga informacji i decyzji Rady."
    },
    {
      "q": "Co potwierdza ukończenie pakietu po wykonaniu i ocenie?",
      "a": "Zgłoszenie ukończenia Grupy Zadań kierownikowi projektu. MP kończy się przekazaniem ukończonych produktów zgodnie z uzgodnieniem."
    },
    {
      "q": "Jakie kryteria ocenia Tomek podczas dostarczania rankingu?",
      "a": "Uzgodnione kryteria jakości Opisu Produktu. Opis Produktu wyznacza podstawę kontroli jakości."
    },
    {
      "q": "Który proces przede wszystkim ocenia status etapu i podejmuje działania korygujące?",
      "a": "Kontrolowanie etapu. To zadania kierownika projektu w CS."
    },
    {
      "q": "Który proces kontroluje relację między kierownikiem projektu i zespołu przy dostawie?",
      "a": "Zarządzanie dostarczaniem produktów. MP obejmuje przyjęcie, wykonanie, ocenę i zgłoszenie ukończenia pakietu."
    },
    {
      "q": "Co stanowi podstawę uzgodnienia zakresu i tolerancji z Tomkiem?",
      "a": "Opis Grupy Zadań. Opis Grupy Zadań wyznacza produkty, ograniczenia, tolerancje i raportowanie."
    },
    {
      "q": "Co robi Zosia, jeśli prognozowany poślizg mieści się w tolerancji etapu?",
      "a": "Może podjąć działanie korygujące w swoich uprawnieniach. W ramach tolerancji kierownik projektu zarządza bieżąco."
    }
  ]
};
