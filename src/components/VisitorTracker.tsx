"use client";

import { useEffect, useRef } from "react";
import { trackVisitor, updateVisitorActivity } from "@/lib/analytics";

export default function VisitorTracker() {
  const visitorIdRef = useRef<string | null>(null);
  const currentPageRef = useRef<string>("");

  useEffect(() => {
    // Only track on client side
    if (typeof window === "undefined") return;

    // Get or create session ID
    let sessionId = sessionStorage.getItem("visitor_session_id");
    if (!sessionId) {
      sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem("visitor_session_id", sessionId);
    }

    // Detect device info
    const userAgent = navigator.userAgent;
    const deviceType = /Mobile|Android|iPhone/i.test(userAgent) ? "mobile" :
                      /Tablet|iPad/i.test(userAgent) ? "tablet" : "desktop";

    const os = /Windows/i.test(userAgent) ? "Windows" :
               /Mac/i.test(userAgent) ? "MacOS" :
               /Linux/i.test(userAgent) ? "Linux" :
               /Android/i.test(userAgent) ? "Android" :
               /iOS/i.test(userAgent) ? "iOS" : "Unknown";

    const browser = /Chrome/i.test(userAgent) ? "Chrome" :
                    /Firefox/i.test(userAgent) ? "Firefox" :
                    /Safari/i.test(userAgent) ? "Safari" :
                    /Edge/i.test(userAgent) ? "Edge" : "Unknown";

    // Track initial visitor
    const visitor = trackVisitor({
      sessionId,
      ipAddress: "unknown", // In production, this would come from server
      userAgent,
      referer: document.referrer,
      landingPage: window.location.pathname,
      currentPage: window.location.pathname,
      pagesVisited: [window.location.pathname],
      duration: 0,
      location: {
        country: "Unknown",
        city: "Unknown",
        region: "Unknown"
      },
      device: {
        type: deviceType as any,
        os,
        browser
      }
    });

    visitorIdRef.current = visitor.id;
    currentPageRef.current = window.location.pathname;

    // Set up activity tracking interval
    const activityInterval = setInterval(() => {
      if (visitorIdRef.current) {
        updateVisitorActivity(visitorIdRef.current, window.location.pathname);
      }
    }, 30000); // Update every 30 seconds

    // Track page changes
    const handleRouteChange = () => {
      const newPage = window.location.pathname;
      if (visitorIdRef.current && newPage !== currentPageRef.current) {
        updateVisitorActivity(visitorIdRef.current, newPage);
        currentPageRef.current = newPage;
      }
    };

    // Listen for route changes (for SPA)
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      clearInterval(activityInterval);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []); // Empty dependency array - run once on mount

  // This component doesn't render anything visible
  return null;
}
