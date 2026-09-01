import Link from "next/link";
import { redirect } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { FrameChrome } from "@/components/FrameChrome";
import { getCurrentUser } from "@/lib/queries";
import { getLinkedStudents, getLinkedGuardians } from "@/lib/family-queries";
import { RevokeLinkButton } from "./RevokeLinkButton";

export default async function FamilyPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const [linkedStudents, linkedGuardians] = await Promise.all([
    getLinkedStudents(user.id),
    getLinkedGuardians(user.id),
  ]);

  return (
    <div className="flex flex-1 flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card"
          style={{ boxShadow: "var(--shadow)" }}
        >
          <FrameChrome label="family" />
          <div className="p-6 sm:p-8">
            <h1 className="mb-8 font-[family-name:var(--font-display)] text-xl font-semibold">
              Family
            </h1>

            <section className="mb-10">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
                Students you can view
              </p>
              {linkedStudents.length === 0 ? (
                <p className="text-sm text-ink-2">
                  You&apos;re not linked to any student yet.
                </p>
              ) : (
                <div className="flex flex-col gap-3">
                  {linkedStudents.map((link) => (
                    <Link
                      key={link.id}
                      href={`/family/${link.studentUserId}`}
                      className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-paper p-4 hover:border-gold"
                    >
                      <span className="text-sm font-semibold">{link.studentEmail}</span>
                      <span className="text-xs text-ink-2 group-hover:text-gold">
                        View progress →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </section>

            {linkedGuardians.length > 0 && (
              <section>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-2">
                  Who can currently view your progress
                </p>
                <div className="flex flex-col gap-2">
                  {linkedGuardians.map((link) => (
                    <div
                      key={link.id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-paper p-3"
                    >
                      <span className="text-sm">{link.guardianEmail}</span>
                      <RevokeLinkButton linkId={link.id} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
