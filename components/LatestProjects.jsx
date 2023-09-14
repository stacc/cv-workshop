/**
 * Denne komponenten rendrer på hovedsiden.
 * Den skal vise en forhåndsvisning av prosjekter.
 * Dette vises tydelig dersom du har deployet appen.
 * Eksempel:
 * - Du kan legge til flere prosjekter i latestProjects listen. Husk a siden den lenker til må også lages.
 */
import Link from "next/link";
import Image from "next/image";

// Her definerer hvilke prosjekter vi vil vise nedenfor.
const latestProjects = [
  {
    title: "Overskrift",
    description:
      "Kort forklaring av hva prosjektet omhandlet, eventuelt hvem det var for.",
    image: "/design-sprint.jpg",
    href: "/prosjekter/tilfeldig-prosjekt",
  },
];

export function LatestProjects() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl">Siste prosjekter</h2>
        {latestProjects.map((project) => (
          // Vi går over alle prosjektene vi har definert over og lager en ProjectPreview for hvert av dem.
          // Når du looper over noe i React må du gi det en unik key. Her bruker vi tittelen som key.
          // Dette er slik at React har kontroll på hvilke elementer som er endret, og ikke trenger å re-rendre alle.
          <ProjectPreview key={project.title} {...project} />
        ))}
      </div>

      <Link
        className="text-secondary-700 font-bold hover:underline"
        href="/prosjekter"
      >
        Se alle mine prosjekter
      </Link>
    </div>
  );
}

function ProjectPreview({ title, description, image, href }) {
  return (
    <a href={href} className="flex flex-col gap-4">
      <Image alt="Bilde av prosjektet" src={image} width={327} height={216} />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
