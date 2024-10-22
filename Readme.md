# Weighted Graph

A weighted graph implementation in TypeScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Instructions on how to install and set up the project.

```bash
# Clone the repository
git clone https://github.com/sadekmehri/Weighted-Graph.git

# Navigate to the project directory
cd projectname

# Install dependencies
pnpm i
```

## Usage

Examples of how to use the project.

```typescript
import { WeightedGraph } from './WeightedGraph'

const vertices = 6
const g = new WeightedGraph(vertices)
g.addEdge(0, 1, 4)
g.addEdge(0, 2, 3)
g.addEdge(1, 3, 2)
g.addEdge(1, 2, 5)
g.addEdge(2, 3, 7)
g.addEdge(3, 4, 2)
g.addEdge(4, 0, 4)
g.addEdge(4, 1, 4)
g.addEdge(4, 5, 6)
g.printGraph()
const dfs = g.dfs(0, 5)
const bfs = g.bfs(0, 5)
console.log('dfs', g.constructPath(dfs, 5))
console.log('bfs', g.constructPath(bfs, 5))
```