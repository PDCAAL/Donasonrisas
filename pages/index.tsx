import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DonaSonrisas | Ayudemos hoy para transformar el mañana</title>
        <meta
          name="description"
          content="Tu aporte llega donde más se necesita. DonaSonrisas promueve transparencia, impacto y cercanía para transformar vidas."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* HEADER */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container-app flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/faviconº.png"
              alt="Logo DonaSonrisas"
              className="h-10 w-10"
            />
            <span className="font-bold text-lg text-brand-red">DonaSonrisas</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/quienes-somos" className="hover:text-brand-red">Quiénes somos</a>
            <a href="/programas" className="hover:text-brand-red">Programas</a>
            <a href="/transparencia" className="hover:text-brand-red">Transparencia</a>
            <a href="/contacto" className="hover:text-brand-red">Contacto</a>
            <a href="/donar" className="btn-primary text-sm tracking-wide shadow-md">Donar ahora</a>
          </nav>

          <button className="md:hidden p-2 rounded hover:bg-gray-100" aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-brand-red">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="section bg-gradient-to-b from-white to-red-50">
        <div className="container-app grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Ayudemos hoy para <span className="text-brand-red">transformar</span> el mañana
            </h1>
            <p className="lead mt-4 text-gray-700 max-w-xl">
              Tu aporte llega donde más se necesita. Promovemos transparencia, impacto y cercanía en cada acción solidaria.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/donar" className="btn-primary">Donar ahora</a>
              <a href="/apadrinar" className="btn-secondary">Apadrinar</a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hero.png"
              alt="Niños felices beneficiados por DonaSonrisas"
              className="rounded-2xl shadow-lg object-cover w-full h-[380px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-200/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="section">
        <div className="container-app text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">Nuestro impacto</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div><div className="text-4xl font-extrabold text-brand-red">+5,000</div><div className="text-gray-600">Niños beneficiados</div></div>
            <div><div className="text-4xl font-extrabold text-brand-red">120</div><div className="text-gray-600">Colegios aliados</div></div>
            <div><div className="text-4xl font-extrabold text-brand-red">24</div><div className="text-gray-600">Regiones atendidas</div></div>
            <div><div className="text-4xl font-extrabold text-brand-red">100%</div><div className="text-gray-600">Transparencia</div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section bg-gray-50">
        <div className="container-app text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Historias que inspiran</h2>
          <p className="max-w-2xl mx-auto text-gray-700 mb-10">
            Cada donación cambia una historia. Conoce cómo tus aportes generan impacto real en las comunidades.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <p className="text-gray-700 italic">“Gracias a DonaSonrisas, mi hija pudo volver al colegio con todos sus útiles.”</p>
              <div className="mt-4 font-semibold text-brand-red">María, Madre beneficiaria</div>
            </div>
            <div className="card p-6">
              <p className="text-gray-700 italic">“La transparencia y cercanía de la ONG me motivaron a convertirme en padrino.”</p>
              <div className="mt-4 font-semibold text-brand-red">Carlos, Donante</div>
            </div>
            <div className="card p-6">
              <p className="text-gray-700 italic">“Ser voluntario me hizo ver cómo la unión puede cambiar vidas.”</p>
              <div className="mt-4 font-semibold text-brand-red">Lucía, Voluntaria</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="container-app py-6 flex flex-col sm:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} DonaSonrisas · Hecho con ❤️ en Perú</p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <a href="https://wa.me/51997374878" className="hover:text-brand-red">WhatsApp</a>
            <a href="mailto:donasonrisasperu@gmail.com" className="hover:text-brand-red">Correo</a>
            <a href="/politicas" className="hover:text-brand-red">Políticas</a>
          </div>
        </div>
      </footer>
    </>
  );
}
