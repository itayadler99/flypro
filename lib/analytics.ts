// Client-side analytics helper — pixel events + Plausible custom events.
// Pairs with server-side CAPI via shared event_id for dedup.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Record<string, unknown> }) => void;
  }
}

export type PixelEvent =
  | "PageView"
  | "ViewContent"
  | "Lead"
  | "InitiateCheckout"
  | "Purchase"
  | "CompleteRegistration";

export function trackPixel(event: PixelEvent, params: Record<string, unknown> = {}, eventId?: string): void {
  if (typeof window === "undefined" || !window.fbq) return;
  const opts = eventId ? { eventID: eventId } : undefined;
  window.fbq("track", event, params, opts);
}

export function trackPlausible(event: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !window.plausible) return;
  window.plausible(event, props ? { props } : undefined);
}

export function track(event: PixelEvent, params: Record<string, unknown> = {}, eventId?: string): void {
  trackPixel(event, params, eventId);
  trackPlausible(event, params);
}

export function uuid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp("(^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[2]) : undefined;
}
