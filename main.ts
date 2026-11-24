import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The weirdest job title: a senior role, a real-sounding profession
// (relocation therapist), and one gloriously specific twist — the
// clients are penguins. Short, vivid, instantly picturable.
const TITLE = "Senior Penguin Relocation Therapist";

const MAX_CHARS = 60;

function assertValid(title: string): void {
  if (title.length < 1 || title.length > MAX_CHARS) {
    throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${title.length}`);
  }
  if (title.trim().length === 0) {
    throw new Error("Entry must not be only white space");
  }
  if (/[\r\n]/.test(title)) {
    throw new Error("Entry must be a single line");
  }
}

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

assertValid(TITLE);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, OUTPUT_FILE), TITLE, "utf8");
console.log(`Wrote ${TITLE.length} characters to ${join(OUTPUT_DIR, OUTPUT_FILE)}: ${TITLE}`);
