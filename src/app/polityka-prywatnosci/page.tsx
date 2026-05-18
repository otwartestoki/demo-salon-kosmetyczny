export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-20 text-zinc-900 dark:bg-[#05070d] dark:text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03] md:p-12">
        <a
          href="/"
          className="mb-8 inline-block text-sm font-bold text-violet-600 transition hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300"
        >
          ← Wróć na stronę główną
        </a>

        <h1 className="text-4xl font-black tracking-tight">
          Polityka prywatności
        </h1>

        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          Aktualizacja: 16.05.2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300 md:text-base md:leading-8">
          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              1. Informacje ogólne
            </h2>
            <p className="mt-4">
              Niniejsza Polityka Prywatności określa zasady przetwarzania danych
              osobowych użytkowników strony internetowej luminso.pl.
            </p>
            <p className="mt-4">
              Administratorem danych osobowych jest właściciel strony Luminso.
              Kontakt w sprawach ochrony danych osobowych: kontakt@luminso.pl.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              2. Zakres zbieranych danych
            </h2>
            <p className="mt-4">
              Podczas korzystania ze strony mogą być przetwarzane dane podane
              dobrowolnie przez użytkownika, w szczególności:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>imię i nazwisko,</li>
              <li>adres e-mail,</li>
              <li>nazwa firmy,</li>
              <li>treść wiadomości przesłanej przez formularz kontaktowy,</li>
              <li>adres IP,</li>
              <li>dane techniczne przeglądarki i urządzenia,</li>
              <li>dane statystyczne dotyczące korzystania ze strony.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              3. Cel przetwarzania danych
            </h2>
            <p className="mt-4">Dane osobowe mogą być przetwarzane w celu:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>obsługi zapytań wysłanych przez formularz kontaktowy,</li>
              <li>przygotowania odpowiedzi lub oferty,</li>
              <li>realizacji usług związanych z projektowaniem i utrzymaniem stron internetowych,</li>
              <li>prowadzenia statystyk i analizy działania strony,</li>
              <li>zapewnienia bezpieczeństwa strony oraz ochrony przed nadużyciami.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              4. Podstawa prawna przetwarzania
            </h2>
            <p className="mt-4">
              Dane są przetwarzane zgodnie z art. 6 ust. 1 RODO, w szczególności
              na podstawie zgody użytkownika, działań zmierzających do zawarcia
              umowy lub realizacji umowy oraz prawnie uzasadnionego interesu
              administratora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              5. Narzędzia zewnętrzne
            </h2>
            <p className="mt-4">
              Strona może korzystać z usług zewnętrznych dostawców technicznych,
              analitycznych i hostingowych, takich jak Google Analytics,
              Microsoft Clarity, Cloudflare, Vercel oraz usługi poczty
              elektronicznej. Dostawcy ci mogą przetwarzać dane zgodnie z
              własnymi zasadami prywatności.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              6. Pliki cookies
            </h2>
            <p className="mt-4">
              Strona może wykorzystywać pliki cookies w celu prawidłowego
              działania, prowadzenia statystyk oraz poprawy jakości korzystania
              ze strony. Użytkownik może zarządzać plikami cookies w ustawieniach
              swojej przeglądarki.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              7. Okres przechowywania danych
            </h2>
            <p className="mt-4">
              Dane są przechowywane przez okres niezbędny do obsługi zapytania,
              realizacji usługi, obrony ewentualnych roszczeń lub przez okres
              wymagany przepisami prawa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              8. Prawa użytkownika
            </h2>
            <p className="mt-4">Użytkownik ma prawo do:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>dostępu do swoich danych,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>wniesienia sprzeciwu,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-950 dark:text-white">
              9. Kontakt
            </h2>
            <p className="mt-4">
              W sprawach związanych z ochroną danych osobowych można kontaktować
              się pod adresem: <strong>kontakt@luminso.pl</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
