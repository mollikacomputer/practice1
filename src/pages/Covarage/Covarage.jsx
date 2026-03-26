import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

// 🔧 Fix marker icon
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useLoaderData } from "react-router";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const Covarage = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  // 👉 your data (use full 64)
  const data = useLoaderData();

  // 🔍 filter
  const filtered = data.filter((item) =>
    `${item.district} ${item.covered_area.join(" ")}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  // ✈️ fly animation
  const FlyMap = () => {
    const map = useMap();
    if (selected) {
      map.flyTo([selected.latitude, selected.longitude], 10, {
        duration: 1.5,
      });
    }
    return null;
  };

  return (
    <div className="w-full  p-6">
      {/* 🧾 1. Title Area */}
      <div className="text-start py-6">
        <h2 className="text-2xl font-bold">We are available in 64 districts</h2>
        <p className="text-gray-500">We deliver almost all over Bangladesh</p>
      </div>

      {/* 🔎 2. Search Area */}
      <div className="max-w-md text-start mb-4 relative">
        <input
          type="text"
          placeholder="Search district or area..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);

            const found = data.find((item) =>
              `${item.district} ${item.covered_area.join(" ")}`
                .toLowerCase()
                .includes(value.toLowerCase()),
            );

            if (found) setSelected(found);
          }}
        />

        {/* 🔽 Suggestions */}
        {search && (
          <div className="absolute w-full bg-white mt-1 rounded shadow max-h-40 overflow-y-auto z-50">
            {filtered.slice(0, 5).map((item, i) => (
              <p
                key={i}
                onClick={() => {
                  setSelected(item);
                  setSearch(item.district);
                }}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.district}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* 🗺️ 3. Map Area */}
      <div className="h-[600px] w-full">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          className="h-full w-full rounded-xl"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <FlyMap />

          {filtered.map((item, i) => (
            <Marker
              key={i}
              position={[item.latitude, item.longitude]}
              eventHandlers={{
                click: () => setSelected(item),
              }}
            >
              <Popup>
                <b>{item.district}</b>
                <br />
                {item.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* 🎯 Animated Card */}
        {selected && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow w-64"
          >
            <h3 className="font-bold">{selected.district}</h3>
            <p>{selected.city}</p>
            <p className="text-sm text-gray-500">
              {selected.covered_area.join(", ")}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="btn btn-sm mt-2"
            >
              Close
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Covarage;
