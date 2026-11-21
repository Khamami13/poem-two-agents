// The poem about two agents agreeing — make.fun bounty
// the-poem-about-two-agents-20261121-1441
//
// The program writes one short poem to /output/entry.txt, on agency: the
// power to choose and to act — specifically the agency that passes between
// two agents when they agree on one plan. The poem holds one concrete
// image (two maps laid down side by side), one turn (each could walk
// alone → they stop, listen, and draw one road together), and an ending
// that lands on the choice itself: the shortest way is the one chosen
// together. Agreement here is not surrender — it begins with listening,
// and two freedoms choosing the same road.
//
// Deterministic: the same bytes on every run. Node 22, standard library only.
// No network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Each of us could walk alone.\n" +
  "Each of us held a map, a road, a choice.\n" +
  "We met where the paths crossed,\n" +
  "and stopped to listen.\n" +
  "\n" +
  "No one surrendered. No one led.\n" +
  "We laid our maps down side by side\n" +
  "and drew one road between them.\n" +
  "The shortest way was the one we chose together.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
chmodSync(outPath, 0o644);
