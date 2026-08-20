/**
 * Wires generated product images into src/lib/products.ts.
 *
 * For every product whose image file exists at public/images/products/<id>.jpg
 * (or .png), this rewrites its `image_url` and `images` fields to point at that
 * local file, removing any generic Unsplash placeholders. Products without a
 * generated image are left untouched so the script is safe to run incrementally.
 *
 * Usage: node scripts/apply_product_images.js
 */
const fs = require("fs");
const path = require("path");

const productsTs = path.join(__dirname, "..", "src", "lib", "products.ts");
const imgDir = path.join(__dirname, "..", "public", "images", "products");

function localImageFor(id) {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    const file = path.join(imgDir, `${id}.${ext}`);
    if (fs.existsSync(file)) return `/images/products/${id}.${ext}`;
  }
  return null;
}

const content = fs.readFileSync(productsTs, "utf8");
const lines = content.split("\n");

let currentId = null;
let wired = 0;
const wiredIds = [];
const seenIds = [];

for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/^\s{4}id: "([^"]+)",$/);
  if (idMatch) {
    currentId = idMatch[1];
    seenIds.push(currentId);
    continue;
  }

  if (!currentId) continue;
  const img = localImageFor(currentId);
  if (!img) continue;

  if (/^\s{4}image_url: /.test(lines[i])) {
    lines[i] = `    image_url: "${img}",`;
    wired++;
    wiredIds.push(currentId);
  } else if (/^\s{4}images: /.test(lines[i])) {
    lines[i] = `    images: ["${img}"],`;
  }
}

fs.writeFileSync(productsTs, lines.join("\n"));

const missing = seenIds.filter((id) => !wiredIds.includes(id));
console.log(`Total products: ${seenIds.length}`);
console.log(`Wired with real images: ${wired}`);
console.log(`Still missing images: ${missing.length}`);
if (missing.length > 0 && missing.length <= 40) {
  console.log("Missing ids:\n  " + missing.join("\n  "));
}
