/**
 * Denne komponenten renderer på CV siden.
 * Komponenten består av en liste av type objekter som tilsvarer med det som vises på siden.
 * Eksempel:
 * - Utvide sections med flere erfaringer eller utdanning
 * - Utvide sections med "Ferdigheter"
 */
import { CVSection } from "@/components/CVSection";

const sections = [
  {
    title: "Erfaring",
    items: [
      {
        sectionTitle: "Arbeidssted | Rolle",
        period: "Måned YYYY - Måned YYYY",
        description:
          "En rask beskrivelse av hva arbeidsoppgavene var i erfaringen. Hva tar du med deg fra stedet. Jobbet du med noen andre? Hva var ansvarsområder? Beskriv kort.",
      },
    ],
  },
  {
    title: "Utdanning",
    items: [
      {
        sectionTitle: "Utdanningssted | Studieretning",
        period: "Måned YYYY - Måned YYYY",
        description:
          "En rask beskrivelse av hva du skulle lære og lærte på studiet. Er det noe spesielt du tar med deg videre? Hva var det du fordypte deg i? Beskriv kort.",
      },
      {
        sectionTitle: "Utdanningssted | Studieretning",
        period: "Måned YYYY - Måned YYYY",
        description:
          "En rask beskrivelse av hva du skulle lære og lærte på studiet. Er det noe spesielt du tar med deg videre? Hva var det du fordypte deg i? Beskriv kort.",
      },
    ],
  },
];

export default function CV() {
  return (
    <div className="container mx-auto mt-32 px-8 gap-16 flex flex-col">
      {sections.map((section) => {
        return <CVSection {...section} key={section.title} />;
      })}
    </div>
  );
}
