export const interpolateString = (str: string, params: Record<string, unknown>): string => {
  return str.replace(/{(\w+)}/g, (match, key) => {
    const value = params[key as keyof typeof params];
    return value !== undefined ? String(value) : match;
  });
};
