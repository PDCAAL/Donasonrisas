import Head from "next/head";
import Link from "next/link";

export default function EmpresasSolidariasPage() {
  return (
    <>
      <Head>
        <title>Empresas solidarias | DonaSonrisas</title>
        <meta
          name="description"
          content="Descubre cómo las empresas pueden sumarse a DonaSonrisas con programas de responsabilidad social, campañas y donaciones."
        />
      </Head>

      <main className="bg-[#fff9f7] min-h-screen text-[#4a1616] pb-20">
        <section className="max-w-5xl mx-auto px-4 lg:px-0 pt-32 pb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#c42d2d] uppercase mb-2">
            CÓMO AYUDAR
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b1f1f] mb-4">
            Empresas solidarias
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Creemos que cuando una empresa se compromete con la comunidad, el
            impacto se multiplica. DonaSonrisas busca construir{" "}
            <strong>alianzas transparentes y sostenibles</strong> con empresas
            que quieran poner su corazón y sus recursos al servicio de quienes
            más lo necesitan.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Podemos diseñar juntos iniciativas a medida, alineadas con la
            cultura y los objetivos de responsabilidad social de tu organización.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 lg:px-0 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Campañas corporativas
            </h2>
            <p className="text-sm leading-relaxed">
              Navidad, regreso a clases, abrigo, salud, alimentación y otras
              campañas donde tus colaboradores también pueden participar.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Donación de productos o servicios
            </h2>
            <p className="text-sm leading-relaxed">
              Empresas que desean aportar desde lo que mejor saben hacer:
              alimentos, logística, transporte, impresión, tecnología, etc.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Programas de nómina solidaria
            </h2>
            <p className="text-sm leading-relaxed">
              Colaboradores que donan un monto mensual desde su sueldo y la
              empresa puede igualar o complementar ese aporte.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 mt-12 text-center">
          <p className="leading-relaxed mb-5 text-sm md:text-base">
            Si representas a una empresa y te gustaría explorar una alianza con
            DonaSonrisas, conversemos. Podemos construir un programa que tenga
            sentido para tu organización y, sobre todo, para las comunidades a
            las que servimos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#c62828] text-white font-semibold text-sm md:text-base hover:bg-[#a91f1f] transition"
          >
            Quiero sumar a mi empresa
          </Link>
        </section>
      </main>
    </>
  );
}
