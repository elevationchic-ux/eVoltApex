"use client";

import { useEffect, useState } from "react";
import { Download, X, Smartphone, Monitor } from "lucide-react";
import { Dictionary } from "@/i18n/dictionaries";

export default function PWAInstallPrompt({ dict }: { dict: Dictionary }) {
  const t = dict.pwa;
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    // Check if previously dismissed - do this first
    const dismissed = localStorage.getItem('pwa_prompt_dismissed');
    if (dismissed) {
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - parseInt(dismissed) < sevenDays) {
        // Don't show anything if dismissed within 7 days
        return;
      }
    }

    // Check if running as PWA
    const isInStandaloneMode =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isInStandaloneMode) {
      setIsInstalled(true);
      return;
    }

    // Check for iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Listen for beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
      // Check again before showing
      const dismissedCheck = localStorage.getItem('pwa_prompt_dismissed');
      if (!dismissedCheck || Date.now() - parseInt(dismissedCheck) >= 7 * 24 * 60 * 60 * 1000) {
        setShowPrompt(true);
      }
    };

    // Listen for appinstalled
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // For non-iOS devices, show prompt after 5 seconds if install prompt hasn't fired
    if (!isIOSDevice) {
      const timer = setTimeout(() => {
        const dismissedCheck = localStorage.getItem('pwa_prompt_dismissed');
        if (!dismissedCheck || Date.now() - parseInt(dismissedCheck) >= 7 * 24 * 60 * 60 * 1000) {
          if (!canInstall && !isInStandaloneMode) {
            setShowPrompt(true);
          }
        }
      }, 5000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
      };
    } else {
      // For iOS, show prompt after 5 seconds
      const timer = setTimeout(() => {
        const dismissedCheck = localStorage.getItem('pwa_prompt_dismissed');
        if (!dismissedCheck || Date.now() - parseInt(dismissedCheck) >= 7 * 24 * 60 * 60 * 1000) {
          if (!isInStandaloneMode) {
            setShowPrompt(true);
          }
        }
      }, 5000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
      };
    }
  }, [canInstall]);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
      setShowPrompt(false);
    } else if (!isIOS) {
      // If no deferred prompt, try to trigger install
      alert(t.installAlert);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for 7 days
    localStorage.setItem('pwa_prompt_dismissed', Date.now().toString());
  };

  if (!showPrompt || isInstalled) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-[10000] animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gradient-to-br from-[#1a1a1f] to-[#0d0d10] border border-[#c8ff00]/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#c8ff00]/10 rounded-xl flex items-center justify-center border border-[#c8ff00]/30">
              {isIOS ? <Smartphone className="w-6 h-6 text-[#c8ff00]" /> : <Monitor className="w-6 h-6 text-[#c8ff00]" />}
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">
                {isIOS ? t.installTitleIOS : t.installTitle}
              </h3>
              <p className="text-gray-400 text-xs mt-1">
                {isIOS
                  ? t.installDescIOS
                  : canInstall
                  ? t.installDescReady
                  : t.installDescAvailable}
              </p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label={t.close}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isIOS ? (
          <div className="bg-[#0d0d10] rounded-lg p-3 mb-3 border border-gray-700">
            <p className="text-gray-300 text-xs leading-relaxed">
              <span className="text-[#c8ff00] font-semibold">1.</span> {t.iosStep1} <span className="text-[#c8ff00]">{t.iosShare}</span> <span className="text-[#c8ff00]">⎵</span><br />
              <span className="text-[#c8ff00] font-semibold">2.</span> {t.iosStep2} &quot;{t.iosHomeScreen}&quot;<br />
              <span className="text-[#c8ff00] font-semibold">3.</span> {t.iosStep3} &quot;{t.iosAdd}&quot;
            </p>
          </div>
        ) : (
          <button
            onClick={handleInstall}
            disabled={!canInstall}
            className={`w-full py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              canInstall
                ? "bg-gradient-to-r from-[#c8ff00] to-[#a0cc00] hover:from-[#a0cc00] hover:to-[#8bb800] text-black font-semibold shadow-[#c8ff00]/20 hover:shadow-[#c8ff00]/30"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Download className="w-4 h-4" />
            {canInstall ? t.installNow : t.installUnavailable}
          </button>
        )}

        <p className="text-gray-500 text-xs text-center mt-3">
          {t.freeInstall}
        </p>
      </div>
    </div>
  );
}
