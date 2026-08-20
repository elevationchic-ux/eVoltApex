"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { Zap, Eye, EyeOff, ArrowRight, Mail, Lock } from "lucide-react";

export default function SignInPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const router = useRouter();
  const { signIn, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    const redirectTo = localStorage.getItem("evolt_auth_redirect");
    localStorage.removeItem("evolt_auth_redirect");
    router.push(redirectTo || `/${locale}`);
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = signIn(email, password);
    setLoading(false);

    if (result.success) {
      const redirectTo = localStorage.getItem("evolt_auth_redirect");
      localStorage.removeItem("evolt_auth_redirect");
      router.push(redirectTo || `/${locale}`);
    } else {
      setError(result.error || (locale === "fr" ? "Identifiants invalides" : "Invalid credentials"));
    }
  };

  const dict = {
    fr: {
      title: "Connexion",
      subtitle: "Connectez-vous à votre compte eVolt Apex",
      email: "Adresse e-mail",
      password: "Mot de passe",
      forgotPassword: "Mot de passe oublié ?",
      submit: "Se connecter",
      noAccount: "Pas encore de compte ?",
      signUp: "Créer un compte",
      or: "ou",
      continueAsGuest: "Continuer sans compte",
    },
    en: {
      title: "Sign in",
      subtitle: "Log in to your eVolt Apex account",
      email: "Email address",
      password: "Password",
      forgotPassword: "Forgot password?",
      submit: "Sign in",
      noAccount: "Don't have an account?",
      signUp: "Create an account",
      or: "or",
      continueAsGuest: "Continue as guest",
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{dict.email}</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00]/30 outline-none transition"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-medium text-zinc-400">{dict.password}</label>
              <button type="button" className="text-xs text-[#c8ff00] hover:text-[#d4ff33]">
                {dict.forgotPassword}
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

        {/* Sign up link */}
        <p className="text-center text-sm text-zinc-400 mt-6">
          {dict.noAccount}{" "}
          <Link href={`/${locale}/auth/signup`} className="text-[#c8ff00] hover:text-[#d4ff33] font-medium">
            {dict.signUp}
          </Link>
        </p>
      </div>
    </div>
  );
}
