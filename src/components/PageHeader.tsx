import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export default function PageHeader({ title, description, icon: Icon }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-accent py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          {Icon && (
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Icon className="h-8 w-8 text-white" />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        </div>
        <p className="text-lg text-white/90 max-w-3xl">{description}</p>
      </div>
    </div>
  );
}
