export const plLatnRules = `
::NFC;

dź > đ;
Dź > Đ;
DŹ > Đ;

dz } [iI] > đ;
Dz } [iI] > Đ;
DZ } [iI] > Đ;

ch > x;
Ch > X;
CH > X;

cz > č;
Cz > Č;
CZ > Č;

rz > ž;
Rz > Ž;
RZ > Ž;

sz > š;
Sz > Š;
SZ > Š;

c } [iI] > ć;
C } [iI] > Ć;

n } [iI] > ń;
N } [iI] > Ń;

s } [iI] > š;
S } [iI] > Š;

z } [iI] > ž;
Z } [iI] > Ž;

c > ts;
C } [:Ll:] > Ts;
C > TS;

[šćđžńŠĆĐŽŃ] { [iI] } [eE] > ;
[pbmwvPBMWV] { i } [eE] > y;
[pbmwvPBMWV] { I } [eE] > Y;

ą > on;
Ą } [:Ll:] > On;
Ą > ON;

ę > en;
Ę } [:Ll:] > En;
Ę > EN;

j > y;
J > Y;

y > ï;
Y > Ï;

w > v;
W > V;

ł > l;
Ł > L;

ó > o;
Ó > O;

[żź] > ž;
[ŻŹ] > Ž;

ś > š;
Ś > Š;
`;
