import Head from "next/head";
import Link from "next/link";

export default function ApadrinarPage() {
  return (
    <>
      <Head>
        <title>Apadrinar | DonaSonrisas</title>
        <meta
          name="description"
          content="Conviértete en padrino o madrina y acompaña de forma cercana a niñas, niños o programas de DonaSonrisas."
        />
      </Head>

      <main className="bg-[#fff9f7] min-h-screen text-[#4a1616] pb-20">
        <section className="max-w-5xl mx-auto px-4 lg:px-0 pt-32 pb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#c42d2d] uppercase mb-2">
            CÓMO AYUDAR
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b1f1f] mb-4">
            Apadrinar
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Apadrinar es más que hacer un depósito mensual. Es{" "}
            <strong>acompañar historias</strong>, estar presente, celebrar
            logros y sostener sueños cuando parece que todo se complica.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            A través del programa de apadrinamiento, tu aporte ayuda a sostener
            campañas educativas, médicas y de apoyo emocional en comunidades
            aliadas. Nuestro enfoque es{" "}
            <strong>cuidar a la niñez como comunidad</strong>, no solo a una
            persona.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 lg:px-0 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              ¿En qué consiste?
            </h2>
            <ul className="text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Aporte mensual desde un monto accesible.</li>
              <li>
                Tus fondos se agrupan para garantizar continuidad de los
                programas.
              </li>
              <li>
                Recibes noticias, fotos y testimonios del impacto generado.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              ¿Qué buscamos?
            </h2>
            <ul className="text-sm leading-relaxed list-disc pl-5 space-y-1">
              <li>Que ninguna niña o niño abandone sus estudios por falta de recursos.</li>
              <li>Que familias vulnerables tengan apoyo en momentos críticos.</li>
              <li>
                Que cada padrino o madrina sienta que su ayuda tiene{" "}
                <strong>nombre, rostro e historia</strong>.
              </li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 mt-12 text-center">
          <p className="leading-relaxed mb-5 text-sm md:text-base">
            Estamos afinando los detalles para iniciar la primera cohorte de
            padrinos y madrinas de DonaSonrisas. Si quieres recibir
            información, déjanos tus datos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#c62828] text-white font-semibold text-sm md:text-base hover:bg-[#a91f1f] transition"
          >
            Quiero ser padrino / madrina
          </Link>
        </section>
      </main>
    </>
  );
}
