import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const cvDir = path.join(process.cwd(), "public", "cv");
  const parts = await Promise.all([
    readFile(path.join(cvDir, "part00.txt"), "utf8"),
    readFile(path.join(cvDir, "part01.txt"), "utf8"),
    readFile(path.join(cvDir, "part02.txt"), "utf8"),
  ]);

  const pdf = Buffer.from(parts.join("").replace(/\s+/g, ""), "base64");

  if (pdf.subarray(0, 5).toString() !== "%PDF-") {
    return new NextResponse("CV file could not be reconstructed.", { status: 500 });
  }

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Sherif-Saad-Sofiu-CV.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
