export const resolveCjsDefault = <T>(mod: { default: T | { default: T } }): T => {
  const value = mod.default as any;
  return typeof value === "function" ? value : value.default;
};
