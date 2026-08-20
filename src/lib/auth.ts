// User authentication system - localStorage-based for client-side auth
// In production, this would be replaced with a proper backend (NextAuth, Firebase, etc.)

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  createdAt: string;
  lastLogin?: string;
  address?: {
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
}

const USERS_KEY = "evolt_users";
const SESSION_KEY = "evolt_user_session";

// --- Storage helpers ---
function getAllUsers(): User[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

function saveAllUsers(users: User[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// --- Simple password hashing (NOT for production - use bcrypt server-side) ---
function hashPassword(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return `h_${Math.abs(hash).toString(36)}_${password.length}`;
}

function verifyPassword(password: string, hashed: string): boolean {
  return hashPassword(password) === hashed;
}

// --- Public API ---

export function signUp(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}): { success: boolean; error?: string; user?: User } {
  if (typeof window === "undefined") {
    return { success: false, error: "Server-side not supported" };
  }

  if (!data.firstName.trim() || !data.lastName.trim()) {
    return { success: false, error: "firstName and lastName required" };
  }
  if (!data.email.trim() || !data.email.includes("@")) {
    return { success: false, error: "Valid email required" };
  }
  if (!data.password || data.password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters" };
  }

  const users = getAllUsers();
  const existing = users.find((u) => u.email.toLowerCase() === data.email.toLowerCase());
  if (existing) {
    return { success: false, error: "Email already registered" };
  }

  const user: User = {
    id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone?.trim(),
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  };

  // Store password hash alongside user (in production: server-side bcrypt)
  const usersWithPasswords = JSON.parse(localStorage.getItem(USERS_KEY + "_pw") || "[]");
  usersWithPasswords.push({ email: user.email, passwordHash: hashPassword(data.password) });
  localStorage.setItem(USERS_KEY + "_pw", JSON.stringify(usersWithPasswords));

  users.push(user);
  saveAllUsers(users);

  // Auto-login after signup
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));

  return { success: true, user };
}

export function signIn(email: string, password: string): { success: boolean; error?: string; user?: User } {
  if (typeof window === "undefined") {
    return { success: false, error: "Server-side not supported" };
  }

  if (!email.trim() || !password) {
    return { success: false, error: "Email and password required" };
  }

  const users = getAllUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return { success: false, error: "Invalid email or password" };
  }

  // Verify password
  const pwStore = JSON.parse(localStorage.getItem(USERS_KEY + "_pw") || "[]");
  const pwEntry = pwStore.find((p: any) => p.email === user.email);
  if (!pwEntry || !verifyPassword(password, pwEntry.passwordHash)) {
    return { success: false, error: "Invalid email or password" };
  }

  // Update last login
  user.lastLogin = new Date().toISOString();
  saveAllUsers(users);

  // Create session
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));

  return { success: true, user };
}

export function signOut() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}

export function getUserSession(): User | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(SESSION_KEY);
  return data ? JSON.parse(data) : null;
}

export function updateUserProfile(updates: Partial<User>): User | null {
  if (typeof window === "undefined") return null;

  const session = getUserSession();
  if (!session) return null;

  const users = getAllUsers();
  const idx = users.findIndex((u) => u.id === session.id);
  if (idx === -1) return null;

  users[idx] = { ...users[idx], ...updates };
  saveAllUsers(users);
  localStorage.setItem(SESSION_KEY, JSON.stringify(users[idx]));

  return users[idx];
}

// --- Admin: Get all registered customers ---
export function getRegisteredCustomers(): User[] {
  return getAllUsers().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getCustomerCount(): number {
  return getAllUsers().length;
}
