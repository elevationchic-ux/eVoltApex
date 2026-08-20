import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale, locales } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files from locale middleware
  if (pathname.startsWith("/images") || pathname.startsWith("/icons") || pathname.startsWith("/manifest.json") || pathname.startsWith("/sw.js")) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Skip admin routes from locale middleware
    if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
      return NextResponse.next();
    }

    const locale = "fr"; // Default locale for French site
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|_vercel|icon|apple-icon|sw.js|favicon.ico|robots.txt|sitemap.xml).*)"],
};