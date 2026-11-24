// One-Sentence Absurd Invention Pitch — make.fun entry.
// Writes one sentence pitching a ridiculous invention to /output/entry.txt:
// an umbrella that sues the clouds every time it rains.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Meet the umbrella that sues the clouds for emotional damages every time it rains, " +
  "then sends the sky an itemised bill for one pair of soggy socks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
