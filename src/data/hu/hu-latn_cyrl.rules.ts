export const huLatnCyrlRules = `
::Null;

GY } [^[:L:][:M:]] > ДЬ;
Gy } [^[:L:][:M:]] > Дь;
gY } [^[:L:][:M:]] > дЬ;
gy } [^[:L:][:M:]] > дь;

[:L:] { GY } [bcdfghklmnprstvzšžčľńBCDFGHKLMNPRSTVZŠŽČĽŃ] > ДЬ;
[:L:] { Gy } [bcdfghklmnprstvzšžčľńBCDFGHKLMNPRSTVZŠŽČĽŃ] > Дь;
[:L:] { gY } [bcdfghklmnprstvzšžčľńBCDFGHKLMNPRSTVZŠŽČĽŃ] > дЬ;
[:L:] { gy } [bcdfghklmnprstvzšžčľńBCDFGHKLMNPRSTVZŠŽČĽŃ] > дь;
`;
