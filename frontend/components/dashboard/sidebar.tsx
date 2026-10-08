import Link from "next/link";
import { Bell, CreditCard, LayoutDashboard, Link2, Settings, Shield, UserCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const items = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Link2, label: "Links" },
  { icon: Bell, label: "Notifications" },
  { icon: CreditCard, label: "Subscription" },
  { icon: Shield, label: "Admin" },
  { icon: Settings, label: "Settings" }
];

export function DashboardSidebar() {
  return (
    <GlassCard className="h-full rounded-[32px] p-4">
      <div className="flex items-center gap-3 rounded-[24px] border border-cyan-300/15 bg-white/5 p-4 shadow-glow">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
          <UserCircle2 className="h-6 w-6" />
        </div>
        <div>
          <p className="font-medium text-white">Nyx Operator</p>
          <p className="text-sm text-white/50">Pro Plan</p>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href="/dashboard"
            className="flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm text-white/70 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
          >
            <item.icon className="h-4 w-4 text-cyan-300" />
            {item.label}
          </Link>
        ))}
      </div>
    </GlassCard>
  );
}
