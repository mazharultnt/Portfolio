// Rebuilds IMAGE_PROMPTS.md from src/data/images.ts
// Run with:  npm run prompts
import { writeFileSync } from "node:fs";
import { images } from "../src/data/images.ts";

const entries = Object.values(images);
let out = `# AI Image Generation Prompt Checklist

Total images: ${entries.length}

How to use each entry:
1. Copy the prompt into ChatGPT (image generation), DALL-E or Midjourney.
2. Download the picture and rename it to the exact file name shown.
3. Put it inside the \`public/images/\` folder, then refresh the website.

Entries marked "USE YOUR REAL DOCUMENT" must be real scans, not AI images.

`;

entries.forEach((e, i) => {
  out += `--------------------------------------------------
**${i + 1}. Image File Path:** images/${e.file}  (project folder: public/images/${e.file})
**Where it appears:** ${e.where}
**Suggested Image Size / Aspect Ratio:** ${e.ratio} (${e.size})
**Detailed ChatGPT Image Prompt:** ${e.prompt}

`;
});
writeFileSync("IMAGE_PROMPTS.md", out);
console.log(`Wrote IMAGE_PROMPTS.md with ${entries.length} entries`);
