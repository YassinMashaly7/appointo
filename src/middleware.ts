import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const res = intlMiddleware(req);

  // This connects Supabase to the cookies in middleware
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log("✅ session", session);

  const pathname = req.nextUrl.pathname;

  if (!session?.user) {
    // No session, user is not authenticated
    return res;
  }

  const allowlist = ["/auth", "/onboarding", "/api", "/trpc"];
  if (allowlist.some((path) => pathname.startsWith(path))) return res;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("display_name")
    .eq("id", session.user.id)
    .single();

  const missingDisplayName = !profile?.display_name;

  if (missingDisplayName && !pathname.includes("/onboarding")) {
    const locale = req.nextUrl.locale || "en";
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = `/${locale}/onboarding`;
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
