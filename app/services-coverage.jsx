import { useState } from "react";
import CoverageMap from "../src/components/CoverageMap";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import RegisterCTA from "../src/components/RegisterCTA";

export default function ServicesCoverage() {
  const [search, setSearch] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSearch = () => {
    setSubmittedQuery(search);
  };

  return (
    <div className="font-poppins">
      <Navbar />

      <section className="container mx-auto px-4 py-12 space-y-12">
        {/* Judul */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Cek Jangkauan Layanan Internet Kami
          </h1>
          <p className="text-gray-700 mb-6 max-w-2xl">
            Ingin tahu apakah rumah, kantor, atau tempat usaha Anda sudah termasuk dalam cakupan
            layanan Aufa Berkah Media?
          </p>

          {/* Search box */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Masukkan alamat atau lokasi Anda"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
            >
              Cari Lokasi Anda
            </button>
          </div>
        </div>

        {/* Peta Coverage */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow">
          <CoverageMap searchQuery={submittedQuery} />
        </div>

        {/* Info Kontak */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-lg font-semibold">
            Lokasi Anda belum terjangkau layanan internet kami?
          </h2>
          <p>
            Kami terus memperluas jaringan! Hubungi tim kami untuk mengecek kemungkinan pemasangan
            layanan di lokasi Anda.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <div>
              📞 081320007682 <br />
              📞 085820007682 <br />
              ☎️ 0321-8497682
            </div>
            <div>✉️ cs@aufaberkahmedia.net</div>
          </div>
        </div>
      </section>

      <RegisterCTA />
      <Footer />
    </div>
  );
}
