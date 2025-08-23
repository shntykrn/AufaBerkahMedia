import React from "react";

const wifiProducts = [
  { id: 1, speed: "30 Mbps", type: "Standard", price: "Rp 166.500 /bulan" },
  { id: 2, speed: "50 Mbps", type: "Standard", price: "Rp 222.000 /bulan" },
  { id: 3, speed: "100 Mbps", type: "Custom", price: "Rp 122.000 /bulan" },
];

export default function ProductsBerkah() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      <h3 className="text-2xl font-bold mb-2">Berkah Wifi</h3>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Solusi internet berkecepatan tinggi untuk pengguna rumahan yang membutuhkan performa maksimal. 
        Dilengkapi kecepatan mulai dari 30 hingga 100 Mbps, ideal untuk rumah modern, smart home, dan 
        penggunaan multi-perangkat sekaligus.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wifiProducts.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white border rounded-xl shadow hover:shadow-lg transition"
          >
            <h4 className="text-lg font-semibold mb-2">{item.type}</h4>
            <p className="text-3xl font-bold text-red-600">{item.speed}</p>
            <p className="text-gray-700 mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
