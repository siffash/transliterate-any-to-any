export const bgLatnIjaRules = `
::NFC;

[:L:] { ИЯ } [^[:L:][:M:]] > IɈA;
[:L:] { Ия } [^[:L:][:M:]] > IɈa;
[:L:] { ия } [^[:L:][:M:]] > iɉa;
`;
