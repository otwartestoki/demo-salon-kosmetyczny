/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


const sections = [
  {
    eyebrow: "Usta",
    title: "Modelowanie i rewitalizacja ust",
    note: "Subtelna korekta kształtu, konturu i nawilżenia ust z naciskiem na naturalny efekt.",
    items: [
      ["Konsultacja kosmetologiczna", "30 min", "150 zł"],
      ["Modelowanie ust 0,5 ml", "60 min", "650 zł"],
      ["Modelowanie ust 1 ml", "75 min", "950 zł"],
      ["Russian Lips", "90 min", "1200 zł"],
      ["Rewitalizacja / nawilżenie ust", "60 min", "700 zł"],
    ],
  },
  {
    eyebrow: "Regeneracja",
    title: "Stymulatory tkankowe",
    note: "Terapie poprawiające napięcie, jakość i gęstość skóry bez efektu przerysowania.",
    items: [
      ["Profhilo", "45 min", "1400 zł"],
      ["Sunekos", "45 min", "900 zł"],
      ["Jalupro Super Hydro", "60 min", "1300 zł"],
      ["Karisma", "60 min", "1500 zł"],
      ["Terapia okolicy oka", "45 min", "750 zł"],
    ],
  },
  {
    eyebrow: "Kontur twarzy",
    title: "Wolumetria i modelowanie",
    note: "Praca z proporcjami twarzy, owalem, brodą i policzkami po wcześniejszej analizie rysów.",
    items: [
      ["Wolumetria policzków", "75 min", "od 1200 zł"],
      ["Modelowanie brody", "60 min", "od 900 zł"],
      ["Modelowanie żuchwy", "90 min", "od 1400 zł"],
      ["Full Face — plan indywidualny", "90 min", "wycena"],
    ],
  },
  {
    eyebrow: "Skóra",
    title: "Mezoterapia i pielęgnacja premium",
    note: "Zabiegi dla skóry zmęczonej, odwodnionej, pozbawionej blasku lub wymagającej odbudowy.",
    items: [
      ["Mezoterapia igłowa twarzy", "60 min", "550 zł"],
      ["Mezoterapia okolicy oka", "45 min", "450 zł"],
      ["Mezoterapia mikroigłowa", "60 min", "800 zł"],
      ["Zabieg bankietowy glow", "60 min", "450 zł"],
      ["Terapia anti-age", "75 min", "550 zł"],
    ],
  },
];

export default function CennikPage() {
  return (
    <main className="price-page">
      <header className="about-header simple-page-header">
        <Link
          href="/"
          className="about-logo-link"
          aria-label="Aura Beauty Studio — strona główna"
        >
          <img
            src="/logos/logo-dark.svg"
            alt="Aura Beauty Studio"
            className="about-logo"
          />
        </Link>
        <Link href="/" className="page-back-link" aria-label="Powrót na stronę główną">
          ← Powrót na stronę główną
        </Link>
      </header>

      <section className="price-hero">
        <h1>Cennik</h1>
        <p>
          Ceny mają charakter orientacyjny. Ostateczny plan zabiegowy dobierany jest podczas konsultacji,
          po ocenie skóry, proporcji twarzy i oczekiwanego efektu.
        </p>
      </section>

      <section className="price-content" aria-label="Lista cen zabiegów">
        {sections.map((section) => (
          <article className="price-section-card" key={section.title}>
            <div className="price-section-head">
              <div>
                <p>{section.eyebrow}</p>
                <h2>{section.title}</h2>
              </div>
              <span>od</span>
            </div>
            <p className="price-note">{section.note}</p>
            <div className="price-list">
              {section.items.map(([name, time, price]) => (
                <div className="price-row" key={name}>
                  <div>
                    <strong>{name}</strong>
                    <small>{time}</small>
                  </div>
                  <span>{price}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <p className="price-footer">
        Podane ceny są przykładowe i mogą zostać zmienione w szablonie strony.
      </p>
    </main>
  );
}
