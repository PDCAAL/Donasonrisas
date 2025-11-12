import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  // Banner superior (puede ocultarse con la X)
  const [promoVisible, setPromoVisible] = useState(true);

  return (
    <header className="w-full">
      {/* Sticky ÚNICO: contiene banner + nav para evitar huecos al scrollear */}
      <div className="sticky top-0 z-50">
        {/* BANNER SUPERIOR */}
        {promoVisible && (
          <div className="bg-[#d9443f] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 relative flex items-center justify-center">
              <p className="text-sm font-medium text-center">
                Dona hoy y multiplica impacto · <span className="font-semibold">Transparencia 100%</span>
              </p>

              {/* WhatsApp a la derecha */}
              <a
                href="https://wa.me/51997374878"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-11 sm:right-12 bg-white text-[#d9443f] px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
              >
                WhatsApp
              </a>

              {/* Botón cerrar (X) */}
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

        {/* NAV */}
        <nav className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* LOGO 25% más grande (controlado por h-12 / md:h-14) */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"  // asegúrate que sea PNG/SVG con fondo transparente y recortado
                alt="DonaSonrisas"
                width={140}
                height={140}
                className="h-12 md:h-14 w-auto object-contain select-none"
                priority
              />
              <span className="text-[#b61c1c] font-bold text-lg md:text-xl tracking-wide">
                DonaSonrisas
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-[#8c1a1a] font-medium">
              <Link href="/quienes-somos" className="hover:text-[#b61c1c] transition">Quiénes somos</Link>
              <Link href="/programas" className="hover:text-[#b61c1c] transition">Programas</Link>
              <Link href="/transparencia" className="hover:text-[#b61c1c] transition">Transparencia</Link>
              <Link href="/contacto" className="hover:text-[#b61c1c] transition">Contacto</Link>
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
