export function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="border border-line bg-paper px-2.5 py-1 text-xs text-muted">
          {tag}
        </li>
      ))}
    </ul>
  );
}
