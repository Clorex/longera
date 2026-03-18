const ADMIN_SESSION_KEY = "longera-admin-session";

export function getAdminEmail() {
  return process.env.NEXT_PUBLIC_ADMIN_EMAIL || "askthescientist@longera.com.au";
}

export function saveAdminSession(email: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(
    ADMIN_SESSION_KEY,
    JSON.stringify({
      email,
      authenticated: true,
    }),
  );
}

export function getAdminSession() {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(ADMIN_SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearAdminSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ADMIN_SESSION_KEY);
}

export function isValidAdminEmail(email: string) {
  return email.trim().toLowerCase() === getAdminEmail().trim().toLowerCase();
}