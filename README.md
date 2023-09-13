# CV Workshop

> [!NOTE]  
> Du står fritt til å begynne med oppgaven før workshoppen!
> Ikke vær redd for å stille spørsmål på forhånd. Send en e-post til reinu@stacc.com om du lurer på noe som helst :)

I denne workshoppen skal vi ta i bruk dette templatet for å bygge våre egen hjemmeside. Templatet inneholder det mest basale for å komme i gang. Håpet er når du er ferdig med workshoppen, har du en nettside som er tilgjengelig for andre på nett og som du har eierskap over. Du kommer kanskje ikke til å bygge veldig mye mer funksjonalitet på nettsiden, men du har en grunnlag som du kan bygge videre på i fremtiden.

Templatet er bygget med [React](https://react.dev) og [NextJS](https://nextjs.org). Du trenger ikke å bekymre deg hvis du ikke vet hva det betyr, vi kommer til å guide deg gjennom oppgaven. Du spør om så mye hjelp som du trenger!

## Hva må jeg ha for å starte?

For å ta i bruk dette templatet trenger du noen grunnleggende ting:

1. En IDE, altså et program hvor du kan skrive kode. Vi anbefaler [VSCode](https://code.visualstudio.com/) som er gratis.

2. En terminal hvor du kan skrive inn kommandoer på PC'en din. (Det er innebygget på alle datamaskiner. Søk etter `CMD` på Windows og `Terminal` på Mac)

3. [GIT](https://git-scm.com/downloads) som er et versjonskontroll system. Du bruker det for å snakke med nettsiden du er på nå, [Github](https://github.com).

> Skriv `git --version` i terminalen din for å verifisere at Git er lastet ned korrekt.

4. [Node](https://nodejs.org/en) som bruker for å kjøre koden lokalt på din maskin. (Trykk på knappen hvor det står `Recommended for most users`).

> Skriv `node --version` i terminalen din for å verifisere at Git er lastet ned korrekt.

5. En [Github konto](https://github.com/join). Dette er kontoen hvor vi skal lagre koden din. Hvis du har en allerede, bruk den!

6. (VALGFRITT): En [Vercel konto](https://vercel.com). Vi bruker Vercel til å hoste nettsiden din og gjøre den tilgjengelig for andre. Vercel er gratis! Hvis du ikke ønsker å legge ut nettsiden din, kan du skippe dette steget.

## Hvor starter jeg?

Vi har laget en kort video som viser hvordan du kan kopiere koden over til din Github bruker, få ned koden lokalt og deretter få den ut på internett via Vercel.

Du finner videoen [her](https://www.youtube.com/watch?v=XEVaHfDUG4w)

## Hva gjør jeg nå alt er satt opp?

Nå er nettsiden ute på nett og vi har koden lokalt på pc'en vår, da er vi klar til å skrive kode.
For å få koden vi skriver lokalt opp og ut på nettet, bruker vi `git` som dere lastet ned ovenfor.
Du kan bruke `git` direkte i `VSCode` men også ved å bruke terminalen. For å bruke `git` i `terminalen` er det 3 hovedkommandoer vi skal bruke.

> [!NOTE]  
> Når vi jobber i terminalen er det viktig å huske "hvor du er" i filstrukturen din. Alle kommandoene vi kjører i denne workshoppen skal kjøres fra rot i prosjektet. Hvis du følger instruksene i videoen, vil du være i rot av prosjektet i terminalen

- `git add .`, denne kommandoen "stager" alle filene i samme mappe som du er i terminalen. Å "stage" betyr at filene låses for videre endringer.
- `git commit -m "her skriver du hvilke endringer du gjorde"`, denne kommandoen lagrer kodeendringene dine sammen med en tekst som beskriver endringene dine.
- `git push`, denne kommandoen dytter endringene dine til `Github` og videre ut på nettet. Du vil se endringene din live på nettsiden din.

Men når vi holder på å lage endringene våre, er det for vanskelig og tidskrevende å dytte kode ut på nett for å se endringene våre. Vi kjører da opp nettsiden lokalt. Det gjør vi ved å først skrive `npm run install` og deretter `npm run dev` i terminalen vår. Da vil du kunne bevege deg til nettleseren din og skrive inn `localhost:3000`. Her vil alle endringer du gjør lokalt vise seg når du lagrer filene.

## Nyttige kilder

- [Git på 100 sekunder](https://www.youtube.com/watch?v=hwP7WQkmECE)
