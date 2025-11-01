"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Search, ExternalLink, IndianRupee, Users, Tractor } from "lucide-react";

export default function SchemesPage() {
  const schemes = [
    {
      title: "PM-KISAN",
      subtitle: "Pradhan Mantri Kisan Samman Nidhi",
      description: "Direct income support of ₹6,000 per year to farmer families in three equal installments.",
      category: "Financial Support",
      icon: IndianRupee,
      eligibility: "All landholding farmer families",
      benefit: "₹6,000/year",
    },
    {
      title: "KCC",
      subtitle: "Kisan Credit Card",
      description: "Provides adequate and timely credit support for agriculture needs at concessional interest rates.",
      category: "Credit/Loan",
      icon: IndianRupee,
      eligibility: "Individual farmers, tenant farmers, SHGs",
      benefit: "Up to ₹3 lakhs at 4% interest",
    },
    {
      title: "PMFBY",
      subtitle: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme providing financial support to farmers in case of crop failure.",
      category: "Insurance",
      icon: Users,
      eligibility: "All farmers growing notified crops",
      benefit: "Premium subsidy up to 90%",
    },
    {
      title: "SMAM",
      subtitle: "Sub-Mission on Agricultural Mechanization",
      description: "Financial assistance for purchase of agricultural machinery and equipment.",
      category: "Mechanization",
      icon: Tractor,
      eligibility: "Individual farmers, cooperatives, FPOs",
      benefit: "40-50% subsidy on equipment",
    },
    {
      title: "Paramparagat Krishi Vikas Yojana",
      subtitle: "Organic Farming",
      description: "Promotes organic farming and organic value chain development through cluster approach.",
      category: "Organic Farming",
      icon: Users,
      eligibility: "Farmers in clusters of 50 acres",
      benefit: "₹50,000/hectare for 3 years",
    },
    {
      title: "National Horticulture Mission",
      subtitle: "NHM",
      description: "Support for holistic growth of horticulture sector covering fruits, vegetables, and flowers.",
      category: "Horticulture",
      icon: Users,
      eligibility: "Individual farmers, FPOs",
      benefit: "Varies by component",
    },
  ];

  const categories = [
    "All Schemes",
    "Financial Support",
    "Credit/Loan",
    "Insurance",
    "Mechanization",
    "Organic Farming",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Government Schemes"
        description="Explore subsidies, loans, and support programs available for farmers across India"
        icon={Building2}
      />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Search */}
          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search schemes by name, category, or benefit..."
                  className="pl-10 h-12"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All Schemes" ? "default" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Schemes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">100+</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Financial Aid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">45</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Subsidy Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">32</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Insurance Schemes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-orange-600">8</p>
              </CardContent>
            </Card>
          </div>

          {/* Schemes List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Available Schemes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {schemes.map((scheme, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <scheme.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {scheme.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{scheme.title}</CardTitle>
                    <CardDescription className="text-sm font-medium">
                      {scheme.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{scheme.description}</p>
                    
                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Eligibility:</span>
                        <span className="text-sm text-muted-foreground">{scheme.eligibility}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Benefit:</span>
                        <span className="text-sm font-semibold text-green-600">{scheme.benefit}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1">
                        Apply Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Card */}
          <Card className="bg-gradient-to-r from-primary to-accent text-white">
            <CardHeader>
              <CardTitle>Need Help Applying?</CardTitle>
              <CardDescription className="text-white/90">
                Our support team is here to assist you with scheme applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Contact Support
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Download Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
