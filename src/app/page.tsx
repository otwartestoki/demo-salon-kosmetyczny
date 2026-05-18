"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

const BOOKSY_URL = "https://booksy.com/pl-pl/";
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Pani+Kosmetolog+Medycyna+Estetyczna+Łódź+opinie";
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps?q=ul.%20Z%C5%82ota%2018%2F4%2C%2090-001%20%C5%81%C3%B3d%C5%BA&output=embed";

const studioData = {
  name: "Aura Beauty Studio",
  addressLine1: "ul. Złota 18/4",
  addressLine2: "90-001 Łódź",
  phone: "+48 512 204 118",
  phoneDisplay: "512 204 118",
  email: "kontakt@aurabeauty-studio.pl",
};

const menuLanding = [
  ["Zabiegi", "#zabiegi"],
  ["Efekty", "#efekty"],
  ["Miejsce", "#miejsce"],
  ["Opinie", "#opinie"],
  ["Kontakt", "#kontakt"],
];

const menuPages = [
  ["Cennik", "/cennik"],
  ["O mnie", "/o-mnie"],
];

const treatments = [
  {
    title: "Modelowanie ust",
    text: "Subtelne podkreślenie kształtu, proporcji i konturu ust.",
    image: "/pani/treatment-lips.jpg",
    href: "/zabiegi/modelowanie-ust",
  },
  {
    title: "Stymulatory tkankowe",
    text: "Regeneracja skóry, poprawa jędrności i naturalna świeżość.",
    image: "/pani/treatment-needle.jpg",
    href: "/zabiegi/stymulatory-tkankowe",
  },
  {
    title: "Wolumetria twarzy",
    text: "Odbudowa objętości i proporcji z zachowaniem naturalnego efektu.",
    image: "/pani/treatment-skin.jpg",
    href: "/zabiegi/wolumetria",
  },
  {
    title: "Relaks i regeneracja",
    text: "Zabiegi pielęgnacyjne w spokojnym, eleganckim wnętrzu.",
    image: "/pani/treatment-relax.jpg",
    href: "/zabiegi/relaks-i-regeneracja",
  },
];


type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

type GoogleReviewsResponse = {
  rating: number | null;
  total: number | null;
  url: string;
  reviews: GoogleReview[];
};

const socials = [
  ["WhatsApp", "/pani/whatsapp.svg", "https://wa.me/48512204118"],
  ["Facebook", "/pani/facebook.svg", "https://facebook.com/"],
  ["Messenger", "/pani/messenger.svg", "https://m.me/"],
  ["Instagram", "/pani/instagram.svg", "https://instagram.com/"],
  ["TikTok", "/pani/tiktok.svg", "https://tiktok.com/"],
];

function Logo() {
  return (
    <Link href="/" className="logo logo-image-link" aria-label="Strona główna Aura Beauty Studio">
      <img src="/logos/logo-dark.svg" alt="Aura Beauty Studio" className="brand-logo brand-logo-dark" />
    </Link>
  );
}

function SectionTitle({ small, children }: { small: string; children: React.ReactNode }) {
  return (
    <div className="section-title">
      <div className="section-line" />
      <div>
        <p>{small}</p>
        <h2>{children}</h2>
      </div>
      <div className="section-line" />
    </div>
  );
}

function BeforeAfterSlider({
  title,
  before,
  after,
}: {
  title: string;
  before: string;
  after: string;
}) {
  const [value, setValue] = useState(50);

  return (
    <figure className="before-after-card">
      <div className="compare" style={{ "--position": `${value}%` } as React.CSSProperties}>
        <img src={before} alt={`${title} przed zabiegiem`} className="compare-image" />
        <div className="compare-after">
          <img src={after} alt={`${title} po zabiegu`} className="compare-image" />
        </div>
        <div className="compare-label compare-label-before">Przed</div>
        <div className="compare-label compare-label-after">Po</div>
        <div className="compare-handle" aria-hidden="true"><span /></div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-label={`Porównaj efekt: ${title}`}
          className="compare-range"
        />
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default function Home() {
  const [googleReviews, setGoogleReviews] = useState<GoogleReviewsResponse | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/google-reviews")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => { if (active && data) setGoogleReviews(data); })
      .catch(() => null);
    return () => { active = false; };
  }, []);

  function scrollToSection(href: string) {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (!(target instanceof HTMLElement)) return;

    const topbar = document.querySelector(".topbar");
    const topbarHeight = topbar instanceof HTMLElement ? topbar.offsetHeight : 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(targetTop - topbarHeight, 0),
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (!window.location.hash) return;

    window.requestAnimationFrame(() => {
      scrollToSection(window.location.hash);
    });
  }, []);

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Logo />
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${isMenuOpen ? "main-nav-open" : ""}`} aria-label="Menu główne">
            {menuLanding.map(([label, href]) => (
              <button
                key={label}
                type="button"
                className="nav-scroll-link"
                onClick={() => scrollToSection(href)}
              >
                {label}
              </button>
            ))}
            <span className="nav-divider" />
            {menuPages.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setIsMenuOpen(false)}>{label}</Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <img src="/pani/hero-template-clean.jpg" alt="Elegancki zabieg medycyny estetycznej" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-copy">
            <h1>
              Twoje piękno.<br />
              <span>Moja precyzja.</span>
            </h1>
            <p className="hero-lead">Modelowanie ust, stymulatory tkankowe, wolumetria i zabiegi regeneracyjne. Naturalne efekty, które podkreślają Ciebie.</p>
            <a href={BOOKSY_URL} className="booksy-button" aria-label="Rezerwacja przez Booksy">
              <img src="/pani/booksy-logo-white-v8.png" alt="Booksy" />
            </a>
          </div>
        </div>
      </section>

      <section id="zabiegi" className="content-section">
        <SectionTitle small="Oferta">Zabiegi dla Ciebie</SectionTitle>
        <div className="treatment-grid">
          {treatments.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="treatment-card"
              aria-label={`Przejdź do szczegółów zabiegu: ${item.title}`}
            >
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>Sprawdź →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="efekty" className="content-section section-contrast">
        <SectionTitle small="Przed i po">Efekty, które mówią same za siebie</SectionTitle>
        <div className="effects-grid">
          <BeforeAfterSlider
            title="Modelowanie ust"
            before="/pani/effect-lips-before-slider.jpg"
            after="/pani/effect-lips-after-slider.jpg"
          />
          <BeforeAfterSlider
            title="Wolumetria i kontur twarzy"
            before="/pani/effect-face-before-slider.jpg"
            after="/pani/effect-face-after-slider.jpg"
          />
        </div>
      </section>

      <section id="miejsce" className="content-section place-section">
        <div>
          <SectionTitle small="Salon">Poznaj to miejsce</SectionTitle>
          <img src="/pani/salon-v8.png" alt="Elegancki salon medycyny estetycznej" className="place-image" />
        </div>
        <aside id="opinie" className="reviews-card">
          <p className="card-label">Opinie Google</p>
          <div className="google-row">
            <div className="google-mark">G</div>
            <div>
              <div className="rating">{googleReviews?.rating ?? 5.0} <span>★★★★★</span></div>
              <a href={googleReviews?.url || GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
                {googleReviews?.total ? `na podstawie ${googleReviews.total} opinii` : "zobacz wizytówkę i opinie Google"}
              </a>
            </div>
          </div>
          <div className="review-list">
            {(googleReviews?.reviews?.length ? googleReviews.reviews : [
              { authorName: "Anna K.", rating: 5, text: "Bardzo profesjonalne podejście, spokojna atmosfera i dokładne wyjaśnienie każdego etapu zabiegu. Efekt po modelowaniu ust jest naturalny i dokładnie taki, jak chciałam." },
              { authorName: "Marta S.", rating: 5, text: "Gabinet jest piękny, czysty i elegancki. Wizyta przebiegła bez pośpiechu, a po zabiegu dostałam konkretne zalecenia pielęgnacyjne." },
              { authorName: "Katarzyna P.", rating: 5, text: "Polecam za precyzję i ogromną wiedzę. Efekt wygląda świeżo, ale nie sztucznie — dokładnie o to mi chodziło." },
            ]).slice(0, 3).map((review, index) => (
              <blockquote key={`${review.authorName}-${index}`}>
                „{review.text}”
                <span>— {review.authorName}, Google</span>
              </blockquote>
            ))}
          </div>
        </aside>
      </section>

      <section
        id="kontakt"
        className="section-contrast"
        style={{
          width: "100%",
          maxWidth: "none",
          padding: "90px 0 100px",
          margin: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 24px 42px",
            boxSizing: "border-box",
          }}
        >
          <SectionTitle small="Kontakt">Odwiedź nas</SectionTitle>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 24px",
            boxSizing: "border-box",
          }}
        >
          <iframe
            title="Mapa Google"
            src={GOOGLE_MAPS_EMBED_URL}
            style={{
              display: "block",
              width: "100%",
              height: "560px",
              border: 0,
              borderRadius: "30px",
              overflow: "hidden",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div
          style={{
            width: "100%",
            padding: "56px 56px 0",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "32px",
              alignItems: "stretch",
            }}
          >
            <div
              className="contact-card"
              style={{
                minHeight: "360px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <p className="card-label">Adres i telefon</p>
              <h3>Aura Beauty Studio</h3>
              <p>
                ul. Przykładowa 12/3<br />
                00-000 Miasto
              </p>
              <p style={{ marginTop: "12px" }}>
                tel. <a href="tel:+48000000000" style={{ color: "inherit", textDecoration: "none" }}>
                  000 000 000
                </a>
              </p>
              <p>
                <a href="mailto:kontakt@aurabeauty-studio.pl" style={{ color: "inherit", textDecoration: "none" }}>
                  kontakt@aurabeauty-studio.pl
                </a>
              </p>
            </div>

            <div
              className="contact-card"
              style={{
                minHeight: "360px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <p className="card-label">Social media</p>
              <h3>Znajdź nas online</h3>
              <div
                className="social-buttons"
                aria-label="Social media i kontakt"
                style={{
                  display: "flex",
                  gap: "18px",
                  flexWrap: "wrap",
                  marginTop: "22px",
                }}
              >
                {socials.map(([name, icon, url]) => (
                  <a
                    key={name}
                    href={url}
                    aria-label={name}
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img
                      src={icon}
                      alt=""
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </a>
                ))}
              </div>
            </div>

            <form
              className="contact-card contact-form"
              style={{
                minHeight: "360px",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                borderRadius: "30px",
                padding: "30px",
                boxShadow: "0 24px 70px rgba(0, 0, 0, 0.16)",
              }}
            >
              <p className="card-label">Formularz</p>
              <h3>Napisz wiadomość</h3>
              <label style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px", fontSize: "0.92rem", opacity: 0.9 }}>
                Imię
                <input
                  type="text"
                  name="name"
                  placeholder="Twoje imię"
                  style={{
                    width: "100%",
                    minHeight: "52px",
                    borderRadius: "18px",
                    border: "1px solid rgba(160, 122, 92, 0.35)",
                    background: "rgba(255, 255, 255, 0.92)",
                    color: "#2f241f",
                    padding: "0 18px",
                    outline: "none",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                  }}
                />
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px", fontSize: "0.92rem", opacity: 0.9 }}>
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="adres@email.pl"
                  style={{
                    width: "100%",
                    minHeight: "52px",
                    borderRadius: "18px",
                    border: "1px solid rgba(160, 122, 92, 0.35)",
                    background: "rgba(255, 255, 255, 0.92)",
                    color: "#2f241f",
                    padding: "0 18px",
                    outline: "none",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                  }}
                />
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px", fontSize: "0.92rem", opacity: 0.9 }}>
                Wiadomość
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Napisz, w czym możemy pomóc"
                  style={{
                    width: "100%",
                    minHeight: "120px",
                    borderRadius: "18px",
                    border: "1px solid rgba(160, 122, 92, 0.35)",
                    background: "rgba(255, 255, 255, 0.92)",
                    color: "#2f241f",
                    padding: "16px 18px",
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  marginTop: "18px",
                  minHeight: "54px",
                  borderRadius: "999px",
                  border: 0,
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.02em",
                  background: "linear-gradient(135deg, #b9896a, #e5c7aa)",
                  color: "#241a15",
                }}
              >
                Wyślij
              </button>
            </form>
          </div>
        </div>

        <style jsx global>{`
          @media (max-width: 980px) {
            #kontakt iframe {
              height: 420px !important;
            }

            #kontakt > div:last-of-type {
              padding: 40px 24px 0 !important;
            }

            #kontakt > div:last-of-type > div {
              grid-template-columns: 1fr !important;
            }

            #kontakt .contact-card {
              min-height: auto !important;
            }
          }
        `}</style>
      </section>
      <footer className="footer">Aura Beauty Studio · Szablon landing page · Dane przykładowe</footer>
    </main>
  );
}
