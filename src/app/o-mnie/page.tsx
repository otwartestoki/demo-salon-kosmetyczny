/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const BOOKSY_URL = "https://booksy.com/pl-pl/";

export default function OMniePage() {
  return (
    <main className="about-page">
      <header className="about-header">
        <Link
          href="/"
          className="about-logo-link"
          aria-label="Aura Beauty Studio — strona główna"
        >
          <img
            src="/logos/logo-dark.svg"
            alt="Aura Beauty Studio"
            className="about-logo"
            style={{
              width: "220px",
              height: "auto",
              display: "block",
            }}
          />
        </Link>
        <nav className="about-nav" aria-label="Menu strony">
          <Link href="/">Strona główna</Link>
          <Link href="/o-mnie">O mnie</Link>
          <Link href="/#zabiegi">Zabiegi</Link>
          <Link href="/cennik">Cennik</Link>
          <Link href="/#opinie">Opinie</Link>
          <Link href="/#kontakt">Kontakt</Link>
        </nav>
        <a href={BOOKSY_URL} className="booksy-button about-booksy" aria-label="Rezerwacja przez Booksy">
          <img src="/pani/booksy-logo-white-v8.png" alt="Booksy" />
        </a>
      </header>

      <section className="about-hero">
        <div className="about-copy">
          <p className="about-eyebrow">Aura Beauty Studio</p>
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
