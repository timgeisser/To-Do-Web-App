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
   - Linter läuft bei Änderungen von HTML, CSS, JS drüber und wenn nicht grün, kann nicht gemerged werden (Qualitätssicherung)
   - Mind. 1 Reviewer bevor Merge
