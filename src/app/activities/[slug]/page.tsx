// src/app/activities/[slug]/page.tsx
export default function ActivityPage({ params }: { params: { slug: string } }) {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-white capitalize">
          {params.slug.replace("-", " ")}
        </h1>
        <p className="text-neutral-400">Web Development Activity Details</p>
      </header>

      {/* Your activity content goes here */}
      <div className="p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-md">
        {/* Render the specific lab component here */}
      </div>
    </div>
  );
}
