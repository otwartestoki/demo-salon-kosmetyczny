# Raport porządkowania projektu

## Usunięte z finalnej paczki

- `node_modules` — zależności instalujesz ponownie przez `npm install`.
- `.next` — wygenerowany build/cache Next.js.
- `.env` — zawierał klucz API, dlatego został usunięty.
- Folder `fonts/` — lokalne fonty nie są potrzebne w finalnym pakiecie.
- Stare strony szablonu: blog, news, login, signup, pricing, faq, contact, about, o-nas, privacy.
- Nieużywane komponenty i biblioteki bazowego template'u.
- Nieużywane grafiki z `public/`.
- Robocze pliki typu `PATCH`, `INSTRUKCJA`, `LOGO_FIX`.

## Zostawione

- Aktualna strona główna z poprawioną sekcją kontaktu.
- Podstrony `cennik` i `o-mnie` z pojedynczym logo.
- Podstrony zabiegów.
- Regulamin i polityka prywatności.
- API do opinii Google z fallbackiem.
- Minimalne zależności w `package.json`.

## Rekomendacja

Po rozpakowaniu uruchom:

```bash
npm install
npm run build
```

Jeżeli build przejdzie lokalnie, projekt możesz wrzucić na GitHuba i Vercel.
