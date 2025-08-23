import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const aufaProducts = [
  { id: 1, speed: "10 Mbps", type: "Standard", price: "Rp 150.000 /bulan" },
  { id: 2, speed: "15 Mbps", type: "Standard", price: "Rp 166.500 /bulan" },
  { id: 3, speed: "20 Mbps", type: "Standard", price: "Rp 222.000 /bulan" },
  { id: 4, speed: "30 Mbps", type: "Custom", price: "Rp 122.000 /bulan" },
  { id: 5, speed: "50 Mbps", type: "Standard", price: "Rp 250.000 /bulan" },
];

export default function ProductsAufa() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <h3 className="text-2xl font-bold mb-2">Aufa.net</h3>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Layanan internet untuk kebutuhan rumahan dan bisnis dengan kecepatan mulai dari 10 hingga 50 Mbps. 
        Cocok untuk aktivitas sehari-hari seperti browsing, streaming, hingga operasional usaha kecil dengan 
        koneksi yang stabil dan terjangkau.
      </p>

      <div ref={sliderRef} className="keen-slider">
        {aufaProducts.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <div className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-semibold mb-2">{item.type}</h4>
              <p className="text-3xl font-bold text-green-600">{item.speed}</p>
              <p className="text-gray-700 mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ◀
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
