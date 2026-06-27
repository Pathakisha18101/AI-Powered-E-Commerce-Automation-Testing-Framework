import fs from "fs";
import path from "path";

export class AITestGenerator {

    generate(featureName: string): string {

        const className = featureName.replace(/\s+/g, "");

        const content = `import { test, expect } from '@playwright/test';

test('${featureName}', async ({ page }) => {

    // Arrange

    // Act

    // Assert

    expect(true).toBeTruthy();

});
`;

        const outputDir = path.join(process.cwd(), "generated-tests");

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const filePath = path.join(
            outputDir,
            `${className}.spec.ts`
        );

        fs.writeFileSync(filePath, content);

        return filePath;
    }
}