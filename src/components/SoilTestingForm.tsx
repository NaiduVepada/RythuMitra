"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Beaker, MapPin, TrendingUp, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SoilTestingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setReport({
        soilHealth: "Good",
        ph: 6.8,
        nitrogen: "Medium",
        phosphorus: "Low",
        potassium: "High",
        organicMatter: "4.2%",
        recommendations: [
          "Apply 20kg of DAP (Di-Ammonium Phosphate) per hectare to increase phosphorus",
          "Maintain current nitrogen levels with organic manure",
          "No additional potassium fertilizer needed this season",
          "Continue adding organic matter to maintain soil structure",
          "pH level is optimal for most crops"
        ],
        fertilizerPlan: {
          basal: "150 kg NPK (12:32:16) per hectare at planting",
          topDressing1: "100 kg Urea per hectare at 30 days after planting",
          topDressing2: "50 kg Urea per hectare at flowering stage"
        },
        suitableCrops: [
          "Wheat (highly suitable)",
          "Maize (highly suitable)",
          "Vegetables (suitable with minor amendments)",
          "Pulses (suitable)"
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Beaker className="h-5 w-5 text-primary" />
          Soil Health Analysis
        </CardTitle>
        <CardDescription>
          Get detailed soil health report and fertilizer recommendations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-4">
          <Info className="h-4 w-4" />
          <AlertTitle>Pro Tip</AlertTitle>
          <AlertDescription>
            For accurate results, collect soil samples from 5-6 locations in your field at 6-8 inch depth, mix them, and use for testing.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="field-location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Field Location
              </Label>
              <Input
                id="field-location"
                placeholder="Enter location/village"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="field-size">Field Size (Hectares)</Label>
              <Input
                id="field-size"
                type="number"
                placeholder="Enter field size"
                min="0.1"
                step="0.1"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="current-soil">Current Soil Type</Label>
              <Select required>
                <SelectTrigger id="current-soil">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clay">Clay (Heavy)</SelectItem>
                  <SelectItem value="loamy">Loamy (Balanced)</SelectItem>
                  <SelectItem value="sandy">Sandy (Light)</SelectItem>
                  <SelectItem value="silt">Silt</SelectItem>
                  <SelectItem value="black">Black Soil</SelectItem>
                  <SelectItem value="red">Red Soil</SelectItem>
                  <SelectItem value="alluvial">Alluvial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="test-type">Test Type</Label>
              <Select required>
                <SelectTrigger id="test-type">
                  <SelectValue placeholder="Select test type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic (N, P, K)</SelectItem>
                  <SelectItem value="detailed">Detailed (N, P, K + pH + Micronutrients)</SelectItem>
                  <SelectItem value="organic">Organic Matter Analysis</SelectItem>
                  <SelectItem value="comprehensive">Comprehensive (All Parameters)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="intended-crop">Intended Crop</Label>
              <Select required>
                <SelectTrigger id="intended-crop">
                  <SelectValue placeholder="Select crop to plant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="maize">Maize</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="pulses">Pulses</SelectItem>
                  <SelectItem value="undecided">Not Decided Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="last-fertilizer">Last Fertilizer Application</Label>
              <Select required>
                <SelectTrigger id="last-fertilizer">
                  <SelectValue placeholder="Select timing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Within 1 month</SelectItem>
                  <SelectItem value="moderate">1-3 months ago</SelectItem>
                  <SelectItem value="old">3-6 months ago</SelectItem>
                  <SelectItem value="long">More than 6 months</SelectItem>
                  <SelectItem value="never">Never applied</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="soil-issues">Known Soil Issues (Optional)</Label>
            <Textarea
              id="soil-issues"
              placeholder="Describe any issues like poor drainage, salinity, hardpan, etc."
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ph-value">Soil pH (if known)</Label>
              <Input
                id="ph-value"
                type="number"
                placeholder="e.g., 6.5"
                min="3"
                max="10"
                step="0.1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ec-value">EC Value (if known)</Label>
              <Input
                id="ec-value"
                type="number"
                placeholder="e.g., 0.4"
                min="0"
                step="0.01"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organic-carbon">Organic Carbon % (if known)</Label>
              <Input
                id="organic-carbon"
                type="number"
                placeholder="e.g., 0.5"
                min="0"
                step="0.1"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Analyzing Soil..." : "Generate Soil Health Report"}
          </Button>
        </form>

        {report && (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
                <p className="text-xs text-muted-foreground mb-1">Soil pH</p>
                <p className="text-2xl font-bold text-primary">{report.ph}</p>
              </div>
              <div className="p-4 bg-secondary border border-border rounded-lg text-center">
                <p className="text-xs text-muted-foreground mb-1">Nitrogen</p>
                <p className="text-2xl font-bold">{report.nitrogen}</p>
              </div>
              <div className="p-4 bg-secondary border border-border rounded-lg text-center">
                <p className="text-xs text-muted-foreground mb-1">Phosphorus</p>
                <p className="text-2xl font-bold">{report.phosphorus}</p>
              </div>
              <div className="p-4 bg-secondary border border-border rounded-lg text-center">
                <p className="text-xs text-muted-foreground mb-1">Potassium</p>
                <p className="text-2xl font-bold">{report.potassium}</p>
              </div>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-primary">Soil Health Status: {report.soilHealth}</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Organic Matter: <span className="font-medium text-foreground">{report.organicMatter}</span>
              </p>
            </div>

            <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-3">🌾 Fertilizer Recommendations</h4>
              <ul className="space-y-2">
                {report.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-accent-foreground mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-secondary/50 border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">📅 Fertilizer Application Plan</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Basal Dose:</span>
                  <span className="text-sm font-medium">{report.fertilizerPlan.basal}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Top Dressing 1:</span>
                  <span className="text-sm font-medium">{report.fertilizerPlan.topDressing1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Top Dressing 2:</span>
                  <span className="text-sm font-medium">{report.fertilizerPlan.topDressing2}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">✅ Suitable Crops for Your Soil</h4>
              <ul className="space-y-1">
                {report.suitableCrops.map((crop: string, index: number) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{crop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
