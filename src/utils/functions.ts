export const snakeCase = (str: string): string =>
  str.toLowerCase().replace(/\s+/g, '_');
