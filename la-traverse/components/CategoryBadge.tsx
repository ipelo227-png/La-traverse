import { getRubricBySlug } from "@/lib/content";

export function CategoryBadge({ slug }: { slug: string }) {
  const rubric = getRubricBySlug(slug);
  const colorClass = {
    night: "border-night text-night",
    wine: "border-wine text-wine",
    moss: "border-moss text-moss",
    brass: "border-brass text-brass",
    lake: "border-lake text-lake",
    mauve: "border-mauve text-mauve",
    ochre: "border-ochre text-ochre"
  }[rubric?.color ?? "night"];

  return (
    <span className={`inline-flex w-fit border px-2.5 py-1 text-[0.7rem] font-bold uppercase ${colorClass}`}>
      {rubric?.title ?? slug}
    </span>
  );
}
