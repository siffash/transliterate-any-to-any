export const huLatnCyrlRules = `
::Null;

GY } [^[:L:][:M:]] > ДЬ;
Gy } [^[:L:][:M:]] > Дь;
gY } [^[:L:][:M:]] > дЬ;
gy } [^[:L:][:M:]] > дь;

[:L:] { GY } [bcdfghklmnprstvzšžčľńBCDFGHKLMNPRSTVZŠŽČĽŃǯǮẑẐþÞɣƔŋŊḫḪ] > ДЬ;
[:L:] { Gy } [bcdfghklmnprstvzšžčľńBCDFGHKLMNPRSTVZŠŽČĽŃǯǮẑẐþÞɣƔŋŊḫḪ] > Дь;
[:L:] { gY } [bcdfghklmnprstvzšžčľńBCDFGHKLMNPRSTVZŠŽČĽŃǯǮẑẐþÞɣƔŋŊḫḪ] > дЬ;
[:L:] { gy } [bcdfghklmnprstvzšžčľńBCDFGHKLMNPRSTVZŠŽČĽŃǯǮẑẐþÞɣƔŋŊḫḪ] > дь;
`;
