import fs from "fs";
import path from "path";

export class TestDataLoader {
  static load<T>(fileName: string): T {
    const filePath = path.join(
      process.cwd(),
      "src",
      "test-data",
      fileName
    );

    const fileContent = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(fileContent) as T;
  }
}