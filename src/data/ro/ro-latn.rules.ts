export const roLatnRules = `
::NFC;

[^[:L:][:M:]] { i } [aoueiAOUEI] > y;
[^[:L:][:M:]] { I } [aoueiAOUEI] > Y;

c [hH] } [iI] [aouăâîAOUĂÂÎ] > k;
C [hH] } [iI] [aouăâîAOUĂÂÎ] > K;

[gG] { [hH] } [iI] [aouăâîAOUĂÂÎ] > ;

c [iI] } [oueăâîOUEĂÂÎ] > č;
C [iI] } [oueăâîOUEĂÂÎ] > Č;

gi } [oueăâîOUEĂÂÎ] > dž;
Gi } [oueăâîOUEĂÂÎ] > Dž;
gI } [oueăâîOUEĂÂÎ] > dŽ;
GI } [oueăâîOUEĂÂÎ] > DŽ;

c [eE] } [aouăâîAOUĂÂÎ] > č;
C [eE] } [aouăâîAOUĂÂÎ] > Č;

ge } [aouăâîAOUĂÂÎ] > dž;
Ge } [aouăâîAOUĂÂÎ] > Dž;
gE } [aouăâîAOUĂÂÎ] > dŽ;
GE } [aouăâîAOUĂÂÎ] > DŽ;

c [hH] } [eiyEIY] > k;
C [hH] } [eiyEIY] > K;

g [hH] } [eiyEIY] > g;
G [hH] } [eiyEIY] > G;

c } [eiyEIY] > č;
C } [eiyEIY] > Č;

g } [eiy] > dž;
g } [EIY] > dŽ;
G } [eiy] > Dž;
G } [EIY] > DŽ;

c > k;
C > K;

[șş] > š;
[ȘŞ] > Š;

[:Lu:] { [ȚŢ] > TS;
[ȚŢ] } [:Lu:] > TS;
[ȚŢ] > Ts;
[țţ] > ts;

j > ž;
J > Ž;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

ă > a;
Ă > A;

[âî] > ï;
[ÂÎ] > Ï;
`;
