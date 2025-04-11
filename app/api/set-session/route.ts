export const runtime = 'nodejs';

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/firebase/admin";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { idToken } = body;

  if (!idToken) {
    return NextResponse.json({ success: false, message: "Missing token" }, { status: 400 });
  }

  try {
    const expiresIn = 60 * 60 * 24 * 7 * 1000; // 1 week

    const sessionCookie = await auth.createSessionCookie(idToken, { expiresIn });

    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: "session",
      value: sessionCookie,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: expiresIn / 1000,
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error creating session cookie:", error);
    return NextResponse.json({ success: false, message: "Failed to create session" }, { status: 500 });
  }
}
