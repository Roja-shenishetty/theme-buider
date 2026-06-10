'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing default marker icons in Next.js builds
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export type Coordinate = [number, number] | { lat: any; lng?: any; lon?: any };

export type MarkerData = {
  id?: string | number;
  position: Coordinate;
  name: string;
  info: string;
};

type MapProps = {
  center: Coordinate | null | undefined;
  markers: MarkerData[];
};

// Fixed unified parsing engine to extract true numbers from any format
const getRawCoordinates = (pos: any): [number, number] => {
  if (!pos) return [NaN, NaN];
  
  let lat: any, lng: any;
  
  if (Array.isArray(pos)) {
    lat = pos[0];
    lng = pos[1];
  } else {
    lat = pos.lat;
    // CRITICAL: Checks for both lng and OpenStreetMap's lon property
    lng = pos.lng !== undefined ? pos.lng : pos.lon;
  }

  return [parseFloat(String(lat)), parseFloat(String(lng))];
};

function MapCameraUpdater({ center }: { center: Coordinate | null | undefined }) {
  const map = useMap();
  
  useEffect(() => {
    if (!center) return;

    const [lat, lng] = getRawCoordinates(center);

    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      // THE FIX: Switch to setView. 
      // It completely avoids the division-by-zero NaN crash caused by React Strict Mode
      // while preserving smooth camera movements.
      map.setView([lat, lng], 15, { animate: true });
    }
  }, [center, map]);

  return null;
}

export default function MapComponent({ center, markers }: MapProps) {
  const defaultCenter = L.latLng(39.8283, -98.5795);
  
  const [initLat, initLng] = center ? getRawCoordinates(center) : [NaN, NaN];
  const isCenterValid = Number.isFinite(initLat) && Number.isFinite(initLng);
  const initialCenter = isCenterValid ? L.latLng(initLat, initLng) : defaultCenter;

  return (
    <MapContainer 
      center={initialCenter} 
      zoom={14} 
      className="w-full h-full z-0"
    >
      <MapCameraUpdater center={center} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      
      {markers?.map((marker, idx) => {
        const [mLat, mLng] = getRawCoordinates(marker.position);
        if (!Number.isFinite(mLat) || !Number.isFinite(mLng)) return null;

        return (
          <Marker key={marker.id || idx} position={L.latLng(mLat, mLng)}>
            {/* The Floating Address Label Card */}
            <Tooltip 
              permanent 
              direction="top" 
              offset={[0, -35]} 
              className="bg-white border-0 shadow-md rounded-lg font-sans font-bold text-[#1c2d24] px-3 py-1 text-xs whitespace-nowrap z-50"
            >
              {marker.name}
            </Tooltip>

            <Popup>
              <div className="font-sans">
                <strong className="text-[#1c2d24]">{marker.name}</strong><br/>
                <span className="text-gray-600 text-xs">{marker.info}</span>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}