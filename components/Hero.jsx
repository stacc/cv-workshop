import Image from "next/image";
import profilBilde from "../public/profilbilde.jpg";

export function Hero() {
  return (
    <div className="flex gap-5 justify-center">
      <Image
        alt="Bilde av meg"
        src={profilBilde}
        className="rounded-full"
        width={278}
        height={278}
      />
      <div className="flex flex-col gap-5 my-auto">
        <h1 className="text-secondary-700 text-6xl">Velkommen,</h1>
        <p>
          Jeg heter Kari Nordmann, du kan sende meg en epost på:{" "}
          <a
            className="font-bold hover:underline"
            href="mailto:kari.nordmann@epost.no"
          >
            kari.nordmann@epost.no
          </a>
        </p>
      </div>
    </div>
  );
}
