import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);


export default tseslint.config({
  rules: {
    "@typescript-eslint/no-require-imports": "error"
  }
});