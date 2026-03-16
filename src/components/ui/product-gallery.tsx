"use client";

import Image from "next/image";
import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[hsl(var(--border))] bg-[hsl(var(--brand-cream))]">
        <Image
          src={activeImage}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-6"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((image) => (
            <button
              key={image}
              onClick={() => setActiveImage(image)}
              className={`relative aspect-[4/5] overflow-hidden rounded-2xl border bg-[hsl(var(--brand-cream))] ${
                activeImage === image
                  ? "border-[hsl(var(--brand-green))]"
                  : "border-[hsl(var(--border))]"
              }`}
              aria-label="Preview product image"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="120px"
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}