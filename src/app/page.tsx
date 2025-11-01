"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProblemCard from "@/components/ProblemCard";
import { Button } from "@/components/ui/button";
import { Sprout, Droplets, BookOpen, LineChart, ShoppingCart, Building2, ArrowRight, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("service.cropAdvisory.title"),
      description: t("service.cropAdvisory.description"),
      icon: Sprout,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d9c51d68-d5fa-4654-a334-d3e8b4e86cc0/generated_images/farmer-examining-healthy-green-crop-plan-115628ca-20251101062341.jpg",
      href: "/crop-advisory",
    },
    {
      title: t("service.smartIrrigation.title"),
      description: t("service.smartIrrigation.description"),
      icon: Droplets,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d9c51d68-d5fa-4654-a334-d3e8b4e86cc0/generated_images/modern-smart-irrigation-system-in-agricu-6a85439a-20251101062341.jpg",
      href: "/irrigation",
    },
    {
      title: t("service.knowledgeHub.title"),
      description: t("service.knowledgeHub.description"),
      icon: BookOpen,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d9c51d68-d5fa-4654-a334-d3e8b4e86cc0/generated_images/open-books-and-digital-tablet-showing-ag-ddac311f-20251101062409.jpg",
      href: "/knowledge",
    },
    {
      title: t("service.farmManagement.title"),
      description: t("service.farmManagement.description"),
      icon: LineChart,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d9c51d68-d5fa-4654-a334-d3e8b4e86cc0/generated_images/modern-farm-management-dashboard-on-lapt-8c86c87f-20251101062409.jpg",
      href: "/farm-management",
    },
    {
      title: t("service.marketPrices.title"),
      description: t("service.marketPrices.description"),
      icon: ShoppingCart,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d9c51d68-d5fa-4654-a334-d3e8b4e86cc0/generated_images/fresh-vegetables-and-fruits-at-agricultu-7b0abf45-20251101062409.jpg",
      href: "/market",
    },
    {
      title: t("service.govSchemes.title"),
      description: t("service.govSchemes.description"),
      icon: Building2,
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d9c51d68-d5fa-4654-a334-d3e8b4e86cc0/generated_images/government-official-documents-and-agricu-3bc23def-20251101062409.jpg",
      href: "/schemes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d9c51d68-d5fa-4654-a334-d3e8b4e86cc0/generated_images/wide-panoramic-view-of-lush-green-agricu-ad0bbba8-20251101062341.jpg"
          alt="Agricultural farmland"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border-2 border-white/20">
              <Leaf className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t("home.hero.title")}
            <br />
            <span className="text-green-400">{t("home.hero.subtitle")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t("home.hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/crop-advisory">
              <Button size="lg" className="text-lg px-8 py-6">
                {t("home.hero.getStarted")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {t("home.hero.contactSupport")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t("home.services.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.services.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ProblemCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">50K+</p>
              <p className="text-lg opacity-90">{t("home.stats.farmers")}</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-lg opacity-90">{t("home.stats.crops")}</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">24/7</p>
              <p className="text-lg opacity-90">{t("home.stats.support")}</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100+</p>
              <p className="text-lg opacity-90">{t("home.stats.schemes")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t("home.cta.description")}
          </p>
          <Link href="/crop-advisory">
            <Button size="lg" className="text-lg px-12 py-6">
              {t("home.cta.button")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}