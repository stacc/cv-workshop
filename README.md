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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fstacc%2Fcv-workshop&project-name=cv-nettside&repository-name=cv-nettside&demo-title=Din%20egen%20hjemmeside&demo-description=Snart%20din%20egen%20hjemmeside%20p%C3%A5%20internett!&demo-url=https%3A%2F%2Fstacc.com&demo-image=https%3A%2F%2Fscontent.fsvg2-1.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F277743561_1426907474412582_2576987049166049851_n.png%3F_nc_cat%3D102%26ccb%3D1-7%26_nc_sid%3D1ac024%26_nc_ohc%3DVeh_am-zic4AX_Zhiwk%26_nc_ht%3Dscontent.fsvg2-1.fna%26oh%3D00_AfC_z3A6nrn5ZnCi3dTROTTcndiQ8ktENqBHnsUNbbfUvg%26oe%3D652B5742)

Start med å trykke knappen ovenfor, den vil starte en prosess som hjelper med følgende:
1. Lage eventuell Vercel- og Github konto, samt koble dem sammen.
2. Klone koden fra dette repositoriet til din egen konto.
3. Legge siden ut på internett, samt koble sammen hver gang du pusher nye endringer til Github, så vil det endre nettsiden.

Etterpå er du nødt til å klone ned repoet lokalt slik at du kan begynne å endre på koden selv.
Vi har en video under som viser dette

Vi har laget en kort video som viser hele denne prosessen. Du finner videoen [her](https://www.youtube.com/watch?v=XEVaHfDUG4w)

## Hva gjør jeg nå alt er satt opp?

Nå er nettsiden ute på nett og vi har koden lokalt på pc'en vår, da er vi klar til å skrive kode.
For å få koden vi skriver lokalt opp og ut på nettet, bruker vi `git` som dere lastet ned ovenfor.
Du kan bruke `git` direkte i `VSCode` men også ved å bruke terminalen. For å bruke `git` i `terminalen` er det 3 hovedkommandoer vi skal bruke.

> [!NOTE]  
> Når vi jobber i terminalen er det viktig å huske "hvor du er" i filstrukturen din. Alle kommandoene vi kjører i denne workshoppen skal kjøres fra rot i prosjektet. Hvis du følger instruksene i videoen, vil du være i rot av prosjektet i terminalen

- `git add .`, denne kommandoen "stager" alle filene i samme mappe som du er i terminalen. Å "stage" betyr at filene låses for videre endringer.
- `git commit -m "her skriver du hvilke endringer du gjorde"`, denne kommandoen lagrer kodeendringene dine sammen med en tekst som beskriver endringene dine.
- `git push`, denne kommandoen dytter endringene dine til `Github` og videre ut på nettet. Du vil se endringene din live på nettsiden din.

Men når vi holder på å lage endringene våre, er det for vanskelig og tidskrevende å dytte kode ut på nett for å se endringene våre. Vi kjører da opp nettsiden lokalt. Det gjør vi ved å først skrive `npm install` og deretter `npm run dev` i terminalen vår. Da vil du kunne bevege deg til nettleseren din og skrive inn `localhost:3000`. Her vil alle endringer du gjør lokalt vise seg når du lagrer filene.

## Nyttige kilder

- [Git på 100 sekunder](https://www.youtube.com/watch?v=hwP7WQkmECE)
- [TailwindCSS](https://tailwindcss.com/) - Pakken vi bruker for å stilsette nettsiden.
- [React](https://react.dev/) - Pakken som vi bruker til å bygge de ulike sidene og komponentene med
- [NextJS](https://nextjs.org/) - NextJS ligger rundt React og gir den ekstra funksjonalitet.

## Discord

Gjerne ta i bruk Discord serveren til Stacc Girlpower for å stille spørsmål både før og etter workshoppen!
[![Join us on Discord](https://assets-global.website-files.com/6257adef93867e50d84d30e2/62594fddd654fc29fcc07359_cb48d2a8d4991281d7a6a95d2f58195e.svg)](https://discord.gg/FhrMvpKMEw)
