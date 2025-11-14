"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

type HeaderProps = {
  // Si algún día quieres ocultar por completo el banner desde _app,
  // puedes pasar showBanner={false}
  showBanner?: boolean;
};

export default function Header({ showBanner = true }: HeaderProps) {
  // Banner superior (cerrable con X)
  const [bannerVisible, setBannerVisible] = useState(showBanner);

  // Estados para menú móvil
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileHelpOpen, setMobileHelpOpen] = useState(false);

  return (
    <>
      {/* ─────────────────────────────────────
          🔶 BANNER SUPERIOR (cerrable con X)
      ───────────────────────────────────── */}
      {bannerVisible && (
        <div className="w-full bg-[#d64545] text-white text-sm py-2 fixed top-0 left-0 z-50 flex justify-center items-center px-4">
          <span className="text-center">
            Dona hoy y multiplica impacto.{" "}
            <strong>Transparencia 100%.</strong>
          </span>

          <button
            aria-label="Cerrar banner"
            onClick={() => setBannerVisible(false)}
            className="ml-4 text-white/80 hover:text-white text-lg font-bold"
          >
            ×
          </button>
        </div>
      )}

      {/* Espaciador para que el contenido no quede debajo del banner */}
      {bannerVisible && <div className="h-[40px]" />}

      {/* ─────────────────────────────────────
          🔴 HEADER PRINCIPAL – sticky
      ───────────────────────────────────── */}
      <header
        className={`w-full bg-white shadow-sm fixed left-0 z-40 transition-all duration-200 ${
          bannerVisible ? "top-[40px]" : "top-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex justify-between items-center">
          {/* LOGO (sin texto al costado) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="DonaSonrisas"
              width={120}
              height={120}
              className="object-contain h-12 w-auto md:h-14"
            />
          </Link>

          {/* ────────────────
              MENÚ DESKTOP
          ──────────────── */}
          <nav className="hidden md:flex items-center gap-8 text-[#7b1d1d] font-medium">
            {/* ACERCA DE – Mega menú */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#c42d2d] transition">
                Acerca de <FiChevronDown size={14} />
              </button>

              <div
                className="
                  absolute left-1/2 -translate-x-1/2 mt-3
                  invisible opacity-0 translate-y-2
                  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-200
                  w-[880px] max-w-[95vw]
                  bg-[#fff7f7] shadow-xl border border-[#ffd4d4]
                  rounded-2xl p-6 z-30
                "
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-[#5c1a1a]">
                  {/* Columna 1: DonaSonrisas */}
                  <div>
                    <h4 className="text-xs text-gray-500 mb-3 tracking-wide">
                      DONASONRISAS
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/quienes-somos"
                          className="hover:text-[#c42d2d]"
                        >
                          ¿Quiénes somos?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/nuestra-historia"
                          className="hover:text-[#c42d2d]"
                        >
                          Nuestra historia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/mision-y-vision"
                          className="hover:text-[#c42d2d]"
                        >
                          Misión y visión
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/nuestro-equipo"
                          className="hover:text-[#c42d2d]"
                        >
                          Nuestro equipo
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/nuestros-aliados"
                          className="hover:text-[#c42d2d]"
                        >
                          Nuestros aliados
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Columna 2: Cómo ayudar */}
                  <div>
                    <h3 className="text-xs tracking-[0.18em] text-[#5c6670] font-semibold uppercase mb-3">
                      CÓMO AYUDAR
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <Link
                          href="/donar-una-sonrisa"
                          className="hover:text-[#a91f1f]"
                        >
                          Donar una sonrisa
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/apadrinar"
                          className="hover:text-[#a91f1f]"
                        >
                          Apadrinar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ser-voluntario"
                          className="hover:text-[#a91f1f]"
                        >
                          Ser voluntario
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/empresas-solidarias"
                          className="hover:text-[#a91f1f]"
                        >
                          Empresas solidarias
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Columna 3: Transparencia y actualidad */}
                  <div>
                    <h4 className="text-xs text-gray-500 mb-3 tracking-wide">
                      TRANSPARENCIA Y ACTUALIDAD
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/como-usamos-tu-donacion"
                          className="hover:text-[#c42d2d]"
                        >
                          ¿Cómo usamos tu donación?
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/reportes-y-resultados"
                          className="hover:text-[#c42d2d]"
                        >
                          Reportes y resultados
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/documentos-legales"
                          className="hover:text-[#c42d2d]"
                        >
                          Documentos legales
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="hover:text-[#c42d2d]">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/historias-en-video" className="hover:text-[#c42d2d]">
                          Historias en video
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Links simples */}
            <Link href="/programas" className="hover:text-[#c42d2d]">
              Programas
            </Link>
            <Link href="/transparencia" className="hover:text-[#c42d2d]">
              Transparencia
            </Link>
            <Link href="/contacto" className="hover:text-[#c42d2d]">
              Contacto
            </Link>

            <Link
              href="/donar"
              className="bg-[#c62828] text-white px-5 py-2 rounded-full hover:bg-[#a91f1f] transition"
            >
              Donar ahora
            </Link>
          </nav>

          {/* ────────────────
              ICONO MENÚ MOBILE
          ──────────────── */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-[#7b1d1d]"
            aria-label="Abrir menú"
          >
            <FiMenu size={28} />
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────
          PANEL MOBILE
      ───────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="bg-white w-[80%] max-w-xs h-full p-6 shadow-xl overflow-y-auto">
            <button
              onClick={() => setMobileOpen(false)}
              className="mb-6 text-[#7b1d1d]"
              aria-label="Cerrar menú"
            >
              <FiX size={30} />
            </button>

            <ul className="space-y-4 text-[#7b1d1d] text-lg">
              {/* DonaSonrisas / Acerca de */}
              <li>
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => setMobileAboutOpen((prev) => !prev)}
                >
                  DonaSonrisas
                  <FiChevronDown
                    className={`transition-transform ${
                      mobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileAboutOpen && (
                  <ul className="pl-4 mt-2 space-y-2 text-base">
                    <li>
                      <Link
                        href="/quienes-somos"
                        onClick={() => setMobileOpen(false)}
                      >
                        ¿Quiénes somos?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nuestra-historia"
                        onClick={() => setMobileOpen(false)}
                      >
                        Nuestra historia
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/mision-y-vision"
                        onClick={() => setMobileOpen(false)}
                      >
                        Misión y visión
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nuestro-equipo"
                        onClick={() => setMobileOpen(false)}
                      >
                        Nuestro equipo
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/nuestros-aliados"
                        onClick={() => setMobileOpen(false)}
                      >
                        Nuestros aliados
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Cómo ayudar */}
              <li>
                <button
                  className="flex justify-between items-center w-full"
                  onClick={() => setMobileHelpOpen((prev) => !prev)}
                >
                  Cómo ayudar
                  <FiChevronDown
                    className={`transition-transform ${
                      mobileHelpOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileHelpOpen && (
                  <ul className="pl-4 mt-2 space-y-2 text-base">
                    <li>
                      <Link
                        href="/donar-una-sonrisa"
                        onClick={() => setMobileOpen(false)}
                      >
                        Donar una sonrisa
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/apadrinar"
                        onClick={() => setMobileOpen(false)}
                      >
                        Apadrinar
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ser-voluntario"
                        onClick={() => setMobileOpen(false)}
                      >
                        Ser voluntario
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/empresas-solidarias"
                        onClick={() => setMobileOpen(false)}
                      >
                        Empresas solidarias
                      </Link>
                    </li>
                  </ul>
                )}
				
				{mobileHelpOpen && (
                  <ul className="pl-4 mt-2 space-y-2 text-base">
                    <li>
                      <Link
                        href="/como-usamos-tu-donacion"
                        onClick={() => setMobileOpen(false)}
                      >
                        ¿Cómo usamos tu donación?
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/reportes-y-resultados"
                        onClick={() => setMobileOpen(false)}
                      >
                        Reportes y resultados
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/documentos-legales"
                        onClick={() => setMobileOpen(false)}
                      >
                        Documentos legales
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        onClick={() => setMobileOpen(false)}
                      >
                        Blog
                      </Link>
                    </li>
					<li>
                      <Link
                        href="/historias-en-video"
                        onClick={() => setMobileOpen(false)}
                      >
                        Historias en video
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Resto de opciones simples */}
              <li>
                <Link
                  href="/programas"
                  onClick={() => setMobileOpen(false)}
                >
                  Programas
                </Link>
              </li>
              <li>
                <Link
                  href="/transparencia"
                  onClick={() => setMobileOpen(false)}
                >
                  Transparencia
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  onClick={() => setMobileOpen(false)}
                >
                  Contacto
                </Link>
              </li>

              <li>
                <Link
                  href="/donar"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block bg-[#c62828] text-white px-5 py-2 rounded-full"
                >
                  Donar ahora
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
