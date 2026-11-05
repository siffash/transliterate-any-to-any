export const huLatnAiRules = `
::Null;

[aeoöuüAEOÖUÜ] { i } [^[:L:][:M:]] > ǐ;
[aeoöuüAEOÖUÜ] { I } [^[:L:][:M:]] > Ǐ;
`;
