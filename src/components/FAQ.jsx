import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Berapa biaya pasang layanan internet di Aufa Berkah Media?",
      answer: "Ya, biaya pasang internet di Aufa Berkah Media 100% gratis untuk pelanggan baru.",
    },
    {
      question: "Apakah tersedia promo di Aufa Berkah Media?",
      answer: "Kami menyediakan paket mulai dari 10 Mbps hingga 100 Mbps sesuai kebutuhan rumah atau bisnis Anda.",
    },
    {
      question: "Apa saja pilihan paket internet yang tersedia?",
      answer: "Anda bisa langsung mengisi formulir pendaftaran di website atau menghubungi tim CS kami.",
    },
        {
      question: "Bagaimana SOP penanganan gangguan jaringan di Aufa Berkah Media?",
      answer: "Anda bisa langsung mengisi formulir pendaftaran di website atau menghubungi tim CS kami.",
    },
    {
      question: "Apa saja metode pembayaran yang tersedia?",
      answer: "Pembayaran yang tersedia saat ini ada 2 yaitu tunai dan transfer.",
    },
    {
      question: "Di mana lokasi kantor Aufa Berkah Media?",
      answer: "Anda bisa langsung mengisi formulir pendaftaran di website atau menghubungi tim CS kami.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">FAQ - Pertanyaan Umum</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left text-lg font-medium text-gray-700 focus:outline-none"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
