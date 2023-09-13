/**
 * This is the main page, also called index page.
 * This page renders two components.
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
