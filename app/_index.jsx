import React from "react";
import Navbar from "../src/components/navbar";
import CardSlider from "../src/components/cardSlider";
import RegisterCTA from "../src/components/RegisterCTA";
import FAQ from "../src/components/FAQ";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <div className="font-poppins text-gray-900 bg-white">
      <Navbar />

      <div className="h-10" />
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 md:px-0 py-10 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-4xl md:text-[44px] leading-tight font-semibold">
            Aufa Berkah<br/>Media
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-700">
            Selamat datang di Aufa Berkah Media, penyedia layanan internet yang
            mengutamakan kualitas koneksi, harga terjangkau, dan pelayanan responsif.
            Kami menghadirkan kemudahan berinternet bagi rumah, kantor, dan bisnis Anda.
            <br/>#connecteverything
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-full bg-green-500 text-white shadow">
              xx+ pelanggan
            </button>
            <button className="px-5 py-2 rounded-full bg-green-500 text-white shadow">
              Daftar Sekarang
            </button>
          </div>
        </div>

        <CardSlider/ >

      </section>

      <section className="mx-auto mz-w-4x1 bg-[#2E2E2E] text-white">
        <div className="px-4 md:px-20 py-8">
          <p className="text-sm md:text-base leading-relaxed mb-6">
            PT. Aufa Berkah Media adalah perusahaan penyedia layanan internet yang berdiri sejak 2021 di Jombang.
            Kami menghadirkan solusi koneksi cepat, stabil, dan terjangkau untuk kebutuhan rumah, kantor, dan bisnis.
            Didukung oleh tim profesional, kami berkomitmen memberikan layanan responsif, mudah diakses, dan sesuai
            kebutuhan pelanggan.
          </p>
          <button className="mt-4 inline-block px-5 py-2 rounded bg-white text-gray-900">
            Tentang Kami
          </button>
        </div>
      </section>

      {/* services */}
      <section className="mx-auto max-w-6xl px-4 md:px-0 py-10">
        <h2 className="text-2xl font-semibold">Layanan Kami</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-lg shadow p-5 bg-[#E9F7EA]">
            <h3 className="text-lg font-semibold mb-2">Aufa.net</h3>
            <p className="text-sm text-gray-700 mb-3">
              Layanan internet broadband untuk rumah dan bisnis kecil. Cocok untuk penggunaan stabil harian.
            </p>
            <ul className="text-sm list-disc ml-5 space-y-1 text-gray-700">
              <li>Kecepatan: 10–50 Mbps</li>
              <li>Cakupan: Area padat penduduk &amp; perumahan</li>
              <li>Stabil untuk kebutuhan reguler</li>
            </ul>
          </div>

          <div className="rounded-lg shadow p-5 bg-[#E9F7EA]">
            <h3 className="text-lg font-semibold mb-2">Berkah Wifi</h3>
            <p className="text-sm text-gray-700 mb-3">
              Layanan internet berkecepatan tinggi untuk pengguna rumahan yang butuh performa maksimal.
            </p>
            <ul className="text-sm list-disc ml-5 space-y-1 text-gray-700">
              <li>Kecepatan: 30–100 Mbps</li>
              <li>Cakupan: Kawasan pemukiman dan cluster</li>
              <li>Performa tinggi dengan gangguan minimal</li>
            </ul>
          </div>
        </div>
      </section>
      
      <RegisterCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
