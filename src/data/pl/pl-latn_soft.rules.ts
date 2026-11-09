export const plLatnSoftRules = `
::Null;

DŹ } [ćńśźĆŃŚŹlľLĽ] > ДЗ;
dŹ } [ćńśźĆŃŚŹlľLĽ] > дЗ;
dź } [ćńśźĆŃŚŹlľLĽ] > дз;
Dź } [ćńśźĆŃŚŹlľLĽ] > Дз;

DŹ } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > ДЗ;
dŹ } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > дЗ;
dź } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > дз;
Dź } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > Дз;

[:Lu:] { DŹ > ДЗЬ;
DŹ } [:Lu:] > ДЗЬ;
d [źŹ] > дзь;
D [źŹ] > Дзь;

ś } [ćńśźĆŃŚŹlľLĽ] > с;
Ś } [ćńśźĆŃŚŹlľLĽ] > С;

ś } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > с;
Ś } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > С;

ś } [dD] [źŹ] > с;
Ś } [dD] [źŹ] > С;

[:Lu:] { Ś > СЬ;
Ś } [:Lu:] > СЬ;
ś > сь;
Ś > Сь;

ź } [ćńśźĆŃŚŹlľLĽ] > з;
Ź } [ćńśźĆŃŚŹlľLĽ] > З;

ź } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > з;
Ź } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > З;

ź } [dD] [źŹ] > з;
Ź } [dD] [źŹ] > З;

[:Lu:] { Ź > ЗЬ;
Ź } [:Lu:] > ЗЬ;
ź > зь;
Ź > Зь;

ć } [ćńśźĆŃŚŹlľLĽ] > ц;
Ć } [ćńśźĆŃŚŹlľLĽ] > Ц;

ć } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > ц;
Ć } [bcdfghkmnprstwzBCDFGHKMNPRSTWZ] [iI] > Ц;

[:Lu:] { Ć > ЦЬ;
Ć } [:Lu:] > ЦЬ;
ć > ць;
Ć > Ць;

dz [iI] } [aąeęoóuAĄEĘOÓU] > дзʲ;
Dz [iI] } [aąeęoóuAĄEĘOÓU] > Дзʲ;
dZ [iI] } [aąeęoóuAĄEĘOÓU] > дЗʲ;
DZ [iI] } [aąeęoóuAĄEĘOÓU] > ДЗʲ;

dz } [iI] > дз;
Dz } [iI] > Дз;
dZ } [iI] > дЗ;
DZ } [iI] > ДЗ;

[cCsSrR] { z > z;
[cCsSrR] { Z > Z;

z [iI] } [aąeęoóuAĄEĘOÓU] > зʲ;
Z [iI] } [aąeęoóuAĄEĘOÓU] > Зʲ;

z } [iI] > з;
Z } [iI] > З;

s [iI] } [aąeęoóuAĄEĘOÓU] > сʲ;
S [iI] } [aąeęoóuAĄEĘOÓU] > Сʲ;

s } [iI] > с;
S } [iI] > С;

c [iI] } [aąeęoóuAĄEĘOÓU] > цʲ;
C [iI] } [aąeęoóuAĄEĘOÓU] > Цʲ;

c } [iI] > ц;
C } [iI] > Ц;

[pbmwfPBMWF] { i } [aA] [^[:L:][:M:]] > i;
[pbmwfPBMWF] { I } [aA] [^[:L:][:M:]] > I;
[pbmwfPBMWF] { [iI] } [aąeęoóuAĄEĘOÓU] > ʲ;

ó > u;
Ó > U;
`;
