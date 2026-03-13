import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">
          Project Compilation
        </h1>
        <p className="text-neutral-400 mb-10">Web Development • 2026</p>

        <BentoGrid className="max-w-4xl mx-auto">
          {projects.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              href={item.link} // Ensure you are passing 'item.link' to the 'href' prop
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </main>
  );
}
