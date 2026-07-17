import { cpSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'src/assets/fonts');
mkdirSync(out, { recursive: true });

const files = [
    ['node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2', 'dm-sans-latin-400-normal.woff2'],
    ['node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff2', 'dm-sans-latin-500-normal.woff2'],
    ['node_modules/@fontsource/dm-sans/files/dm-sans-latin-600-normal.woff2', 'dm-sans-latin-600-normal.woff2'],
    ['node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff2', 'dm-sans-latin-700-normal.woff2'],
    ['node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2', 'ibm-plex-mono-latin-500-normal.woff2'],
    ['node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2', 'ibm-plex-mono-latin-600-normal.woff2'],
];

for (const [src, dest] of files) {
    cpSync(join(root, src), join(out, dest));
}
