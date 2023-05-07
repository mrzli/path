import path from 'node:path';

export function isInDir(rootDir: string, fsPath: string): boolean {
  const relative = path.relative(rootDir, fsPath);
  return !!relative && !relative.startsWith('..') && !path.isAbsolute(relative);
}

export function pathDir(fullPath: string): string {
  const pathInfo = path.parse(fullPath);
  return pathInfo.dir;
}

export function pathFsName(fullPath: string): string {
  const pathInfo = path.parse(fullPath);
  return pathInfo.name;
}

export function pathFsNameWithExtension(fullPath: string): string {
  const pathInfo = path.parse(fullPath);
  return pathInfo.name + pathInfo.ext;
}

export function pathWithoutExtension(fullPath: string): string {
  const pathInfo = path.parse(fullPath);
  return path.join(pathInfo.dir, pathInfo.name);
}

export function pathExtension(fullPath: string): string {
  const pathInfo = path.parse(fullPath);
  return pathInfo.ext.replaceAll(/^\.+|\.+$/g, '');
}
