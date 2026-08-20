"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { Zap, Eye, EyeOff, ArrowRight, CheckCircle2, Mail, Lock, User, Phone } from "lucide-react";

export default function SignUpPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const router = useRouter();
  const { signUp, user } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Redirect if already logged in
  if (user) {
    router.push(`/${locale}`);
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreedToTerms) {
      setError(locale === "fr" ? "Veuillez accepter les conditions générales" : "Please accept the terms and conditions");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError(locale === "fr" ? "Les mots de passe ne correspondent pas" : "Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError(locale === "fr" ? "Le mot de passe doit contenir au moins 6 caractères" : "Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    const result = signUp({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone || undefined,
    });
    setLoading(false);

    if (result.success) {
      // Redirect to where they were going (checkout or back)
      const redirectTo = localStorage.getItem("evolt_auth_redirect");
      localStorage.removeItem("evolt_auth_redirect");
      router.push(redirectTo || `/${locale}`);
    } else {
      setError(result.error || (locale === "fr" ? "Erreur lors de l'inscription" : "Sign-up failed"));
    }
  };

  const dict = {
    fr: {
      title: "Créer un compte",
      subtitle: "Rejoignez eVolt Apex et accédez à nos services",
      firstName: "Prénom",
      lastName: "Nom",
      email: "Adresse e-mail",
      phone: "Téléphone (optionnel)",
      password: "Mot de passe",
      confirmPassword: "Confirmer le mot de passe",
      terms: "J'accepte les conditions générales et la politique de confidentialité",
      submit: "Créer mon compte",
      alreadyAccount: "Déjà un compte ?",
      signIn: "Se connecter",
      orContinue: "En créant un compte, vous pourrez :",
      benefits: [
        "Passer commande et réserver votre véhicule",
        "Accéder au chat avec notre équipe",
        "Suivre vos commandes en temps réel",
        "Gérer votre profil et vos préférences",
      ],
    },
    en: {
      title: "Create an account",
      subtitle: "Join eVolt Apex and access our services",
      firstName: "First name",
      lastName: "Last name",
      email: "Email address",
      phone: "Phone (optional)",
      password: "Password",
      confirmPassword: "Confirm password",
      terms: "I accept the terms and conditions and privacy policy",
      submit: "Create my account",
      alreadyAccount: "Already have an account?",
      signIn: "Sign in",
      orContinue: "By creating an account, you'll be able to:",
      benefits: [
        "Place orders and reserve your vehicle",
        "Access chat with our team",
        "Track your orders in real time",
        "Manage your profile and preferences",
      ],
    },
  }[locale];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-zinc-950">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href={`/${locale}`} className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#c8ff00] to-[#a0cc00] rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black text-white">
              e<span className="text-[#c8ff00]">Volt</span>
              <span className="text-xs text-zinc-500 font-bold ml-1">Apex</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mt-4">{dict.title}</h1>
          <p className="text-zinc-400 text-sm mt-1">{dict.subtitle}</p>
        </div>

        {/* Benefits */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-6">
          <p className="text-xs text-zinc-400 font-medium mb-2">{dict.orContinue}</p>
          <ul className="space-y-1.5">
            {dict.benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c8ff00] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">{dict.firstName}</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00]/30 outline-none transition"
                  placeholder="John"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">{dict.lastName}</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00]/30 outline-none transition"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{dict.email}</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00]/30 outline-none transition"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{dict.phone}</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00]/30 outline-none transition"
                placeholder="+33 6 12 34 56 78"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{dict.password}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-10 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00]/30 outline-none transition"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{dict.confirmPassword}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00]/30 outline-none transition"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-zinc-600 bg-zinc-800 text-[#c8ff00] focus:ring-[#c8ff00]/30"
            />
            <span className="text-xs text-zinc-400">
              {dict.terms}
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#c8ff00] hover:bg-[#d4ff33] text-black font-bold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : (
              <>
                {dict.submit}
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Sign in link */}
        <p className="text-center text-sm text-zinc-400 mt-6">
          {dict.alreadyAccount}{" "}
          <Link href={`/${locale}/auth/signin`} className="text-[#c8ff00] hover:text-[#d4ff33] font-medium">
            {dict.signIn}
          </Link>
        </p>
      </div>
    </div>
  );
}
