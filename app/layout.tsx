import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FlyPro — השיטה למצוא טיסות זולות ב-50% מחיר",
  description:
    "לא מזל. לא בלוגרית. שיטה. המערכת לחיפוש טיסות שסוכני נסיעות לא רוצים שתדע. מ-₪3,000 לטיסה ל-₪900.",
  openGraph: {
    title: "FlyPro — השיטה למצוא טיסות זולות",
    description: "השיטה שחוסכת לישראלים אלפי שקלים על כל טיסה. בלי מזל. בלי קסם.",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0f] text-white">{children}</body>
    </html>
  );
}
