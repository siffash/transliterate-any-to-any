export const plLatnRules = `
::NFC;

[^[:L:][:M:]] { c [hH] } [oO] [pP] [iI] [nN] [^[:L:][:M:]] > š;
[^[:L:][:M:]] { C [hH] } [oO] [pP] [iI] [nN] [^[:L:][:M:]] > Š;
[^[:L:][:M:]] [šŠ] [oO] [pP] { i } [nN] [^[:L:][:M:]] > e;
[^[:L:][:M:]] [šŠ] [oO] [pP] { I } [nN] [^[:L:][:M:]] > E;

d [źŹ] > đ;
D [źŹ] > Đ;

d [zZ] } [iI] > đ;
D [zZ] } [iI] > Đ;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

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

[:L:] { C } SS > K;
[:L:] { c } ss > k;
[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[šćđžńŠĆĐŽŃ] { [iI] } [eE] > ;
[pbmwvPBMWV] { i } [eE] > y;
[pbmwvPBMWV] { I } [eE] > Y;

[:Lu:] { Ą > ON;
Ą } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > ON;
Ą } [:Lu:] > ON;
Ą > On;
ą > on;

[:Lu:] { Ę > EN;
Ę } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > EN;
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
