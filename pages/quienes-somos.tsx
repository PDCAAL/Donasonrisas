import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function QuienesSomosPage() {
  return (
    <>
      <Head>
        <title>¿Quiénes somos? | DonaSonrisas</title>
        <meta
          name="description"
          content="Conoce la historia de DonaSonrisas, una asociación que desde 2007 regala sonrisas a niñas y niños a través de campañas navideñas, apoyo escolar y acompañamiento cercano."
        />
      </Head>

      <main className="bg-[#fff9f7] min-h-screen text-[#4a1616] pb-16">
        {/* Hero / Intro */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 pt-32 pb-16 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#c42d2d] uppercase mb-2">
              ¿Quiénes somos?
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#8b1f1f]">
              Una sonrisa puede cambiar un día.
              Muchas sonrisas pueden cambiar una vida.
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-6">
              DonaSonrisas es una asociación sin fines de lucro que nació en{" "}
              <strong>2007</strong> con una idea sencilla pero poderosa:
              llegar donde casi nadie llega y regalar algo más que juguetes o
              víveres: regalar momentos de alegría, esperanza y cercanía.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Desde entonces, cada campaña, cada visita y cada abrazo nos
              recuerdan que detrás de una donación siempre hay una historia, un
              nombre y un pequeño corazón que merece sentirse visto y cuidado.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href="/donar"
                className="bg-[#c62828] text-white px-6 py-2.5 rounded-full text-sm md:text-base font-semibold hover:bg-[#a91f1f] transition"
              >
                Donar una sonrisa
              </Link>
              <Link
                href="/apadrinar"
                className="border border-[#c62828] text-[#c62828] px-6 py-2.5 rounded-full text-sm md:text-base font-semibold hover:bg-[#ffe5e5] transition"
              >
                Conocer cómo apadrinar
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[360px] rounded-3xl overflow-hidden shadow-lg border border-[#ffd6d6] bg-white">
            <Image
              src="/inicio.png"
              alt="Los primeros pasos de DonaSonrisas en 2007"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Historia */}
        <section className="max-w-4xl mx-auto px-4 lg:px-0 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#8b1f1f] mb-2">
            Nuestra historia: todo empezó en 2007
          </h2>

          <p className="leading-relaxed">
            En 2007, un pequeño grupo de amigos visitó por primera vez una zona
            de alta vulnerabilidad en Lima. No llevaban un gran presupuesto ni
            una organización detrás; llevaban tiempo, ganas de escuchar y unas
            cuantas bolsas con juguetes sencillos, panetones y chocolate caliente.
          </p>

          <p className="leading-relaxed">
            Ese día, en medio del polvo y las escaleras infinitas de los
            cerros, ocurrió algo que marcó el camino: niñas y niños que no
            esperaban nada recibieron no solo un regalo, sino también juegos,
            canciones, fotografías, abrazos y la certeza de que alguien había
            pensado en ellos. Las risas fueron tan fuertes que el grupo salió
            de allí con una convicción: <strong>esto no podía quedar en una sola
            Navidad</strong>.
          </p>

          <p className="leading-relaxed">
            Así nació <strong>DonaSonrisas</strong>. Primero como una campaña
            navideña improvisada, luego como un proyecto que comenzó a
            repetirse cada año y a sumar más manos, más donantes, más amigas y
            amigos. Con el tiempo, las visitas se extendieron a otras zonas de
            Lima, a comunidades del interior del país y a hospitales donde un
            detalle, una visita o un pequeño regalo podían aliviar una tarde
            difícil.
          </p>

          <p className="leading-relaxed">
            Además de las campañas navideñas, empezaron a llegar{" "}
            <strong>útiles escolares, mochilas, ropa, víveres y apoyo puntual
            para tratamientos médicos</strong>. Cada acción fue construyendo una
            red invisible de cariño entre personas que quizás nunca se han
            visto, pero que se sostienen mutuamente: quienes donan y quienes
            reciben.
          </p>

          <p className="leading-relaxed">
            Hoy, después de muchos años de trabajo silencioso, DonaSonrisas
            sigue teniendo el mismo espíritu de 2007: la cercanía. Nos gusta
            llegar, mirar a los ojos, preguntar nombres, escuchar historias y
            volver al año siguiente para decir: <strong>aquí seguimos</strong>,
            no solo con ayuda material, sino con presencia y compromiso.
          </p>
        </section>

        {/* Misión en corto / valores */}
        <section className="max-w-6xl mx-auto px-4 lg:px-8 mt-12 grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h3 className="font-semibold text-lg mb-2 text-[#8b1f1f]">
              Nuestra misión
            </h3>
            <p className="text-sm leading-relaxed">
              Acompañar a niñas y niños en situación de vulnerabilidad,
              regalándoles momentos de alegría, apoyo concreto y experiencias
              que les recuerden que su vida vale, importa y tiene un futuro
              posible.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h3 className="font-semibold text-lg mb-2 text-[#8b1f1f]">
              Cómo lo hacemos
            </h3>
            <p className="text-sm leading-relaxed">
              Organizamos campañas navideñas, entregas de útiles escolares,
              apoyo alimentario y acciones puntuales de salud, siempre en
              coordinación con líderes locales, familias y voluntariado.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h3 className="font-semibold text-lg mb-2 text-[#8b1f1f]">
              Lo que creemos
            </h3>
            <p className="text-sm leading-relaxed">
              Creemos en la transparencia, en el respeto a las familias y en el
              poder de la comunidad. Cada donación es un acto de confianza y
              por eso nos esforzamos en usarla con responsabilidad y claridad.
            </p>
          </div>
        </section>

        {/* Call to action final */}
        <section className="max-w-4xl mx-auto px-4 lg:px-0 mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#8b1f1f] mb-4">
            Súmate a esta historia
          </h2>
          <p className="leading-relaxed mb-6">
            Detrás de cada sonrisa hay una persona que decidió compartir un
            poco de lo que tiene. Si tú también quieres ser parte, puedes
            donar, apadrinar una campaña o ayudarnos a llegar a más lugares
            compartiendo lo que hacemos.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/donar"
              className="bg-[#c62828] text-white px-6 py-2.5 rounded-full text-sm md:text-base font-semibold hover:bg-[#a91f1f] transition"
            >
              Quiero donar
            </Link>
            <Link
              href="/contacto"
              className="border border-[#c62828] text-[#c62828] px-6 py-2.5 rounded-full text-sm md:text-base font-semibold hover:bg-[#ffe5e5] transition"
            >
              Quiero saber más
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
