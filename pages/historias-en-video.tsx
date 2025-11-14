import Head from "next/head";

export default function HistoriasEnVideo() {
  return (
    <>
      <Head>
        <title>Historias en video | DonaSonrisas</title>
        <meta
          name="description"
          content="Una colección de videos que muestran cómo las donaciones se convierten en sonrisas reales."
        />
      </Head>

      <main className="bg-[#f7f2f2] min-h-screen pt-[8rem] pb-16">
        <section className="max-w-5xl mx-auto px-4">
          <header className="mb-8">
            <p className="text-sm tracking-[0.25em] text-slate-500 uppercase">
              Transparencia y actualidad
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#7b1d1d] mt-2">
              Historias en video
            </h1>
            <p className="mt-4 text-slate-700 leading-relaxed">
              A veces una sonrisa, una mirada o un abrazo cuentan más que
              cualquier cifra. En esta sección reuniremos videos de las
              campañas, entregas y momentos que han marcado el camino de
              DonaSonrisas.
            </p>
          </header>

          {/* Grid de videos – por ahora placeholders */}
          <section className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <article
                key={i}
                className="bg-white rounded-3xl shadow-sm border border-[#f4d4d4] overflow-hidden flex flex-col"
              >
                <div className="bg-slate-200 aspect-video flex items-center justify-center text-slate-500 text-sm">
                  Video {i} – pronto
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-lg font-semibold text-[#7b1d1d]">
                    Campaña de sonrisas {i}
                  </h2>
                  <p className="mt-2 text-sm text-slate-700 flex-1">
                    Breve historia de una de las jornadas de DonaSonrisas con
                    niñas y niños. Pronto podrás ver aquí el video completo.
                  </p>
                  <p className="mt-3 text-xs text-slate-500">
                    Estamos organizando nuestro archivo histórico para compartir
                    estos momentos con toda la comunidad.
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-10 text-center text-sm text-slate-600">
            <p>
              Si eres aliado, voluntario o has participado en alguna campaña y
              tienes material audiovisual que te gustaría compartir, escríbenos
              a{" "}
              <span className="font-semibold text-[#7b1d1d]">
                historias@donasonrisas.org
              </span>
              .
            </p>
          </section>
        </section>
      </main>
    </>
  );
}
