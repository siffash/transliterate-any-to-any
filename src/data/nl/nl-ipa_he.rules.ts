export const nlIpaHeRules = `
::Null;

[aɑeɛəiɪoɔuʊyʏøœː] { ʋ } [^aɑeɛəiɪoɔuʊyʏøœ] > w;
[^[:L:][:M:]] [aɑæɒɐʌəɤɵɞeɛɘɜiɪyʏɨuʊoɔœøʉɯɝɚ] [ːˑ]? { v } [aɑæɒɐʌəɤɵɞeɛɘɜiɪyʏɨuʊoɔœøʉɯɝɚ] > v;
[:L:] { v } [aɑæɒɐʌəɤɵɞeɛɘɜiɪyʏɨuʊoɔœøʉɯɝɚ] > b;
`;
