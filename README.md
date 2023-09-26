# TURBOREPO NESTJS AND NEXTJS TEMPLATE
Monorepo template made with turborepo, nest and next.

## 1. Clone project

```bash
git clone project
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run monorepo local dev

```bash
npx turbo run dev
or
npm run dev
```
If you have trouble with cache run:
npx turbo daemon clean

## 4. Run monorepo build

```bash
npm run build
```
## 5. How to add new packages
npm i @xxx --workspace backend
npm i @xxx --workspace frontend

## Changes i had to do to make it work
### Nestjs:
1. Change and add in package.json scripts: "dev": "nest start --watch --preserveWatchOutput"
2. Change the port in main.ts to 3001

### Nextjs:
1. ~~Add in next.config.js experimental: { appDir: true, },~~  
2. In the frontend folder of the nextjs project run:
```bash
npx next telemetry status
npx next telemetry disable
```
###  Workspaces
Config workspaces in package.json root:
  "private": true,
  "workspaces": [
    "apps/*"
  ],
  "scripts": {
    "dev": "turbo dev"
  },

