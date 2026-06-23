"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "/icons/pin.png", // put your icon in /public/icons
  iconSize: [32, 32],
  iconAnchor: [16, 32], // tip of pin touches the lat/lon point
});

const locations = [
  { id: 1, lat: 19.076, lon: 72.8777, label: "Mumbai" },
  { id: 2, lat: 28.6139, lon: 77.209, label: "Delhi" },
];
const MapCard = () => {
  return (
    <>
      <Card className="overflow-hidden rounded-3xl">
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle>Live Map</CardTitle>

              <CardDescription>Available stations and vehicles</CardDescription>
            </div>

            <Button variant="ghost" size="icon">
              {/* <Expand /> */}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="h-[550px]">
            <MapContainer
              center={[20.5937, 78.9629]}
              zoom={5}
              scrollWheelZoom={true}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {locations.map((loc) => (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lon]}
                  icon={customIcon}
                >
                  <Popup>{loc.label}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </CardContent>
      </Card>

      {/* badges */}
      <Card>
        <CardContent className="flex items-center justify-center gap-10 py-4">
          <Badge className="rounded-full">4+ Bikes</Badge>

          <Badge variant="secondary" className="rounded-full">
            1–3 Bikes
          </Badge>

          <Badge variant="destructive" className="rounded-full">
            No Bikes
          </Badge>
        </CardContent>
      </Card>
    </>
  );
};

export default MapCard;
