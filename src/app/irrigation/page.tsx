"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import WeatherWidget from "@/components/WeatherWidget";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { Droplets, Calendar, Clock, AlertCircle, CheckCircle } from "lucide-react";

export default function SmartIrrigationPage() {
  const [irrigationSchedule, setIrrigationSchedule] = useState([
    {
      day: "Monday",
      time: "6:00 AM",
      duration: "45 mins",
      zone: "Field A",
      status: "completed",
    },
    {
      day: "Tuesday",
      time: "6:00 AM",
      duration: "30 mins",
      zone: "Field B",
      status: "completed",
    },
    {
      day: "Wednesday",
      time: "6:00 AM",
      duration: "60 mins",
      zone: "Field A",
      status: "scheduled",
    },
    {
      day: "Thursday",
      time: "6:00 AM",
      duration: "45 mins",
      zone: "Field C",
      status: "scheduled",
    },
  ]);

  const [showAdjust, setShowAdjust] = useState(false);
  const [form, setForm] = useState({ day: "", time: "", duration: "", zone: "" });

  async function submitSchedule(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/irrigation/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to save schedule");
      const newEntry = await res.json();
      setIrrigationSchedule((s) => [newEntry, ...s]);
      setShowAdjust(false);
      setForm({ day: "", time: "", duration: "", zone: "" });
      toast.success("Schedule updated");
    } catch (err) {
      console.error(err);
      toast.error("Could not update schedule");
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Smart Irrigation"
        description="Optimize water usage with weather-based recommendations and intelligent scheduling"
        icon={Droplets}
      />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Weather Widget */}
          <WeatherWidget />

          {/* Irrigation Tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-300">Water Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">2,450 L</p>
                <p className="text-sm text-muted-foreground mt-2">This month</p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-300">Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-600 dark:text-green-400">94%</p>
                <p className="text-sm text-muted-foreground mt-2">Water efficiency</p>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="text-orange-700 dark:text-orange-300">Cost Saved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-orange-600 dark:text-orange-400">₹3,200</p>
                <p className="text-sm text-muted-foreground mt-2">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Irrigation Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Irrigation Schedule
              </CardTitle>
              <CardDescription>
                Your automated watering schedule based on crop needs and weather
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {irrigationSchedule.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{schedule.day}</p>
                        <p className="text-sm text-muted-foreground">
                          {schedule.time} • {schedule.duration} • {schedule.zone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {schedule.status === "completed" ? (
                        <span className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400">
                          <CheckCircle className="h-4 w-4" />
                          Completed
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400">
                          <AlertCircle className="h-4 w-4" />
                          Scheduled
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6" onClick={() => setShowAdjust((v) => !v)}>Adjust Schedule</Button>
              {showAdjust && (
                <form onSubmit={submitSchedule} className="mt-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="day">Day</Label>
                      <Input id="day" value={form.day} onChange={(e) => setForm({ ...form, day: e.target.value })} required />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Input id="duration" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} required />
                    </div>
                    <div>
                      <Label htmlFor="zone">Zone</Label>
                      <Input id="zone" value={form.zone} onChange={(e) => setForm({ ...form, zone: e.target.value })} required />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">Save</Button>
                    <Button variant="outline" onClick={() => setShowAdjust(false)}>Cancel</Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>Irrigation Best Practices</CardTitle>
              <CardDescription>Tips for optimal water management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Water Early Morning or Late Evening</p>
                    <p className="text-sm text-muted-foreground">
                      Reduces evaporation and ensures better water absorption
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Use Drip Irrigation</p>
                    <p className="text-sm text-muted-foreground">
                      Save up to 60% water compared to traditional methods
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Monitor Soil Moisture</p>
                    <p className="text-sm text-muted-foreground">
                      Install sensors to prevent over or under watering
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Maintain Equipment Regularly</p>
                    <p className="text-sm text-muted-foreground">
                      Check for leaks and blockages weekly
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
