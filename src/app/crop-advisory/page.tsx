"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CropAdvisorForm from "@/components/CropAdvisorForm";
import PestManagementForm from "@/components/PestManagementForm";
import DiseaseControlForm from "@/components/DiseaseControlForm";
import SoilTestingForm from "@/components/SoilTestingForm";
import { DiseasePrediction, PestPrediction } from "@/components/PredictionComponents";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Bug, Leaf, Beaker } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CropAdvisoryPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("crop");

  const advisoryCards = [
    {
      title: "Crop Selection",
      description: "Get personalized crop recommendations based on soil, climate, and season.",
      icon: Sprout,
      value: "crop",
      component: CropAdvisorForm
    },
    {
      title: "Pest Detection",
      description: "Upload images to identify pests and get treatment recommendations.",
      icon: Bug,
      value: "pest",
      component: PestPrediction
    },
    {
      title: "Disease Detection",
      description: "Upload plant images for automated disease detection and treatment advice.",
      icon: Leaf,
      value: "disease",
    },
    {
      title: "Soil Testing",
      description: "Understand soil health and get fertilizer recommendations.",
      icon: Beaker,
      value: "soil",
    },
  ];

  const tips = [
    {
      title: "Rabi Season Crops",
      content: "Best time to plant wheat, barley, and mustard. Ensure proper irrigation schedule.",
    },
    {
      title: "Organic Pest Control",
      content: "Use neem oil spray for natural pest control without harmful chemicals.",
    },
    {
      title: "Crop Rotation",
      content: "Rotate legumes with cereals to improve soil nitrogen naturally.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Crop & Soil Advisory"
        description="Get expert recommendations for crop selection, soil health, and pest management"
        icon={Sprout}
      />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Advisory Services with Tabs */}
          <Tabs defaultValue="crop" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              {advisoryCards.map((card) => (
                <TabsTrigger
                  key={card.value}
                  value={card.value}
                  className="flex flex-col items-center gap-2 py-4"
                >
                  <card.icon className="h-5 w-5" />
                  <span className="text-xs lg:text-sm">{card.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-6">
              <TabsContent value="crop">
                <CropAdvisorForm />
              </TabsContent>

              <TabsContent value="pest">
                <PestManagementForm />
              </TabsContent>

              <TabsContent value="disease">
                <DiseaseControlForm />
              </TabsContent>

              <TabsContent value="soil">
                <SoilTestingForm />
              </TabsContent>
            </div>
          </Tabs>

          {/* Seasonal Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Seasonal Farming Tips</CardTitle>
              <CardDescription>Expert advice for current season</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                  <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground">{tip.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}