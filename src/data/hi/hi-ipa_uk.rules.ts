export const hiIpaUkRules = `
::Null;

[[:L:]-[aeiouɐəɑɔɛɪʊː]] { ɪ > i;
[^[:L:][:M:]] { ɪ > i;
[aɐəɑ] ː? { [iɪ] ː? } [^[:L:][:M:]] > j;
`;
