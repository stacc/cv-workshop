/**
 * Enkel komponent som viser en tittel og en beskrivelse.
 */
export function TextBlock({ title, description }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">{title}</h3>
      <p className="max-w-md">{description}</p>
    </div>
  );
}
