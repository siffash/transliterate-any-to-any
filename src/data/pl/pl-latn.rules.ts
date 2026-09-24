export const plLatnRules = `
::NFC;

d [źŹ] > đ;
D [źŹ] > Đ;

d [zZ] } [iI] > đ;
D [zZ] } [iI] > Đ;

c [hH] > x;
C [hH] > X;

c [zZ] > č;
C [zZ] > Č;

r [zZ] > ž;
R [zZ] > Ž;

s [zZ] > š;
S [zZ] > Š;

c } [iI] > ć;
C } [iI] > Ć;

n } [iI] > ń;
N } [iI] > Ń;

s } [iI] > š;
S } [iI] > Š;

z } [iI] > ž;
Z } [iI] > Ž;

[:Lu:] { C > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[šćđžńŠĆĐŽŃ] { [iI] } [eE] > ;
[pbmwvPBMWV] { i } [eE] > y;
[pbmwvPBMWV] { I } [eE] > Y;

[:Lu:] { Ą > ON;
Ą } [:Lu:] > ON;
Ą > On;
ą > on;

[:Lu:] { Ę > EN;
Ę } [:Lu:] > EN;
Ę > En;
ę > en;

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
