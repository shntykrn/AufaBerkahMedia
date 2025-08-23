// src/pages/Partnership.jsx
import React from "react";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const benefits = [
  {
    title: "Tanpa Biaya Awal Besar",
    desc: "Menjadi mitra tanpa perlu investasi besar di awal — cocok untuk pemula maupun pelaku usaha lokal.",
    color: "bg-green-100",
  },
  {
    title: "Akses ke Layanan Internet Stabil",
    desc: "Mitra kami menikmati akses ke jaringan internet cepat, stabil, dan minim gangguan, langsung dari infrastruktur resmi Aufa.net.",
    color: "bg-red-100",
  },
  {
    title: "Dukungan Teknis",
    desc: "Tim ahli siap membantu pemeliharaan jaringan, troubleshooting, dan konsultasi teknis.",
    color: "bg-green-100",
  },
  {
    title: "Pengembangan Bisnis",
    desc: "Mitra mendapat peluang pendapatan tambahan dengan dukungan promosi & pemasaran dari Aufa.net.",
    color: "bg-blue-100",
  },
];

export default function Partnership() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Kemitraan Aufa Berkah Media
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bergabunglah sebagai mitra dan tumbuh bersama kami dalam menyediakan layanan internet yang cepat, stabil, dan terjangkau untuk masyarakat. 
          Aufa Berkah Media membuka peluang kemitraan yang fleksibel, minim risiko, dan mendukung pertumbuhan usaha lokal.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Kami percaya bahwa kolaborasi adalah kunci untuk memperluas jangkauan dan memberikan dampak positif bagi lebih banyak orang. 
          Dengan dukungan infrastruktur dan tim ahli dari Aufa.net, Anda dapat memulai usaha layanan internet tanpa perlu biaya besar di awal.
        </p>
      </section>

      {/* Jenis Kemitraan */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl shadow bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Kemitraan Reseller</h2>
          <p className="mb-4">
            Untuk Anda yang ingin memulai tanpa perlu investasi alat jaringan. Cukup bantu memasarkan dan mendaftarkan pelanggan.
          </p>
          <ul className="space-y-2 text-green-600 font-medium">
            <li>✔ Tanpa biaya alat</li>
            <li>✔ Komisi menarik per pelanggan</li>
            <li>✔ Cocok untuk individu & UMKM</li>
          </ul>
        </div>
        <div className="p-6 border rounded-xl shadow bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Kemitraan Infrastruktur</h2>
          <p className="mb-4">
            Untuk Anda yang ingin membangun jaringan lokal sendiri — cocok untuk skala RT/RW, komplek, atau desa.
          </p>
          <ul className="space-y-2 text-green-600 font-medium">
            <li>✔ Kendali penuh atas pelanggan</li>
            <li>✔ Potensi pendapatan lebih besar</li>
            <li>✔ Butuh modal alat & lokasi strategis</li>
          </ul>
        </div>
      </section>

      {/* Benefit Slider */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Keuntungan Menjadi Mitra</h2>
        <Swiper spaceBetween={16} slidesPerView={1} breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}>
          {benefits.map((b, i) => (
            <SwiperSlide key={i}>
              <div className={`p-6 rounded-xl shadow ${b.color}`}>
                <h3 className="text-lg font-bold mb-3">{b.title}</h3>
                <p className="text-gray-700 text-sm">{b.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Syarat & Ketentuan */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Syarat dan Ketentuan</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✔ Tanpa batasan kecepatan harian</li>
          <li>✔ Harga flat, tidak berubah-ubah</li>
          <li>✔ Tim support bisa datang setiap hari</li>
          <li>✔ Bisa disesuaikan sesuai kebutuhan</li>
        </ul>
      </section>

      {/* Target Wilayah */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Target Wilayah Kemitraan</h2>
        <p className="text-gray-700">
          Kami membuka kemitraan di wilayah yang belum terjangkau jaringan internet berkualitas. 
          Jika wilayah Anda membutuhkan koneksi yang cepat dan stabil, Anda bisa menjadi bagian dari solusi bersama kami.
        </p>
      </section>

      {/* CTA WhatsApp */}
      <section className="text-center py-16 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Tertarik Bergabung?</h2>
        <p className="text-gray-700 mb-6">
          Segera hubungi kami untuk informasi lebih lanjut dan jadilah bagian dari mitra Aufa Berkah Media.
          Klik tombol di bawah ini untuk terhubung melalui WhatsApp.
        </p>
        <a
          href="https://wa.me/6281320007682"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </section>

      <Footer />
    </div>
  );
}
