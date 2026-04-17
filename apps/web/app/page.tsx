import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import Preview from "@/components/Preview";

export default function Home() {
  return (
  <div className="flex min-h-screen bg-background">

      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        <Header />
        <Preview />
      </main>

    </div>
  );
}