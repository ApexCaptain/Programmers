const { Floss } = require("@apexcaptain/candyfloss");
const { readdirSync } = require("fs");
const path = require("path");
module.exports = {
  ts: {
    dev: {
      build: "tsc",
    },
    test: {
      byNumber: new Floss((params) => {
        let found = false;
        let dirPath = "./src";
        for (const eachDir of readdirSync(dirPath)) {
          for (const eachSubDir of readdirSync(
            path.normalize(path.join(dirPath, eachDir))
          )) {
            if (eachSubDir == params.number) {
              found = true;
              dirPath = path.normalize(path.join(dirPath, eachDir, eachSubDir));
            }
          }
          if (found) break;
        }
        if (!found)
          throw new Error(`No such question number ${params.number} is set`);
        return `mocha -r ts-node/register ${path.join(
          dirPath,
          "TypeScript",
          ".spec.ts"
        )}`;
      }).addCliParam({
        isRequired: true,
        flags: "-n --number <number>",
      }),

      level1: "mocha -r ts-node/register ./src/Level1/**/.spec.ts",
      level2: "mocha -r ts-node/register ./src/Level2/**/.spec.ts",
      level3: "mocha -r ts-node/register ./src/Level3/**/.spec.ts",
    },
  },
};
