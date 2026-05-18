/* eslint-disable @next/next/no-img-element */
import Link from "next/link";


export default function OMniePage() {
  return (
    <main className="about-page">
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

      <section className="about-hero">
        <div className="about-copy">
          <h1>O mnie</h1>
          <p className="about-script">Twoje piękno. Moja pasja.</p>

          <div className="about-text">
            <p>
              Nazywam się Klaudia Nowak i tworzę Aura Beauty Studio — kameralne miejsce, w którym nowoczesna kosmetologia spotyka się ze spokojem, elegancją i uważnym podejściem do drugiej osoby. Pochodzę z centralnej Polski, ale od lat jestem związana z Łodzią. To tutaj uczyłam się pracy z ludźmi, budowałam doświadczenie i dojrzewałam do decyzji, żeby stworzyć własny gabinet.
            </p>
            <p>
              Z wykształcenia jestem kosmetologiem. Ukończyłam studia kierunkowe oraz regularnie uczestniczę w szkoleniach z zakresu modelowania ust, stymulatorów tkankowych, mezoterapii, terapii skóry i zabiegów anti-aging. Najważniejsze są dla mnie bezpieczeństwo, higiena pracy, naturalny efekt i świadoma kwalifikacja do zabiegu.
            </p>
            <p>
              Robię to, ponieważ wierzę, że dobrze dobrany zabieg nie powinien zmieniać twarzy, tylko wydobywać jej harmonię. Lubię moment, w którym klientka po wizycie widzi w lustrze siebie — świeższą, bardziej wypoczętą i pewniejszą. Każde spotkanie zaczynam od rozmowy, spokojnego omówienia możliwości i realnych efektów. Nie pracuję schematem. Dobieram plan do skóry, rysów twarzy, stylu życia i oczekiwań. Chcę, żeby Aura Beauty Studio było miejscem, do którego wraca się nie tylko po efekt, ale też po poczucie zaopiekowania.
            </p>
          </div>
        </div>

        <div className="about-photo-card">
          <img src="/pani/kosmetyczka-aura.jpg" alt="Kosmetyczka Aura Beauty Studio w gabinecie" />
        </div>
      </section>

      <section className="about-stats" aria-label="Najważniejsze informacje">
        <div><strong>9+</strong><span>lat doświadczenia</span></div>
        <div><strong>50+</strong><span>szkoleń i certyfikatów</span></div>
        <div><strong>1000+</strong><span>zadowolonych klientek</span></div>
        <div><strong>Pasja</strong><span>i indywidualne podejście</span></div>
      </section>
    </main>
  );
}
