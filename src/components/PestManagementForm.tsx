"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Bug, Upload, AlertTriangle } from "lucide-react";

export default function PestManagementForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setDiagnosis({
        pest: "Aphids (Green Plant Lice)",
        severity: "Moderate",
        treatments: [
          "Apply neem oil spray (5ml per liter of water) every 3-4 days",
          "Use insecticidal soap for immediate control",
          "Introduce natural predators like ladybugs",
          "Remove heavily infested plant parts",
          "Maintain proper field hygiene"
        ],
        preventiveMeasures: [
          "Monitor crops regularly for early detection",
          "Avoid excessive nitrogen fertilization",
          "Use reflective mulches to repel aphids",
          "Plant trap crops like mustard around main crops"
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bug className="h-5 w-5 text-primary" />
          Pest Identification & Management
        </CardTitle>
        <CardDescription>
          Get expert diagnosis and treatment recommendations for crop pests
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="crop-type">Crop Type</Label>
              <Select required>
                <SelectTrigger id="crop-type">
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="growth-stage">Growth Stage</Label>
              <Select required>
                <SelectTrigger id="growth-stage">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seedling">Seedling</SelectItem>
                  <SelectItem value="vegetative">Vegetative</SelectItem>
                  <SelectItem value="flowering">Flowering</SelectItem>
                  <SelectItem value="fruiting">Fruiting/Grain Filling</SelectItem>
                  <SelectItem value="maturity">Maturity</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pest-type">Suspected Pest Type</Label>
              <Select required>
                <SelectTrigger id="pest-type">
                  <SelectValue placeholder="Select pest type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aphids">Aphids</SelectItem>
                  <SelectItem value="caterpillars">Caterpillars</SelectItem>
                  <SelectItem value="whiteflies">Whiteflies</SelectItem>
                  <SelectItem value="beetles">Beetles</SelectItem>
                  <SelectItem value="mites">Mites</SelectItem>
                  <SelectItem value="termites">Termites</SelectItem>
                  <SelectItem value="unknown">Unknown/Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="infestation-level">Infestation Level</Label>
              <Select required>
                <SelectTrigger id="infestation-level">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (Few plants affected)</SelectItem>
                  <SelectItem value="moderate">Moderate (10-30% affected)</SelectItem>
                  <SelectItem value="high">High (30-60% affected)</SelectItem>
                  <SelectItem value="severe">Severe (60%+ affected)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="symptoms">Observed Symptoms</Label>
            <Textarea
              id="symptoms"
              placeholder="Describe what you're seeing (e.g., holes in leaves, discoloration, sticky residue, wilting...)"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pest-image" className="flex items-center gap-2">
              <Upload className="h-4 w-4 text-muted-foreground" />
              Upload Pest/Damage Photo (Optional)
            </Label>
            <Input
              id="pest-image"
              type="file"
              accept="image/*"
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground">
              Clear photos help in accurate identification
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Analyzing..." : "Get Pest Management Recommendations"}
          </Button>
        </form>

        {diagnosis && (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <h4 className="font-semibold text-destructive mb-1">
                    Identified: {diagnosis.pest}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Severity: <span className="font-medium">{diagnosis.severity}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <h4 className="font-semibold text-primary mb-3">🎯 Treatment Recommendations</h4>
              <ul className="space-y-2">
                {diagnosis.treatments.map((treatment: string, index: number) => (
                  <li key={index} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-secondary/50 border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">🛡️ Preventive Measures</h4>
              <ul className="space-y-2">
                {diagnosis.preventiveMeasures.map((measure: string, index: number) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{measure}</span>
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
