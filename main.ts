// Everyday Wonder, Two Days to Find the Line — make.fun entry (program/v1).
//
// The program writes one sentence to /output/entry.txt: a small moment of
// wonder in everyday life. The gate accepts 1-200 characters of non-blank
// UTF-8 text on one line, so the program refuses to write anything that
// would fail it.
//
// The sentence: the escalator handrail outruns the steps by a hair, a
// tiny everyday mismatch almost everyone has felt in their palm but never
// put into words — the hand arrives before its owner does.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The escalator handrail outruns the steps by a hair, so my hand keeps arriving before I do.";

const OUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  const text = LINE.trim();
  if (!text || text.includes("\n") || text.length < 1 || text.length > 200) {
    throw new Error("entry line must be one line of 1-200 characters");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text, "utf-8");
}

main();
