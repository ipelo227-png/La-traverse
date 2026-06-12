import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { email?: string } | null;
  const email = body?.email?.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, message: "Adresse email invalide." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Inscription reçue par le fallback local. Connectez un service réel dans cette route."
  });
}
