import React, { useState } from "react";

const QA = [
  "Apakah tersedia promo di aufa.net?",
  "Apa saja pilihan paket internet yang tersedia?",
  "Bagaimana SOP penanganan gangguan jaringan di aufa.net?",
  "Apa saja metode pembayaran yang tersedia?",
  "Di mana lokasi kantor atau layanan aufa.net?",
];

const Item = ({ q }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/20">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full py-4 flex items-center justify-between text-sm md:text-base"
      >
        <span className="text-gray-900">{q}</span>
        <span
          className={`ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-black/30 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden pb-4 text-gray-600 text-sm">
          Informasi akan disesuaikan dengan kebijakan dan layanan terbaru kami.
        </div>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section className="mx-auto max-w-3xl px-4 md:px-0 py-10">
    <h2 className="text-xl md:text-2xl font-semibold text-center">Frequently Asked Questions</h2>
    <p className="text-center text-sm text-gray-600 mt-2 mb-6">
      Beberapa pertanyaan yang sering ditanyakan kepada Aufa.net
    </p>
    <div className="divide-y divide-transparent">
      {QA.map((q) => <Item key={q} q={q} />)}
    </div>
  </section>
);

export default FAQ;
