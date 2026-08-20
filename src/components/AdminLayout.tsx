"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  ShoppingCart, 
  CreditCard, 
  Settings, 
  LogOut,
  Bell,
  Package,
  BarChart3,
  Menu,
  X
} from "lucide-react";
import { getAdminSession, clearAdminSession, getUnreadNotificationCount } from "@/lib/admin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const adminSession = getAdminSession();
    if (!adminSession && pathname !== "/admin/login") {
      router.push("/admin/login");
    } else {
      setSession(adminSession);
      setNotificationCount(getUnreadNotificationCount());
    }
  }, [pathname, router]);

  const handleLogout = () => {
    clearAdminSession();
    router.push("/admin/login");
  };

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Visiteurs", href: "/admin/visitors", icon: Users },
    { name: "Clients", href: "/admin/customers", icon: Users },
    { name: "Produits", href: "/admin/products", icon: Package },
    { name: "Commandes", href: "/admin/orders", icon: ShoppingCart },
    { name: "Chat", href: "/admin/chat", icon: MessageSquare },
    { name: "Paiements", href: "/admin/payments", icon: CreditCard },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Paramètres", href: "/admin/settings", icon: Settings },
  ];

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" className="h-full w-full">
                  <defs>
                    <linearGradient id="adm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1a1f"/>
                      <stop offset="100%" stopColor="#0d0d10"/>
                    </linearGradient>
                    <linearGradient id="adm-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c8ff00"/>
                      <stop offset="100%" stopColor="#a0cc00"/>
                    </linearGradient>
                  </defs>
                  <rect width="192" height="192" rx="48" fill="url(#adm-bg)"/>
                  <g transform="translate(96,80)">
                    <circle cx="0" cy="0" r="42" fill="none" stroke="url(#adm-accent)" strokeWidth="1.5" opacity="0.3"/>
                    <circle cx="0" cy="0" r="32" fill="none" stroke="url(#adm-accent)" strokeWidth="1" opacity="0.2"/>
                    <path d="M-14,-22 L-7,-7 L7,-7 L14,-22 L10,-7 L14,7 L7,0 L-7,0 L-14,7 L-10,-7 Z" fill="url(#adm-accent)" opacity="0.8"/>
                    <path d="M-6,10 L0,24 L6,10" fill="none" stroke="url(#adm-accent)" strokeWidth="1.5" opacity="0.5"/>
                  </g>
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white">eVolt <span className="text-[#c8ff00]">Admin</span></h1>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors
                    ${isActive 
                      ? "bg-blue-600 text-white" 
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {session.name?.charAt(0) || "A"}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">{session.name}</p>
                <p className="text-xs text-gray-400">{session.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="bg-gray-800 border-b border-gray-700 px-4 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4 ml-auto">
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-white">
                <Bell className="w-6 h-6" />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}