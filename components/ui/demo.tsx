import { SparklesText } from "@/components/ui/sparkles-text"
import { GlowCard } from "@/components/ui/spotlight-card";

export function SparklesTextDemo() {
  return <SparklesText text="Magic UI" />;
}

export function Default() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard>
        <div className="text-white text-center">White Lotus Card Content</div>
      </GlowCard>
      <GlowCard>
        <div className="text-white text-center">Blue Lilly Card Content</div>
      </GlowCard>
      <GlowCard>
        <div className="text-white text-center">Rose Gold Card Content</div>
      </GlowCard>
    </div>
  );
}
