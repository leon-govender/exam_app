"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function revokeGuardianLink(linkId: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("guardian_links").delete().eq("id", linkId);
  if (error) throw error;
  revalidatePath("/family");
}
