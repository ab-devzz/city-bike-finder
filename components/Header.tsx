import { BarChart2Icon } from "lucide-react";

// component
import { Button } from "@/components/ui/button";
import ThemeButton from "@/components/ThemeButton";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold tracking-tight">City Bike Explorer</h1>
        <p className="text-muted-foreground">Find bikes and scooters nearby</p>
      </div>

      <div className="flex gap-3">
        <ThemeButton />
        <Button variant="outline" onClick={() => setOpen(true)}>
          <BarChart2Icon />
          City Chart
        </Button>
      </div>
    </header>
  );
};

export default Header;
