import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const lines = [
  "Do not skip the second dry-run when deploying the database migration on Tuesday evening at six o'clock.",
  "That fifteen-minute shortcut dropped the user session tables, cost you your weekend, and forced the company to take automated backups seriously."
].join('\n');
writeFileSync(join(outputDir, 'entry.txt'), lines);
