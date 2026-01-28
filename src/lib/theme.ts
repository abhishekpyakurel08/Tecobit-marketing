import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function getTheme() {
    const filePath = path.join(process.cwd(), "ui.theme.yaml");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yaml.load(fileContents) as any;
}
