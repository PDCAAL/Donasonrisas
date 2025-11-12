import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>DonaSonrisas | Ayudemos hoy para transformar el mañana</title>
        <meta
          name="description"
          content="Tu aporte llega donde más se necesita. Transparencia, impacto y cercanía para transformar vidas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-red-100 to-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#b61c1c] leading-tight mb-6">
              Ayudemos hoy para <br /> transformar el mañana
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-xl">
              Tu aporte llega donde más se necesita. Transparencia, impacto y cercanía.
              Únete a nosotros para regalar sonrisas y cambiar vidas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/donar"
                className="bg-[#b61c1c] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#a11313] transition"
              >
                Donar ahora
              </Link>
              <Link
                href="/quienes-somos"
                className="bg-white border border-[#b61c1c] text-[#b61c1c] px-6 py-3 rounded-full font-semibold hover:bg-[#fce8e8] transition"
              >
                Quiénes somos
              </Link>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/hero.png"     // coloca el archivo en /public/hero.png
              alt="Niños sonriendo apoyados por DonaSonrisas"
              width={560}
              height={420}
              className="rounded-2xl shadow-lg object-cover w-full max-w-[560px] h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Impacto */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-[#b61c1c] mb-6">Nuestro impacto</h2>
          <p className="text-gray-600 mb-12">
            Gracias a tu ayuda, seguimos llevando alegría a miles de niños y familias en todo el país.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-[#b61c1c] font-semibold">
            <div>
              <p className="text-3xl font-bold">+5,000</p>
              <p className="text-gray-600 font-normal">Niños beneficiados</p>
            </div>
            <div>
              <p className="text-3xl font-bold">120</p>
              <p className="text-gray-600 font-normal">Colegios aliados</p>
            </div>
            <div>
              <p className="text-3xl font-bold">24</p>
              <p className="text-gray-600 font-normal">Regiones atendidas</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-gray-600 font-normal">Transparencia</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
