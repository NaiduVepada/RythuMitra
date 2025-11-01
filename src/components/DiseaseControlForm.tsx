"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Upload, AlertCircle } from "lucide-react";

export default function DiseaseControlForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setDiagnosis({
        disease: "Leaf Blight (Fungal Infection)",
        causativeAgent: "Alternaria alternata",
        severity: "Moderate to High",
        treatments: [
          "Apply copper-based fungicide (2g per liter) immediately",
          "Use Mancozeb 75% WP @ 2.5kg per hectare",
          "Spray at 7-10 day intervals for 3 applications",
          "Remove and destroy infected plant parts",
          "Improve air circulation between plants"
        ],
        culturalPractices: [
          "Avoid overhead irrigation; use drip irrigation",
          "Water in the morning to allow foliage to dry",
          "Maintain proper plant spacing",
          "Practice crop rotation with non-host crops",
          "Apply balanced nutrition to boost plant immunity"
        ],
        organicAlternatives: [
          "Neem oil spray (5ml per liter) weekly",
          "Trichoderma viride bio-fungicide application",
          "Baking soda solution (1 tablespoon per liter)"
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          Disease Diagnosis & Control
        </CardTitle>
        <CardDescription>
          Early detection and management of plant diseases for healthy crop growth
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="crop-name">Crop Name</Label>
              <Select required>
                <SelectTrigger id="crop-name">
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="tomato">Tomato</SelectItem>
                  <SelectItem value="potato">Potato</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="maize">Maize</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="affected-part">Affected Plant Part</Label>
              <Select required>
                <SelectTrigger id="affected-part">
                  <SelectValue placeholder="Select part" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leaves">Leaves</SelectItem>
                  <SelectItem value="stem">Stem</SelectItem>
                  <SelectItem value="roots">Roots</SelectItem>
                  <SelectItem value="fruits">Fruits/Pods</SelectItem>
                  <SelectItem value="flowers">Flowers</SelectItem>
                  <SelectItem value="whole">Whole Plant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="symptom-type">Symptom Type</Label>
              <Select required>
                <SelectTrigger id="symptom-type">
                  <SelectValue placeholder="Select symptom" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spots">Spots/Lesions</SelectItem>
                  <SelectItem value="wilting">Wilting</SelectItem>
                  <SelectItem value="yellowing">Yellowing/Chlorosis</SelectItem>
                  <SelectItem value="rot">Rot/Decay</SelectItem>
                  <SelectItem value="mold">Mold/Fungal Growth</SelectItem>
                  <SelectItem value="stunting">Stunting</SelectItem>
                  <SelectItem value="discoloration">Discoloration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="spread-rate">Spread Rate</Label>
              <Select required>
                <SelectTrigger id="spread-rate">
                  <SelectValue placeholder="Select rate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slow">Slow (Few plants)</SelectItem>
                  <SelectItem value="moderate">Moderate (Spreading gradually)</SelectItem>
                  <SelectItem value="rapid">Rapid (Spreading quickly)</SelectItem>
                  <SelectItem value="epidemic">Epidemic (Widespread)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weather-condition">Recent Weather</Label>
              <Select required>
                <SelectTrigger id="weather-condition">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="humid">Humid/Rainy</SelectItem>
                  <SelectItem value="dry">Dry/Hot</SelectItem>
                  <SelectItem value="cool">Cool/Cloudy</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration of Symptoms</Label>
              <Select required>
                <SelectTrigger id="duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1-3 days</SelectItem>
                  <SelectItem value="4-7">4-7 days</SelectItem>
                  <SelectItem value="1-2">1-2 weeks</SelectItem>
                  <SelectItem value="2+">More than 2 weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="disease-description">Detailed Description</Label>
            <Textarea
              id="disease-description"
              placeholder="Describe the symptoms in detail (color, pattern, location, progression...)"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="disease-image" className="flex items-center gap-2">
              <Upload className="h-4 w-4 text-muted-foreground" />
              Upload Disease Photo (Optional)
            </Label>
            <Input
              id="disease-image"
              type="file"
              accept="image/*"
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground">
              Clear photos of affected parts help in accurate diagnosis
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Diagnosing..." : "Get Disease Control Recommendations"}
          </Button>
        </form>

        {diagnosis && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-semibold text-destructive mb-1">
                    Diagnosed: {diagnosis.disease}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Causative Agent: <span className="font-medium">{diagnosis.causativeAgent}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Severity: <span className="font-medium">{diagnosis.severity}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">💊 Chemical Treatment</h4>
              <ul className="space-y-2">
                {diagnosis.treatments.map((treatment: string, index: number) => (
                  <li key={index} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <h4 className="font-semibold text-accent-foreground mb-3">🌱 Cultural Practices</h4>
              <ul className="space-y-2">
                {diagnosis.culturalPractices.map((practice: string, index: number) => (
                  <li key={index} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-accent-foreground mt-1">•</span>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-secondary/50 border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">🍃 Organic Alternatives</h4>
              <ul className="space-y-2">
                {diagnosis.organicAlternatives.map((alternative: string, index: number) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{alternative}</span>
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
