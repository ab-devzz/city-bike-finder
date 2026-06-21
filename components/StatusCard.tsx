import React from "react";

import { LocateIcon, BikeIcon } from "lucide-react";

// components
import { Card, CardContent } from "@/components/ui/card";

const StatusCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="rounded-3xl shadow-sm">
        <CardContent className="px-6">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-xl bg-secondary">
              <LocateIcon />
            </div>
            <div>
              <p className="text-muted-foreground">City</p>
              <h3 className="text-2xl font-semibold">Mumbai</h3>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-3xl shadow-sm">
        <CardContent className="px-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-secondary">
              <BikeIcon />
            </div>
            <div>
              <p className="text-muted-foreground">Stations</p>
              <h3 className="text-2xl font-semibold">132</h3>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-3xl shadow-sm">
        <CardContent className="px-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-secondary">
              <LocateIcon />
            </div>
            <div>
              <p className="text-muted-foreground">Available Bikes</p>
              <h3 className="text-2xl font-semibold">128</h3>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-3xl shadow-sm">
        <CardContent className="px-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-secondary">
              <LocateIcon />
            </div>
            <div>
              <p className="text-muted-foreground">Providers</p>
              <h3 className="text-2xl font-semibold">5</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusCard;
