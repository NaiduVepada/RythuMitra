import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BookOpen } from "lucide-react";

type Article = {
  title: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
};

const ARTICLES: Record<string, Article> = {
  "sustainable-farming-practices-for-better-yields": {
    title: "Sustainable Farming Practices for Better Yields",
    category: "Crop Management",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200",
    content:
      "This guide covers crop rotation, cover crops, soil health, and integrated pest management to increase long-term yields.",
  },
  "natural-pest-control-methods": {
    title: "Natural Pest Control Methods",
    category: "Pest Control",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200",
    content:
      "Overview of biological controls, trap cropping, and companion planting to reduce dependency on chemical pesticides.",
  },
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const article = ARTICLES[slug];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title={article?.title || "Article"} description="Knowledge Hub" icon={BookOpen} />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {article ? (
            <Card>
              <div className="relative h-64">
                <Image src={article.image} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{article.readTime} • {article.category}</p>
                <p>{article.content}</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <p>Article not found.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
