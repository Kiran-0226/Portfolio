import fs from "fs";
import path from "path";
import sharp from "sharp";

const assetsDirectory = path.resolve(
  "src",
  "assets"
);

const certificateFiles = [
  "AA.jpg",
  "AC.jpg",
  "AI.jpg",
  "BB.jpg",
  "BCA.jpg",
  "CN.jpg",
  "ISE.jpg",
];

async function optimizeImage(filename) {
  const inputPath = path.join(
    assetsDirectory,
    filename
  );

  const temporaryPath = path.join(
    assetsDirectory,
    `optimized-${filename}`
  );

  if (!fs.existsSync(inputPath)) {
    console.log(`❌ Missing: ${filename}`);
    return;
  }

  const originalSize = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .jpeg({
      quality: 82,
      progressive: true,
      mozjpeg: true,
    })
    .toFile(temporaryPath);

  const optimizedSize = fs.statSync(
    temporaryPath
  ).size;

  fs.renameSync(
    temporaryPath,
    inputPath
  );

  const originalMB =
    originalSize / 1024 / 1024;

  const optimizedMB =
    optimizedSize / 1024 / 1024;

  const reduction =
    ((originalSize - optimizedSize) /
      originalSize) *
    100;

  console.log(
    `✅ ${filename}: ${originalMB.toFixed(
      2
    )} MB → ${optimizedMB.toFixed(
      2
    )} MB (${reduction.toFixed(1)}% smaller)`
  );
}

async function main() {
  console.log(
    "\n🔧 Optimizing certificate images...\n"
  );

  for (const filename of certificateFiles) {
    await optimizeImage(filename);
  }

  console.log(
    "\n✅ Certificate image optimization complete.\n"
  );
}

main().catch((error) => {
  console.error(
    "\n❌ Optimization failed:\n",
    error
  );

  process.exit(1);
});