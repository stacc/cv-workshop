/**
 * Dette er indeks siden til appen. Innholder her vil vise på rot eller /
 * Eksempel:
 * - Du kan endre på innholdet her. Kanskje du vil legge til flere komponenter?
 */
import { Introduction } from "@/components/Introduction";
import { LatestProjects } from "@/components/LatestProjects";

export default function Home() {
  return (
    <div className="container mx-auto mt-32 mb-32 gap-32 flex flex-col px-8">
      <Introduction />
      <LatestProjects />
    </div>
  );
}
