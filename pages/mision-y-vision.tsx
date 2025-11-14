import Head from "next/head";
import Link from "next/link";

export default function MisionVisionPage() {
  return (
    <>
      <Head>
        <title>Misión y visión | DonaSonrisas</title>
        <meta
          name="description"
          content="Conoce la misión y visión de DonaSonrisas, asociación civil sin fines de lucro comprometida con la protección, educación y bienestar de niñas, niños y familias vulnerables."
        />
      </Head>

      <main className="bg-[#fff9f7] min-h-screen text-[#4a1616] pb-20">
        <section className="max-w-5xl mx-auto px-4 lg:px-0 pt-32 pb-10">
          <p className="text-xs font-semibold tracking-[0.15em] text-[#c42d2d] uppercase mb-2">
            DONASONRISAS
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b1f1f] mb-4">
            Misión y visión
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Nuestra misión y visión nacen de un compromiso profundo con la
            infancia y con las familias que viven en contextos de vulnerabilidad
            económica, social o emocional.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#fde0e0]">
            <h2 className="font-semibold text-xl md:text-2xl text-[#8b1f1f] mb-4">
              Nuestra misión
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-3">
              Promover, desarrollar y ejecutar acciones de{" "}
              <strong>asistencia social, beneficencia y educación</strong> que
              brinden apoyo integral a niñas, niños, adolescentes, adultos
              mayores y familias de escasos recursos.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-3">
              Buscamos que cada persona que se acerque a DonaSonrisas encuentre
              un espacio seguro, humano y respetuoso, en el que se le mire a los
              ojos y se le acompañe en su proceso.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Queremos que la solidaridad se traduzca en acciones concretas:
              campañas, programas, visitas, talleres y oportunidades que
              impacten positivamente en la vida de quienes más lo necesitan.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#fde0e0]">
            <h2 className="font-semibold text-xl md:text-2xl text-[#8b1f1f] mb-4">
              Nuestra visión
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-3">
              Ser una organización referente en el país por{" "}
              <strong>su impacto real en la vida de niñas y niños</strong>, por
              su cercanía con las comunidades y por su{" "}
              <strong>transparencia en el uso de los recursos</strong>.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-3">
              Soñamos con un Perú donde cada niña y cada niño pueda crecer
              protegido, amado y con acceso a oportunidades que le permitan
              desarrollar su potencial.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Imaginamos futuras generaciones que recuerden que, en un momento
              difícil, una comunidad llamada DonaSonrisas estuvo allí para
              tenderles la mano.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 mt-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#8b1f1f] mb-3">
            Valores que nos guían
          </h2>
          <p className="leading-relaxed mb-6 text-sm md:text-base">
            Todo lo que hacemos se sostiene en valores que cuidamos cada día:
          </p>

          <div className="grid sm:grid-cols-2 gap-5 text-left">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#ffe0e0]">
              <h3 className="font-semibold text-[#8b1f1f] mb-2">Transparencia</h3>
              <p className="text-sm leading-relaxed">
                Administramos con responsabilidad los recursos que recibimos y
                rendimos cuentas claras a donantes, aliados y beneficiarios.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#ffe0e0]">
              <h3 className="font-semibold text-[#8b1f1f] mb-2">Cercanía</h3>
              <p className="text-sm leading-relaxed">
                Nos gusta estar en el campo, conocer las historias y construir
                relaciones de confianza con las comunidades.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#ffe0e0]">
              <h3 className="font-semibold text-[#8b1f1f] mb-2">Respeto</h3>
              <p className="text-sm leading-relaxed">
                Reconocemos la dignidad de cada persona, independientemente de
                su origen, realidad económica o situación familiar.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#ffe0e0]">
              <h3 className="font-semibold text-[#8b1f1f] mb-2">
                Esperanza activa
              </h3>
              <p className="text-sm leading-relaxed">
                No solo deseamos un mundo mejor: trabajamos todos los días para
                construirlo, paso a paso, sonrisa a sonrisa.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/nuestra-historia"
              className="border border-[#c62828] text-[#c62828] px-6 py-2.5 rounded-full font-semibold hover:bg-[#ffe5e5] transition"
            >
              Volver a nuestra historia
            </Link>
            <Link
              href="/como-ayudar"
              className="bg-[#c62828] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#a91f1f] transition"
            >
              Ver cómo puedo ayudar
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
