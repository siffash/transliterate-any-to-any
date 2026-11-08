export const roLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[^[:L:][:M:]] { i } [aoueiAOUEI] > y;
[^[:L:][:M:]] { I } [aoueiAOUEI] > Y;

c [hH] } [iI] [aouăâîəAOUĂÂÎƏ] > k;
C [hH] } [iI] [aouăâîəAOUĂÂÎƏ] > K;

[gG] { [hH] } [iI] [aouăâîəAOUĂÂÎƏ] > ;

c [iI] } [oueăâîəOUEĂÂÎƏ] > č;
C [iI] } [oueăâîəOUEĂÂÎƏ] > Č;

g [iI] } [oueăâîəOUEĂÂÎƏ] > ǯ;
G [iI] } [oueăâîəOUEĂÂÎƏ] > Ǯ;

g [eE] } [aouăâîəAOUĂÂÎƏ] > ǯ;
G [eE] } [aouăâîəAOUĂÂÎƏ] > Ǯ;

c [eE] } [aouăâîəAOUĂÂÎƏ] > č;
C [eE] } [aouăâîəAOUĂÂÎƏ] > Č;

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
