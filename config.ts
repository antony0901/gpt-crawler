import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.shopeeanalytics.com",
  match: "https://www.shopeeanalytics.com/vn/ma-giam-gia/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};
