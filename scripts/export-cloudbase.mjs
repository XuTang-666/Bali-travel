import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("cloudbase-export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://localhost/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}.`);
}

const contentType = response.headers.get("content-type") ?? "";
if (!contentType.toLowerCase().startsWith("text/html")) {
  throw new Error(`Expected HTML, received ${contentType || "no content type"}.`);
}

const html = (await response.text()).replaceAll(
  "https://indonesia-island-journey.johnnyyy6666.chatgpt.site/",
  "/",
);
const outputDir = path.join(projectRoot, "cloudbase-dist");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(path.join(projectRoot, "dist", "client"), outputDir, {
  recursive: true,
});
await writeFile(path.join(outputDir, "index.html"), html, "utf8");
await writeFile(path.join(outputDir, "404.html"), html, "utf8");

console.log(`CloudBase static export written to ${outputDir}`);
