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
          content="Tu aporte llega donde más se necesita. DonaSonrisas promueve transparencia, impacto y cercanía para transformar vidas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-red-100 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#b61c1c] leading-tight mb-6">
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

          <div className="flex-1 flex justify-center">
            <Image
              src="/hero.jpg"
              alt="Niños felices beneficiados por DonaSonrisas"
              width={520}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center">
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

      {/* CTA FINAL */}
      <section className="bg-[#b61c1c] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Cada sonrisa cuenta. ¡Súmate hoy!
          </h2>
          <p className="text-white/90 mb-8">
            Tu donación nos ayuda a llevar educación, salud y alegría a más niños cada día.
          </p>
          <Link
            href="/donar"
            className="bg-white text-[#b61c1c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Donar ahora
          </Link>
        </div>
      </section>
    </>
  );
}
