import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Pani Kosmetolog | Medycyna estetyczna Łódź",
  description:
    "Elegancki landing page salonu medycyny estetycznej: zabiegi, efekty, opinie, mapa i rezerwacja Booksy.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
