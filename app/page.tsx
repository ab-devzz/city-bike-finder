"use client";
// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LocateIcon,
  BikeIcon,
  RefreshCwIcon,
  BarChart2Icon,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/ThemeButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="h-full">
      <div className="h-full flex flex-col gap-4">
        {/* Nav Bar */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              City Bike Explorer
            </h1>
            <p className="text-muted-foreground">
              Find bikes and scooters nearby
            </p>
          </div>

          <div className="flex gap-3">
            <ModeToggle />
            <Button variant="outline" onClick={() => setOpen(true)}>
              <BarChart2Icon />
              City Chart
            </Button>
          </div>
        </header>

        {/* Search Bar */}
        <Card>
          <CardContent className="px-6">
            <div className="flex gap-4 items-center">
              <Input
                className="h-10"
                placeholder="please enter the city name..."
              />
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

        {/* status card */}
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

        {/* map */}
        <Card className="overflow-hidden rounded-3xl">
          <CardHeader>
            <div className="flex justify-between">
              <div>
                <CardTitle>Live Map</CardTitle>

                <CardDescription>
                  Available stations and vehicles
                </CardDescription>
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
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl w-[95vw] h-[85vh] overflow-hidden">
          <DialogHeader className="pt-6">
            <DialogTitle>📊 Berlin — Bikes per Station</DialogTitle>
            <DialogDescription>
              Number of available bikes at each station, sorted highest first.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  layout="vertical"
                  margin={{
                    left: -20,
                  }}
                >
                  <XAxis type="number" dataKey="desktop" hide />
                  <YAxis
                    dataKey="month"
                    type="category"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={5}
                  />
                </BarChart>
              </ChartContainer>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Home;
