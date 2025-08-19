import React, { useState } from "react";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";

export default function Register() {
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    alamat: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);
    setFormData({ nama: "", telepon: "", alamat: "" });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-12 max-w-3xl">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-left mb-4">
          Daftar Layanan Internet Sekarang
        </h1>
        <p className="text-left text-gray-700 mb-12">
          Ingin menikmati koneksi internet cepat, stabil, dan terjangkau dari
          Aufa Berkah Media? <br />
          Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda
          untuk proses pemasangan layanan.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Nama */}
            <div className="flex items-center gap-2">
                <label htmlFor="nama" className="w-32">
                Nama :
                </label>
                <input
                id="nama"
                name="nama"
                type="text"
                placeholder="Masukkan nama lengkap Anda"
                className="flex-1 border border-gray-300 p-2 rounded"
                />
            </div>

            {/* No Telepon */}
            <div className="flex items-center gap-2">
                <label htmlFor="telepon" className="w-32">
                No Telepon :
                </label>
                <input
                id="telepon"
                name="telepon"
                type="text"
                placeholder="Masukkan no telepon Anda"
                className="flex-1 border border-gray-300 p-2 rounded"
                />
            </div>

            {/* Alamat */}
            <div className="flex items-start gap-2">
                <label htmlFor="alamat" className="w-32">
                Alamat :
                </label>
                <textarea
                id="alamat"
                name="alamat"
                placeholder="Masukkan alamat Anda"
                className="flex-1 border border-gray-300 p-2 rounded"
                />
            </div>
            </div>
            
            {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-10 py-2 rounded-sm hover:bg-green-700 transition"
            >
              Kirim
            </button>
          </div>
        </form>

        {/* Info tambahan */}
        <p className="text-center mt-10 text-gray-700">
          Tim kami akan memverifikasi data Anda dan menghubungi dalam waktu 1x24
          jam untuk pengecekan lokasi dan jadwal pemasangan.
        </p>

        <div className="mt-8 p-4 bg-gray-100 text-sm text-gray-700 shadow-sm">
          Privasi Anda aman. Data yang Anda kirimkan hanya digunakan untuk
          keperluan pendaftaran layanan internet.
        </div>
      </main>

      <Footer />

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-red-600 text-white rounded-lg p-8 relative text-center max-w-sm mx-auto">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              Data Berhasil Ditambahkan
            </h2>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-3xl">✔</span>
              </div>
            </div>
            <p>Tim Aufa akan segera menghubungi Anda maksimal 1 × 24 jam</p>
          </div>
        </div>
      )}
    </div>
  );
}
