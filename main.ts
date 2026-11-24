// One-Sentence Absurd Invention Pitch — make.fun entry.
// The program writes one sentence to /output/entry.txt: a pitch for an
// umbrella that takes the weather to court every time it rains.
import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 146 characters: the annoyance (rain, soggy socks), the
// invention (a litigious umbrella) and its silly mechanism (suing the
// clouds, then billing the sky) in a single clean line.
const TEXT =
  "Meet the umbrella that sues the clouds for emotional damages every time it rains, " +
  "then sends the sky an itemised bill for one pair of soggy socks.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
