import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const cvDirectory = path.join(root, "public", "cv");
const parts = await Promise.all(
  ["part00.txt", "part01.txt", "part02.txt"].map((file) =>
    readFile(path.join(cvDirectory, file), "utf8")
  )
);

const pdf = Buffer.from(parts.join("").replace(/\s+/g, ""), "base64");

if (pdf.subarray(0, 5).toString() !== "%PDF-") {
  throw new Error("CV file could not be reconstructed.");
}

await writeFile(path.join(root, "public", "Sherif-Saad-Sofiu-CV.pdf"), pdf);
console.log("CV PDF generated.");
