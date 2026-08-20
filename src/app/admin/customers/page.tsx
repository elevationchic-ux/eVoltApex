"use client";

import { useState, useEffect } from "react";
import { getRegisteredCustomers, User } from "@/lib/auth";
import { Users, Mail, Phone, Calendar, Search, ChevronDown, ArrowUpDown, Clock } from "lucide-react";

export default function CustomersPage() {
  const [customers, setCustomers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "name" | "email">("date");
  const [filter, setFilter] = useState<"all" | "today" | "week" | "month">("all");

  useEffect(() => {
    loadCustomers();
    const interval = setInterval(loadCustomers, 10000);
    return () => clearInterval(interval);
  }, []);

  function loadCustomers() {
    const users = getRegisteredCustomers();
    setCustomers(users);
  }

  const filtered = customers.filter((c) => {
    const matchesSearch =
      c.firstName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      (c.phone && c.phone.includes(search));

    if (!matchesSearch) return false;

    if (filter === "all") return true;

    const created = new Date(c.createdAt);
    const now = new Date();
    const diffDays = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);

    if (filter === "today") return diffDays < 1;
    if (filter === "week") return diffDays < 7;
    if (filter === "month") return diffDays < 30;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "date") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (sortBy === "name") return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
    return a.email.localeCompare(b.email);
  });

  // Stats
  const todayCount = customers.filter((c) => {
    const diff = (Date.now() - new Date(c.createdAt).getTime()) / (1000 * 60 * 60 * 24);
    return diff < 1;
  }).length;
  const weekCount = customers.filter((c) => {
    const diff = (Date.now() - new Date(c.createdAt).getTime()) / (1000 * 60 * 60 * 24);
    return diff < 7;
  }).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            Clients inscrits
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            {customers.length} client{customers.length !== 1 ? "s" : ""} au total
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-2 text-sm">
            <span className="text-gray-400">Aujourd'hui:</span>{" "}
            <span className="text-white font-bold">{todayCount}</span>
          </div>
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg px-3 py-2 text-sm">
            <span className="text-gray-400">Cette semaine:</span>{" "}
            <span className="text-white font-bold">{weekCount}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Rechercher par nom, email, téléphone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 outline-none transition"
          />
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm focus:border-purple-400 outline-none"
        >
          <option value="all">Toutes les périodes</option>
          <option value="today">Aujourd'hui</option>
          <option value="week">Cette semaine</option>
          <option value="month">Ce mois</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white text-sm focus:border-purple-400 outline-none"
        >
          <option value="date">Plus récents</option>
          <option value="name">Par nom</option>
          <option value="email">Par email</option>
        </select>
      </div>

      {/* Customer List */}
      {sorted.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900/50 border border-zinc-800 rounded-xl">
          <Users className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
          <p className="text-zinc-400">
            {search ? "Aucun client trouvé" : "Aucun client inscrit pour le moment"}
          </p>
        </div>
      ) : (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-zinc-800/50 border-b border-zinc-800 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            <div className="col-span-3">Client</div>
            <div className="col-span-3">Contact</div>
            <div className="col-span-2">Téléphone</div>
            <div className="col-span-2">Inscrit le</div>
            <div className="col-span-2">Dernière connexion</div>
          </div>

          {/* Customer Rows */}
          {sorted.map((customer, idx) => (
            <div
              key={customer.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 py-4 ${
                idx !== sorted.length - 1 ? "border-b border-zinc-800/50" : ""
              } hover:bg-zinc-800/30 transition-colors`}
            >
              {/* Name */}
              <div className="col-span-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-sm shrink-0">
                  {customer.firstName[0]}{customer.lastName[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {customer.firstName} {customer.lastName}
                  </p>
                  <p className="text-xs text-zinc-500 md:hidden">{customer.email}</p>
                </div>
              </div>

              {/* Email */}
              <div className="col-span-3 flex items-center gap-2 text-sm text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0 hidden md:block" />
                <span className="truncate">{customer.email}</span>
              </div>

              {/* Phone */}
              <div className="col-span-2 flex items-center gap-2 text-sm text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-zinc-500 shrink-0 hidden md:block" />
                {customer.phone || <span className="text-zinc-600">—</span>}
              </div>

              {/* Created */}
              <div className="col-span-2 flex items-center gap-2 text-sm text-zinc-400">
                <Calendar className="w-3.5 h-3.5 text-zinc-500 shrink-0 hidden md:block" />
                {new Date(customer.createdAt).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>

              {/* Last Login */}
              <div className="col-span-2 flex items-center gap-2 text-sm text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0 hidden md:block" />
                {customer.lastLogin
                  ? new Date(customer.lastLogin).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "short",
                    })
                  : "—"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
