// return symbols from the symbols list that are not present in the string (e.g. for checking if IPA rules handle all IPA symbols)
export const checkAllSymbolsToBePresentInString = (symbols: string, string: string) => {
  const set = new Set(string);
  const missing = [...new Set(symbols)].filter(char => !set.has(char));
  return !string ? false : missing.length === 0 ? true : missing.join("");
};

// return symbols from the string that are not present in the symbols list (e.g. for checking if IPA rules contain ONLY the allowed IPA symbols)
export const checkDisallowedSymbols = (symbols: string, string: string) => {
  const set = new Set(symbols);
  const extra = [...new Set(string)].filter(char => !set.has(char));
  return !string ? false : extra.length === 0 ? true : extra.join("");
};
