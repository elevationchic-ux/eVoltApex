"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageLoading() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-20 right-4 z-[9998] flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-lime-400/30 rounded-lg px-4 py-2 text-white text-sm">
      <div className="relative">
        <div className="w-4 h-4 border-2 border-lime-400/30 rounded-full animate-spin" />
        <div className="absolute top-0 left-0 w-4 h-4 border-2 border-lime-400 rounded-full animate-spin border-t-transparent" />
      </div>
      <span>Chargement...</span>
    </div>
  );
}
