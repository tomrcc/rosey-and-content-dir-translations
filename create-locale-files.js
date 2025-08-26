import fs from "fs";
import path from "path";

(async () => {
  const locales = ["fr"];
  const baseDataPath = path.join("rosey", "base.json");
  const localesDirPath = path.join("rosey", "locales");
  const baseData = await readJsonFile(baseDataPath);
  const baseKeys = baseData.keys;

  await Promise.all(
    locales.map(async (locale) => {
      const localePath = path.join(localesDirPath, `${locale}.json`);
      const existingLocaleData = await readJsonFile(localePath);
      const dataToWrite = {};

      for (const key in baseKeys) {
        const keyData = baseKeys[key];
        const existingKeyValue = existingLocaleData[key].value;
        dataToWrite[key] = {
          original: keyData.original,
          value: existingKeyValue || keyData.original,
        };
      }

      const localeData = JSON.stringify(dataToWrite);
      await fs.promises.writeFile(localePath, localeData);
    })
  );
})();

async function readJsonFile(filePath) {
  const rawData = await fs.promises.readFile(filePath);
  return JSON.parse(rawData);
}
