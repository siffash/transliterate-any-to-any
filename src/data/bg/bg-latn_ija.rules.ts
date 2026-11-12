export const bgLatnIjaRules = `
::NFC;

[:L:] { ИЯ } [^[:L:][:M:]] > IɈA;
[:L:] { Ия } [^[:L:][:M:]] > IɈa;
[:L:] { ия } [^[:L:][:M:]] > iɉa;

И { Е > ɈE;
[Ии] { Е } [:Lu:] > ɈE;
[Ии] { Е > Ɉe;
[Ии] { е > ɉe;
`;
