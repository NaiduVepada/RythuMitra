import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

const SCHEMES: Record<string, { title: string; subtitle: string; description: string; eligibility: string; benefit: string }> = {
  "pm-kisan": {
    title: "PM-KISAN",
    subtitle: "Pradhan Mantri Kisan Samman Nidhi",
    description: "Direct income support of ₹6,000 per year to farmer families in three equal installments.",
    eligibility: "All landholding farmer families",
    benefit: "₹6,000/year",
  },
  "kcc": {
    title: "KCC",
    subtitle: "Kisan Credit Card",
    description: "Provides adequate and timely credit support for agriculture needs at concessional interest rates.",
    eligibility: "Individual farmers, tenant farmers, SHGs",
    benefit: "Up to ₹3 lakhs at 4% interest",
  },
};

export default function SchemePage({ params }: { params: { slug: string } }) {
  const scheme = SCHEMES[params.slug];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title={scheme?.title || "Scheme"} description={scheme?.subtitle || "Scheme details"} icon={Building2} />

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {scheme ? (
            <Card>
              <CardHeader>
                <CardTitle>{scheme.title}</CardTitle>
                <CardDescription>{scheme.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{scheme.description}</p>
                <div className="mb-4">
                  <p className="font-medium">Eligibility</p>
                  <p className="text-sm text-muted-foreground">{scheme.eligibility}</p>
                </div>
                <div className="mb-4">
                  <p className="font-medium">Benefit</p>
                  <p className="text-sm text-green-600">{scheme.benefit}</p>
                </div>

                <div className="flex gap-3">
                  <Button asChild>
                    <a href={`https://gov.example/apply/${params.slug}`} target="_blank" rel="noreferrer">Apply on Official Site</a>
                  </Button>
                  <Button variant="outline">Contact Support</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>Scheme not found.</CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
