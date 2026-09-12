// Converts the built homepage HTML (per locale) into a markdown file for
// agent consumption, since overrides/home.html + overrides/locales/*.html
// is a Jinja2 template with no plain-markdown equivalent - unlike every
// other page on the site, which is authored directly in markdown.
//
// Reads: site/index.html, site/<locale>/index.html (mkdocs build output)
// Writes: docs/<locale>/index.generated.md
//
// Assumption (confirm against mkdocs.yml if this changes): docs source is
// organized as docs/<locale>/..., with "en" as the default/root locale.

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const TurndownService = require("turndown");

const SITE_DIR = path.join(process.cwd(), "site");
const DOCS_DIR = path.join(process.cwd(), "docs");

const turndown = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-"
});

// Strip elements that are chrome, not content: nav, header, footer, scripts,
// styles, and the cookie-consent dialog.
const STRIP_SELECTORS = [
  "header.md-header",
  "nav.md-nav",
  ".md-sidebar",
  "footer.md-footer",
  "script",
  "style",
  "link",
  ".md-consent",
  ".md-dialog",
  "button.md-top"
];

function extractLocaleDirs() {
  const locales = [{ locale: "en", dir: SITE_DIR }];

  if (!fs.existsSync(SITE_DIR)) {
    throw new Error(`Build output not found at ${SITE_DIR}. Run "mkdocs build" first.`);
  }

  for (const entry of fs.readdirSync(SITE_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const candidateIndex = path.join(SITE_DIR, entry.name, "index.html");
    if (fs.existsSync(candidateIndex)) {
      locales.push({ locale: entry.name, dir: path.join(SITE_DIR, entry.name) });
    }
  }

  return locales;
}

function convertOne({ locale, dir }) {
  const htmlPath = path.join(dir, "index.html");
  if (!fs.existsSync(htmlPath)) {
    console.warn(`[skip] No index.html for locale "${locale}" at ${htmlPath}`);
    return;
  }

  const html = fs.readFileSync(htmlPath, "utf-8");
  const dom = new JSDOM(html);
  const document = dom.window.document;

  for (const selector of STRIP_SELECTORS) {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  }

  // Main content lives inside <main class="md-main">; fall back to <body>
  // if that structure ever changes.
  const main = document.querySelector("main.md-main") || document.body;

  const markdown = turndown.turndown(main.innerHTML).trim();

  const title = document.querySelector("title")?.textContent?.trim() || "";

  const frontmatter = [
    "---",
    "template: home.html",
    `title: ${title}`,
    "# This file is auto-generated from overrides/home.html +",
    "# overrides/locales/" + locale + ".html - do not edit directly.",
    "---",
    ""
  ].join("\n");

  const outDir = path.join(DOCS_DIR, locale);
  const outPath = path.join(outDir, "index.generated.md");

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, frontmatter + "\n" + markdown + "\n");

  console.log(`[ok] Wrote ${outPath}`);
}

function main() {
  const locales = extractLocaleDirs();
  for (const entry of locales) {
    convertOne(entry);
  }
}

main();
