# Debugging TypeScript in VS Code Without Compiling (using `ts-node`)

This repo contains a sample TypeScript project with a Visual Studio Code `launch.json` that
allows you run TypeScript code and mocha tests without a seperate build step.

## Usage

```
git clone https://github.com/EnterpriseJSTutorial/vscode-ts-node-debugging.git
npm install
```

## VS Code Debug Tasks

This repo contains the following VS Code Debug tasks (accessible via the debug button on the left)

 * `Current TS File` - Allows you to debug the currently open TypeScript file (try it with `src/index.ts`)
 * `Current TS Tests File` - Allows you to debug the currently open `mocha` unit tests file (try it with `src/__tests__/person.tests.ts`)

These tasks should allow you to hit breakpoints in your code, without needing to compile first.

## Further Details

Further details in a blog post on my Medium channel https://medium.com/@dupski
