import Link from "next/link";

const content: Record<string, { title: string; lead: string; price: string; duration: string; details: string[] }> = {
  "modelowanie-ust": {
    title: "Modelowanie ust",
    lead: "Subtelne podkreślenie kształtu, nawilżenia i proporcji ust z zachowaniem naturalnego efektu.",
    price: "od 700 zł",
    duration: "45–60 min",
    details: ["konsultacja przed zabiegiem", "dobór techniki do anatomii ust", "zalecenia pozabiegowe"],
  },
  "stymulatory-tkankowe": {
    title: "Stymulatory tkankowe",
    lead: "Zabieg wspierający regenerację skóry, poprawę jędrności i świeży wygląd bez przerysowanego efektu.",
    price: "od 650 zł",
    duration: "40–60 min",
    details: ["ocena kondycji skóry", "dobór preparatu", "plan serii zabiegowej"],
  },
  wolumetria: {
    title: "Wolumetria twarzy",
    lead: "Harmonijna odbudowa objętości i proporcji twarzy, dopasowana do rysów oraz oczekiwań klientki.",
    price: "od 800 zł",
    duration: "60 min",
    details: ["analiza proporcji", "naturalny efekt modelowania", "kontrola po zabiegu"],
  },
  "relaks-i-regeneracja": {
    title: "Relaks i regeneracja",
    lead: "Zabiegi pielęgnacyjne dla skóry potrzebującej ukojenia, odżywienia i spokojnej regeneracji.",
    price: "od 350 zł",
    duration: "50–75 min",
    details: ["oczyszczenie i pielęgnacja", "dobór procedury do skóry", "rekomendacja pielęgnacji domowej"],
  },
};

export default function ZabiegPage({ params }: { params: { slug: string } }) {
  const item = content[params.slug] ?? content["modelowanie-ust"];

  return (
    <main className="min-h-screen bg-[#070806] px-5 py-12 text-[#f5efe3] md:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/#zabiegi" className="text-sm uppercase tracking-[.2em] text-[#d6a654]">← Wróć do zabiegów</Link>
        <p className="mt-12 text-xs font-bold uppercase tracking-[.32em] text-[#d6a654]">Opis zabiegu</p>
        <h1 className="mt-4 text-5xl uppercase tracking-[.08em] text-white md:text-7xl">{item.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-[#c7bba7]">{item.lead}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[#b8893e]/35 bg-[#11100e] p-6">
            <p className="text-sm uppercase tracking-[.2em] text-[#d6a654]">Cena</p>
            <p className="mt-3 text-3xl font-semibold">{item.price}</p>
          </div>
          <div className="rounded-xl border border-[#b8893e]/35 bg-[#11100e] p-6">
            <p className="text-sm uppercase tracking-[.2em] text-[#d6a654]">Czas</p>
            <p className="mt-3 text-3xl font-semibold">{item.duration}</p>
          </div>
        </div>
        <ul className="mt-10 grid gap-3 text-[#c7bba7]">
          {item.details.map((detail) => <li key={detail}>• {detail}</li>)}
        </ul>
      </div>
    </main>
  );
}
