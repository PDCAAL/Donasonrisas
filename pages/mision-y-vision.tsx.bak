import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function NuestraHistoriaPage() {
  return (
    <>
      <Head>
        <title>Nuestra historia | DonaSonrisas</title>
        <meta
          name="description"
          content="Conoce cómo nació DonaSonrisas en 2007 y cómo, con campañas y acciones solidarias, hemos regalado sonrisas a niñas, niños y familias en situación de vulnerabilidad."
        />
      </Head>

      <main className="bg-[#fff9f7] min-h-screen text-[#4a1616] pb-20">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-32 pb-14 grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-[#c42d2d] uppercase mb-2">
              DONASONRISAS
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#8b1f1f] mb-4">
              Nuestra historia
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              La historia de DonaSonrisas empieza en el año{" "}
              <strong>2007</strong>, en medio de calles de tierra y escaleras
              de cemento improvisadas, donde muchas familias vivían con muy
              poco, pero conservaban una enorme capacidad de soñar.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Lo que comenzó como una campaña navideña sencilla —llevar
              juguetes, panetones y chocolate caliente— se convirtió, con los
              años, en un movimiento de personas dispuestas a regalar tiempo,
              escucha y esperanza.
            </p>
          </div>

          <div className="relative w-full h-[260px] md:h-[330px] lg:h-[360px] rounded-3xl overflow-hidden shadow-lg border border-[#ffd6d6] bg-white">
            <Image
              src="/inicio.jpg"
              alt="Primeras campañas de DonaSonrisas"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* CUERPO */}
        <section className="max-w-5xl mx-auto px-4 lg:px-0 space-y-6">
          <p className="leading-relaxed text-base md:text-lg">
            Aquella primera visita marcó un antes y un después. Las niñas y los
            niños no solo recibieron un regalo:{" "}
            <strong>recibieron la certeza de que alguien había pensado en ellos</strong>.
            Entre juegos, dinámicas y abrazos, los cerros se llenaron de risas.
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            Ese impacto tan profundo llevó a repetir la experiencia año tras
            año. Se sumaron más amigos, familias, voluntarios y empresas que
            querían aportar algo, por pequeño que fuera. La campaña navideña se
            transformó en un espacio estable de{" "}
            <strong>acompañamiento y cuidado</strong>.
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            Con el tiempo, las acciones crecieron: apoyo escolar, visitas a
            hospitales, campañas médicas, actividades recreativas y talleres
            para niñas, niños, adolescentes y adultos mayores. También
            llegamos a nuevas comunidades y regiones del país.
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            Para asegurar continuidad, transparencia y mayor impacto, el
            proyecto se formalizó como{" "}
            <strong>asociación civil sin fines de lucro</strong>. Así nació
            oficialmente DonaSonrisas, manteniendo intacto el espíritu con el
            que empezó: servir con sencillez, cercanía y profundo respeto por la
            dignidad de cada persona.
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            Hoy, después de muchos años, seguimos creyendo en la misma idea
            que nos vio nacer:{" "}
            <strong>una sonrisa puede cambiar un día; muchas sonrisas pueden cambiar una vida</strong>.
          </p>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#8b1f1f] mb-3">
            ¿Te gustaría ser parte de esta historia?
          </h2>
          <p className="leading-relaxed mb-5">
            Cada año escribimos nuevos capítulos junto a personas y
            organizaciones que deciden compartir lo que tienen. Tú también
            puedes sumar tu página.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/donar"
              className="bg-[#c62828] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#a91f1f] transition"
            >
              Donar ahora
            </Link>
            <Link
              href="/como-ayudar"
              className="border border-[#c62828] text-[#c62828] px-6 py-2.5 rounded-full font-semibold hover:bg-[#ffe5e5] transition"
            >
              Ver formas de ayudar
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
