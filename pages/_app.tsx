import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import Header from "@/components/Header";
// Si usas Footer / WhatsAppButton, deja las importaciones; si no, quítalas.
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function MyApp({ Component, pageProps }: AppProps) {
  const BRAND = {
    name: "DonaSonrisas",
    site: process.env.NEXT_PUBLIC_SITE_URL || "https://donasonrisas.vercel.app",
    title: "DonaSonrisas — Ayudemos hoy a transformar el mañana",
    description:
      "Programas de apoyo en niñez, educación, salud y emergencias. Dona, apadrina o súmate como voluntario.",
    ogImage: "/og.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{BRAND.title}</title>
        <meta name="description" content={BRAND.description} />
        <meta property="og:site_name" content={BRAND.name} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BRAND.site} />
        <meta property="og:title" content={BRAND.title} />
        <meta property="og:description" content={BRAND.description} />
        <meta property="og:image" content={BRAND.ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Header fijo (banner + nav). Su altura se refleja en --header-h */}
      <Header />

      {/* El contenido se separa usando la altura dinámica del header */}
      <main
        className="mx-auto max-w-7xl px-4 md:px-8"
        style={{ paddingTop: "var(--header-h, 0px)" }}
      >
        <Component {...pageProps} />
      </main>

      <WhatsAppButton />
      <Footer brandName={BRAND.name} />
    </div>
  );
}
