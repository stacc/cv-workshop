import Image from "next/image";

export function ProjectHero({ title, description, image }) {
  return (
    <div className="flex h-screen items-end">
      <div className="flex flex-col mb-32 gap-3 max-w-md">
        <h1 className="text-6xl text-secondary-700">{title}</h1>
        <p>{description}</p>
      </div>
      <Image className="absolute top-0 right-0 -z-10" src={image} alt={title} />
    </div>
  );
}
