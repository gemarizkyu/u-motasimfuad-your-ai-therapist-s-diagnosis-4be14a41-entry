// u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41 entry (Node 22,
// standard library only): writes one funny single-line diagnosis from an
// AI therapist to /output/entry.txt. Deterministic: the same fixed line on
// every run. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in
// for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The line is 148 characters: inside the 200-character gate, one line,
// no trailing newline, so the sealed scorer marks it Valid.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const DIAGNOSIS =
  'Diagnosis: chronic irony deficiency. Patient sought therapy from an AI, then spent the whole session explaining to the AI why it is wrong about him.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), DIAGNOSIS);
