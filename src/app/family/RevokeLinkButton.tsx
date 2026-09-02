"use client";

import { useState } from "react";
import { revokeGuardianLink } from "./actions";

export function RevokeLinkButton({ linkId }: { linkId: string }) {
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);
    await revokeGuardianLink(linkId);
    // revalidatePath in the action refreshes server data; reload picks that
    // up immediately rather than waiting on the next navigation.
    window.location.reload();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      className="rounded-md border border-border px-3 py-1.5 text-xs text-ink-2 hover:border-mark-red hover:text-mark-red disabled:opacity-60"
    >
      {pending ? "Revoking…" : "Revoke access"}
    </button>
  );
}
