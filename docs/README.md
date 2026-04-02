### Code Review Workflow

1. Für jede Änderung wird ein eigener Branch erstellt (feature/*)
2. Änderungen werden in einem Pull Request eingereicht
3. Das dazugehörige Issue wird im Pull Request verlinkt.
4. Der Reviewer prüft den Pull Request anhand der Review Checklist
5. Falls nötig, werden Änderungen verlangt und anschliessend erneut geprüft
6. Der Pull Request wird erst in Main gemerged, wenn alle CI Checks erfolgreich sind und die Definition of Done erfüllt ist

## Branch Strategy (GitHub Flow)

Wir verwenden GitHub Flow:

1. Neue Features werden in einem separaten Branch entwickelt
2. Änderungen erfolgen über Pull Requests
3. Code wird vor dem Merge reviewed
4. Nach erfolgreichem Review wird in main gemerged

Für Pull Requests auf main ist mindestens ein Approval erforderlich. Ein Merge ohne erfolgreiches Review ist nicht erlaubt.

### Naming Convention

Branches werden wie folgt benannt:

- feature/<beschreibung>  → neue Features
- bugfix/<beschreibung>  → Fehlerbehebungen
- hotfix/<beschreibung>  → dringende Fixes

Beispiele:
- feature/login-page
- bugfix/navbar-error


To-Do-Web-App

1. Projektbeschreibung:
   - Demonstration von Github-Features "Branching & Protection " und "Pull Requests & Reviews" anhand einer To-Do-Web-Site.

2. Funktionen der To-do-Website:
   - Aufgaben hinzufügen
   - Aufgaben zuweisen
   - Aufgaben löschen

3. Verwendete Technologien:
   - HTML, CSS, JavaScript, GitHub

4. Branch-Strategie:
   - main enthält die stabile Version
   - Änderungen über feature/*
   - Merge nur via Pull Request
  
5. Rollen im Team:
   - Product Owner (PO): Prüft Änderungen aus Sicht des Produkts, priorisiert Features, gibt finales Go für Merge
   - Scrum Master (SM): Überwacht den Prozess, stellt sicher, dass Regeln eingehalten werden, kann Reviews kommentieren
   - Developer (Dev): Implementiert Features, erstellt Branches, pusht Änderungen, öffnet Pull Requests

6. Review- und Merge-Prozess:
   - Keine direkten Änderungen auf main
   - Änderungen über Pull Request
   - Linter läuft bei Änderungen von HTML, CSS, JS -Dateien drüber und wenn nicht grün, kann nicht gemerged werden (Qualitätssicherung)
   - Mind. 1 Reviewer bevor Merge
