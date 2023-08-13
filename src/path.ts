import { isAbsolute, join as nodeJoin, parse, relative } from 'node:path';
import slash from 'slash';

export function isInDir(rootDir: string, fsPath: string): boolean {
  const relativePath = relative(rootDir, fsPath);
  return (
    !!relativePath &&
    !relativePath.startsWith('..') &&
    !isAbsolute(relativePath)
  );
}

export function join(...paths: readonly string[]): string {
  const result = nodeJoin(...paths);
  return slash(result);
}

export function pathDir(fullPath: string): string {
  const pathInfo = parse(fullPath);
  return pathInfo.dir;
}

export function pathFsName(fullPath: string): string {
  const pathInfo = parse(fullPath);
  return pathInfo.name;
}

export function pathFsNameWithExtension(fullPath: string): string {
  const pathInfo = parse(fullPath);
  return pathInfo.name + pathInfo.ext;
}

export function pathWithoutExtension(fullPath: string): string {
  const pathInfo = parse(fullPath);
  return nodeJoin(pathInfo.dir, pathInfo.name);
}

export function pathExtension(fullPath: string): string {
  const pathInfo = parse(fullPath);
  return pathInfo.ext.replaceAll(/^\.+|\.+$/g, '');
}
