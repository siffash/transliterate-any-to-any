export const deIpaHeVRules = `
::Lower;
::NFC;

[^[:L:][:M:]] [aeiouäöüy] { v } [aeiouäöüy] > w;
[:L:] { v } [aeiouäöüy] > b;
[:L:] { v > w;
`;
