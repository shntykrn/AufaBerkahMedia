import { useEffect, useState } from "react";

let MapContainer, TileLayer, Marker, Popup, useMap, L;

if (typeof window !== "undefined") {
  // import leaflet modules hanya di client
  const leaflet = require("leaflet");
  L = leaflet;
  require("leaflet/dist/leaflet.css");
  ({ MapContainer, TileLayer, Marker, Popup, useMap } = require("react-leaflet"));
}

const odpIcon = L
  ? new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [30, 30],
    })
  : null;

function ChangeView({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 15);
    }
  }, [coords, map]);
  return null;
}

export default function CoverageMap({ searchQuery }) {
  const [position, setPosition] = useState([-7.518968677010764, 112.233071]);
  const [searched, setSearched] = useState(null);

  const odpLocations = [
    { id: 1, name: "ODP 1", lat: -7.518968677010764, lng: 112.23267865375477 },
    { id: 2, name: "ODP 2", lat: -7.4562641830987495, lng: 112.22395113594534 },
    { id: 3, name: "ODP 3", lat: -7.456101592933274, lng: 112.22320698085346 },
  ];

  // cari lokasi dari search box
  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== "") {
      const fetchCoords = async () => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              searchQuery
            )}`
          );
          const data = await res.json();
          if (data && data[0]) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            setPosition([lat, lon]);
            setSearched([lat, lon]);
          }
        } catch (err) {
          console.error("Gagal mencari lokasi:", err);
        }
      };
      fetchCoords();
    }
  }, [searchQuery]);

  // 🚀 kalau di server render return null
  if (typeof window === "undefined" || !MapContainer) {
    return null;
  }

  return (
    <MapContainer center={position} zoom={14} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {searched && <ChangeView coords={searched} />}

      {searched && (
        <Marker position={searched}>
          <Popup>{searchQuery}</Popup>
        </Marker>
      )}

      {odpLocations.map((odp) => (
        <Marker key={odp.id} position={[odp.lat, odp.lng]} icon={odpIcon}>
          <Popup>{odp.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
