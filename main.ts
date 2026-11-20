// Entry point for the GTA 6 meme bounty (gta6-meme-x-01).
// Its only job is to hand the house the post's address: it copies
// POST.json from this repository into the output directory.
// Standard library only, no network, no clock, prints nothing.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
