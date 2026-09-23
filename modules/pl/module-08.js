window.MODULE_DATA = window.MODULE_DATA || {};
window.MODULE_DATA[8] = {
  "title": "Rozdział 8: Jakość",
  "navLabel": "7. Jakość",
  "contentHtml": "\n<h1 class=\"module-heading\">Moduł 7: Jakość</h1><p class=\"ov-source\">PDF • moduł 7 • strony 180–197. Dotychczasowy moduł 8; cała jego zawartość została zachowana.</p>\n<div class=\"scenario-box\">\n<p><em>W PixelBite Games dochodzi do dyskusji na temat płynności rozgrywki. Maya (Główny Użytkownik) mówi: \"Gra musi chodzić gładko bez zacięć!\". Zosia przekłada te ogólne **Oczekiwania jakościowe użytkownika** na twarde **Wymagania** oraz mierzalne **Kryteria akceptacji** (np. stałe 60 FPS na urządzeniach z iOS/Android).</em></p>\n<p><em>Kamil (Senior Supplier) prowadzi bezpośrednie testy wydajnościowe silnika i zapisuje ich wyniki w Rejestrze Jakości (**Kontrola jakości - Quality control**). Z kolei niezależny audytor z zewnętrznego laboratorium weryfikuje, czy zespół Zosi prowadzi testy zgodnie z procedurami zapisanymi w **Podejściu do Zarządzania Jakością** (**Zapewnienie jakości - Quality assurance**).</em></p>\n</div>\n<div class=\"card\">\n<h2 class=\"card-title\">🔍 Kluczowe Rozróżnienia w Praktyce Jakości</h2>\n<p style=\"margin-bottom:1rem; font-size:0.92rem; color:var(--text-dark);\">\n          Dwa kluczowe pojęcia często mylone na egzaminie Foundation:\n        </p>\n<div class=\"risk-responses-grid\">\n<div class=\"response-card-threat\" style=\"background:#f0f9ff; border-left-color:#0284c7;\">\n<div class=\"response-card-title\" style=\"color:#0369a1;\">🔬 Kontrola Jakości (Quality Control)</div>\n<ul class=\"response-list\">\n<li><strong>Skupienie:</strong> Na POSZCZEGÓLNYCH produktach i komponentach.</li>\n<li><strong>Działanie:</strong> Testowanie, przeglądy, inspekcje i weryfikacja zgodności ze specyfikacją w Opisie Produktu.</li>\n<li><strong>Kto realizuje:</strong> Zespół wykonawczy, testerzy, Lider Zespołu.</li>\n<li><strong>Dokumentacja:</strong> Wyniki zapisywane w <strong>Rejestrze Jakości (Quality Register)</strong>.</li>\n</ul>\n</div>\n<div class=\"response-card-opp\" style=\"background:#faf5ff; border-left-color:#7c3aed;\">\n<div class=\"response-card-title\" style=\"color:#6d28d9;\">🛡️ Zapewnienie Jakości (Quality Assurance)</div>\n<ul class=\"response-list\">\n<li><strong>Skupienie:</strong> Na PODEJŚCIU, procesach i standardach w całej organizacji.</li>\n<li><strong>Działanie:</strong> Niezależne sprawdzanie, czy przyjęte Podejście do Zarządzania Jakością jest skutecznie stosowane.</li>\n<li><strong>Kto realizuje:</strong> Niezależne jednostki spoza zespołu projektowego (np. dział jakości organizacji).</li>\n<li><strong>Cechy:</strong> Funkcja całkowicie niezależna od projektu.</li>\n</ul>\n</div>\n</div>\n</div>\n<div class=\"remember-box\">\n<div class=\"remember-badge\">💡 Zapamiętaj na egzamin!</div>\n<div class=\"remember-text\">\n<strong>Project Product Description vs Product Description:</strong><br/>\n          • <strong>Project Product Description</strong> (Opis Produktu Projektu) — dotyczy CAŁEGO projektu, powstaje w SU, zawiera ogólne kryteria akceptacji klienta.<br/>\n          • <strong>Product Description</strong> (Opis Produktu) — tworzony w IP/SB dla KAŻDEGO pojedynczego produktu z osobna, zawiera szczegółową specyfikację jakościową i kryteria kontroli.\n        </div>\n</div>\n<div class=\"card quiz-section\">\n<h2 class=\"card-title\">Scenariusz SnakeBite: Jakość w PixelBite Games</h2>\n<div id=\"m7-story-quiz\"></div>\n</div>\n<div class=\"card\"><h2 class=\"card-title\">Przeznaczenie praktyki Jakość i cztery poziomy wymagań</h2><p>Praktyka <strong>Jakość</strong> dokumentuje wymagania użytkowników dotyczące produktów i określa sposób ich spełnienia. Jakość to stopień spełnienia wymagań; budujemy ją przez cały projekt, a nie dopiero sprawdzamy na końcu.</p><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Pojęcie</th><th>Znaczenie</th><th>SnakeBite</th></tr></thead><tbody><tr><td>Oczekiwania jakościowe użytkownika</td><td>Ogólne oczekiwania zapisane w Opisie Produktu Projektu.</td><td>„Gra działa płynnie i nie gubi wyników”.</td></tr><tr><td>Wymaganie</td><td>Potrzeba lub oczekiwanie zapisane w zatwierdzonym produkcie zarządczym; stanowi część zakresu.</td><td>Uzgodniony wymóg poprawnego zapisu wyniku po zakończeniu sesji.</td></tr><tr><td>Kryteria akceptacji</td><td>Uporządkowane według priorytetów warunki przyjęcia produktu projektu przez użytkownika.</td><td>Maya przyjmuje grę po wykazaniu spełnienia uzgodnionych warunków odbioru.</td></tr><tr><td>Specyfikacje jakościowe</td><td>Miary i wymagane poziomy dla konkretnego produktu, zapisane w jego Opisie Produktu.</td><td>Dla API rankingu: 95% odpowiedzi do 300 ms przy zdefiniowanym obciążeniu i środowisku — przykład dydaktyczny.</td></tr></tbody></table></div><p><strong>Tolerancja jakości</strong> to jawnie uzgodniony dopuszczalny zakres odchylenia specyfikacji. Nie jest zgodą na dowolne obniżenie jakości ani automatycznym prawem do niespełniania wymagań obowiązkowych.</p></div><div class=\"card\"><h2 class=\"card-title\">Planowanie jakości — ustalamy ramy przed wykonaniem kontroli</h2><p>Zosia i Maya najpierw uzgadniają, co oznacza „dobra gra”, następnie przekładają to na konkretne specyfikacje, dowody i decyzje. Planowanie obejmuje: główne produkty i oczekiwania, kryteria akceptacji, szczegółowe wymagania, <strong>Podejście do Zarządzania Jakością</strong> oraz zatwierdzenie podstaw do późniejszej kontroli.</p><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Co ustalamy w podejściu?</th><th>Praktyczna decyzja</th></tr></thead><tbody><tr><td>Zakres</td><td>Które produkty i prace obejmujemy? Np. aplikacja, płatności, dokumentacja i gotowość wsparcia.</td></tr><tr><td>Procedury i standardy</td><td>Jak planujemy jakość, kontrolujemy produkty, obsługujemy niezgodności i uzyskujemy akceptację? Odstępstwa od standardów biznesu muszą mieć uzasadnienie.</td></tr><tr><td>Odpowiedzialności</td><td>Kto wytwarza, kto przegląda, kto akceptuje; kto wykonuje nadzór? Przeglądający powinien być niezależny od wytwórcy.</td></tr><tr><td>Zasoby</td><td>Budżet, czas ludzi, środowiska, dane testowe, urządzenia oraz kompetencje kontrolne i nadzorcze.</td></tr><tr><td>Narzędzia i techniki</td><td>Np. przeglądy, prototypowanie, testy, inspekcje i sposób zapisu dowodów.</td></tr><tr><td>Zapisy i odniesienia</td><td>Format Rejestru Jakości, lokalizacja wyników, wymagania firmowe i dostawcy oraz powiązane dokumenty.</td></tr></tbody></table></div><p><strong>Specyfikacja jakościowa</strong> powinna jasno wskazywać atrybut, miarę, wymagany poziom, ewentualną tolerancję i warunki oceny. W Opisie Produktu określamy także metody oraz odpowiedzialności. „Szybko” albo „intuicyjnie” to punkt wyjścia do rozmowy, a nie wystarczająca instrukcja testu.</p><p>Podejście jest częścią PID / DIP. Konkretne czynności, terminy i zasoby umieszczamy w planach oraz rejestrujemy planowane kontrole. Plan niższego poziomu nie może potajemnie dodawać nowych wymagań: zmiany zatwierdzonej podstawy wymagają kontroli zmian.</p></div><div class=\"card\"><h2 class=\"card-title\">SLA i SLT — wymagania dla usługi, nie całe planowanie jakości</h2><p><strong>Planowanie jakości nie jest ani SLA, ani SLT.</strong> SLA (Service Level Agreement) to uzgodnienie poziomu usługi. SLT (Service Level Target) oznacza konkretny cel poziomu usługi, np. dostępność w określonym okresie. W praktyce SRE podobną funkcję celu pełni SLO, mierzone wskaźnikiem SLI.</p><p>Wymagania projektu mogą wynikać z oczekiwanego SLA i jego celów. Trzeba je przełożyć na wymagania produktu, warunki pomiaru, testy, monitoring i odpowiedzialność operacyjną. Jakość obejmuje również zagadnienia, których samo SLA nie opisuje: poprawność funkcji, dostępność dla osób z niepełnosprawnościami, bezpieczeństwo czy użyteczność.</p><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Warstwa</th><th>Przykład dydaktyczny</th></tr></thead><tbody><tr><td>Oczekiwany poziom usługi</td><td>Dostępność rankingu co najmniej 99,9% miesięcznie, przy uzgodnionej definicji i wyłączeniach.</td></tr><tr><td>Specyfikacje produktów</td><td>Projektujemy wymagania dla monitoringu, wykrywania awarii, odzyskiwania i redundancji; nie zakładamy, że jeden parametr testu dowiedzie całego SLA.</td></tr><tr><td>Kontrola przed odbiorem</td><td>Test awarii i odtworzenia, test obciążenia, przegląd alarmów oraz gotowości obsługi.</td></tr><tr><td>Pomiar po wdrożeniu</td><td>Właściciel usługi mierzy rzeczywistą dostępność przez uzgodniony okres. Krótki test przed odbiorem nie dowodzi miesięcznej dostępności.</td></tr></tbody></table></div><p class=\"ov-source\">SLA/SLT, SLO/SLI to objaśnienie z praktyki zarządzania usługami i SRE, nie dodatkowe elementy metody PRINCE2. Kontekst SRE: <a href=\"https://sre.google/sre-book/service-level-objectives/\">Service Level Objectives — Google SRE</a>.</p></div><div class=\"card\"><h2 class=\"card-title\">Kontrola jakości, zapewnienie jakości i nadzór projektu</h2><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Obszar</th><th>Pytanie</th><th>Przykład</th></tr></thead><tbody><tr><td>Kontrola jakości — quality control</td><td>Czy konkretny produkt i jego wytwarzanie spełniają uzgodnione wymagania i standardy?</td><td>Test rankingu, inspekcja konfiguracji, przegląd dokumentacji, zapis wyników i reakcja na niezgodność.</td></tr><tr><td>Zapewnienie jakości — quality assurance</td><td>Czy planowanie i mechanizmy kontroli są odpowiednie, aby wiarygodnie potwierdzić wymagania?</td><td>Niezależna funkcja biznesu sprawdza, czy testy obejmują krytyczne wymagania, środowisko jest reprezentatywne, a dowody są wiarygodne.</td></tr><tr><td>Nadzór projektu — project assurance</td><td>Czy projekt jest prowadzony właściwie w perspektywie biznesu, użytkownika i dostawcy?</td><td>Nadzór w imieniu Rady ocenia prowadzenie projektu; jest niezależny od kierownika projektu.</td></tr></tbody></table></div><p><strong>Zapewnienie jakości to nadzór nad adekwatnością sposobów planowania i kontroli jakości</strong>, a nie tylko kontrola, czy zaznaczono wszystkie pola procedury. Jest zwykle realizowane przez biznes niezależnie od zespołu projektu i trwa od uruchamiania do zamknięcia. Zewnętrzna firma nie jest obowiązkowa.</p><p><strong>Doprecyzowanie wcześniejszych uproszczeń:</strong> kontrola jakości może obejmować również działania rozwoju i dostarczania produktu. Quality assurance skupia się na zapewnieniu jakości produktów poprzez właściwe planowanie i kontrolę; nie jest po prostu „audytem całej organizacji”.</p></div><div class=\"card\"><h2 class=\"card-title\">Działania kontroli w IT: piramida testowa i CI</h2><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 700 320\" role=\"img\" aria-labelledby=\"q-pyramid-title\" style=\"width:100%;max-width:700px;font-family:Arial,sans-serif\"><title id=\"q-pyramid-title\">Przykładowa piramida testów: wiele testów jednostkowych, mniej integracyjnych, niewiele end-to-end</title><polygon points=\"350,15 270,110 430,110\" fill=\"#7c3aed\"/><polygon points=\"260,122 170,218 530,218 440,122\" fill=\"#0369a1\"/><polygon points=\"160,230 85,307 615,307 540,230\" fill=\"#0f766e\"/><g fill=\"white\" font-size=\"18\" text-anchor=\"middle\"><text x=\"350\" y=\"88\">E2E</text><text x=\"350\" y=\"177\">Integracyjne / kontraktowe</text><text x=\"350\" y=\"277\">Jednostkowe — liczne i szybkie</text></g></svg><p><strong>To przykład technik IT, a nie obowiązkowa piramida PRINCE2.</strong> Wiele szybkich testów jednostkowych sprawdza małe fragmenty logiki, testy integracyjne — współpracę elementów, a wybrane E2E — kluczowe ścieżki przez system. Proporcje dostosowujemy do architektury i ryzyka; nie ma wymaganej proporcji procentowej.</p><p><strong>CI — ciągła integracja</strong> oznacza częste łączenie zmian i automatyczną weryfikację budowania oraz testów. Wynik pipeline’u jest dowodem wykonanej kontroli, ale „zielony build” nie oznacza automatycznie odbioru przez użytkownika ani spełnienia wszystkich wymagań.</p><p>Poza piramidą planujemy potrzebne testy wydajności, bezpieczeństwa, dostępności, użyteczności i testy eksploracyjne. Akceptacja wymaga właściwych dowodów oraz decyzji uprawnionej osoby.</p><div class=\"scenario-box\"><p>Tomek pokazuje zielony pipeline. Maya pyta o wolne połączenie, odtworzenie przerwanej płatności i czytelność interfejsu. Testy jednostkowe nie pokrywają tych pytań. Zosia zleca brakujące kontrole zgodnie z wymaganiami, a osoba odpowiedzialna za zapewnienie jakości sprawdza, dlaczego wcześniej zabrakło ich w planie.</p></div><p class=\"ov-source\">Uzupełnienie IT: <a href=\"https://martinfowler.com/articles/practical-test-pyramid.html\">The Practical Test Pyramid</a> i <a href=\"https://www.martinfowler.com/articles/continuousIntegration.html\">Continuous Integration</a>. Metody kontrolne dobieramy do potrzeb projektu.</p></div><div class=\"card\"><h2 class=\"card-title\">Cykl jakości, dokumenty i decyzja o akceptacji</h2><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Krok</th><th>Co robimy?</th><th>Gdzie zostaje ślad?</th></tr></thead><tbody><tr><td>Planuj jakość</td><td>Uzgodnij wymagania, specyfikacje, metody, role i warunki akceptacji.</td><td>Opis Produktu Projektu, Opisy Produktów, Podejście do Zarządzania Jakością, plany.</td></tr><tr><td>Kontroluj jakość</td><td>Wykonaj kontrole, porównaj wynik z wymaganiami, zarejestruj niezgodności i ponów sprawdzenie po poprawie.</td><td>Rejestr Jakości oraz powiązane dowody: raporty testów, przeglądy, protokoły.</td></tr><tr><td>Akceptuj produkty</td><td>Uprawniona osoba ocenia dowody i potwierdza akceptację. Niespełnienie wymagań wymaga właściwej decyzji, nie cichego obniżenia progu.</td><td>Rejestr Produktów i zapis akceptacji; zagadnienia i zmiany według odpowiednich zasad.</td></tr></tbody></table></div><p><strong>Rejestr Jakości:</strong> planowane i wykonane kontrole — identyfikatory produktu i kontroli, metoda, planowane i faktyczne daty, role, wynik, reakcja na niepowodzenie i miejsce dowodów.</p><p><strong>Rejestr Produktów:</strong> produkty wymagane przez plan oraz ich status, w tym akceptacja. Jeden produkt może mieć wiele kontroli, dlatego te rejestry nie są zamienne.</p><p><strong>Producent, przeglądający, organ akceptacji</strong> mają różne odpowiedzialności. Wykonanie testu i akceptacja to różne czynności; uprawnienia do akceptacji można delegować zgodnie z ustaleniami. Odbiór od dostawcy na podstawie kontraktu nie musi oznaczać odbioru całego projektu.</p></div><div class=\"card\"><h2 class=\"card-title\">Dostosowanie jakości i powiązania z pryncypiami</h2><p>Stosujemy standardy organizacji i uzgodnienia dostawcy, zapewniając spójność z wymaganiami projektu. W dostarczaniu iteracyjnym specyfikacje mogą dojrzewać przez prototypy i feedback, a backlog, Definition of Done i ewentualna Definition of Ready mogą wspierać podejście. Nie zastępują jednak wszystkich kryteriów akceptacji projektu.</p><p>Wymagania sustainability dotyczą wpływu środowiskowego w cyklu życia produktu oraz możliwości utrzymania korzyści, np. przez serwis i wsparcie. Nakład kontroli dobieramy do ryzyka i kosztu błędów — bardziej surowa specyfikacja bez potrzeby biznesowej może niepotrzebnie zwiększyć koszt.</p><div class=\"doc-table-container\"><table class=\"doc-table\"><thead><tr><th>Pryncypium</th><th>Zastosowanie do jakości</th></tr></thead><tbody><tr><td>Zasadność biznesowa</td><td>Wymagania i koszt zapewnienia jakości mają wspierać oczekiwane korzyści.</td></tr><tr><td>Doświadczenia</td><td>Wykorzystujemy wcześniejsze defekty i skuteczność kontroli.</td></tr><tr><td>Role i relacje</td><td>Uzgadniamy wytwarzanie, przegląd i akceptację.</td></tr><tr><td>Etapy</td><td>Planujemy i oceniamy jakość w kolejnych etapach.</td></tr><tr><td>Tolerancje</td><td>Ustalamy granice jakości i eskalujemy prognozowane przekroczenia.</td></tr><tr><td>Produkty</td><td>Wymagania i dowody odnoszą się do konkretnych produktów.</td></tr><tr><td>Dostosowanie</td><td>Wybieramy wystarczające metody i poziom formalności.</td></tr></tbody></table></div><p class=\"ov-source\">Podstawa: podręcznik PRINCE2 7, rozdział 8, s. 128–146. Przykłady SnakeBite i rozwinięcia IT są autorskimi objaśnieniami.</p></div><div class=\"hard-knowledge-header\">\n<div class=\"hard-knowledge-title\">🎓 Twarda wiedza pod egzamin Foundation (Quality)</div>\n<div class=\"hard-knowledge-subtitle\">Oficjalne definicje, produkty zarządcze oraz pytania egzaminacyjne.</div>\n</div>\n<div class=\"hard-knowledge-content\">\n<div class=\"definition-item\">\n<div class=\"definition-term\">Oczekiwania jakościowe użytkownika <span class=\"definition-term-en\">(User's quality expectations)</span></div>\n<div style=\"font-size: 0.92rem; color: #334155; margin-top: 0.2rem;\">Ogólne oświadczenie określające jakość, jaką ma reprezentować produkt końcowy, formułowane na początku w procesie SU.</div>\n</div>\n<div class=\"definition-item\">\n<div class=\"definition-term\">Kryteria akceptacji <span class=\"definition-term-en\">(Acceptance criteria)</span></div>\n<div style=\"font-size: 0.92rem; color: #334155; margin-top: 0.2rem;\">Mierzalna lista wymagań, które musi spełnić produkt końcowy, aby został zaakceptowany przez Głównego Użytkownika i Zleceniodawcę.</div>\n</div>\n<div class=\"definition-item\">\n<div class=\"definition-term\">Tolerancja jakości <span class=\"definition-term-en\">(Quality tolerance)</span></div>\n<div style=\"font-size: 0.92rem; color: #334155; margin-top: 0.2rem;\">Dopuszczalne odchylenie od określonych parametrów jakościowych zapisanych w Opisie Produktu.</div>\n</div>\n<h3 style=\"margin-top:1.5rem; margin-bottom:0.8rem; font-size:1.05rem; color:var(--text-dark);\">📄 Produkty Zarządcze w Praktyce Jakości</h3>\n<div class=\"doc-table-container\">\n<table class=\"doc-table\">\n<thead>\n<tr>\n<th>Dokument Zarządczy</th>\n<th>Twórca / Właściciel</th>\n<th>Opis i Rola w Projekcie</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Podejście do Zarządzania Jakością</strong><br/><em>(Quality Management Approach)</em></td>\n<td>Tworzy: <strong>PM</strong><br/>Zatwierdza: Rada Projektu</td>\n<td>Definiuje jak jakość będzie zapewniana i kontrolowana w projekcie, jakie standardy i procedury testowania zostaną zastosowane. Powstaje w IP.</td>\n</tr>\n<tr>\n<td><strong>Rejestr Jakości</strong><br/><em>(Quality Register)</em></td>\n<td>Utrzymuje: <strong>PM</strong></td>\n<td>Ewidencja wszystkich zaplanowanych i przeprowadzonych działań z zakresu kontroli jakości wraz z ich wynikami, terminami i odbiorami.</td>\n</tr>\n<tr>\n<td><strong>Opis Produktu</strong><br/><em>(Product Description)</em></td>\n<td>Tworzy: <strong>PM / TM</strong></td>\n<td>Specyfikacja pojedynczego produktu: jego cel, skład, pochodzenie, kryteria jakościowe oraz metody i osoby odpowiedzialne za kontrolę jakości.</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"quiz-section\">\n<div id=\"m7-exam-quiz\"></div>\n</div>\n</div>\n<div style=\"text-align: center; margin-top: 2rem;\"><h2 style=\"color: var(--accent-purple);\">🎴 Fiszki - Moduł 7</h2></div>\n<div class=\"flashcards-container\" id=\"m7-flashcards\"></div>\n",
  "storyQuiz": [
    {
      "question": "1. Maya (Główny Użytkownik) mówi: 'Chcę, żeby gra płynnie działała na smartfonach'. Co zrobiła Zosia z tą wypowiedzią?",
      "options": [
        "Zapisała jako ogólne Oczekiwania Jakościowe Użytkownika i przekształciła w mierzalne Kryteria Akceptacji.",
        "Zignorowała uwagi użytkowników.",
        "Od razu zamknęła projekt.",
        "Wpisała do Rejestru Jakości jako wyjątek."
      ],
      "correct": 0,
      "explanation": "Ogólne oczekiwania użytkownika przekształca się na mierzalne wymagania i kryteria akceptacji."
    },
    {
      "question": "2. Kamil (Senior Supplier) uruchamia testy jednostkowe silnika i sprawdza liczbę FPS. Jaki proces realizuje?",
      "options": [
        "Zapewnienie jakości (Quality assurance)",
        "Kontrolę jakości (Quality control)",
        "Planowanie wyjątku",
        "Zarządzanie Zmianą"
      ],
      "correct": 1,
      "explanation": "Kontrola jakości (Quality control) polega na weryfikacji i testowaniu konkretnych produktów."
    },
    {
      "question": "3. Niezależny audytor z centrali sprawdza, czy Zosia i Kamil stosują procedury testowe opisane w dokumentach. Co realizuje audytor?",
      "options": [
        "Kontrolę jakości pojedynczego kodu",
        "Zapewnienie jakości (Quality assurance)",
        "Kodowanie gry",
        "Odbiór końcowy"
      ],
      "correct": 1,
      "explanation": "Zapewnienie jakości to niezależna weryfikacja czy procesy i podejście do jakości są stosowane prawidłowo."
    },
    {
      "question": "4. Zosia tworzy dokument definiujący standardy testowania, narzędzia oraz procedury jakościowe dla całego projektu. Co to za dokument?",
      "options": [
        "Podejście do Zarządzania Jakością (Quality management approach)",
        "Rejestr Ryzyk",
        "Plan Wyjątku",
        "Opis Produktu Projektu"
      ],
      "correct": 0,
      "explanation": "Podejście do Zarządzania Jakością określa jak jakość będzie zapewniana i kontrolowana w projekcie."
    },
    {
      "question": "5. Gdzie PM rejestruje planowane testy, terminy sprawdzianów jakościowych oraz nazwisko osoby, która zatwierdziła produkt?",
      "options": [
        "W Rejestrze Jakości (Quality register)",
        "W Rejestrze Ryzyk",
        "W Dzienniku Projektu",
        "W Opisie Produktu"
      ],
      "correct": 0,
      "explanation": "Rejestr Jakości zawiera ewidencję wszystkich sprawdzianów i odbiorów jakościowych."
    },
    {
      "question": "6. Czym różni się Opis Produktu Projektu od Opisu Produktu?",
      "options": [
        "Niczym, to ten sam dokument.",
        "Opis Produktu Projektu dotyczy całości i powstaje w SU, a Opis Produktu dotyczy pojedynczego komponentu.",
        "Opis Produktu pisze sponsor, a Opis Produktu Projektu tester.",
        "Opis Produktu dotyczy finansów."
      ],
      "correct": 1,
      "explanation": "Project product description dotyczy całego projektu (SU), a Product description pojedynczego elementu (IP/SB)."
    }
  ],
  "examQuiz": [
    {
      "type": "standard",
      "question": "Jaka jest kluczowa różnica między Kontrolą Jakości (Quality control) a Zapewnieniem Jakości (Quality assurance)?",
      "options": [
        "Kontrola dotyczy finansów, a zapewnienie marketingu.",
        "Kontrola sprawdza konkretne produkty, a zapewnienie to niezależna weryfikacja całego podejścia i procesów.",
        "Kontrolę wykonuje sponsor, a zapewnienie programista.",
        "Nie ma żadnej różnicy."
      ],
      "correct": 1,
      "explanation": "Quality control mierzy i testuje produkty, Quality assurance weryfikuje proces i standardy."
    },
    {
      "type": "missing-word",
      "question": "Uzupełnij poniższe zdanie:\nDokument definiujący kryteria jakościowe, metody kontroli oraz osoby odpowiedzialne dla POJEDYNCZEGO produktu to Opis [...].",
      "options": [
        "Projektu",
        "Produktu (Product description)",
        "Etapu",
        "Jakości"
      ],
      "correct": 1,
      "explanation": "Product description tworzy specyfikację jakościową dla pojedynczego produktu."
    },
    {
      "type": "list",
      "question": "Które DWA dokumenty są bezpośrednio powiązane z Praktyką Jakości?",
      "options": [
        "1. Podejście do Zarządzania Jakością (Quality management approach)",
        "2. Rejestr Jakości (Quality register)",
        "3. Rejestr Akcjonariuszy",
        "4. Harmonogram Główny Wykonawcy"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Dokumenty zarządcze jakości to Podejście do Jakości oraz Rejestr Jakości."
    },
    {
      "type": "negative",
      "question": "Które ze stwierdzeń NIE JEST prawdziwe dla Zapewnienia Jakości (Quality assurance)?",
      "options": [
        "Jest funkcją niezależną od Zespołu Zarządzającego Projektem.",
        "Polega na bezpośrednim pisaniu testów jednostkowych w kodzie aplikacji.",
        "Weryfikuje czy stosowane procedury są zgodne ze standardami organizacji.",
        "Sprawdza skuteczność Podejścia do Zarządzania Jakością."
      ],
      "correct": 1,
      "explanation": "Pisanie testów w kodzie to Kontrola Jakości (Quality control), a NIE Zapewnienie Jakości (Quality assurance)."
    },
    {
      "type": "missing-word",
      "question": "Uzupełnij poniższe zdanie:\nEwidencja wszystkich zaplanowanych i przeprowadzonych przeglądów jakościowych oraz ich wyników znajduje się w Rejestrze [...].",
      "options": [
        "Ryzyk",
        "Jakości (Quality register)",
        "Zagadnień",
        "Lekcji"
      ],
      "correct": 1,
      "explanation": "Rejestr Jakości gromadzi dane o testach i odbiorach jakościowych."
    },
    {
      "type": "standard",
      "question": "Co definiują Kryteria Akceptacji (Acceptance criteria)?",
      "options": [
        "Wysokość wynagrodzenia Kierownika Projektu.",
        "Mierzalną listę wymagań, które musi spełnić produkt końcowy, aby został zaakceptowany przez klienta.",
        "Liczbę godzin przepracowanych przez zespół.",
        "Datę rozpoczęcia drugiego etapu."
      ],
      "correct": 1,
      "explanation": "Kryteria akceptacji określają warunki odbioru końcowego produktu projektu."
    },
    {
      "type": "list",
      "question": "Które DWA elementy zawarte są w Opisie Produktu (Product description)?",
      "options": [
        "1. Kryteria jakościowe dla produktu",
        "2. Metody kontroli jakości i odpowiedzialności testowe",
        "3. Numer konta bankowego inwestora",
        "4. Lista wszystkich pracowników firmy"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Product description określa specyfikację, kryteria jakości i metody kontroli danego elementu."
    },
    {
      "type": "negative",
      "question": "Co NIE JEST zadaniem Kontroli Jakości (Quality control)?",
      "options": [
        "Przeprowadzanie inspekcji i testów produktów.",
        "Zapisywanie wyników kontroli w Rejestrze Jakości.",
        "Audytowanie niezależności całej organizacji na zlecenie zarządu.",
        "Weryfikacja czy produkt spełnia specyfikację z Opisu Produktu."
      ],
      "correct": 2,
      "explanation": "Audytowanie całościowe organizacji leży w gestii Zapewnienia Jakości (Quality assurance)."
    },
    {
      "question": "Czy planowanie jakości jest SLA lub SLT?",
      "options": [
        "Tak, zawsze",
        "Nie, jest szersze; SLA i cele usługi mogą dostarczać wymagań",
        "Tak, jeśli projekt jest IT"
      ],
      "correct": 1,
      "explanation": "Planowanie obejmuje również techniki, standardy, role i akceptację."
    },
    {
      "question": "Co przede wszystkim sprawdza quality assurance?",
      "options": [
        "Czy mechanizmy planowania i kontroli pozwolą potwierdzić jakość",
        "Tylko pojedynczy wynik funkcji",
        "Wyłącznie opłacalność projektu"
      ],
      "correct": 0,
      "explanation": "Zapewnienie jakości ocenia adekwatność kontroli i jest zwykle niezależne od zespołu projektu."
    },
    {
      "question": "Czy zielony pipeline oznacza akceptację produktu?",
      "options": [
        "Tak",
        "Tylko jeśli ma dużo testów",
        "Nie, akceptacja wymaga właściwych dowodów i decyzji"
      ],
      "correct": 2,
      "explanation": "Automatyczne testy pokrywają określony zakres wymagań."
    },
    {
      "question": "Gdzie zapisujemy planowane i wykonane kontrole?",
      "options": [
        "W Rejestrze Jakości",
        "Tylko w Business Case",
        "Wyłącznie w Rejestrze Ryzyk"
      ],
      "correct": 0,
      "explanation": "Rejestr Jakości podsumowuje działania i wyniki."
    },
    {
      "question": "Co odróżnia Rejestr Produktów?",
      "options": [
        "Zawiera tylko daty testów",
        "Śledzi produkty i ich status, w tym akceptację",
        "Zastępuje wszystkie opisy"
      ],
      "correct": 1,
      "explanation": "Produkt może mieć wiele kontroli jakości."
    },
    {
      "question": "Kto powinien przeglądać produkt?",
      "options": [
        "Zawsze tylko jego autor",
        "Osoba niezależna od wytwórcy",
        "Wyłącznie Executive"
      ],
      "correct": 1,
      "explanation": "Rozdzielenie ról ogranicza konflikt interesów."
    }
  ],
  "flashcards": [
    {
      "q": "Czym różni się Quality Control od Quality Assurance?",
      "a": "Control testuje produkty; Assurance to niezależny audyt procesów i standardów."
    },
    {
      "q": "Co zawiera Opis Produktu (Product description)?",
      "a": "Specyfikację pojedynczego produktu, jego kryteria jakościowe i metody kontroli."
    },
    {
      "q": "Co zawiera Rejestr Jakości (Quality register)?",
      "a": "Wykaz wszystkich zaplanowanych i przeprowadzonych testów oraz ich wyników."
    },
    {
      "q": "Co to są Kryteria Akceptacji?",
      "a": "Mierzalne wymagania, których spełnienie warunkuje odbiór produktu końcowego przez klienta."
    },
    {
      "q": "Czym są Oczekiwania Jakościowe Użytkownika?",
      "a": "Ogólnym oświadczeniem na początku projektu określającym wymaganą jakość."
    },
    {
      "q": "Kiedy powstaje Opis Produktu Projektu?",
      "a": "W procesie SU (Starting Up a Project)."
    },
    {
      "q": "Co to jest Tolerancja Jakości?",
      "a": "Dopuszczalne odchylenie od parametrów jakościowych w Opisie Produktu."
    },
    {
      "q": "Kto odpowiada za zatwierdzenie kryteriów akceptacji?",
      "a": "Główny Użytkownik oraz Zleceniodawca."
    },
    {
      "q": "Przeznaczenie praktyki Jakość?",
      "a": "Dokumentować wymagania użytkowników dotyczące produktów i określić sposób ich spełnienia."
    },
    {
      "q": "Planowanie, kontrola, zapewnienie jakości?",
      "a": "Planowanie ustala wymagania i ramy; kontrola bada zgodność; zapewnienie ocenia, czy planowanie i kontrola są wystarczające."
    },
    {
      "q": "SLA a SLT?",
      "a": "SLA to uzgodnienie poziomu usługi; SLT to konkretny cel. Mogą dostarczać wymagań, ale nie wyczerpują planowania jakości."
    },
    {
      "q": "Piramida testów i CI?",
      "a": "Techniki IT wspierające kontrolę, a nie obowiązkowe składniki PRINCE2. Zielony build nie zastępuje akceptacji."
    },
    {
      "q": "Podejście do Zarządzania Jakością?",
      "a": "Zakres, procedury, role, zasoby, techniki, standardy i odniesienia; część PID."
    },
    {
      "q": "Kryteria akceptacji a specyfikacje jakościowe?",
      "a": "Pierwsze określają warunki przyjęcia całości; drugie miary i poziomy dla konkretnych produktów."
    },
    {
      "q": "Quality assurance a project assurance?",
      "a": "Pierwsze zapewnia adekwatność jakości i jest zwykle niezależne od zespołu; drugie wspiera Radę w nadzorze nad prowadzeniem projektu."
    },
    {
      "q": "Rejestr Jakości a Rejestr Produktów?",
      "a": "Pierwszy zapisuje kontrole i wyniki; drugi produkty, status i akceptację."
    }
  ]
};
