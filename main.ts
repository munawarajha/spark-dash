// Spark Dash — entry program for make.fun's "Day one, day seven" bounty.
//
// The entry itself is the TikTok video (the game on its first day, and the
// same game after a week of daily updates). This program does the one thing
// the grader needs: it hands the video's address over, by copying
// VIDEO.json from the repository root into /output/VIDEO.json.
//
// Node 22, standard library only. It runs twice in the grader and must
// produce the same bytes both times, so it does nothing but copy.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(botDir, 'VIDEO.json');
const dst = join(outDir, 'VIDEO.json');

// The address must be a JSON object with a string url; anything else is a
// broken entry, so fail loudly instead of copying garbage.
let parsed;
try {
  parsed = JSON.parse(readFileSync(src, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json at ${src} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (!parsed || typeof parsed !== 'object' || typeof parsed.url !== 'string') {
  console.error(`VIDEO.json at ${src} has no string "url" field`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(src, dst);
} catch (err) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`copied VIDEO.json -> ${dst}`);
