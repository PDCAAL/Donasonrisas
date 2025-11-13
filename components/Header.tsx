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
                src="/logo_donasonrisas.png" // PNG/SVG recortado y sin fondo
                alt="DonaSonrisas"
                width={160}
                height={160}
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
