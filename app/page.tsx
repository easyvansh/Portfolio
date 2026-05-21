import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Signal from "@/components/Signal";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main
      id="home"
      className="relative mx-auto flex min-h-screen flex-col items-center overflow-hidden bg-eerie_black-100 px-4 text-white sm:px-6 lg:px-10"
    >
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Signal />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
