import { AdminUser, Visitor, ChatSession, ChatMessage, PaymentNotification, AnalyticsData, AdminNotification } from "./types";

// Admin Authentication
const ADMIN_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "admin123",
  name: "Administrateur",
  role: "admin" as const
};

export function authenticateAdmin(email: string, password: string): AdminUser | null {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    return {
      id: "admin-1",
      email: ADMIN_CREDENTIALS.email,
      password: ADMIN_CREDENTIALS.password,
      name: ADMIN_CREDENTIALS.name,
      role: ADMIN_CREDENTIALS.role,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };
  }
  return null;
}

export function getAdminSession(): AdminUser | null {
  if (typeof window === "undefined") return null;
  const session = localStorage.getItem("admin_session");
  return session ? JSON.parse(session) : null;
}

export function setAdminSession(admin: AdminUser): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("admin_session", JSON.stringify(admin));
  }
}

export function clearAdminSession(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_session");
  }
}

// Safe localStorage operations
function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.error('localStorage get error:', e);
    return null;
  }
}

function safeSetItem(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.error('localStorage set error:', e);
    return false;
  }
}

// Visitors Tracking - using analytics.ts instead
export function trackVisitor(visitorData: Omit<Visitor, "id" | "createdAt" | "lastActivity">): Visitor {
  // This is now handled by analytics.ts
  const visitor: Visitor = {
    ...visitorData,
    id: `visitor-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    lastActivity: new Date().toISOString()
  };
  return visitor;
}

export function updateVisitorActivity(visitorId: string, currentPage: string): void {
  // This is now handled by analytics.ts
}

export function getVisitors(filters?: { period?: string; status?: string }): Visitor[] {
  // This is now handled by analytics.ts
  return [];
}

export function getVisitorById(id: string): Visitor | undefined {
  // This is now handled by analytics.ts
  return undefined;
}

// Chat System - using chat.ts instead
export function createChatSession(visitorId: string, visitorName?: string, visitorEmail?: string): ChatSession {
  // This is now handled by chat.ts
  const session: ChatSession = {
    id: `chat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    visitorId,
    visitorName,
    visitorEmail,
    status: "active",
    messages: [],
    createdAt: new Date().toISOString(),
    lastMessageAt: new Date().toISOString()
  };
  return session;
}

export function addChatMessage(sessionId: string, message: Omit<ChatMessage, "id" | "timestamp">): ChatMessage {
  // This is now handled by chat.ts
  const chatMessage: ChatMessage = {
    ...message,
    id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString()
  };
  return chatMessage;
}

export function getChatSessions(filters?: { status?: string; assignedTo?: string }): ChatSession[] {
  // This is now handled by chat.ts
  return [];
}

export function getChatSessionById(id: string): ChatSession | undefined {
  // This is now handled by chat.ts
  return undefined;
}

export function updateChatSessionStatus(sessionId: string, status: ChatSession["status"], assignedTo?: string): void {
  // This is now handled by chat.ts
}

export function markMessagesAsRead(sessionId: string, isAdmin: boolean): void {
  // This is now handled by chat.ts
}

// Payment Notifications - using localStorage
const PAYMENTS_KEY = 'payment_notifications';

function initializePaymentsStorage() {
  if (typeof window === 'undefined') return;
  if (!safeGetItem(PAYMENTS_KEY)) {
    safeSetItem(PAYMENTS_KEY, JSON.stringify([]));
  }
}

export function createPaymentNotification(payment: Omit<PaymentNotification, "id" | "createdAt">): PaymentNotification {
  if (typeof window === 'undefined') {
    // Return mock data for server-side
    return {
      ...payment,
      id: `payment-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
  }

  initializePaymentsStorage();
  const notifications = getPaymentNotifications();

  const notification: PaymentNotification = {
    ...payment,
    id: `payment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString()
  };

  notifications.push(notification);
  safeSetItem(PAYMENTS_KEY, JSON.stringify(notifications));

  // Trigger custom event for real-time updates
  window.dispatchEvent(new CustomEvent('payments-updated'));

  return notification;
}

export function getPaymentNotifications(filters?: { status?: string; type?: string }): PaymentNotification[] {
  if (typeof window === 'undefined') return [];
  initializePaymentsStorage();
  const data = safeGetItem(PAYMENTS_KEY);
  let result = data ? JSON.parse(data) : [];

  if (filters?.status) {
    result = result.filter(p => p.status === filters.status);
  }

  if (filters?.type) {
    result = result.filter(p => p.type === filters.type);
  }

  return result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function updatePaymentStatus(id: string, status: PaymentNotification["status"], processedAt?: string): void {
  if (typeof window === 'undefined') return;

  const notifications = getPaymentNotifications();
  const payment = notifications.find(p => p.id === id);
  if (payment) {
    payment.status = status;
    if (processedAt) payment.processedAt = processedAt;
    safeSetItem(PAYMENTS_KEY, JSON.stringify(notifications));
    window.dispatchEvent(new CustomEvent('payments-updated'));
  }
}

export function subscribeToPaymentsUpdates(callback: () => void): () => void {
  const handleUpdate = () => callback();
  window.addEventListener('payments-updated', handleUpdate);
  return () => window.removeEventListener('payments-updated', handleUpdate);
}

// Analytics - using analytics.ts instead
export function getAnalyticsData(period: string): AnalyticsData {
  // This is now handled by analytics.ts
  return {
    period,
    visitors: { total: 0, unique: 0, returning: 0 },
    pageViews: 0,
    avgSessionDuration: 0,
    bounceRate: 0,
    topPages: [],
    trafficSources: [],
    devices: [],
    conversions: { orders: 0, revenue: 0, conversionRate: 0 }
  };
}

// Admin Notifications - using localStorage
const NOTIFICATIONS_KEY = 'admin_notifications';

function initializeNotificationsStorage() {
  if (typeof window === 'undefined') return;
  if (!safeGetItem(NOTIFICATIONS_KEY)) {
    safeSetItem(NOTIFICATIONS_KEY, JSON.stringify([]));
  }
}

export function createAdminNotification(notification: Omit<AdminNotification, "id" | "createdAt" | "read">): AdminNotification {
  if (typeof window === 'undefined') {
    // Return mock data for server-side
    return {
      ...notification,
      id: `notif-${Date.now()}`,
      createdAt: new Date().toISOString(),
      read: false
    };
  }

  initializeNotificationsStorage();
  const notifications = getAdminNotifications();

  const newNotification: AdminNotification = {
    ...notification,
    id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    read: false
  };

  notifications.unshift(newNotification);
  safeSetItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));

  // Trigger custom event for real-time updates
  window.dispatchEvent(new CustomEvent('notifications-updated'));

  return newNotification;
}

export function getAdminNotifications(): AdminNotification[] {
  if (typeof window === 'undefined') return [];
  initializeNotificationsStorage();
  const data = safeGetItem(NOTIFICATIONS_KEY);
  return data ? JSON.parse(data) : [];
}

export function markNotificationAsRead(id: string): void {
  if (typeof window === 'undefined') return;

  const notifications = getAdminNotifications();
  const notification = notifications.find(n => n.id === id);
  if (notification) {
    notification.read = true;
    safeSetItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
    window.dispatchEvent(new CustomEvent('notifications-updated'));
  }
}

export function markAllNotificationsAsRead(): void {
  if (typeof window === 'undefined') return;

  const notifications = getAdminNotifications();
  notifications.forEach(n => n.read = true);
  safeSetItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  window.dispatchEvent(new CustomEvent('notifications-updated'));
}

export function getUnreadNotificationCount(): number {
  const notifications = getAdminNotifications();
  return notifications.filter(n => !n.read).length;
}

export function subscribeToNotificationsUpdates(callback: () => void): () => void {
  const handleUpdate = () => callback();
  window.addEventListener('notifications-updated', handleUpdate);
  return () => window.removeEventListener('notifications-updated', handleUpdate);
}
