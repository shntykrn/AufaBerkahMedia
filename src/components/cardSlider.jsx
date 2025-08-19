import React, { useEffect, useState } from "react";
import fk1 from "../assets/fotokegiatan1.JPEG";
import fk2 from "../assets/fotokegiatan2.JPG";
import fk3 from "../assets/fotokegiatan3.JPEG";
import fk4 from "../assets/fotokegiatan4.JPEG";

const CardSlider = ({ images = [] }) => {
  const slides = images.length ? images : [fk1, fk2, fk3, fk4];
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
      <img src={slides[i]} alt={`slide-${i}`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-black/10"></div>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full ${i === idx ? "bg-black" : "bg-black/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
