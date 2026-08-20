"use client";

import { useState } from "react";
import {
  CreditCard,
  Building2,
  Smartphone,
  Wallet,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Lock,
  Zap,
} from "lucide-react";
import { Locale } from "@/i18n/config";

export type PaymentMethod =
  | "card"
  | "bank_transfer"
  | "apple_pay"
  | "google_pay"
  | "paypal"
  | "klarna"
  | "alma_3x"
  | "alma_4x"
  | "cetelem"
  | "sofinco"
  | "crypto"
  | "check"
  | "showroom";

interface PaymentMethodInfo {
  id: PaymentMethod;
  label: { fr: string; en: string };
  description: { fr: string; en: string };
  icon: React.ElementType;
  processingTime: { fr: string; en: string };
  fees: { fr: string; en: string };
  minAmount?: number;
  maxAmount?: number;
  popular?: boolean;
}

export const PAYMENT_METHODS: PaymentMethodInfo[] = [
  {
    id: "card",
    label: { fr: "Carte bancaire", en: "Credit/Debit Card" },
    description: {
      fr: "Visa, Mastercard, American Express. Paiement sécurisé via Stripe.",
      en: "Visa, Mastercard, American Express. Secure payment via Stripe.",
    },
    icon: CreditCard,
    processingTime: { fr: "Instantané", en: "Instant" },
    fees: { fr: "Sans frais", en: "No fees" },
    popular: true,
  },
  {
    id: "apple_pay",
    label: { fr: "Apple Pay", en: "Apple Pay" },
    description: {
      fr: "Paiement rapide avec Face ID ou Touch ID.",
      en: "Quick payment with Face ID or Touch ID.",
    },
    icon: Smartphone,
    processingTime: { fr: "Instantané", en: "Instant" },
    fees: { fr: "Sans frais", en: "No fees" },
  },
  {
    id: "google_pay",
    label: { fr: "Google Pay", en: "Google Pay" },
    description: {
      fr: "Paiement en un clic avec votre compte Google.",
      en: "One-click payment with your Google account.",
    },
    icon: Smartphone,
    processingTime: { fr: "Instantané", en: "Instant" },
    fees: { fr: "Sans frais", en: "No fees" },
  },
  {
    id: "paypal",
    label: { fr: "PayPal", en: "PayPal" },
    description: {
      fr: "Protection acheteur incluse. Remboursement sous 30 jours.",
      en: "Buyer protection included. 30-day refund.",
    },
    icon: Wallet,
    processingTime: { fr: "Instantané", en: "Instant" },
    fees: { fr: "Sans frais", en: "No fees" },
  },
  {
    id: "bank_transfer",
    label: { fr: "Virement bancaire SEPA", en: "SEPA Bank Transfer" },
    description: {
      fr: "Virement direct depuis votre banque. Idéal pour les montants élevés.",
      en: "Direct transfer from your bank. Ideal for high amounts.",
    },
    icon: Building2,
    processingTime: { fr: "1-3 jours ouvrés", en: "1-3 business days" },
    fees: { fr: "Sans frais", en: "No fees" },
    minAmount: 5000,
  },
  {
    id: "alma_3x",
    label: { fr: "Alma - 3x sans frais", en: "Alma - 3x interest-free" },
    description: {
      fr: "Payez en 3 fois sans frais. Aucune condition.",
      en: "Pay in 3 installments interest-free. No conditions.",
    },
    icon: Clock,
    processingTime: { fr: "Instantané", en: "Instant" },
    fees: { fr: "Sans frais", en: "Interest-free" },
    minAmount: 300,
    maxAmount: 4000,
    popular: true,
  },
  {
    id: "alma_4x",
    label: { fr: "Alma - 4x sans frais", en: "Alma - 4x interest-free" },
    description: {
      fr: "Payez en 4 fois sans frais pour les commandes importantes.",
      en: "Pay in 4 installments interest-free for larger orders.",
    },
    icon: Clock,
    processingTime: { fr: "Instantané", en: "Instant" },
    fees: { fr: "Sans frais", en: "Interest-free" },
    minAmount: 500,
    maxAmount: 10000,
  },
  {
    id: "cetelem",
    label: { fr: "Financement Cetelem", en: "Cetelem Financing" },
    description: {
      fr: "Crédit personnel de 500€ à 30 000€. Réponse en 2 minutes.",
      en: "Personal loan from €500 to €30,000. Answer in 2 minutes.",
    },
    icon: ShieldCheck,
    processingTime: { fr: "24-48h (approval)", en: "24-48h (approval)" },
    fees: { fr: "TAEG 3.9% - 9.9%", en: "APR 3.9% - 9.9%" },
    minAmount: 500,
    maxAmount: 30000,
  },
  {
    id: "sofinco",
    label: { fr: "Financement Sofinco", en: "Sofinco Financing" },
    description: {
      fr: "Crédit affecté de 1000€ à 75 000€. Taux préférentiel partenaires.",
      en: "Assigned credit from €1,000 to €75,000. Preferential partner rate.",
    },
    icon: ShieldCheck,
    processingTime: { fr: "24-72h (approval)", en: "24-72h (approval)" },
    fees: { fr: "TAEG 2.9% - 7.9%", en: "APR 2.9% - 7.9%" },
    minAmount: 1000,
    maxAmount: 75000,
  },
  {
    id: "klarna",
    label: { fr: "Klarna - Pay later", en: "Klarna - Pay later" },
    description: {
      fr: "Essayez d'abord, payez dans 30 jours. Ou étalez sur 6-36 mois.",
      en: "Try first, pay within 30 days. Or spread over 6-36 months.",
    },
    icon: Zap,
    processingTime: { fr: "Instantané", en: "Instant" },
    fees: { fr: "30j gratuit, puis TAEG variable", en: "30 days free, then variable APR" },
    minAmount: 100,
    maxAmount: 20000,
  },
  {
    id: "crypto",
    label: { fr: "Cryptomonnaie", en: "Cryptocurrency" },
    description: {
      fr: "Bitcoin, Ethereum, USDT. Via Coinbase Commerce.",
      en: "Bitcoin, Ethereum, USDT. Via Coinbase Commerce.",
    },
    icon: Wallet,
    processingTime: { fr: "10-60 min (confirmation)", en: "10-60 min (confirmation)" },
    fees: { fr: "Sans frais", en: "No fees" },
    minAmount: 500,
  },
  {
    id: "check",
    label: { fr: "Chèque bancaire", en: "Bank Check" },
    description: {
      fr: "Chèque de banque certifié. À envoyer par courrier recommandé.",
      en: "Certified bank check. Send by registered mail.",
    },
    icon: Building2,
    processingTime: { fr: "5-10 jours ouvrés", en: "5-10 business days" },
    fees: { fr: "Sans frais", en: "No fees" },
    minAmount: 2000,
  },
  {
    id: "showroom",
    label: { fr: "Paiement en showroom", en: "Showroom Payment" },
    description: {
      fr: "Réservez en ligne, payez en showroom. CB, espèces, chèque acceptés.",
      en: "Reserve online, pay at showroom. Card, cash, check accepted.",
    },
    icon: CreditCard,
    processingTime: { fr: "Sur rendez-vous", en: "By appointment" },
    fees: { fr: "Sans frais", en: "No fees" },
  },
];

export default function PaymentMethods({
  locale,
  selectedMethod,
  onSelect,
  orderTotal,
}: {
  locale: Locale;
  selectedMethod: PaymentMethod | null;
  onSelect: (method: PaymentMethod) => void;
  orderTotal: number;
}) {
  const isFr = locale === "fr";

  // Filter methods based on order amount
  const availableMethods = PAYMENT_METHODS.filter((m) => {
    if (m.minAmount && orderTotal < m.minAmount) return false;
    if (m.maxAmount && orderTotal > m.maxAmount) return false;
    return true;
  });

  // Group methods
  const instant = availableMethods.filter((m) =>
    ["card", "apple_pay", "google_pay", "paypal"].includes(m.id)
  );
  const installment = availableMethods.filter((m) =>
    ["alma_3x", "alma_4x", "klarna"].includes(m.id)
  );
  const financing = availableMethods.filter((m) =>
    ["cetelem", "sofinco"].includes(m.id)
  );
  const other = availableMethods.filter((m) =>
    ["bank_transfer", "crypto", "check", "showroom"].includes(m.id)
  );

  const renderGroup = (title: string, methods: PaymentMethodInfo[]) => {
    if (methods.length === 0) return null;
    return (
      <div className="space-y-2">
        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{title}</h4>
        <div className="space-y-2">
          {methods.map((method) => {
            const Icon = method.icon;
            const isSelected = selectedMethod === method.id;
            return (
              <button
                key={method.id}
                type="button"
                onClick={() => onSelect(method.id)}
                className={`w-full flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? "border-lime-400 bg-lime-400/5 shadow-glow-lime"
                    : "border-zinc-800 bg-zinc-950/60 hover:border-zinc-700"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-lime-400/20 text-lime-400" : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-semibold ${isSelected ? "text-lime-400" : "text-white"}`}>
                      {method.label[locale]}
                    </span>
                    {method.popular && (
                      <span className="text-[9px] font-bold text-lime-400 bg-lime-400/10 border border-lime-400/20 px-1.5 py-0.5 rounded-full">
                        {isFr ? "Populaire" : "Popular"}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{method.description[locale]}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {method.processingTime[locale]}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-medium">{method.fees[locale]}</span>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? "border-lime-400 bg-lime-400" : "border-zinc-600"
                  }`}
                >
                  {isSelected && <CheckCircle2 className="w-3 h-3 text-zinc-950" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 mb-1">
        <Lock className="w-4 h-4 text-lime-400" />
        <h3 className="text-sm font-bold text-white">
          {isFr ? "Mode de paiement" : "Payment method"}
        </h3>
      </div>

      {renderGroup(
        isFr ? "Paiement instantané" : "Instant payment",
        instant
      )}
      {renderGroup(
        isFr ? "Paiement en plusieurs fois" : "Installment payment",
        installment
      )}
      {renderGroup(
        isFr ? "Financement" : "Financing",
        financing
      )}
      {renderGroup(
        isFr ? "Autres méthodes" : "Other methods",
        other
      )}

      {/* Security badge */}
      <div className="flex items-center gap-2 p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg mt-4">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
        <p className="text-xs text-zinc-400">
          {isFr
            ? "Tous les paiements sont sécurisés et cryptés. Vos données bancaires ne sont jamais stockées sur nos serveurs."
            : "All payments are secure and encrypted. Your banking data is never stored on our servers."}
        </p>
      </div>
    </div>
  );
}
