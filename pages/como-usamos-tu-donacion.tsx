import Head from "next/head";

export default function ComoUsamosTuDonacion() {
  return (
    <>
      <Head>
        <title>¿Cómo usamos tu donación? | DonaSonrisas</title>
        <meta
          name="description"
          content="Conoce cómo transformamos cada aporte en alimentación, educación, salud y acompañamiento para niñas y niños."
        />
      </Head>

      <main className="bg-[#f7f2f2] min-h-screen pt-[8rem] pb-16">
        <section className="max-w-5xl mx-auto px-4">
          <header className="mb-10">
            <p className="text-sm tracking-[0.25em] text-slate-500 uppercase">
              Transparencia y actualidad
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#7b1d1d] mt-2">
              ¿Cómo usamos tu donación?
            </h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              En DonaSonrisas creemos que cada sol que confías en nosotros tiene
              un nombre, un rostro y una historia detrás. Por eso cuidamos tu
              donación como si fuera nuestra y la destinamos de manera
              responsable a proyectos que protegen, alimentan y acompañan a
              niñas, niños y sus familias.
            </p>
          </header>

          {/* Resumen en porcentajes */}
          <section className="grid md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#f4d4d4]">
              <p className="text-sm text-slate-500 uppercase">
                Programas y actividades
              </p>
              <p className="text-3xl font-bold text-[#7b1d1d] mt-1">70%</p>
              <p className="text-sm text-slate-600 mt-2">
                Alimentación, entregas de útiles, campañas médicas, talleres y
                actividades integrales con niñas, niños y familias.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#f4d4d4]">
              <p className="text-sm text-slate-500 uppercase">
                Gestión y seguimiento
              </p>
              <p className="text-3xl font-bold text-[#7b1d1d] mt-1">15%</p>
              <p className="text-sm text-slate-600 mt-2">
                Coordinación con comunidades, logística, equipos de voluntariado
                y monitoreo de los proyectos.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#f4d4d4]">
              <p className="text-sm text-slate-500 uppercase">
                Comunicación y sensibilización
              </p>
              <p className="text-3xl font-bold text-[#7b1d1d] mt-1">10%</p>
              <p className="text-sm text-slate-600 mt-2">
                Material educativo, contenidos y campañas para que más personas
                se sumen a regalar sonrisas.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#f4d4d4]">
              <p className="text-sm text-slate-500 uppercase">
                Fondo de emergencia
              </p>
              <p className="text-3xl font-bold text-[#7b1d1d] mt-1">5%</p>
              <p className="text-sm text-slate-600 mt-2">
                Respuesta rápida ante situaciones de urgencia de niñas y niños
                en situación de vulnerabilidad.
              </p>
            </div>
          </section>

          {/* Camino de la donación */}
          <section className="bg-white rounded-3xl shadow-sm border border-[#f4d4d4] p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-semibold text-[#7b1d1d] mb-4">
              El viaje de tu donación
            </h2>
            <ol className="space-y-4 text-slate-700">
              <li>
                <span className="font-semibold text-[#7b1d1d]">
                  1. Recibimos tu aporte
                </span>
                <p>
                  Puede llegar a través de campañas, padrinazgos, empresas
                  solidarias o donaciones únicas.
                </p>
              </li>
              <li>
                <span className="font-semibold text-[#7b1d1d]">
                  2. Lo asignamos a un programa
                </span>
                <p>
                  Priorizamos proyectos que atienden necesidades básicas:
                  alimentación, salud, educación y contención emocional.
                </p>
              </li>
              <li>
                <span className="font-semibold text-[#7b1d1d]">
                  3. Ejecutamos y acompañamos
                </span>
                <p>
                  Trabajamos de la mano con liderazgos locales, docentes,
                  familias y voluntariado para que la ayuda llegue donde más se
                  necesita.
                </p>
              </li>
              <li>
                <span className="font-semibold text-[#7b1d1d]">
                  4. Medimos y rendimos cuentas
                </span>
                <p>
                  Registramos cada entrega, actividad y resultado. Esa
                  información alimenta nuestros{" "}
                  <strong>reportes y resultados</strong> y los{" "}
                  <strong>documentos legales</strong> que ponemos a disposición
                  de todas las personas.
                </p>
              </li>
            </ol>
          </section>

          {/* CTA */}
          <section className="text-center mt-8">
            <p className="text-slate-700 mb-4">
              Si tienes alguna duda sobre el uso de tu donación, puedes
              escribirnos y estaremos encantados de responderte.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-[#c62828] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#a51f1f] transition"
            >
              Escribir a DonaSonrisas
            </a>
          </section>
        </section>
      </main>
    </>
  );
}
