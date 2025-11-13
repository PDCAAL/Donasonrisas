import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Header() {
  const [promoVisible, setPromoVisible] = useState(true);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Recalcula la altura total (banner + nav) y la expone en --header-h
  const recomputeHeight = () => {
    if (wrapRef.current) {
      const h = wrapRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    }
  };

  // Medir al inicio, al cambiar promo, y en resize
  useLayoutEffect(() => {
    recomputeHeight();
  }, []); // primera pintura

  useEffect(() => {
    recomputeHeight();
  }, [promoVisible]);

  useEffect(() => {
    const onResize = () => recomputeHeight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header aria-label="Site header">
      {/* FIXED: ocupa el top, mide altura y se refleja en --header-h */}
      <div
        ref={wrapRef}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* BANNER (con X para cerrar). Si se cierra, desaparece y el alto recalcula */}
        {promoVisible && (
          <div className="bg-[#d9443f] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 relative flex items-center justify-center">
              <p className="text-sm font-medium text-center">
                Dona hoy y multiplica impacto · <span className="font-semibold">Transparencia 100%</span>
              </p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/51997374878"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-10 sm:right-12 bg-white text-[#d9443f] px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
              >
                WhatsApp
              </a>

              {/* X de cierre */}
              <button
                aria-label="Cerrar aviso"
                onClick={() => setPromoVisible(false)}
                className="absolute right-2 sm:right-3 rounded-full bg-white/20 hover:bg-white/30 px-2 py-0.5"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* NAVBAR */}
        <nav className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* LOGO (25% más grande) */}
            <Link href="/" className="flex items-center gap-3">
              <Image
				  src="/logo.png"
				  alt="DonaSonrisas"
				  width={200}
				  height={200}
				  className="h-[60px] md:h-[70px] w-auto object-contain select-none"
				  priority
				/>

            </Link>

            <div className="hidden md:flex items-center gap-6 text-[#8c1a1a] font-medium relative">

  {/* ACERCA DE – Mega menú estilizado */}
  <div className="group relative">
    <button className="inline-flex items-center gap-1 px-2 py-1 rounded-full hover:bg-[#ffe4e0] hover:text-[#b61c1c] transition">
      Acerca de
      <span className="text-xs mt-[1px]">▼</span>
    </button>

    {/* Contenedor mega-menú */}
    <div
      className={`
        invisible opacity-0 translate-y-1
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        absolute left-1/2 -translate-x-1/2 mt-3
        w-[860px] max-w-[95vw]
        bg-[#fff8f8] shadow-xl rounded-2xl border border-[#f5c7c7]
        transition-all duration-200 ease-out z-40
      `}
    >
      {/* Barra superior decorativa */}
      <div className="h-1 w-full rounded-t-2xl bg-gradient-to-r from-[#ff7b6a] via-[#ff3b3f] to-[#ff7b6a]" />

      <div className="grid grid-cols-3 gap-6 p-6 text-sm text-[#5c1a1a]">

        {/* Columna 1 – DONASONRISAS */}
        <div>
          <div className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-gray-500">
            DONASONRISAS
          </div>
          <ul className="space-y-1.5">
            <li>
              <Link href="/quienes-somos" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>¿Quiénes somos?</span>
              </Link>
            </li>
            <li>
              <Link href="/nuestra-historia" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff7b6a]" />
                <span>Nuestra historia</span>
              </Link>
            </li>
            <li>
              <Link href="/mision-vision" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>Misión y visión</span>
              </Link>
            </li>
            <li>
              <Link href="/equipo" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff7b6a]" />
                <span>Nuestro equipo</span>
              </Link>
            </li>
            <li>
              <Link href="/aliados" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>Nuestros aliados</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 2 – CÓMO AYUDAR */}
        <div>
          <div className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-gray-500">
            CÓMO AYUDAR
          </div>
          <ul className="space-y-1.5">
            <li>
              <Link href="/donar" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>Donar una sonrisa</span>
              </Link>
            </li>
            <li>
              <Link href="/apadrinar" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff7b6a]" />
                <span>Apadrinar una sonrisa</span>
              </Link>
            </li>
            <li>
              <Link href="/voluntariado" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>Ser voluntario</span>
              </Link>
            </li>
            <li>
              <Link href="/empresas-solidarias" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff7b6a]" />
                <span>Empresas solidarias</span>
              </Link>
            </li>
            <li>
              <Link href="/como-ayudar-desde-casa" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>Ayudar desde casa</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 – TRANSPARENCIA Y ACTUALIDAD */}
        <div>
          <div className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-gray-500">
            TRANSPARENCIA Y ACTUALIDAD
          </div>
          <ul className="space-y-1.5">
            <li>
              <Link href="/como-usamos-tu-donacion" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>¿Cómo usamos tu donación?</span>
              </Link>
            </li>
            <li>
              <Link href="/reportes-y-resultados" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff7b6a]" />
                <span>Reportes y resultados</span>
              </Link>
            </li>
            <li>
              <Link href="/documentos-legales" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>Documentos legales</span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff7b6a]" />
                <span>Blog y noticias</span>
              </Link>
            </li>
            <li>
              <Link href="/historias-en-video" className="flex items-start gap-2 hover:text-[#b61c1c]">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff3b3f]" />
                <span>Historias en video</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>

  {/* Resto de enlaces normales del header */}
  <Link href="/programas" className="hover:text-[#b61c1c] transition">
    Programas
  </Link>
  <Link href="/transparencia" className="hover:text-[#b61c1c] transition">
    Transparencia
  </Link>
  <Link href="/contacto" className="hover:text-[#b61c1c] transition">
    Contacto
  </Link>
</div>


            <Link
              href="/donar"
              className="bg-[#b61c1c] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#a11313] transition font-semibold"
            >
              Donar ahora
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
