export const plLatnSrRules = `
::NFC;

ś } [ćĆ] > ś;
Ś } [ćĆ] > Ś;

ś } [cC] [iI] > ś;
Ś } [cC] [iI] > Ś;

ś > s;
Ś > S;

[dD] { ź > ź;
[dD] { Ź > Ź;

ź > z;
Ź > Z;

[dD] [zZ] { i } [aąeęoóuAĄEĘOÓU] > i;
[dD] [zZ] { I } [aąeęoóuAĄEĘOÓU] > I;

[^rRcCdDsS] { z } [iI] [^aąeęoóuAĄEĘOÓU] > ƶ;
[^rRcCdDsS] { Z } [iI] [^aąeęoóuAĄEĘOÓU] > Ƶ;

s } [iI] [^aąeęoóuAĄEĘOÓU] > ſ;
S } [iI] [^aąeęoóuAĄEĘOÓU] > Ʃ;

[sSzZ] { I } [aąeęoóuAĄEĘOÓU] > J;
[sSzZ] { i } [aąeęoóuAĄEĘOÓU] > j;

[kKgG] { I } [eęEĘ] > J;
[kKgG] { i } [eęEĘ] > j;

[dD] { z } [kK] > s;
[dD] { Z } [kK] > S;

ą } [^[:L:][:M:]] > om;
Ą } [^[:L:][:M:]] > OM;
`;
