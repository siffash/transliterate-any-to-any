export const roLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[^[:L:][:M:]] { i } [aoueiAOUEI] > y;
[^[:L:][:M:]] { I } [aoueiAOUEI] > Y;

c [hH] } [iI] [aouăâîAOUĂÂÎ] > k;
C [hH] } [iI] [aouăâîAOUĂÂÎ] > K;

[gG] { [hH] } [iI] [aouăâîAOUĂÂÎ] > ;

c [iI] } [oueăâîOUEĂÂÎ] > č;
C [iI] } [oueăâîOUEĂÂÎ] > Č;

g [iI] } [oueăâîOUEĂÂÎ] > ǯ;
G [iI] } [oueăâîOUEĂÂÎ] > Ǯ;

g [eE] } [aouăâîAOUĂÂÎ] > ǯ;
G [eE] } [aouăâîAOUĂÂÎ] > Ǯ;

c [eE] } [aouăâîAOUĂÂÎ] > č;
C [eE] } [aouăâîAOUĂÂÎ] > Č;

c [hH] } [eiyEIY] > k;
C [hH] } [eiyEIY] > K;

g [hH] } [eiyEIY] > g;
G [hH] } [eiyEIY] > G;

c } [eiyEIY] > č;
C } [eiyEIY] > Č;

g } [eiyEIY] > ǯ;
G } [eiyEIY] > Ǯ;

c > k;
C > K;

[șş] > š;
[ȘŞ] > Š;

[ȚŢ] > C;
[țţ] > c;

S [hH] > Š;
s [hH] > š;

Z [hH] > Ž;
z [hH] > ž;

j > ž;
J > Ž;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

ă > a;
Ă > A;

[âî] > ï;
[ÂÎ] > Ï;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
T [Hh] > T;
t [Hh] > t;
K [Hh] > Ḫ;
k [Hh] > ḫ;
[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
D [Žž] > Ǯ;
d [Žž] > ǯ;
`;
