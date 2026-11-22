export const koIpaShiRules = `
::Null;

'~' { s } i > ʃ;
[^[:L:][:M:]'~'\\-] { s } i [[:L:][:M:]]* '~' > ʃ;
`;
