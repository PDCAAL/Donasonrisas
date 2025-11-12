import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/**
 * Header con:
 * - Franja superior (promo) dismissible que acompaña el scroll (sin huecos).
 * - Navbar sticky (sin duplicaciones).
 * - Logo al 75% del tamaño anterior (ajustable).
 *
 * Nota: Asegúrate de tener /public/logo_donasonrisas.png con fondo TRANSPARENTE.
 * Si usas SVG, puedes cambiar el <Image> por <img src="/logo_donasonrisas.svg" .../>
 */

export default function Header() {
  const [promoVisible, setPromoVisible] = useState(true);

  return (
    <header className="w-full">
      {/* CONTENEDOR STICKY ÚNICO para evitar “huecos” al hacer scroll */}
      <div className="sticky top-0 z-50">
        {/* FRANJA SUPERIOR (se renderiza solo si está visible) */}
        {promoVisible && (
          <div className="bg-[#d9443f] text-white text-center text-sm font-medium py-2 relative">
            <p>
              Dona hoy y multiplica impacto · <span className="font-semibold">Transparencia 100%</span>
            </p>
            <button
              aria-label="Cerrar aviso"
              onClick={() => setPromoVisible(false)}
              className="absolute right-3 top-1.5 rounded-full bg-white/20 hover:bg-white/30 px-2 py-0.5"
            >
              ✕
            </button>
          </div>
        )}

        {/* NAV PRINCIPAL */}
        <nav className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* LOGO + NOMBRE */}
            <Link href="/" className="flex items-center gap-3">
              {/* Logo al 75%: si antes era ~120, ahora 90 */}
              <Image
                src="/logo.png"
                alt="DonaSonrisas"
                width={90}
                height={90}
                className="object-contain select-none"
                priority
              />
              <span className="text-[#b61c1c] font-bold text-xl tracking-wide">
                DonaSonrisas
              </span>
            </Link>

            {/* MENÚ */}
            <div className="hidden md:flex items-center gap-6 text-[#8c1a1a] font-medium">
              <Link href="/quienes-somos" className="hover:text-[#b61c1c] transition">Quiénes somos</Link>
              <Link href="/programas" className="hover:text-[#b61c1c] transition">Programas</Link>
              <Link href="/transparencia" className="hover:text-[#b61c1c] transition">Transparencia</Link>
              <Link href="/contacto" className="hover:text-[#b61c1c] transition">Contacto</Link>
            </div>

            {/* CTA */}
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
