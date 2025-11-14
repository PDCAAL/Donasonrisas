import Head from "next/head";
import Link from "next/link";

export default function DonarUnaSonrisaPage() {
  return (
    <>
      <Head>
        <title>Donar una sonrisa | DonaSonrisas</title>
        <meta
          name="description"
          content="Con una donación puedes transformar el día de una niña, un niño o una familia. Conoce cómo donar de forma simple y transparente en DonaSonrisas."
        />
      </Head>

      <main className="bg-[#fff9f7] min-h-screen text-[#4a1616] pb-20">
        <section className="max-w-5xl mx-auto px-4 lg:px-0 pt-32 pb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#c42d2d] uppercase mb-2">
            CÓMO AYUDAR
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b1f1f] mb-4">
            Donar una sonrisa
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Cada donación nos permite llegar un poco más lejos: llenar una bolsa
            de víveres, entregar un abrigo, completar un kit escolar o financiar
            una campaña de salud. Detrás de cada monto hay una{" "}
            <strong>sonrisa real</strong>.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Nuestro compromiso es que tu aporte llegue{" "}
            <strong>donde más se necesita</strong> y puedas conocer el impacto
            que genera. Por eso cuidamos cada sol con transparencia y respeto.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 lg:px-0 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Donación puntual
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Ideal si quieres apoyar una campaña específica (Navidad, útiles
              escolares, abrigo, etc.).
            </p>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Aportes desde montos pequeños.</li>
              <li>Se destinan a la campaña activa.</li>
              <li>Te contamos luego lo que se logró.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Donación mensual
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Una forma de acompañar todo el año a niñas, niños y familias.
            </p>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Aporte automático mensual.</li>
              <li>Financia programas continuos.</li>
              <li>Recibes reportes periódicos.</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Otros tipos de ayuda
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Si prefieres donar en especie o apoyar con algún servicio
              profesional, también es posible.
            </p>
            <ul className="text-sm list-disc pl-5 space-y-1">
              <li>Alimentos no perecibles.</li>
              <li>Ropa, abrigo, útiles escolares.</li>
              <li>Servicios médicos, legales, educativos, etc.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 mt-12 text-center">
          <p className="leading-relaxed mb-5 text-sm md:text-base">
            Pronto habilitaremos nuestra plataforma de donaciones en línea. Por
            ahora puedes escribirnos y te guiaremos paso a paso para realizar tu
            aporte de forma sencilla y segura.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#c62828] text-white font-semibold text-sm md:text-base hover:bg-[#a91f1f] transition"
          >
            Quiero donar una sonrisa
          </Link>
        </section>
      </main>
    </>
  );
}
