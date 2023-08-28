import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white/50 flex justify-between mx-8 sm:mx-16 my-5 flex-col sm:flex-row">
      <HeaderLink href="/">karinordmann.no</HeaderLink>
      <div className="flex gap-5">
        <HeaderLink href="/curriculum-vitae">CURRICULUM VITAE</HeaderLink>
      </div>
    </header>
  );
}

function HeaderLink({ href, children }) {
  return (
    <Link
      className="font-bold hover:underline underline-offset-2 outline-offset-4 text-neutral-black"
      href={href}
    >
      {children}
    </Link>
  );
}
