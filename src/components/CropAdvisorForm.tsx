"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Sprout, MapPin, Calendar } from "lucide-react";

export default function CropAdvisorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRecommendation(
        "Based on your inputs, we recommend planting wheat this season. The soil type and climate conditions in your region are favorable for wheat cultivation. Expected yield: 4-5 tons per hectare. Best planting time: October-November."
      );
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sprout className="h-5 w-5 text-primary" />
          Crop Advisory System
        </CardTitle>
        <CardDescription>
          Get personalized crop recommendations based on your farm conditions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Location
              </Label>
              <Input
                id="location"
                placeholder="Enter your location"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="soil-type">Soil Type</Label>
              <Select required>
                <SelectTrigger id="soil-type">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clay">Clay</SelectItem>
                  <SelectItem value="loamy">Loamy</SelectItem>
                  <SelectItem value="sandy">Sandy</SelectItem>
                  <SelectItem value="silt">Silt</SelectItem>
                  <SelectItem value="peaty">Peaty</SelectItem>
                  <SelectItem value="chalky">Chalky</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="farm-size">Farm Size (Hectares)</Label>
              <Input
                id="farm-size"
                type="number"
                placeholder="Enter farm size"
                min="0.1"
                step="0.1"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="season" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                Season
              </Label>
              <Select required>
                <SelectTrigger id="season">
                  <SelectValue placeholder="Select season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kharif">Kharif (Monsoon)</SelectItem>
                  <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                  <SelectItem value="zaid">Zaid (Summer)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="irrigation">Irrigation Available</Label>
              <Select required>
                <SelectTrigger id="irrigation">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes - Regular</SelectItem>
                  <SelectItem value="limited">Limited</SelectItem>
                  <SelectItem value="no">Rain-fed Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget (₹)</Label>
              <Input
                id="budget"
                type="number"
                placeholder="Investment budget"
                min="1000"
                step="1000"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="previous-crops">Previous Crops (Optional)</Label>
            <Textarea
              id="previous-crops"
              placeholder="List crops grown in previous seasons..."
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Get Crop Recommendations"}
          </Button>
        </form>

        {recommendation && (
          <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">📊 Recommendation</h4>
            <p className="text-sm text-foreground">{recommendation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
