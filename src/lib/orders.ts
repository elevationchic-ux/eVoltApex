import { Order } from "./types";

const ORDERS_KEY = 'orders';
const MAX_ORDERS = 10000; // Increased limit for high traffic

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

function initializeStorage() {
  if (typeof window === 'undefined') return;
  if (!safeGetItem(ORDERS_KEY)) {
    safeSetItem(ORDERS_KEY, JSON.stringify([]));
  }
}

function cleanupOldOrders() {
  try {
    const ordersData = safeGetItem(ORDERS_KEY);
    if (ordersData) {
      const orders = JSON.parse(ordersData);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      // Keep only recent orders and delivered orders
      const filteredOrders = orders.filter((o: Order) => {
        return new Date(o.createdAt) > thirtyDaysAgo || o.statut !== 'delivered';
      });

      // Limit total orders
      if (filteredOrders.length > MAX_ORDERS) {
        filteredOrders.splice(0, filteredOrders.length - MAX_ORDERS);
      }

      safeSetItem(ORDERS_KEY, JSON.stringify(filteredOrders));
    }
  } catch (e) {
    console.error('Error cleaning up old orders:', e);
  }
}

export function saveOrder(order: Order): Order {
  if (typeof window === 'undefined') {
    // Return mock data for server-side
    return order;
  }

  initializeStorage();
  const orders = getOrders();

  // Clean up old orders if limit reached
  if (orders.length >= MAX_ORDERS) {
    cleanupOldOrders();
  }

  orders.push(order);
  safeSetItem(ORDERS_KEY, JSON.stringify(orders));

  // Trigger custom event for real-time updates
  window.dispatchEvent(new CustomEvent('orders-updated'));

  return order;
}

export function getOrders(): Order[] {
  if (typeof window === 'undefined') return [];
  initializeStorage();
  const data = safeGetItem(ORDERS_KEY);
  return data ? JSON.parse(data) : [];
}

export function getOrder(id: string): Order | undefined {
  const orders = getOrders();
  return orders.find((o) => o.id === id);
}

export function updateOrderStatus(id: string, status: Order['statut']): void {
  if (typeof window === 'undefined') return;

  const orders = getOrders();
  const order = orders.find((o) => o.id === id);
  if (order) {
    order.statut = status;
    safeSetItem(ORDERS_KEY, JSON.stringify(orders));
    window.dispatchEvent(new CustomEvent('orders-updated'));
  }
}

export function subscribeToOrdersUpdates(callback: () => void): () => void {
  const handleUpdate = () => callback();
  window.addEventListener('orders-updated', handleUpdate);
  return () => window.removeEventListener('orders-updated', handleUpdate);
}
