import type { ReactNode } from "react";
import { SectionTitle } from "@/components/SectionTitle";

export function EditorialSection({
  eyebrow,
  title,
  description,
  children,
  tone = "paper"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  tone?: "paper" | "white" | "night";
}) {
  const toneClass = {
    paper: "bg-paper",
    white: "bg-white/45",
    night: "bg-night text-paper"
  }[tone];

  return (
    <section className={`${toneClass} border-t border-line px-5 py-16 md:py-20`}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
