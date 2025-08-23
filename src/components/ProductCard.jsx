export default function ProductCard({ speed, type, price, color, features }) {
  const isGreen = color === "green";

  return (
    <div className="w-80 md:w-72 sm:w-64 h-[420px] rounded-xl overflow-hidden shadow-lg flex flex-col flex-shrink-0 snap-center">
      {/* Bagian atas */}
      <div
        className={`relative p-6 flex flex-col items-center justify-center text-white ${
          isGreen ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {/* Lingkaran Speed rata tengah */}
        <div className="absolute -top-8 flex justify-left w-full">
          <div className="bg-gray-200 rounded-full w-20 h-20 flex flex-col justify-center items-center shadow-md">
            <span className="text-2xl font-bold text-black">{speed}</span>
            <span className="text-xs font-medium">Mbps</span>
          </div>
        </div>

        <div className="mt-14 text-center">
          <p className="font-medium text-lg">{type}</p>
          <p className="text-2xl font-bold">Rp {price.toLocaleString()}</p>
          <p className="text-sm">/bulan</p>
        </div>
      </div>

      {/* Bagian bawah dengan fitur */}
      <div className="flex-1 bg-gray-100 p-5 text-sm">
        <ul className="space-y-2">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              {feat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
