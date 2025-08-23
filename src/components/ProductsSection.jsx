import ProductCard from "./ProductCard";

const productsAufaNet = [
  { type: "Standard", price: 122000, speed: 10, color: "green", features: ["Unlimited Kuota", "Gratis Pemasangan", "Support 24/7"] },
  { type: "Standard", price: 166500, speed: 15, color: "red", features: ["Unlimited Kuota", "Gratis Router Wifi", "Support 24/7"] },
  { type: "Standard", price: 222000, speed: 20, color: "green", features: ["Unlimited Kuota", "Gratis Pemasangan", "Dukungan Remote"] },
  { type: "Custom", price: 122000, speed: 30, color: "red", features: ["Paket Fleksibel", "Gratis Pemasangan", "Support 24/7"] },
  { type: "Standard", price: 222000, speed: 50, color: "green", features: ["Unlimited Kuota", "Gratis Router Wifi", "Support 24/7"] },
];

const productsBerkahWifi = [
  { type: "Standard", price: 166500, speed: 30, color: "red", features: ["Unlimited Kuota", "Gratis Router Wifi", "Support 24/7"] },
  { type: "Standard", price: 222000, speed: 50, color: "green", features: ["Unlimited Kuota", "Gratis Pemasangan", "Support 24/7"] },
  { type: "Custom", price: 122000, speed: 100, color: "red", features: ["Paket Fleksibel", "Gratis Router Wifi", "Support 24/7"] },
];

export default function ProductsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Aufa.net */}
      <h2 className="text-2xl font-bold mb-2">Aufa.net</h2>
      <p className="mb-6 text-gray-700">
        Layanan internet untuk kebutuhan rumahan dan bisnis dengan kecepatan
        mulai dari 10 hingga 50 Mbps. Cocok untuk aktivitas sehari-hari seperti
        browsing, streaming, hingga operasional usaha kecil.
      </p>

      <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
        {productsAufaNet.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>

      {/* Berkah Wifi */}
      <h2 className="text-2xl font-bold mt-12 mb-2">Berkah Wifi</h2>
      <p className="mb-6 text-gray-700">
        Solusi internet berkecepatan tinggi untuk pengguna rumahan yang
        membutuhkan performa maksimal. Mulai dari 30 hingga 100 Mbps, ideal
        untuk rumah modern, smart home, dan multi-perangkat.
      </p>

      <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
        {productsBerkahWifi.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
