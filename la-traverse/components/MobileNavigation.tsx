"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/components/MainNavigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        className="focus-ring inline-flex h-10 w-10 items-center justify-center border border-line bg-paper text-night"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
      </button>
      {isOpen ? (
        <div className="absolute left-0 right-0 top-full border-y border-line bg-paper px-5 py-5 shadow-editorial">
          <nav aria-label="Navigation mobile" className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-semibold uppercase text-night">
            {navigationItems.map((item) => (
              <Link key={item.href} className="focus-ring rounded-sm py-1" href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link className="focus-ring rounded-sm py-1 text-wine" href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
