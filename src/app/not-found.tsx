import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070806] px-6 py-20 text-[#f5efe3]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[.3em] text-[#d6a654]">404</p>
        <h1 className="mt-5 text-4xl font-semibold uppercase tracking-[.08em] md:text-6xl">
          Nie znaleziono strony
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#c7bba7]">
          Ta podstrona nie istnieje albo została przeniesiona.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full border border-[#b8893e]/50 px-7 py-4 text-sm font-bold uppercase tracking-[.18em] text-[#d6a654]"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}
