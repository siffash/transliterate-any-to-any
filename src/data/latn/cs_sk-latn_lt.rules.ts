export const csSkLatnLtRules = `
::NFC;

[:Lu:] { Ř } [^[:L:][:M:]] > RŽ;
Ř } [^[:L:][:M:]] > Rž;
ř } [^[:L:][:M:]] > rž;

[íý] > ï;
[ÍÝ] > Ï;
`;
