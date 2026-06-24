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
import {
  Bike,
  MapPin,
  Package,
  Warehouse,
  CheckCircle2,
  X,
} from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const customIcon = new L.Icon({
  iconUrl: "/icons/pin.png", // put your icon in /public/icons
  iconSize: [32, 32],
  iconAnchor: [16, 32], // tip of pin touches the lat/lon point
});

const locations = [
  { id: 1, lat: 19.076, lon: 72.8777, label: "Mumbai", renting: true },
  { id: 2, lat: 28.6139, lon: 77.209, label: "Delhi", renting: false },
];
const MapCard = () => {
  const [selectedMarker, setSelectedMarker] = useState<object | null>(null);
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
          <HoverCard open={!!selectedMarker} openDelay={10} closeDelay={100}>
            <HoverCardContent
              style={{
                left: 300 + 20,
                top: 300 - 20,
              }}
              className="w-[460px] absolute shadow-xl z-[9999]"
            >
              <Card className="w-[420px] rounded-3xl border-zinc-800 bg-zinc-950/95 backdrop-blur-md shadow-2xl">
                <CardHeader className="">
                  <div className="flex items-start justify-between">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <MapPin className="h-6 w-6 text-red-500" />U Rathaus
                      Schöneberg
                    </CardTitle>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        setSelectedMarker(null);
                      }}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>

                <Separator />

                <CardContent className="space-y-3">
                  {/* Stats */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bike className="h-5 w-5 text-blue-400" />
                        <span>Bikes Available</span>
                      </div>

                      <span className="font-bold text-xl">0</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Warehouse className="h-5 w-5 text-amber-400" />
                        <span>Empty Docks</span>
                      </div>

                      <span className="font-bold text-xl">7</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Package className="h-5 w-5 text-purple-400" />
                        <span>Total Capacity</span>
                      </div>

                      <span className="font-bold text-xl">7</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        className={`h-5 w-5 ${
                          selectedMarker?.renting
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      />

                      <span
                        className={`font-medium ${
                          selectedMarker?.renting
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {selectedMarker?.renting
                          ? "Open for Renting"
                          : "Closed"}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  {/* Address */}
                  <div className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-red-500 shrink-0" />

                    <p className="text-sm text-muted-foreground leading-6">
                      Carl-Zuckmayer-Brücke, Schöneberger Dreieck, Bayerisches
                      Viertel, Schöneberg, Tempelhof-Schöneberg, Berlin, 10825,
                      Deutschland
                    </p>
                  </div>
                </CardContent>
              </Card>
            </HoverCardContent>
          </HoverCard>
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
                  eventHandlers={{
                    mouseover: () => {
                      setSelectedMarker(loc);
                      console.log("hovered", loc);
                    },
                    mouseout: () => {
                      console.log("left", loc);
                      // setSelectedMarker(null);
                    },
                  }}
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
