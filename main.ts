import { mkdirSync, writeFileSync } from "node:fs";

// One line about a small good thing that happened today (24 Nov 2026):
// the warung auntie saved the last fried banana and refused payment.
// Deterministic: no network, no RNG, no clock — the same line every run.
const entry =
  "At 6 a.m. the warung auntie saved me the last fried banana and waved my coins away — today started with someone else keeping score.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
