import ProductsSection from "../src/components/ProductsSection";
import RegisterCTA from "../src/components/RegisterCTA";
import PartnershipCTA from "../src/components/PartnershipCTA";
import FAQ from "../src/components/FAQ";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";

export default function Services() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">
            Layanan Internet Terbaik dari Aufa Berkah Media
          </h1>
          <p className="text-gray-700">
            Kami menghadirkan dua layanan unggulan dengan kecepatan tinggi, harga
            terjangkau, dan koneksi stabil yang dapat diandalkan—baik untuk rumah,
            kantor, maupun usaha Anda.
          </p>
        </section>

        <ProductsSection />
        <PartnershipCTA />
        <RegisterCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
