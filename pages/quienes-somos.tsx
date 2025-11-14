import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function QuienesSomosPage() {
  return (
    <>
      <Head>
        <title>Quiénes somos | DonaSonrisas</title>
        <meta
          name="description"
          content="Conoce quiénes somos en DonaSonrisas: una asociación civil sin fines de lucro que busca llevar esperanza, acompañamiento y sonrisas a niñas, niños, familias y adultos mayores en situación de vulnerabilidad."
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
              ¿Quiénes somos?
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-3">
              Somos una <strong>asociación civil sin fines de lucro</strong> que
              nació del deseo sencillo de regalar sonrisas a niñas, niños y
              familias que viven en contextos de vulnerabilidad.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Desde el año <strong>2007</strong> organizamos campañas y
              programas que buscan aliviar necesidades concretas —como abrigo,
              alimentación, útiles escolares o atención médica— y, sobre todo,
              recordar a cada persona que <strong>no está sola</strong>.
            </p>
          </div>

          <div className="relative w-full h-[260px] md:h-[330px] lg:h-[360px] rounded-3xl overflow-hidden shadow-lg border border-[#ffd6d6] bg-white">
            <Image
              src="/inicio.jpg"       // recuerda: tu imagen se llama inicio.jpg
              alt="Primeros años de DonaSonrisas"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* QUIÉNES SOMOS – TEXTO CENTRAL */}
        <section className="max-w-5xl mx-auto px-4 lg:px-0 space-y-6">
          <p className="leading-relaxed text-base md:text-lg">
            DonaSonrisas está formada por personas que creen en el poder de los
            gestos simples: una visita, una canasta de víveres, una mochila
            lista para empezar el colegio, un juguete en Navidad, una charla o
            una palabra de aliento. Cada acción es una oportunidad para
            devolverle esperanza a alguien.
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            Trabajamos con <strong>niñas, niños, adolescentes, adultos mayores</strong> y
            familias de escasos recursos. Nos enfocamos en comunidades donde la
            pobreza, la enfermedad o la falta de oportunidades golpean con más
            fuerza, y allí tratamos de ser un puente entre las necesidades y
            las personas o instituciones que desean ayudar.
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            Como asociación, nos rigen estatutos que nos orientan a realizar{" "}
            <strong>actividades de asistencia social, beneficencia y educación</strong>,
            siempre con especial cuidado por la{" "}
            <strong>transparencia</strong> en el uso de los recursos y el
            respeto por la dignidad de cada persona.
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            Creemos que una ayuda bien organizada puede cambiar la historia de
            una familia y, al mismo tiempo, transformar el corazón de quien
            decide involucrarse. Por eso, más que una institución, buscamos ser
            una <strong>comunidad de personas solidarias</strong> que se
            acompañan mutuamente.
          </p>
        </section>

        {/* BLOQUE DE PILLARS */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Lo que nos mueve
            </h2>
            <p className="text-sm leading-relaxed">
              Servir con alegría, cuidar a los más vulnerables y demostrar con
              acciones que la solidaridad sigue siendo posible.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Cómo trabajamos
            </h2>
            <p className="text-sm leading-relaxed">
              Planificamos campañas y programas, coordinamos con líderes
              locales, colegios y otras organizaciones, y buscamos que cada
              donación llegue a donde realmente se necesita.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Lo que ofrecemos
            </h2>
            <p className="text-sm leading-relaxed">
              Espacios de encuentro, contención, aprendizaje y celebración,
              donde las sonrisas sean el lenguaje principal y la esperanza, el
              resultado natural.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="max-w-4xl mx-auto px-4 mt-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#8b1f1f] mb-3">
            Una sonrisa puede cambiar un día,
            <br className="hidden sm:block" /> muchas sonrisas pueden cambiar
            una vida.
          </h2>
          <p className="leading-relaxed mb-6 text-sm md:text-base">
            Si quieres conocer más sobre cómo empezó todo, nuestra misión y
            visión, o cómo puedes sumarte, te invitamos a seguir explorando.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/nuestra-historia"
              className="border border-[#c62828] text-[#c62828] px-6 py-2.5 rounded-full font-semibold hover:bg-[#ffe5e5] transition"
            >
              Ver nuestra historia
            </Link>
            <Link
              href="/mision-y-vision"
              className="bg-[#c62828] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#a91f1f] transition"
            >
              Misión y visión
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
