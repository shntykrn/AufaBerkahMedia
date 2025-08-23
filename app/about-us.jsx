import React from "react";
import Navbar from "../src/components/navbar";
import Footer from "../src/components/footer";
import RegisterCTA from "../src/components/RegisterCTA";

import fotoarif from "../src/assets/kosong.PNG";
import fotocm from "../src/assets/fotocm.PNG";
import fotohamza from "../src/assets/fotohamza.PNG";
import fotofera from "../src/assets/fotofera.PNG";
import fotonanda from "../src/assets/fotonanda.PNG";
import fotomaul from "../src/assets/fotomaul.PNG";
import fotofani from "../src/assets/fotofani.PNG";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* About Section */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Aufa Berkah Media</h1>
          <p className="text-gray-700 leading-relaxed">
            PT. Aufa Berkah Media adalah perusahaan penyedia layanan internet
            yang berdiri sejak 21 April 2021 di Jombang. Kami melayani berbagai
            segmen pelanggan, mulai dari rumah tangga hingga bisnis dan instansi,
            dengan koneksi cepat, stabil, dan dapat disesuaikan. Berkomitmen
            sebagai <strong>One Stop ICT Services</strong>, kami terus berinovasi
            agar tetap relevan di era digital.
          </p>
        </div>
        <div>
          <img
            src="/src/assets/tes.PNG" 
            alt="Aufa Berkah Media"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Lokasi */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden shadow-md h-80">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.5122345651457!2d112.23010507415087!3d-7.518969674190608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e783f26e04bb459%3A0x2c127161f1e80a85!2sPT%20Aufa%20Berkah%20Media%20(ABM)!5e0!3m2!1sid!2sid!4v1755919970655!5m2!1sid!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy" 
            title="Lokasi Kantor Aufa Berkah Media"
            ></iframe>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Lokasi</h2>
          <p className="text-gray-700">
            Kantor pusat PT. Aufa Berkah Media berlokasi di Jl. KH Wahab
            Hasbullah No. 21, Gg. Aufa, Tambakberas Barat, Tambakrejo, Jombang.
            Dari lokasi ini, seluruh kegiatan operasional dikelola, mulai dari
            pengembangan layanan internet hingga dukungan teknis dan konsultasi
            pelanggan.
          </p>
        </div>
      </section>

      {/* Tim */}
      <section className="container mx-auto px-6 py-12 text-left items-center">
        <h2 className="text-2xl font-bold mb-6">Kenali Tim Kami</h2>
        <p className="text-gray-600 mb-10">
          Di balik layanan internet cepat dan responsif, terdapat tim solid yang bekerja dengan penuh dedikasi:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Direktur */}
          <div>
            <img src={fotoarif} alt="Arif Rohmatus Salam" className="rounded-lg mx-auto" />
            <p className="mt-2 font-semibold text-center underline">Arif Rohmatus Salam, S.E.</p>
            <p className="text-sm text-gray-500 text-center">Direktur</p>
          </div>

          {/* Wakil Direktur */}
          <div>
            <img src={fotocm} alt="Muchamad Mifsyah" className="rounded-lg mx-auto" />
            <p className="mt-2 font-semibold text-center underline">Muchamad Mifsyah</p>
            <p className="text-sm text-gray-500 text-center">Wakil Direktur</p>
          </div>

          {/* Kepala Teknisi */}
          <div>
            <img src={fotohamza} alt="M. Hamzah As'ari" className="rounded-lg mx-auto" />
            <p className="mt-2 font-semibold text-center underline">M. Hamzah As'ari</p>
            <p className="text-sm text-gray-500 text-center">Kepala Teknisi</p>
          </div>

          {/* Admin */}
          <div>
            <img src={fotofera} alt="Fera Ayu Fitamala I. S, S.Pd." className="rounded-lg mx-auto" />
            <p className="mt-2 font-semibold text-center underline">Fera Ayu Fitamala I. S, S.Pd.</p>
            <p className="text-sm text-gray-500 text-center">Admin</p>
          </div>

          {/* NOC */}
          <div>
            <img src={fotonanda} alt="Ananda Dwi Oktafiyan" className="rounded-lg mx-auto" />
            <p className="mt-2 font-semibold text-center underline">Ananda Dwi Oktafiyan, S.Kom.</p>
            <p className="text-sm text-gray-500 text-center">NOC</p>
          </div>

          {/* Teknisi */}
          <div>
            <img src={fotomaul} alt="M. Rizal Maulana" className="rounded-lg mx-auto" />
            <p className="mt-2 font-semibold text-center underline">M. Rizal Maulana</p>
            <p className="text-sm text-gray-500 text-center">Tim Teknisi</p>
          </div>

          <div>
            <img src={fotofani} alt="Fani Fahrudin" className="rounded-lg mx-auto" />
            <p className="mt-2 font-semibold text-center underline">Fani Fahrudin</p>
            <p className="text-sm text-gray-500 text-center">Tim Teknisi</p>
          </div>
        </div>

        <p className="mt-8 text-gray-700 text-center">
          Kami percaya bahwa kecepatan layanan bukan hanya soal koneksi, tapi juga tentang respon dan kehadiran manusia di balik layar.
        </p>
      </section>

      <RegisterCTA />

      <Footer />
    </>
  );
};

export default AboutUs;
