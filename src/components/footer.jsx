import React from "react";
import logoImage from "../assets/logo-aufa.png";

const Footer = () => {
  return (
    <footer className="bg-[#E5E5E5] mt-16 border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <img src={logoImage} alt="Aufa.net" className="h-8 object-contain" />
          <p className="text-sm text-gray-700">Aufa Berkah Media<br/>#connecteverything</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navigasi Cepat</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>Beranda</li><li>Layanan</li><li>Peta Jangkauan</li><li>Tentang Kami</li><li>Daftar Sekarang</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Hubungi Kami</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>081320007682</li>
            <li>085820007682</li>
            <li>0321–8497682</li>
            <li>cs@aufaberkahmedia.net</li>
            <li>Tambakberas barat, Gg. Aufa, Jombang</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Ikuti Kami</h4>
          <p className="text-sm text-gray-700">Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
