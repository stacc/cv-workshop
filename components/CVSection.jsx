export function CVSection({ title, sectionTitle, period, description }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <h2 className="col-start-1 col-end-2 text-5xl text-secondary-700">
        {title}
      </h2>
      <div className="flex flex-col col-span-2 gap-2">
        <div className="flex flex-col">
          <span className="font-bold">{sectionTitle}</span>
          <span>{period}</span>
        </div>
        <span>{description}</span>
      </div>
    </div>
  );
}
