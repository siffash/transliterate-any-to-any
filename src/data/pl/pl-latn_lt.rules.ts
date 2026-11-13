export const plLatnLtRules = `
::NFC;

l } [aąAĄ] [^[:L:][:M:]] > l;
L } [aąAĄ] [^[:L:][:M:]] > L;

l } [aąoóuAĄOÓU] > li;
L } [AĄOÓU] > LI;
L } [aąoóu] > Li;

ó > u;
Ó > U;

ś } [nlłNLŁ] > ś;
ź } [nlłNLŁ] > ź;

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

[bpmwfszcBPMWFSZC] { i } [aąoóuAĄOÓU] > ı;
[bpmwfszcBPMWFSZC] { I } [aąoóuAĄOÓU] > Ɨ;
`;
