import ThemeBuilder from "@/components/features/theme-builder/ThemeBuilder";

export default function ThemeAdminPage() {
  return (
    <div className="flex min-h-screen bg-background">
      
      {/* Sidebar reuse */}
      <div className="w-[260px]">
        {/* reuse your sidebar */}
      </div>

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          Theme Settings (Admin)
        </h1>

        <ThemeBuilder />
      </main>

    </div>
  );
}