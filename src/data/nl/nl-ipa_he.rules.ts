export const nlIpaHeRules = `
::Null;

[:L:] { ʋaː } [bdfɡklmnpʁstvxzɣɦʋʃʒŋjχ] [bdfɡklmnpʁstvxzɣɦʋʃʒŋjχ] > ווא;
[:L:] { ʋaː } [bdfɡklmnpʁstvxzɣɦʋʃʒŋjχ] [^[:L:][:M:]] > ווא;
[:L:] { aː } [bdfɡklmnpʁstvxzɣɦʋʃʒŋjχ] [bdfɡklmnpʁstvxzɣɦʋʃʒŋjχ] > א;
[:L:] { aː } [bdfɡklmnpʁstvxzɣɦʋʃʒŋjχ] [^[:L:][:M:]] > א;
[^[:L:][:M:]] { ɛi > איי;
[:L:] { ɣ > x;
ɣ > ħ;
[ʏy] > u;
[aɑeɛəiɪoɔuʊyʏøœː] { ʋ } [^aɑeɛəiɪoɔuʊyʏøœ] > w;
[^[:L:][:M:]] [aɑæɒɐʌəɤɵɞeɛɘɜiɪyʏɨuʊoɔœøʉɯɝɚ] [ːˑ]? { v } [aɑæɒɐʌəɤɵɞeɛɘɜiɪyʏɨuʊoɔœøʉɯɝɚ] > v;
[:L:] { v } [aɑæɒɐʌəɤɵɞeɛɘɜiɪyʏɨuʊoɔœøʉɯɝɚ] > b;
`;
