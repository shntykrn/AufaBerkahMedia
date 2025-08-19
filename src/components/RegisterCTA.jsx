import React from "react";
import { Link } from "react-router-dom";

const RegisterCTA = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-green-500 text-white py-10 px-6 text-center rounded-xl shadow-lg my-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Tertarik menggunakan layanan kami?
      </h2>
      <p className="mb-6">
        Klik tombol di bawah ini untuk mulai berlangganan dan rasakan internet tanpa gangguan!
      </p>
      <Link
        to="/register"
        className="inline-block bg-white text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        Daftar Sekarang
      </Link>
    </section>
  );
};

export default RegisterCTA;
