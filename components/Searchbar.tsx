import React from "react";

import { LocateIcon, BikeIcon, RefreshCwIcon } from "lucide-react";

// component
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
const Searchbar = () => {
  return (
    <Card>
      <CardContent className="px-6">
        <div className="flex gap-4 items-center">
          <Input className="h-10" placeholder="please enter the city name..." />
          <Button size="lg">Search</Button>
          {/* Tabs */}
          View
          <Tabs defaultValue="stations">
            <TabsList>
              <TabsTrigger value="stations">
                <LocateIcon />
                Stations
              </TabsTrigger>
              <TabsTrigger value="vehicles">
                <BikeIcon />
                Vehicles
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {/* providers */}
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Providers" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* refresh button */}
          <Button variant="outline" size="icon">
            <RefreshCwIcon />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Searchbar;
