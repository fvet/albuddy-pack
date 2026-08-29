#!/usr/bin/env node
// Fails if README.md and package.json `extensionPack` have drifted.
//
// `extensionPack` is the source of truth. The README mirrors it: one `##`
// section per group, in the same order, as a table whose first column links
// each extension to its Marketplace page. This check enforces that mirror -
// same IDs, same order, same group sizes - so an edit to one that misses the
// other cannot land silently.
//
// The extension ID is read from the `itemName=` parameter of the Marketplace
// URL in each row, so it works whether the second column is the raw ID or a
// prose description.
//
// No dependencies; run with `node scripts/check-readme-sync.js` (npm run check).

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pkgText = fs.readFileSync(path.join(root, "package.json"), "utf8");
const readmeText = fs.readFileSync(path.join(root, "README.md"), "utf8");

const errors = [];

// --- package.json side -----------------------------------------------------
// Parsed value gives the flat, ordered ID list. The raw text between the
// brackets gives the blank-line grouping (whitespace the JSON parser drops).
const pkg = JSON.parse(pkgText);
const pkgIds = pkg.extensionPack ?? [];
if (pkgIds.length === 0) errors.push("package.json: `extensionPack` is missing or empty.");

const arrStart = pkgText.indexOf("[", pkgText.indexOf('"extensionPack"'));
const arrayBlock = pkgText.slice(arrStart + 1, pkgText.indexOf("]", arrStart));
const pkgGroupSizes = arrayBlock
  .split(/\n[ \t]*\n/)
  .map((g) => (g.match(/"[^"]+"/g) ?? []).length)
  .filter((n) => n > 0);

// --- README side ---------------------------------------------------------
// Every `##` section whose table's first column header is "Extension" is an
// extension group. Collect the `itemName=` IDs per section, in document order.
const readmeGroups = [];
let current = null;
for (const line of readmeText.split(/\r?\n/)) {
  const heading = line.match(/^##\s+(.*\S)\s*$/);
  if (heading) {
    current = { name: heading[1], ids: [], isExtTable: false };
    readmeGroups.push(current);
    continue;
  }
  if (!current) continue;
  if (/^\|\s*Extension\s*\|/i.test(line)) current.isExtTable = true;
  const id = line.match(/itemName=([A-Za-z0-9][A-Za-z0-9._-]*)/);
  if (id && /^\s*\|/.test(line)) current.ids.push(id[1]);
}
const extGroups = readmeGroups.filter((g) => g.isExtTable);
const readmeIds = extGroups.flatMap((g) => g.ids);
const readmeGroupSizes = extGroups.map((g) => g.ids.length);

// --- compare -----------------------------------------------------------
const pkgSet = new Set(pkgIds);
const readmeSet = new Set(readmeIds);

for (const id of pkgIds) {
  if (!readmeSet.has(id)) errors.push(`In package.json but not in README.md: ${id}`);
}
for (const id of readmeIds) {
  if (!pkgSet.has(id)) errors.push(`In README.md but not in package.json: ${id}`);
}

if (pkgIds.join("\n") !== readmeIds.join("\n") && errors.length === 0) {
  errors.push(
    "Same IDs, different order. README.md tables must list extensions in the " +
      "same order as `extensionPack`."
  );
}

if (pkgGroupSizes.join(",") !== readmeGroupSizes.join(",")) {
  errors.push(
    `Group sizes differ - package.json: [${pkgGroupSizes.join(", ")}], ` +
      `README.md: [${readmeGroupSizes.join(", ")}]. Keep one blank-line-separated ` +
      "group in the array per `##` extension section in the README."
  );
}

// --- report ----------------------------------------------------------
if (errors.length > 0) {
  console.error("README.md is out of sync with package.json `extensionPack`:\n");
  for (const e of errors) console.error(`  - ${e}`);
  console.error(
    "\nFix: edit `extensionPack`, then mirror it into the README.md sections " +
      "(same order, same grouping)."
  );
  process.exit(1);
}

console.log(
  `OK - ${pkgIds.length} extensions, ${pkgGroupSizes.length} groups, ` +
    "README.md matches package.json."
);
