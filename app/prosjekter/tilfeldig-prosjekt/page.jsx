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
