export const plLatnLvRules = `
::NFC;

ś > s;
Ś > S;

ź > z;
Ź > Z;

ć > c;
Ć > C;

s } [iI] [^aąeęoóuAĄEĘOÓU] > ſ;
S } [iI] [^aąeęoóuAĄEĘOÓU] > Ʃ;

z } [iI] [^aąeęoóuAĄEĘOÓU] > ƶ;
Z } [iI] [^aąeęoóuAĄEĘOÓU] > Ƶ;

c } [iI] [^aąeęoóuAĄEĘOÓU] > ȼ;
C } [iI] [^aąeęoóuAĄEĘOÓU] > Ȼ;

[bpmwfszcBPMWFSZC] { [iI] } [eęEĘ] > ;

[bpmwfszcBPMWFSZC] { i } [aąoóuAĄOÓU] > j;
[bpmwfszcBPMWFSZC] { I } [aąoóuAĄOÓU] > J;
`;
