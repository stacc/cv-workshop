/**
 * Dette tilsvarer en prosjekt .
 * Denne siden skal vise et prosjekt.
 * Eksempel:
 * - Kopier denne filen og lag en ny mappe i app/prosjekter med navnet på prosjektet. Deretter limer du inn denne filen. Da vil du få en ny side på /prosjekter/navn-på-prosjektet
 * - Endre tittelen på prosjektet
 * - Endre ingressen
 * - Endre bildet
 * - Legg til flere komponenter som viser prosjektet ditt. Disse kan være helt nye komponenter, eller du kan kopiere eksisterende komponenter fra components mappen.
 */
import { ProjectHero } from "@/components/ProjectHero";
import rectangle from "../../../public/rectangle.jpg";
import { TextBlock } from "@/components/TextBlock";
import { Photostrip } from "@/components/Photostrip";

const images = [
  "/design-sprint.jpg",
  "/design-sprint.jpg",
  "/design-sprint.jpg",
];

export default async function Project() {
  return (
    <div className="ml-8 sm:ml-10 flex flex-col gap-16 mb-32">
      <ProjectHero
        title="Tittel"
        description="Ingress med en forklaring om hva prosjektet handlet om, hvem det var med etc."
        image={rectangle}
      />
      <Photostrip images={images} />

      <TextBlock
        title="Overskrift"
        description="Kort forklaring av hva prosjektet omhandlet, eventuelt hvem det var for."
      />
      <TextBlock
        title="Overskrift"
        description="Kort forklaring av hva prosjektet omhandlet, eventuelt hvem det var for."
      />
    </div>
  );
}
