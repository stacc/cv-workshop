import Image from "next/image";

export function Hero() {
  return (
    <div className="flex gap-5 flex-col sm:flex-row">
      <Image
        alt="Bilde av meg"
        src="/profilBilde.jpg"
        className="rounded-full"
        width={278}
        height={278}
      />
      <div className="flex flex-col gap-5 my-auto text-center sm:text-left">
        <h1 className="text-secondary-700 text-4xl sm:text-6xl">Velkommen,</h1>
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
