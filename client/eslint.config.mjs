import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "next"],
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin", // built-in modules (fs, path)
            "external", // node_modules
            "internal", // aliases like @/*
            ["parent", "sibling", "index"], // relative paths
            "object", // import "./style.css"
            "type", // import types
          ],
          pathGroups: [
            {
              pattern: "@/providers/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@/components/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@/lib/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@/utils/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@/validations/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@/types/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
  }),
];

export default eslintConfig;
