import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";

/**
 * Service-role client, bypassing RLS. Server-only, and deliberately narrow:
 * use this ONLY where the cookie-scoped client (src/lib/supabase/server.ts)
 * can't reach the data it needs because RLS correctly blocks it for regular
 * users — e.g. memo_answers, which holds each question's correct answer and
 * must never be reachable from the student's own browser session.
 */
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createSupabaseClient<Database>(url, key, { auth: { persistSession: false } });
}
