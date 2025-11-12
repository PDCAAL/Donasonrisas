import Head from "next/head";
import Image from "next/image";

export default function QuienesSomos() {
  return (
    <>
      <Head>
        <title>Quiénes Somos | DonaSonrisas</title>
        <meta
          name="description"
          content="Conoce la historia y propósito de DonaSonrisas, una organización que desde 2007 lleva alegría, salud y educación a niños en todo el Perú."
        />
      </Head>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-red-100 to-white py-20 sm:py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-[#b61c1c] mb-6">
            Nuestra historia
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Desde 2007, DonaSonrisas ha crecido gracias al compromiso de personas
            que creen en el poder de la solidaridad. Todo comenzó con una sencilla
            visita para compartir juguetes con niños de bajos recursos y se
            transformó en una misión de vida para miles de familias.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/historia_donasonrisas.jpg"
              alt="Voluntarios de DonaSonrisas"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#b61c1c] mb-4">
              Un inicio que nació del corazón
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En 2007, un pequeño grupo de voluntarios visitó Pamplona Alta, en Lima,
              para llevar regalos a niños en situación de vulnerabilidad. Aquella
              jornada, llena de sonrisas y abrazos, marcó el inicio de lo que hoy es
              una organización sólida y comprometida con el desarrollo humano.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Con el paso de los años, las actividades navideñas se transformaron en
              programas permanentes: campañas escolares, apoyo médico, talleres de
              valores y acompañamiento a familias. El alcance creció, llegando a
              comunidades en Cajamarca, zonas altoandinas y hospitales como el
              Oaiza, donde la esperanza siempre encuentra un motivo para sonreír.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hoy, DonaSonrisas sigue extendiendo su red de apoyo, inspirando a más
              personas a donar tiempo, recursos y amor. Porque cada sonrisa cuenta.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE VALORES */}
      <section className="py-16 bg-[#fdf2f2] text-center">
        <h2 className="text-3xl font-bold text-[#b61c1c] mb-10">Nuestros valores</h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Transparencia</h3>
            <p className="text-gray-600">
              Cada donación llega directamente a quienes más lo necesitan, con
              informes claros y resultados visibles.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Empatía</h3>
            <p className="text-gray-600">
              Nos acercamos a las comunidades desde el corazón, escuchando y
              comprendiendo sus necesidades reales.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Compromiso</h3>
            <p className="text-gray-600">
              Trabajamos de manera constante y voluntaria, convencidos de que cada
              acción solidaria puede transformar vidas.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEOS HISTÓRICOS (placeholder para futuro) */}
      <section className="py-20 bg-white border-t text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#b61c1c] mb-6">
            Nuestra historia en videos
          </h2>
          <p className="text-gray-700 mb-10">
            Muy pronto podrás revivir los momentos más emotivos de DonaSonrisas a
            través de nuestros registros por año.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Aquí se insertarán los videos futuros */}
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
              Video 2007 (próximamente)
            </div>
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
              Video 2010 (próximamente)
            </div>
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
              Video 2015 (próximamente)
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
