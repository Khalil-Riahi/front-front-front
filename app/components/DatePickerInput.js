"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";

export default function DatePickerInput() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Date de début de l'abonnement
      </label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !selectedDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selectedDate ? format(selectedDate, "PPP") : <span>Choisissez une date</span>}
          </Button>
        </PopoverTrigger>

        <PopoverContent align="start" className="w-auto p-0 bg-white">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
