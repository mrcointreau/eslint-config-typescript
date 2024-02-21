# TypeScript ESLint Configuration

This package provides an ESLint configuration tailored for TypeScript projects. It extends several recommended ESLint configurations and plugins to enforce a consistent code style and catch common mistakes in TypeScript code.

## Installation
Using npm

```bash
npm install --save-dev @mrcointreau/eslint-config-typescript eslint
```

Using Yarn

```bash
yarn add --dev @mrcointreau/eslint-config-typescript eslint
```

Using pnpm

```bash
pnpm add --save-dev @mrcointreau/eslint-config-typescript eslint
```

## Configuration

Create an `.eslintrc.cjs` file in the root of your project with the following contents:

```js
module.exports = {
  root: true,
  extends: ["@mrcointreau/eslint-config-typescript"],
};
```

To make it easy to run ESLint, add a script entry in your project's `package.json`:

```json
"scripts": {
  "lint": "eslint ."
}
```
