# Path Utilities

Some utility functions for manipulating file system paths.

## Installation

```bash
npm install --save @gmjs/path
```

## Functions

- `isInDir(rootDir: string, fsPath: string): boolean`
  - Description - Returns true if `fsPath` is in `rootDir`. It can be nested any number of levels deep.
- `pathDir(fullPath: string): string`
  - Description - Returns the parent directory of the path.
- `pathFsName(fullPath: string): string`
  - Description - Returns the base name of the file or directory in the path, without the extension.
- `pathFsNameWithExtension(fullPath: string): string`
  - Description - Returns the name of the file or directory in the path, with the extension.
- `pathWithoutExtension(fullPath: string): string`
  - Description - Returns the entire path without the extension.
- `pathExtension(fullPath: string): string`
  - Description - Returns the extension of the file in the path, or empty string if there is no extension.
