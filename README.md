# Resq

Dette er repositoryet vårt for gruppe 1 i IS-20X. Her utvikler vi Resq, en webapplikasjon for å få oversikt over hendelser og ressurser i forbindelse med beredskap og redningsarbeid.

## Prosjektoppgave

Her skriver vi kort hva prosjektoppgaven går ut på, hvilket problem vi prøver å løse, og hvem som skal bruke løsningen.

> **Vår prosjektoppgave:** Skriv inn den endelige beskrivelsen av oppgaven her.

## Gruppemedlemmer

Her fyller vi inn hvem som har vært med på prosjektet og eventuelt hvilket hovedansvar hver person har hatt.

| Navn | Ansvarsområde |
| --- | --- |
| Skriv inn navn | Skriv inn ansvarsområde |
| Skriv inn navn | Skriv inn ansvarsområde |
| Skriv inn navn | Skriv inn ansvarsområde |

## Om applikasjonen

Vi har laget Resq som en .NET 10-webapplikasjon med et interaktivt kart som hovedområde. Målet er å lage en ryddig startside der brukeren kan velge en posisjon i kartet, og etter hvert registrere og følge opp hendelser, ressurser og rapporter.

## Funksjoner

Løsningen inneholder foreløpig:

- Interaktivt kart med Leaflet og OpenStreetMap.
- Mulighet til å hente og vise brukerens nåværende posisjon.
- Mulighet til å velge en posisjon i kartet.
- Et sidepanel som senere kan brukes til registrering av hendelser.
- Egne sider for `Incidents`, `Resources` og `Reports`.
- Responsiv navigasjon som fungerer på desktop, nettbrett og mobil.
- Bootstrap Icons i navigasjonen.

Noen av sidene er foreløpig plassholdere. De viser hvor vi senere kan legge inn mer funksjonalitet.

## Responsivt design

Responsivt design betyr at grensesnittet tilpasser seg størrelsen på skjermen som brukes. Vi ønsker at applikasjonen skal være enkel å bruke på en stor dataskjerm, et nettbrett og en mobiltelefon uten at vi trenger å lage separate versjoner.

Vi har implementert dette på følgende måte:

- På større skjermer vises sidepanelet og kartet ved siden av hverandre.
- Kartet får mest plass fordi det er hovedområdet på startsiden.
- På mobil blir kartet hovedflaten, mens sidepanelet kan åpnes ved behov.
- Navigasjonen vises som en fast meny nederst på mobil, slik at den ikke forsvinner bak scrolling.
- På større skjermer vises navigasjonen øverst i toppmenyen.
- CSS media queries brukes til å endre layout, størrelser og avstander ved ulike skjermbredder.
- `100dvh` brukes for at kartet skal utnytte tilgjengelig høyde bedre på mobil.
- Kartet oppdaterer størrelsen sin når layouten endres, slik at Leaflet tegner kartet riktig.

## Designvalg

### Kartet som hovedområde

Vi har valgt å la kartet være hovedområdet fordi posisjon og geografisk oversikt er sentralt i en beredskapsapplikasjon. På mobil får kartet derfor mest mulig plass.

### Fast mobilnavigasjon

På mobil har vi valgt en fast navigasjon nederst på skjermen i stedet for en meny som skjules bak en knapp. Da er det enkelt å bytte side uten at brukeren må lete etter navigasjonen.

### Sammenleggbart sidepanel

Sidepanelet kan åpnes og lukkes på mobil. På den måten kan vi vise skjema og informasjon uten at dette tar plass fra kartet hele tiden.

### Mørkt tema

Vi bruker et mørkt tema med tydelige kontraster. Det gir applikasjonen et samlet uttrykk og gjør at kartet og viktige knapper skiller seg ut.

### Bootstrap og Bootstrap Icons

Vi bruker Bootstrap som et grunnlag for webapplikasjonen og Bootstrap Icons for å gi navigasjonen et tydelig og samlet visuelt uttrykk.

### Leaflet og OpenStreetMap

Leaflet brukes til å vise og kontrollere det interaktive kartet. Kartdataene leveres gjennom OpenStreetMap.

## Kjøre applikasjonen lokalt

### Krav

For å kjøre prosjektet lokalt trenger vi:

- .NET 10 SDK.
- Visual Studio 2026 eller en annen IDE med støtte for .NET 10.
- Git, dersom repositoryet skal klones fra GitHub.
- Internettforbindelse for kartfliser fra OpenStreetMap og Bootstrap Icons fra CDN.

### Starte prosjektet i Visual Studio

1. Klon repositoryet fra GitHub.
2. Åpne `Resq.slnx` i Visual Studio.
3. Vent til NuGet-pakker og prosjektfiler er lastet inn.
4. Bygg løsningen med **Build Solution**.
5. Start applikasjonen med HTTPS-profilen.
6. Åpne adressen som vises av Visual Studio.

### Starte prosjektet fra terminalen

Åpne PowerShell i repositoryets rotmappe og kjør:

```powershell
dotnet restore .\Resq\Resq.csproj
dotnet build .\Resq\Resq.csproj
dotnet run --project .\Resq\Resq.csproj
```

Deretter åpner vi URL-en som vises i terminalen, vanligvis en lokal `https`-adresse.

### Eksterne tjenester

Applikasjonen bruker noen ressurser fra nettet:

- OpenStreetMap leverer kartflisene.
- Leaflet leverer kartbiblioteket.
- Bootstrap Icons leverer ikonene i navigasjonen.

Hvis disse ressursene ikke er tilgjengelige, kan kart, ikoner eller deler av utseendet bli påvirket.

## Prosjektstruktur

De viktigste mappene i prosjektet er:

```text
Resq/
├── Controllers/       Kontrollere som mottar forespørsler og velger visning.
├── Models/            Datamodeller som kan brukes av applikasjonen.
├── Views/             Razor Views som bygger brukergrensesnittet.
├── wwwroot/css/       CSS-filer for farger, layout og responsivt design.
├── wwwroot/js/        JavaScript for interaksjon i nettleseren.
└── Resq.csproj        Prosjektfil med .NET-versjon og pakker.
```

## Videre arbeid

Dette er forslag til funksjonalitet vi kan bygge videre på:

- Lage ferdig skjemaet for registrering av hendelser.
- Lagre hendelser og ressurser i en database.
- Knytte valgte kartposisjoner til hendelser.
- Lage søk, filtrering og sortering.
- Vise ressurser og status på kartet.
- Utvide rapportsiden med statistikk og eksport.
- Legge til innlogging og ulike brukerroller.
- Skrive automatiske tester.
- Vurdere en flyttbar grense mellom sidepanel og kart dersom det blir behov for mer fleksibel størrelsesfordeling.

## Status

Prosjektet er under utvikling. README-en oppdateres etter hvert som vi ferdigstiller flere deler av løsningen.
