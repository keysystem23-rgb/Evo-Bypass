import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-[color:var(--text-primary)]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
