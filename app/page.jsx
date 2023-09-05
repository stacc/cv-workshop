import { Hero } from "@/components/Hero";
import { LatestProjects } from "@/components/LatestProjects";

export default function Home() {
  return (
    <div className="container mx-auto mt-32 mb-32 gap-32 flex flex-col px-8">
      <Hero />
      <LatestProjects />
    </div>
  );
}
