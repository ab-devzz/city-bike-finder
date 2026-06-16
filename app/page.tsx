// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppWindowIcon, LocateIcon, BikeIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
export default function Home() {
  return (
    <section className="h-full bg-accent">
      <div className="h-full">
        {/* Nav Bar */}
        <div className="flex flex-col w-full bg-primary px-10 py-2 items-center">
          <h3 className="font-extrabold text-white">
            City Bike 🚲 & Scooter Explorer 🛴
          </h3>
          <p className="text-white/80">
            Find available bikes and scooters near you
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-10 my-2 gap-10 flex">
          <div className="flex gap-2">
            <Input
              id="input-field-username"
              type="text"
              placeholder="Enter your username"
              className="max-w-sm"
            />
            <Button variant="default">Button</Button>
          </div>

          <div className="flex">
            View :
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
          </div>

          <div className="flex">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.6221882978507!2d-98.48650795000005!3d29.421653200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66f03e879!2sHenry+B.+Gonzalez+Convention+Center!5e0!3m2!1sen!2sus!4v1393884854786"
          width="100%"
          height="680px"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
}
