// jest.config.ts
import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./", // raiz do seu projeto Next.js
});

const config: Config = {
  preset: "ts-jest", // usar ts-jest
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  clearMocks: true,
};

export default createJestConfig(config);
