# Problem Solving

A single-file collection of classic coding-challenge solutions written in TypeScript. Each problem is a standalone function with sample inputs and expected outputs logged to the console.

## Tech Stack

- **TypeScript** — source code in `solution.ts`
- **Node.js** — runtime for the compiled output
- `tsc` — compiles `.ts` to `.js`

## Project Structure

```
problem-solving/
├── solution.ts   # TypeScript source (20 solutions)
├── solution.js   # Compiled JavaScript output
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- TypeScript installed globally or via `npx`

### Compile

```bash
npx tsc solution.ts
```

### Run

```bash
node solution.js
```

Each solution logs its sample results to the console.

## Notes

- Solutions use sample `console.log` statements for manual verification rather than an automated test suite.
