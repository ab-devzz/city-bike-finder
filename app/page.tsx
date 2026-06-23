"use client";
import { useState } from "react";

//ui component
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

//component
import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import StatusCard from "@/components/StatusCard";
// import MapCard from "@/components/MapCard";

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

import dynamic from "next/dynamic";

// Dynamically import MapCard and disable SSR
const MapCard = dynamic(() => import("@/components/MapCard"), {
  ssr: false,
  loading: () => <div>Loading map...</div>,
});

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="h-full">
      <div className="h-full flex flex-col gap-4">
        {/* Nav Bar */}
        <Header />
        {/* Search Bar */}
        <Searchbar />
        {/* status card */}
        <StatusCard />
        {/* map */}
        <MapCard />
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
