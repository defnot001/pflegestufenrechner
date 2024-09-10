# Pflegestufenrechner

_Derzeit ist der Pflegestufenrechner in der Entwicklung und noch nicht fertiggestellt. Es kann zu Fehlern und unvollständigen Funktionen kommen!_

Der Pflegestufenrechner ist ein einfach zu bedienendes Tool, um die Pflegestufe einer Person zu berechnen. Er orientiert sich dabei am österreichischen [Bundespflegegeldgesetz](https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008859) und der dazugehörigen [Einstufungsverordnung](https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009142).

## Inhaltliches

Der Pflegestufenrechner basiert auf den Informationen, die aus den relevanten Gesetzen abgeleitet werden können. Es wird aber auch praktisches Zusatzwissen von Gesundheitsexpert:innen verwendet, um hilfreiche Informationen zu den einzelnen Feldern zu liefern.

Der Rechner ist für alle Interessierten gedacht, die sich einen Überblick über die Pflegestufe einer Person verschaffen wollen. Auch Angehörige von professionellen Pflegeberufen können dieses Tool verwenden, um eine erste Einschätzung zu bekommen.

Der Rechner ist **NICHT** dazu gedacht, eine offizielle Einstufung zu **ERSETZEN**. Der Einstufungsprozess ist ein individueller und komplexer Vorgang, der nur sehr schwer durch ein Tool abgebildet werden kann. Die Einstufung wird **IMMER** durch ein **Sachverständigengutachten** mit einem persönlichen Gespräch und Begutachtung durchgeführt.

**Es wird keine Haftung für die Richtigkeit der Ergebnisse übernommen!**

## Datenschutz

Der Rechner verfolgt **kein kommerzielles Interesse**. Es werden **keine Daten** gesammelt. Die Seite verwendet **keine Cookies**, die Funktionalität wird ausschließlich durch den Code zur Verfügung gestellt. Es gibt auch keine Werbung auf der Seite.

## Funktionen und Features

- Modernes und einfaches Design
- Einfache Bedienung
- Mobile-First Design
- Einfache Auswahl der einzelnen Felder
- Schnelle Navigationen nach dem initalen Laden der Seite
- Zusätzliche Informationen zu den einzelnen Feldern
- Anzeige von Felder, die sich ausschließen und damit nicht gemeinsam ausgewählt werden können
- Anzeige der errechneten Pflegestufe
- Felder werden auch nach dem Absenden beibehalten

#### Zukünftige Features:

- Speichern des Ergebnisses mit allen ausgewählten Feldern
- Erklärung beim Ergenis, wie die Pflegestufe zustande gekommen ist
- Implementierung der Motivationsgespräche, die für eine genauere Einstufung notwendig sind.

## Technischer Teil

Der Rechner wird in [React](https://react.dev/) entwickelt und verwendet [Vite](https://vitejs.dev/) als Build Tool mit [SWC](https://swc.rs/). Außerdem wird [TypeScript](https://www.typescriptlang.org/) verwendet und die Codequalität wird mit [ESLint](https://eslint.org/). Die Styles werden mit [Tailwind CSS](https://tailwindcss.com/) erstellt. [React Router](https://reactrouter.com/en/main) wird verwendet, um die Navigation zu ermöglichen.

## Hosting

Der Pflegestufenrechner wird derzeit kostenlos auf [GitHub Pages](https://pages.github.com/) gehostet und ist unter [https://defnot001.github.io/pflegestufenrechner](https://defnot001.github.io/pflegestufenrechner) aufrufbar. Sollten die Anfragen das Limit von GitHub Pages überschreiten, wird ein anderes Hosting in Betracht gezogen.

## Fehler und Verbesserungen

Wenn Ihnen Fehler in der Funktion oder im Design auffallen, oder Sie Verbesserungsvorschläge haben, können Sie gerne ein [Issue](https://github.com/defnot001/pflegestufenrechner/issues) erstellen. Wenn Sie bei der Entwicklung helfen wollen, öffnen Sie bitte zuerst ein Issue, um zu diskutieren, was verbessert werden kann. Danach freue ich mich über Pull Requests.

## Lizenz

Der Pflegestufenrechner ist unter der [MIT Lizenz](https://opensource.org/license/mit) veröffentlicht. Der Code kann frei verwendet und verändert werden, solange die Lizenzbedingungen eingehalten werden.
