"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useCartStore } from "@/store/cart";
import { useCompareStore } from "@/store/compare";
import { useRegionStore } from "@/store/region";

const HydrationContext = createContext({ hydrated: false });

export function useHydration() {
  return useContext(HydrationContext);
}

/**
 * Rehydrates Zustand persisted stores after mount to avoid
 * server/client hydration mismatch.
 *
 * With skipHydration: true, stores keep their default values during
 * the initial render (matching the server). After mount, we manually
 * rehydrate from localStorage, triggering a normal state update.
 */
export default function HydrationProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Rehydrate all persisted stores after first render
    try { useCartStore.persist.rehydrate(); } catch {}
    try { useCompareStore.persist.rehydrate(); } catch {}
    try { useRegionStore.persist.rehydrate(); } catch {}
    setHydrated(true);
  }, []);

  return (
    <HydrationContext.Provider value={{ hydrated }}>
      {children}
    </HydrationContext.Provider>
  );
}
