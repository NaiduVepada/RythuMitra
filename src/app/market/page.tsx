"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, TrendingUp, TrendingDown, Search, MapPin } from "lucide-react";

export default function MarketPage() {
  const marketPrices = [
    {
      crop: "Wheat",
      price: "₹2,150",
      unit: "per quintal",
      change: "+5.2%",
      trend: "up",
      location: "Delhi Mandi",
    },
    {
      crop: "Rice (Basmati)",
      price: "₹4,800",
      unit: "per quintal",
      change: "+2.8%",
      trend: "up",
      location: "Punjab Mandi",
    },
    {
      crop: "Cotton",
      price: "₹6,200",
      unit: "per quintal",
      change: "-1.5%",
      trend: "down",
      location: "Gujarat Mandi",
    },
    {
      crop: "Sugarcane",
      price: "₹340",
      unit: "per quintal",
      change: "+0.8%",
      trend: "up",
      location: "UP Mandi",
    },
    {
      crop: "Potato",
      price: "₹1,250",
      unit: "per quintal",
      change: "-3.2%",
      trend: "down",
      location: "West Bengal",
    },
    {
      crop: "Onion",
      price: "₹2,800",
      unit: "per quintal",
      change: "+8.5%",
      trend: "up",
      location: "Maharashtra",
    },
    {
      crop: "Tomato",
      price: "₹1,850",
      unit: "per quintal",
      change: "+12.3%",
      trend: "up",
      location: "Karnataka",
    },
    {
      crop: "Soybean",
      price: "₹4,500",
      unit: "per quintal",
      change: "-2.1%",
      trend: "down",
      location: "MP Mandi",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Market Prices"
        description="Real-time commodity prices from mandis across India to help you get the best rates"
        icon={ShoppingCart}
      />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Search and Filter */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search for crops..."
                    className="pl-10"
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Select location..."
                    className="pl-10"
                  />
                </div>
                <Button className="md:w-auto">Search Prices</Button>
              </div>
            </CardContent>
          </Card>

          {/* Market Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Trending Up
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">24</p>
                <p className="text-xs text-muted-foreground mt-1">Commodities increasing</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Trending Down
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-red-600">12</p>
                <p className="text-xs text-muted-foreground mt-1">Commodities decreasing</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Stable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">8</p>
                <p className="text-xs text-muted-foreground mt-1">No change in 24h</p>
              </CardContent>
            </Card>
          </div>

          {/* Price Table */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Market Rates</CardTitle>
              <CardDescription>Updated as of {new Date().toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {marketPrices.map((item, index) => (
                  <Card key={index} className="border-2 hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{item.crop}</h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </p>
                        </div>
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded ${
                            item.trend === "up"
                              ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"
                              : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400"
                          }`}
                        >
                          {item.trend === "up" ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          <span className="text-sm font-semibold">{item.change}</span>
                        </div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-3xl font-bold text-primary">{item.price}</p>
                          <p className="text-sm text-muted-foreground">{item.unit}</p>
                        </div>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Tips */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">💡 Selling Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Check prices from multiple mandis before selling your produce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Early morning markets often offer better rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Grade your produce properly to get premium prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Consider e-NAM registration for access to online markets</span>
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
