import Timeline from "@/components/Timeline";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <header className="hero-gradient py-20 md:py-28 text-center relative overflow-hidden">
        {/* Decorative texture overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-full p-4 border border-primary-foreground/20">
              <BookOpen className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Timeline Literario
          </h1>
          <p className="text-primary-foreground/75 text-lg md:text-xl font-body max-w-xl mx-auto leading-relaxed">
            Un recorrido por los grandes períodos de la literatura española,
            desde la Edad Media hasta el Romanticismo
          </p>
          <div className="mt-8 w-16 h-[2px] bg-accent mx-auto rounded-full" />
        </div>
      </header>

      {/* Timeline */}
      <Timeline />

      {/* Footer */}
      <footer className="text-center py-12 border-t border-border">
        <p className="text-muted-foreground text-sm font-body">
          Timeline Literario — Trabajo de Literatura
        </p>
      </footer>
    </div>
  );
};

export default Index;
