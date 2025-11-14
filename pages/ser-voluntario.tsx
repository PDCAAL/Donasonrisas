import Head from "next/head";
import Link from "next/link";

export default function SerVoluntarioPage() {
  return (
    <>
      <Head>
        <title>Ser voluntario | DonaSonrisas</title>
        <meta
          name="description"
          content="Conoce cómo ser voluntario en DonaSonrisas y apoyar con tu tiempo, tus habilidades y tu corazón."
        />
      </Head>

      <main className="bg-[#fff9f7] min-h-screen text-[#4a1616] pb-20">
        <section className="max-w-5xl mx-auto px-4 lg:px-0 pt-32 pb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#c42d2d] uppercase mb-2">
            CÓMO AYUDAR
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b1f1f] mb-4">
            Ser voluntario
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            El tiempo es uno de los regalos más valiosos que podemos ofrecer.
            Ser voluntario en DonaSonrisas significa{" "}
            <strong>estar cerca de las personas</strong>, escuchar sus
            historias y compartir momentos que se recuerdan toda la vida.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            No necesitas saberlo todo ni tener experiencia previa en trabajo
            social. Lo más importante es{" "}
            <strong>tu disposición y tu compromiso</strong>.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 lg:px-0 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Voluntariado en campañas
            </h2>
            <p className="text-sm leading-relaxed">
              Apoyo en actividades específicas como Navidad, campañas escolares,
              repartición de víveres o jornadas médicas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Voluntariado profesional
            </h2>
            <p className="text-sm leading-relaxed">
              Si eres médico, psicólogo, abogado, educador o tienes una
              habilidad específica, puedes donar horas de servicio.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#ffe0e0]">
            <h2 className="font-semibold text-lg text-[#8b1f1f] mb-2">
              Voluntariado digital
            </h2>
            <p className="text-sm leading-relaxed">
              Personas que apoyan en redes sociales, diseño, fotografía, video
              o gestión de plataformas, para que el mensaje llegue más lejos.
            </p>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 mt-12 text-center">
          <p className="leading-relaxed mb-5 text-sm md:text-base">
            Pronto abriremos convocatorias periódicas de voluntariado. Mientras
            tanto, puedes dejarnos tus datos y contarnos en qué te gustaría
            apoyar.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#c62828] text-white font-semibold text-sm md:text-base hover:bg-[#a91f1f] transition"
          >
            Quiero ser voluntario
          </Link>
        </section>
      </main>
    </>
  );
}
