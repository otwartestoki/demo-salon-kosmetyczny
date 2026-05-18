export default function RegulaminPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-950 dark:bg-[#05070d] dark:text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.035] md:p-12">
        <a
          href="/"
          className="mb-10 inline-block text-sm font-semibold text-violet-600 transition hover:text-violet-500 dark:text-violet-400"
        >
          ← Powrót na stronę główną
        </a>

        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-400">
          Luminso
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          Regulamin współpracy
        </h1>
        <p className="mt-5 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
          Dokument określa podstawowe zasady realizacji usług projektowania,
          wdrażania oraz utrzymania stron internetowych.
        </p>

        <div className="mt-12 space-y-10 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">1. Informacje ogólne</h2>
            <p className="mt-3">
              Regulamin określa zasady współpracy w zakresie usług realizowanych przez:
            </p>
            <p className="mt-3 font-semibold text-zinc-950 dark:text-white">
              Jacek Smętkowski | luminso<br />
              kontakt@luminso.pl
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">2. Zakres usług</h2>
            <p className="mt-3">
              Usługi mogą obejmować projektowanie i wdrażanie stron internetowych,
              konfigurację domeny i hostingu, podstawową optymalizację SEO,
              podpięcie analityki, formularzy kontaktowych oraz późniejszą opiekę techniczną.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">3. Ustalenie zakresu prac</h2>
            <p className="mt-3">
              Szczegółowy zakres, cena i termin realizacji są każdorazowo ustalane
              indywidualnie z klientem, najczęściej w wiadomości e-mail, ofercie
              lub osobnym dokumencie. Akceptacja oferty oznacza akceptację ustalonego zakresu prac.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">4. Materiały od klienta</h2>
            <p className="mt-3">
              Klient dostarcza niezbędne materiały, takie jak teksty, logo, zdjęcia,
              dane kontaktowe, informacje o firmie oraz inne treści potrzebne do wykonania strony.
              Klient oświadcza, że posiada prawa do przekazanych materiałów.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">5. Poprawki</h2>
            <p className="mt-3">
              Standardowa cena projektu obejmuje do 2 rund poprawek, o ile oferta
              nie stanowi inaczej. Dodatkowe zmiany, rozszerzenie zakresu lub prace
              wykraczające poza pierwotne ustalenia mogą zostać wycenione osobno.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">6. Płatności</h2>
            <p className="mt-3">
              Rozliczenie odbywa się na podstawie faktury. W zależności od zakresu
              projektu możliwa jest płatność z góry, płatność zaliczkowa lub rozliczenie etapowe.
              Strona może zostać opublikowana po uregulowaniu ustalonej płatności.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">7. Prawa autorskie</h2>
            <p className="mt-3">
              Prawa do indywidualnych elementów projektu przygotowanych dla klienta
              przechodzą na klienta po opłaceniu pełnej wartości zamówienia, w zakresie
              niezbędnym do korzystania ze strony internetowej. Elementy zewnętrzne,
              takie jak biblioteki, szablony, zdjęcia stockowe lub usługi firm trzecich,
              podlegają warunkom ich dostawców.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">8. Opieka techniczna i abonament</h2>
            <p className="mt-3">
              Zakres opieki technicznej lub abonamentu jest ustalany indywidualnie.
              Może obejmować drobne aktualizacje treści, wsparcie techniczne,
              monitoring działania strony lub pomoc przy konfiguracji usług zewnętrznych.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">9. Odpowiedzialność</h2>
            <p className="mt-3">
              luminso dokłada staranności, aby strona działała prawidłowo, jednak nie odpowiada
              za awarie usług zewnętrznych, hostingu, domen, poczty, systemów płatności,
              narzędzi analitycznych ani innych dostawców niezależnych od wykonawcy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">10. Kontakt</h2>
            <p className="mt-3">
              W sprawach związanych z realizacją usług można kontaktować się pod adresem:
              <span className="font-semibold text-zinc-950 dark:text-white"> kontakt@luminso.pl</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
