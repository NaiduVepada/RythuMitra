"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession, authClient } from "@/lib/auth-client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import LanguageSelector from "@/components/LanguageSelector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending, refetch } = useSession();
  const { t } = useLanguage();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/crop-advisory", label: t("nav.cropAdvisory") },
    { href: "/irrigation", label: t("nav.smartIrrigation") },
    { href: "/knowledge", label: t("nav.knowledgeHub") },
    { href: "/farm-management", label: t("nav.farmManagement") },
    { href: "/market", label: t("nav.marketPrices") },
    { href: "/schemes", label: t("nav.govSchemes") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const handleSignOut = async () => {
    const token = localStorage.getItem("bearer_token");

    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    });

    if (error?.code) {
      toast.error(error.code);
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      router.push("/");
      toast.success("Logged out successfully");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary rounded-full p-2 group-hover:scale-110 transition-transform">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              Farmers Support Portal
            </span>
            <span className="text-xl font-bold text-foreground sm:hidden">
              FSP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="ml-4 flex items-center gap-2">
              <LanguageSelector />
              
              {!isPending && (
                <>
                  {session?.user ? (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground hidden xl:inline">
                        {session.user.name}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSignOut}
                        className="gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span className="hidden sm:inline">{t("nav.logout")}</span>
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Link href="/login">
                        <Button variant="ghost" size="sm">
                          {t("nav.login")}
                        </Button>
                      </Link>
                      <Link href="/register">
                        <Button size="sm">{t("nav.register")}</Button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 pb-2 border-t border-border mt-2">
              {!isPending && (
                <>
                  {session?.user ? (
                    <div className="space-y-2">
                      <div className="px-3 py-2 text-sm text-muted-foreground">
                        {session.user.name}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          handleSignOut();
                          setIsOpen(false);
                        }}
                        className="w-full gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        {t("nav.logout")}
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" size="sm" className="w-full">
                          {t("nav.login")}
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button size="sm" className="w-full">
                          {t("nav.register")}
                        </Button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}