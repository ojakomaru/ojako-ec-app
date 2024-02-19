import type { Config } from "jest";
import nextJest from "next/jest.js";
// テスト環境でnext.config.jsと.envファイルを読み込むために、Next.jsアプリへのパスを指定します。
const createJestConfig = nextJest({ dir: "./" });

const customJestConfig: Config = {
  testPathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/node_modules"],
  // 各テストを実行する前に、さらに設定オプションを追加する
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react-jsx",
      },
    },
  },
};

// createJestConfigは、next/jestが非同期でNext.jsの設定を読み込めるようにするために、このようにエクスポートされています。
export default createJestConfig(customJestConfig);
