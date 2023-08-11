# Coding Challenges - TypeScript

This repository contains a collection of commonly used coding challenges in technical interviews, all written in TypeScript. It leverages the power of Yarn Workspaces to manage the project efficiently.

## Structure

The project is structured into various workspaces, each residing under the `packages` directory. Each workspace corresponds to a specific coding challenge.

```
project-root
│
├── packages
│   ├── challenge-1
│   ├── challenge-2
│   ├── ...
│
├── ...
```

## Getting Started

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

2. Clone the repository:

   ```bash
   git clone <repository-url> coding-challenges-ts
   cd coding-challenges-ts
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

4. Navigate to a specific challenge:

   ```bash
   cd packages/challenge-1
   ```

   Replace `challenge-1` with the appropriate challenge directory.

## Contribution

Feel free to contribute by adding more challenges or improving the existing solutions. Please ensure that any new challenges added are placed inside the `packages` directory, adhering to the project structure.

## License

This project is open-sourced under the MIT license. See [LICENSE](./LICENSE) for details.
