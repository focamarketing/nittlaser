"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  // Página 1
  { src: "/images/gallery-01.jpeg", alt: "Trabalho NittLaser 1" },
  { src: "/images/gallery-02.jpeg", alt: "Trabalho NittLaser 2" },
  { src: "/images/gallery-03.jpeg", alt: "Trabalho NittLaser 3" },
  { src: "/images/gallery-04.jpeg", alt: "Trabalho NittLaser 4" },
  { src: "/images/gallery-05.jpeg", alt: "Trabalho NittLaser 5" },
  { src: "/images/gallery-06.jpeg", alt: "Trabalho NittLaser 6" },
  // Página 2
  { src: "/images/gallery-07.jpeg", alt: "Trabalho NittLaser 7" },
  { src: "/images/gallery-08.jpeg", alt: "Trabalho NittLaser 8" },
  { src: "/images/gallery-09.jpeg", alt: "Trabalho NittLaser 9" },
  { src: "/images/gallery-10.jpeg", alt: "Trabalho NittLaser 10" },
  { src: "/images/gallery-11.jpeg", alt: "Trabalho NittLaser 11" },
  { src: "/images/gallery-12.jpeg", alt: "Trabalho NittLaser 12" },
  // Página 3
  { src: "/images/gallery-13.jpeg", alt: "Trabalho NittLaser 13" },
  { src: "/images/gallery-14.jpeg", alt: "Trabalho NittLaser 14" },
  { src: "/images/gallery-15.jpeg", alt: "Trabalho NittLaser 15" },
  { src: "/images/gallery-16.jpeg", alt: "Trabalho NittLaser 16" },
  { src: "/images/gallery-17.jpeg", alt: "Trabalho NittLaser 17" },
  { src: "/images/gallery-18.jpeg", alt: "Trabalho NittLaser 18" },
];

const ITEMS_PER_PAGE = 6;
const totalPages = Math.ceil(galleryImages.length / ITEMS_PER_PAGE);

const GallerySection = () => {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const updateMobileIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / galleryImages.length;
    const index = Math.round(el.scrollLeft / cardWidth);
    setMobileIndex(index);
  }, []);

  const scrollToMobile = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / galleryImages.length;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const currentImages = galleryImages.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  // Mobile: carrossel horizontal 1 imagem por vez
  if (isMobile) {
    return (
      <section className="py-24" id="galeria">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
              Nossos <span className="text-gradient-gold">trabalhos</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Veja a qualidade e o acabamento das nossas gravações em diferentes produtos.
            </p>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              onScroll={updateMobileIndex}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="w-full shrink-0 snap-center"
                >
                  <div className="overflow-hidden rounded-xl border border-border">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={800}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Setas mobile */}
            <button
              onClick={() => scrollToMobile("left")}
              disabled={mobileIndex === 0}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur-sm disabled:opacity-0"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToMobile("right")}
              disabled={mobileIndex === galleryImages.length - 1}
              aria-label="Próximo"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground shadow-lg backdrop-blur-sm disabled:opacity-0"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots mobile */}
          <div className="mt-6 flex justify-center gap-1.5">
            {galleryImages.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === mobileIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop/Tablet: grid 3x2 paginado
  return (
    <section className="py-24" id="galeria">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            Nossos <span className="text-gradient-gold">trabalhos</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Veja a qualidade e o acabamento das nossas gravações em diferentes produtos.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentImages.map((img, i) => (
            <div
              key={`${page}-${i}`}
              className="group overflow-hidden rounded-xl border border-border"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={800}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Navegação desktop */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            aria-label="Página anterior"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:bg-card/80 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === page
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages - 1}
            aria-label="Próxima página"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:bg-card/80 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
