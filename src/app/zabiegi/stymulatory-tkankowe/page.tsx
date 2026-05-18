/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#070806] px-5 py-12 text-[#f5efe3] md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <Link href="/#zabiegi" className="text-sm uppercase tracking-[.2em] text-[#d6a654]">← Wróć do zabiegów</Link>
          <h1 className="serif mt-12 text-5xl uppercase leading-none tracking-[.08em] text-white md:text-7xl">Stymulatory tkankowe</h1>
          <p className="mt-6 text-lg leading-9 text-[#c7bba7]">Regeneracja jakości skóry, poprawa jędrności i świeżości bez przesadzonego efektu.</p>
          <div className="mt-10 rounded-xl border border-[#b8893e]/30 bg-[#11100e] p-6 text-[#e8dece]">
            <h2 className="text-sm font-bold uppercase tracking-[.22em] text-[#d6a654]">Jak wygląda wizyta?</h2>
            <p className="mt-4 leading-8">Najpierw krótka konsultacja, omówienie oczekiwań i przeciwwskazań, a dopiero później dobór preparatu oraz zakresu zabiegu. Celem jest efekt estetyczny, ale nadal naturalny.</p>
          </div>
        </div>
        <img src="/pani/hero-clean-v7.jpg" alt="Stymulatory tkankowe" className="mt-16 h-[520px] w-full rounded-xl border border-[#b8893e]/30 object-cover shadow-2xl shadow-black/40" />
      </div>
    </main>
  );
}
