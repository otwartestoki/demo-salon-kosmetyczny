# Aura Beauty Studio — strona demo

Czysty pakiet strony salonu kosmetycznego / medycyny estetycznej przygotowany pod Next.js.

## Co jest w pakiecie

- Strona główna: `src/app/page.tsx`
- Cennik: `src/app/cennik/page.tsx`
- O mnie: `src/app/o-mnie/page.tsx`
- Regulamin: `src/app/regulamin/page.tsx`
- Polityka prywatności: `src/app/polityka-prywatnosci/page.tsx`
- Podstrony zabiegów: `src/app/zabiegi/...`
- API opinii Google: `src/app/api/google-reviews/route.ts`
- Tylko potrzebne grafiki w `public/`

## Co zostało usunięte

- `node_modules`
- `.next`
- `.env` z kluczem API
- stare strony z bazowego szablonu
- nieużywane grafiki
- robocze pliki tekstowe i poprawki
- lokalne fonty z paczki
- zbędne zależności z `package.json`

## Uruchomienie lokalnie

```bash
npm install
npm run dev
```

Strona będzie dostępna pod adresem:

```bash
http://localhost:3000
```

## Build produkcyjny

```bash
npm run build
npm run start
```

## Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local` i uzupełnij tylko wtedy, gdy chcesz pobierać prawdziwe opinie Google:

```bash
GOOGLE_PLACES_API_KEY=
GOOGLE_PLACE_ID=
```

Bez tych zmiennych strona pokaże przykładowe opinie fallback.

## Ważne

Nie wrzucaj do GitHuba:

- `.env`
- `.env.local`
- `.next`
- `node_modules`

Te pozycje są już wpisane do `.gitignore`.
