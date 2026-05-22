import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
import { BUSINESS } from "@/lib/business";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: "FlyPro — השיטה למצוא טיסות זולות ב-50% מחיר",
    template: "%s | FlyPro",
  },
  description:
    "לא מזל. לא בלוגרית. שיטה. המערכת לחיפוש טיסות שסוכני נסיעות לא רוצים שתדע. מ-₪3,000 לטיסה ל-₪900.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "FlyPro — השיטה למצוא טיסות זולות",
    description: "השיטה שחוסכת לישראלים אלפי שקלים על כל טיסה. בלי מזל. בלי קסם.",
    type: "website",
    locale: "he_IL",
    url: BUSINESS.siteUrl,
    siteName: "FlyPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlyPro — השיטה למצוא טיסות זולות",
    description: "השיטה שחוסכת לישראלים אלפי שקלים על כל טיסה.",
  },
  robots: { index: true, follow: true },
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
      <body className="min-h-full bg-[#0a0a0f] text-white">
        {children}
        {PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.tagged-events.outbound-links.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
