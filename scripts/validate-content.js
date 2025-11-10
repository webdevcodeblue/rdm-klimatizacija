/**
 * ========================================
 * CONTENT VALIDATION SCRIPT
 * ========================================
 *
 * Provjerava sve .md fajlove u src/content/ za:
 * 1. Trailing/leading whitespace u ključnim poljima (manufacturer, name, model)
 * 2. Duplikate proizvođača/kategorija
 * 3. Nekonzistentne nazive
 *
 * Korištenje:
 * - node scripts/validate-content.js (lokalno testiranje)
 * - Automatski se pokreće prije builda
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Boje za terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

// Kategorije koje imaju filter (ne uključuje alati-materijali i montaza-servis)
const CATEGORIES_WITH_FILTERS = [
  'klima-uredaji',
  'multi-klima',
  'dizalice-topline',
  'mikroklima'
];

let hasErrors = false;
let hasWarnings = false;

/**
 * Parsira YAML frontmatter iz markdown fajla
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) return null;

  const frontmatter = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    // Skip empty lines and comments
    if (!line.trim() || line.trim().startsWith('#')) continue;

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    frontmatter[key] = value;
  }

  return frontmatter;
}

/**
 * Provjerava ima li string trailing ili leading whitespace
 */
function hasWhitespace(str) {
  return str !== str.trim();
}

/**
 * Skenira sve .md fajlove u određenoj kategoriji
 */
function scanCategory(categoryPath, categoryName) {
  const issues = [];
  const manufacturers = new Set();

  if (!fs.existsSync(categoryPath)) {
    return { issues, manufacturers };
  }

  const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(categoryPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = parseFrontmatter(content);

    if (!frontmatter) {
      issues.push({
        type: 'error',
        file,
        message: 'Nije moguće parsirati frontmatter'
      });
      continue;
    }

    // Provjeri manufacturer whitespace
    if (frontmatter.manufacturer) {
      manufacturers.add(frontmatter.manufacturer);

      if (hasWhitespace(frontmatter.manufacturer)) {
        issues.push({
          type: 'error',
          file,
          field: 'manufacturer',
          value: `"${frontmatter.manufacturer}"`,
          message: 'Sadrži trailing ili leading whitespace'
        });
      }
    }

    // Provjeri name whitespace
    if (frontmatter.name && hasWhitespace(frontmatter.name)) {
      issues.push({
        type: 'warning',
        file,
        field: 'name',
        value: `"${frontmatter.name}"`,
        message: 'Sadrži trailing ili leading whitespace'
      });
    }

    // Provjeri model whitespace
    if (frontmatter.model && hasWhitespace(frontmatter.model)) {
      issues.push({
        type: 'warning',
        file,
        field: 'model',
        value: `"${frontmatter.model}"`,
        message: 'Sadrži trailing ili leading whitespace'
      });
    }
  }

  return { issues, manufacturers };
}

/**
 * Provjerava ima li sličnih (ali različitih) naziva proizvođača
 */
function checkSimilarManufacturers(manufacturers) {
  const issues = [];
  const manufacturerList = Array.from(manufacturers);

  for (let i = 0; i < manufacturerList.length; i++) {
    for (let j = i + 1; j < manufacturerList.length; j++) {
      const m1 = manufacturerList[i];
      const m2 = manufacturerList[j];

      // Provjeri case-insensitive duplikate
      if (m1.toLowerCase() === m2.toLowerCase() && m1 !== m2) {
        issues.push({
          type: 'warning',
          message: `Proizvođači se razlikuju samo u case-u: "${m1}" i "${m2}"`,
          suggestion: `Preporuka: Koristiti konzistentno "${m1}"`
        });
      }
    }
  }

  return issues;
}

/**
 * Main validation funkcija
 */
function validateContent() {
  console.log(`${colors.cyan}${colors.bold}╔════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold}║   CONTENT VALIDATION - ANALIZA         ║${colors.reset}`);
  console.log(`${colors.cyan}${colors.bold}╚════════════════════════════════════════╝${colors.reset}\n`);

  const contentPath = path.join(__dirname, '..', 'src', 'content');
  const allManufacturers = new Set();
  let totalIssues = 0;

  // Skeniraj samo kategorije s filterima
  for (const category of CATEGORIES_WITH_FILTERS) {
    const categoryPath = path.join(contentPath, category);

    console.log(`${colors.bold}📁 Kategoija: ${category}${colors.reset}`);

    const { issues, manufacturers } = scanCategory(categoryPath, category);

    // Dodaj proizvođače u global set
    manufacturers.forEach(m => allManufacturers.add(m));

    if (issues.length === 0) {
      console.log(`${colors.green}   ✓ Nema problema${colors.reset}\n`);
      continue;
    }

    totalIssues += issues.length;

    // Grupiraj po tipu
    const errors = issues.filter(i => i.type === 'error');
    const warnings = issues.filter(i => i.type === 'warning');

    if (errors.length > 0) {
      hasErrors = true;
      console.log(`${colors.red}   ✗ ${errors.length} greška/e:${colors.reset}`);
      errors.forEach(err => {
        console.log(`${colors.red}     • ${err.file}${colors.reset}`);
        console.log(`       ${err.field}: ${err.value}`);
        console.log(`       ${err.message}\n`);
      });
    }

    if (warnings.length > 0) {
      hasWarnings = true;
      console.log(`${colors.yellow}   ⚠ ${warnings.length} upozorenje/a:${colors.reset}`);
      warnings.forEach(warn => {
        console.log(`${colors.yellow}     • ${warn.file}${colors.reset}`);
        if (warn.field) {
          console.log(`       ${warn.field}: ${warn.value}`);
        }
        console.log(`       ${warn.message}\n`);
      });
    }
  }

  // Provjeri slične proizvođače
  console.log(`${colors.bold}🔍 Provjera konzistencije proizvođača${colors.reset}`);
  const similarIssues = checkSimilarManufacturers(allManufacturers);

  if (similarIssues.length > 0) {
    hasWarnings = true;
    similarIssues.forEach(issue => {
      console.log(`${colors.yellow}   ⚠ ${issue.message}${colors.reset}`);
      if (issue.suggestion) {
        console.log(`     ${issue.suggestion}\n`);
      }
    });
  } else {
    console.log(`${colors.green}   ✓ Svi proizvođači su konzistentni${colors.reset}\n`);
  }

  // Prikaži sažetak
  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bold}SAŽETAK:${colors.reset}`);
  console.log(`  Ukupno proizvođača: ${colors.bold}${allManufacturers.size}${colors.reset}`);
  console.log(`  Ukupno problema: ${colors.bold}${totalIssues + similarIssues.length}${colors.reset}`);

  if (hasErrors) {
    console.log(`${colors.red}${colors.bold}  Status: FAILED ✗${colors.reset}`);
  } else if (hasWarnings) {
    console.log(`${colors.yellow}${colors.bold}  Status: PASSED s upozorenjima ⚠${colors.reset}`);
  } else {
    console.log(`${colors.green}${colors.bold}  Status: PASSED ✓${colors.reset}`);
  }
  console.log(`${colors.cyan}${colors.bold}═══════════════════════════════════════${colors.reset}\n`);

  // Exit s error kodom ako ima grešaka
  if (hasErrors) {
    console.log(`${colors.red}${colors.bold}⚠ Build će failati zbog grešaka. Molimo ispravite probleme.${colors.reset}\n`);
    process.exit(1);
  }

  if (hasWarnings) {
    console.log(`${colors.yellow}${colors.bold}ℹ Build će proći, ali preporučujemo ispravljanje upozorenja.${colors.reset}\n`);
  }
}

// Pokreni validaciju
validateContent();
