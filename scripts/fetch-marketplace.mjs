// Clones (or updates) the marketplace repo into ./marketplace for local development.
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const REPO = 'https://github.com/gmbalaa14/thiran-pattarai';
const run = (args, opts = {}) => execFileSync('git', args, { stdio: 'inherit', ...opts });

if (existsSync('marketplace/.git')) run(['-C', 'marketplace', 'pull', '--ff-only']);
else run(['clone', '--depth', '1', REPO, 'marketplace']);
