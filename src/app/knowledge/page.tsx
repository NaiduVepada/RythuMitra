"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Video, FileText, Download, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function KnowledgeHubPage() {
  const categories = [
    { name: "Crop Management", count: 45 },
    { name: "Pest Control", count: 32 },
    { name: "Soil Health", count: 28 },
    { name: "Irrigation", count: 24 },
    { name: "Organic Farming", count: 38 },
    { name: "Market Trends", count: 19 },
  ];

  const articles = [
    {
      title: "Sustainable Farming Practices for Better Yields",
      category: "Crop Management",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
    },
    {
      title: "Natural Pest Control Methods",
      category: "Pest Control",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400",
    },
    {
      title: "Improving Soil Fertility Organically",
      category: "Soil Health",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400",
    },
    {
      title: "Water Conservation Techniques",
      category: "Irrigation",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400",
    },
    {
      title: "Transition to Organic Farming",
      category: "Organic Farming",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400",
    },
    {
      title: "Understanding Market Prices",
      category: "Market Trends",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400",
    },
  ];

  const videos = [
    {
      title: "Drip Irrigation Installation Guide",
      duration: "15:30",
      views: "12K",
    },
    {
      title: "Organic Fertilizer Preparation",
      duration: "10:45",
      views: "8.5K",
    },
    {
      title: "Crop Rotation Benefits",
      duration: "8:20",
      views: "15K",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Knowledge Hub"
        description="Learn from expert guides, articles, and video tutorials on modern farming practices"
        icon={BookOpen}
      />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Search Bar */}
          <Card>
            <CardContent className="pt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for farming topics, guides, and tutorials..."
                  className="pl-10 h-12"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Browse by Category</CardTitle>
              <CardDescription>Explore knowledge organized by farming topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="outline"
                    className="h-auto flex flex-col items-center gap-2 p-4"
                  >
                    <span className="font-semibold">{category.name}</span>
                    <span className="text-xs text-muted-foreground">{category.count} articles</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Featured Articles */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Tutorials */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Video Tutorials
              </CardTitle>
              <CardDescription>Step-by-step video guides for practical farming</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Video className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{video.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {video.duration} • {video.views} views
                        </p>
                      </div>
                    </div>
                    <Button size="sm">
                      Watch
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Downloadable Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                Downloadable Resources
              </CardTitle>
              <CardDescription>PDF guides and reference materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto py-4">
                  <FileText className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <p className="font-semibold">Crop Calendar 2024</p>
                    <p className="text-xs text-muted-foreground">PDF • 2.4 MB</p>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4">
                  <FileText className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <p className="font-semibold">Fertilizer Application Guide</p>
                    <p className="text-xs text-muted-foreground">PDF • 1.8 MB</p>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4">
                  <FileText className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <p className="font-semibold">Pest Identification Chart</p>
                    <p className="text-xs text-muted-foreground">PDF • 3.2 MB</p>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-4">
                  <FileText className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <p className="font-semibold">Organic Farming Manual</p>
                    <p className="text-xs text-muted-foreground">PDF • 5.1 MB</p>
                  </div>
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
