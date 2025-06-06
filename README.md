# openDAW-lib

The library `openDAW-lib` is a practical TypeScript standard library built specifically for
the [openDAW](https://github.com/andremichelle/openDAW) project. Its purpose is to provide reusable utilities,
abstractions, and tools to streamline development across technical domains such as audio processing, runtime utilities,
and web-based functionality.

## Libraries

### `std`

The `std` library serves as a project’s standard module. It provides a collection of general-purpose
functions and abstractions used throughout any project.

---

### `box`

The `box` library is designed to represent and manage data in a graph structure. This module provides the ability to
create, remove, and analyze vertices and edges in a graph. Each `Box` instance represents a vertex with fields and
pointers, making it ideal for complex data relationships like dependency graphs and data propagation systems. Features
include:

- Managing directed edges between boxes (vertices).
- Subscribing to updates and propagating changes across the graph.
- Memory estimation and serialization.

---

### `box-forge`

`box-forge` is a source generator for boxes based on TypeScript schemas. It automatically generates box implementations
and related utilities from schema definitions, helping to maintain type safety and reducing boilerplate while working
with the `box` module's graph-based data structures.

---

### `dom`

The `dom` library contains utilities for interacting with the browser's Document Object Model (DOM). It simplifies
common browser-related tasks, enabling developers to:

- Dynamically manipulate DOM elements.
- Handle DOM-related events and workflows.

---

### `dsp`

The `dsp` module offers a few tools for Digital Signal Processing, particularly focused on audio-related tasks. This library
provides efficient methods to process audio signals, apply effects, and manage real-time transformations.

---

### `runtime`

The `runtime` library provides helpers for managing platform-specific runtime environments.

---

### `jsx`

The `jsx` module includes tools and utilities for working with TSX/JSX-based components in web applications. It helps
simplify the creation of dynamic, reusable frontend components and promotes clean and efficient UI development.

---

## Contributing

Bug reports, feature requests, and pull-requests are welcome!
Please make sure `npm test` passes and follow the existing code-style.

---

#### Shell Scripts

The project includes the following two shell scripts in its root directory:

1. **`clean.sh`**:
    - Deleting compiled JavaScript or TypeScript files (`.js`, `.js.map`).
    - Clearing cache or temporary build directories.
    - Cleaning `node_modules` or resetting dependencies in some cases.
    - This ensures the development environment is in a "clean slate" state, free from residual or outdated files.

2. **`rebuild.sh`**:
    - Calls . `clean.sh`
    - Triggers the build pipeline

---

## Dual-Licensing Model

openDAW is available **under two alternative license terms**:

| Option                    | When to choose it                                                                                              | Obligations                                                                                                                                                                      |
|---------------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **A. GPL v3 (or later)**  | You are happy for the entire work that includes openDAW to be released under GPL-compatible open-source terms. | – Must distribute complete corresponding source code under GPL.<br>– Must keep copyright & licence notices.<br>– May run openDAW privately in any software, open or closed (§0). |
| **B. Commercial Licence** | You wish to incorporate openDAW into **closed-source** or otherwise licence-incompatible software.             | – Pay the agreed fee.<br>– No copyleft requirement for your own source code.<br>– Other terms as per the signed agreement.                                                       |

> **How to obtain the Commercial License**  
> Email `andre.michelle@opendaw.org` with your company name, product description, and expected distribution volume.

If you redistribute openDAW or a derivative work **without** a commercial license, the GPL v3 terms apply automatically.

## License

[GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt) © 2025 André Michelle