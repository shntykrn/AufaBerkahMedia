import React from "react";
import { Link } from "react-router-dom";

export default function PartnershipCTA() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto bg-gray-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Berminat menjadi mitra kami?</h3>
        <Link
        to="/partnership"
        className="inline-block bg-white text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
            Cek Di sini
        </Link>      
      </div>
    </section>
  );
}
