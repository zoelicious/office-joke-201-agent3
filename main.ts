import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
void here;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const text = "We hit 110% of our Q3 target, so leadership raised the target to 120% and called it a lesson in humility.";

writeFileSync(join(outDir, "entry.txt"), text, "utf8");
