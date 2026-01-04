/**
 * Script to generate registry.json from icons directory
 *
 * This ensures the shadcn registry stays in sync with the icon files.
 * Run with: `npm run registry:build`
 */

import * as fs from "fs";
import * as path from "path";

const ICONS_DIR = path.join(__dirname, "..", "icons");
const REGISTRY_PATH = path.join(__dirname, "..", "registry.json");

// Files to exclude from registry (not actual icons)
const EXCLUDED_FILES = ["index.ts", "types.ts"];

interface RegistryItem {
  name: string;
  type: "registry:ui";
  registryDependencies: string[];
  dependencies: string[];
  devDependencies: string[];
  files: { path: string; type: "registry:ui" }[];
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

/**
 * Get all icon files from the icons directory
 */
function getIconFiles(): string[] {
  try {
    const files = fs.readdirSync(ICONS_DIR);

    return files.filter((file) => {
      // Only include .tsx files
      if (!file.endsWith(".tsx")) return false;
      // Exclude non-icon files
      if (EXCLUDED_FILES.includes(file)) return false;
      return true;
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.error(`❌ Error: Icons directory not found at "${ICONS_DIR}"`);
      console.error(
        "   Make sure you're running this script from the project root.",
      );
    } else if ((error as NodeJS.ErrnoException).code === "EACCES") {
      console.error(`❌ Error: Permission denied reading "${ICONS_DIR}"`);
    } else {
      console.error(`❌ Error reading icons directory: ${error}`);
    }
    process.exit(1);
  }
}

/**
 * Convert filename to registry name (remove .tsx extension)
 */
function fileToRegistryName(filename: string): string {
  return filename.replace(".tsx", "");
}

/**
 * Generate a registry item for an icon file
 */
function generateRegistryItem(filename: string): RegistryItem {
  const name = fileToRegistryName(filename);

  return {
    name,
    type: "registry:ui",
    registryDependencies: [],
    dependencies: ["motion"],
    devDependencies: [],
    files: [
      {
        path: `icons/${filename}`,
        type: "registry:ui",
      },
      {
        path: "icons/types.ts",
        type: "registry:ui",
      },
    ],
  };
}

/**
 * Extract icon names from icons/index.ts ICON_LIST
 */
function getIconListNames(): string[] {
  const indexPath = path.join(ICONS_DIR, "index.ts");

  try {
    const content = fs.readFileSync(indexPath, "utf-8");

    // Match all name: "xxx" patterns in ICON_LIST
    const namePattern = /name:\s*["']([^"']+)["']/g;
    const names: string[] = [];
    let match;

    while ((match = namePattern.exec(content)) !== null) {
      const name = match[1];
      // Only include names with hyphens (icon names like "github-icon")
      // This excludes customProps names like "shakeOnClick", "dangerHover"
      if (name.includes("-")) {
        names.push(name);
      }
    }

    return [...new Set(names)];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.error(`❌ Error: icons/index.ts not found at "${indexPath}"`);
    } else if ((error as NodeJS.ErrnoException).code === "EACCES") {
      console.error(`❌ Error: Permission denied reading "${indexPath}"`);
    } else {
      console.error(`❌ Error reading icons/index.ts: ${error}`);
    }
    process.exit(1);
  }
}

/**
 * Validate that all icon files are registered in ICON_LIST
 */
function validateIconList(iconFiles: string[]): void {
  const iconListNames = new Set(getIconListNames());
  const fileNames = new Set(iconFiles.map(fileToRegistryName));

  // Find icons in files but not in ICON_LIST
  const missingFromList: string[] = [];
  for (const fileName of fileNames) {
    if (!iconListNames.has(fileName)) {
      missingFromList.push(fileName);
    }
  }

  // Find icons in ICON_LIST but not in files
  const missingFromFiles: string[] = [];
  for (const listName of iconListNames) {
    if (!fileNames.has(listName)) {
      missingFromFiles.push(listName);
    }
  }

  // Report warnings
  if (missingFromList.length > 0) {
    console.log("");
    console.log(
      `⚠️  Warning: ${missingFromList.length} icon(s) not in ICON_LIST (won't show on website):`,
    );
    missingFromList.forEach((name) => console.log(`   - ${name}`));
    console.log("   → Add them to icons/index.ts to display on the website");
  }

  if (missingFromFiles.length > 0) {
    console.log("");
    console.log(
      `⚠️  Warning: ${missingFromFiles.length} ICON_LIST entry(s) without matching file:`,
    );
    missingFromFiles.forEach((name) => console.log(`   - ${name}`));
    console.log("   → Remove them from icons/index.ts or create the file");
  }
}

/**
 * Write registry.json file
 */
function writeRegistry(content: string): void {
  try {
    fs.writeFileSync(REGISTRY_PATH, content);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "EACCES") {
      console.error(
        `❌ Error: Permission denied writing to "${REGISTRY_PATH}"`,
      );
    } else if ((error as NodeJS.ErrnoException).code === "ENOSPC") {
      console.error("❌ Error: No space left on disk");
    } else if ((error as NodeJS.ErrnoException).code === "EROFS") {
      console.error("❌ Error: File system is read-only");
    } else {
      console.error(`❌ Error writing registry.json: ${error}`);
    }
    process.exit(1);
  }
}

/**
 * Main function to generate registry.json
 */
function generateRegistry(): void {
  console.log("Scanning icons directory...");
  const iconFiles = getIconFiles();
  console.log(`Found ${iconFiles.length} icon files`);

  console.log("Generating registry items...");
  const items = iconFiles.map(generateRegistryItem);

  // Sort items alphabetically by name
  items.sort((a, b) => a.name.localeCompare(b.name));

  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "itshover",
    homepage: "https://itshover.com",
    items,
  };

  console.log("Writing registry.json...");

  // Add auto-generated notice as a JSON field (since JSON doesn't support comments)
  const registryWithNotice = {
    _generated:
      "AUTO-GENERATED FILE - DO NOT EDIT. Run 'npm run registry:build' to regenerate.",
    ...registry,
  };

  const jsonContent = JSON.stringify(registryWithNotice, null, 2) + "\n";
  writeRegistry(jsonContent);

  console.log("");
  console.log("✅ Registry generated successfully!");
  console.log(`  - Total icons: ${items.length}`);

  // Validate ICON_LIST sync
  validateIconList(iconFiles);

  console.log("");
}

// Run the script
generateRegistry();
