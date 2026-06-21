import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.6221882978507!2d-98.48650795000005!3d29.421653200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66f03e879!2sHenry+B.+Gonzalez+Convention+Center!5e0!3m2!1sen!2sus!4v1393884854786"
              width="100%"
              height="680px"
            ></iframe>
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
