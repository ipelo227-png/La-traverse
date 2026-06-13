export function MarkdownRenderer({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="editorial-prose">
      {blocks.map((block, index) => {
        if (block.startsWith("## ")) {
          return <h2 key={index}>{block.replace(/^## /, "")}</h2>;
        }

        if (block.startsWith("### ")) {
          return <h3 key={index}>{block.replace(/^### /, "")}</h3>;
        }

        if (block.startsWith("- ")) {
          return (
            <ul key={index}>
              {block.split(/\r?\n/).map((item) => (
                <li key={item}>{item.replace(/^- /, "")}</li>
              ))}
            </ul>
          );
        }

        return <p key={index}>{block}</p>;
      })}
    </div>
  );
}
