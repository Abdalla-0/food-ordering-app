import Footer from "@/components/layouts/Footer/Footer";
import Header from "@/components/layouts/Header/Header";
import { Toaster } from "@/components/ui/toaster";
import { Directions, Languages } from "@/constants/enums";
import { Locale } from "@/i18n.config";
import ReduxProvider from "@/providers/ReduxProvider";
import type { Metadata } from "next";
import { Cairo, Roboto } from "next/font/google";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import CartInitProvider from "@/hooks/CartInitProvider";
// @ts-expect-error -- allow importing global css without type declarations
import "@/styles/globals.css";
export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Food Ordering App",
  description: "A fast and modern food ordering platform with a smooth browsing",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const locale = (await params).locale;
  return (
    <html
      lang={locale}
      dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}
    >
      <body
        className={
          locale === Languages.ARABIC ? cairo.className : roboto.className
        }
      >
        <NextAuthSessionProvider>
          <ReduxProvider>
            <CartInitProvider>
              <Header />
              {children}
              <Footer />
              <Toaster />
            </CartInitProvider>
          </ReduxProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
