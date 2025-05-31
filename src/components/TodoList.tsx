"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { format } from "date-fns";

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>

            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" checked />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" checked />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" checked />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" checked />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" checked />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" checked />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" checked />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="1" checked />
                            <label htmlFor="1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </>
    );
}

export { TodoList }
