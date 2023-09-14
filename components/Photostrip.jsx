import Image from "next/image";

/**
 * Denne komponenten rendrer en liste med bilder som er skrollabre horisontalt.
 */
export function Photostrip({ images }) {
  return (
    <div className="flex snap-x snap-mandatory justify-start gap-8 overflow-x-auto">
      {images.map((image, index) => {
        // Når vi looper over lister, kan vi alle hente ut indeksen til elementet vi er på med en variabel som heter index
        // Vi bruker denne til å gi hvert bilde en unik key, slik at React vet hvilke elementer som er endret.
        return (
          <Image
            alt="Bilde av meg"
            key={index}
            src={image}
            width={405}
            height={208}
            className="snap-center"
          />
        );
      })}
    </div>
  );
}
