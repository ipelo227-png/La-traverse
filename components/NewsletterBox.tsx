"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function NewsletterBox({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: formData.get("email") }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Inscription impossible");
      }

      setState("success");
      setMessage("Merci. Le formulaire est prêt à être relié au service choisi.");
      form.reset();
    } catch {
      setState("error");
      setMessage("L’inscription n’a pas pu être enregistrée pour le moment.");
    }
  }

  return (
    <div className={compact ? "border border-line bg-paper p-5" : "border border-line bg-night p-6 text-paper md:p-8"}>
      <div className="flex items-center gap-3">
        <span className={compact ? "flex h-10 w-10 items-center justify-center bg-night text-paper" : "flex h-10 w-10 items-center justify-center bg-paper text-night"}>
          <Mail aria-hidden size={19} />
        </span>
        <div>
          <p className="text-xs font-bold uppercase opacity-70">Newsletter</p>
          <h2 className="font-serif text-2xl leading-tight">Le briefing des rapports de force</h2>
        </div>
      </div>
      <p className={compact ? "mt-4 text-sm leading-6 text-muted" : "mt-4 text-sm leading-6 text-paper/75"}>
        Une synthèse hebdomadaire pour relier actualité internationale, macroéconomie, politique et théorie.
      </p>
      <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <input
          aria-label="Adresse email"
          className="focus-ring min-h-12 flex-1 border border-line bg-white px-4 text-sm text-ink placeholder:text-muted"
          name="email"
          placeholder="adresse@email.fr"
          required
          type="email"
        />
        <button className="focus-ring min-h-12 bg-wine px-5 text-sm font-semibold text-paper transition hover:bg-night disabled:opacity-65" disabled={state === "loading"} type="submit">
          {state === "loading" ? "Envoi..." : "S’inscrire"}
        </button>
      </form>
      {message ? <p className={`mt-3 text-sm ${state === "error" ? "text-wine" : compact ? "text-moss" : "text-paper/80"}`}>{message}</p> : null}
    </div>
  );
}
