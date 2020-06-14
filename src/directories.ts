import * as path from "path";
import { readdirSync } from "fs-extra";

export const rootPath = path.join(__dirname, "..");
export const templatesPath = path.join(rootPath, "templates");
export const examplePath = path.join(rootPath, "example");

export const getDirectories = (source: string) => {
  return readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};
