export const roLatnRules = `
::NFC;

[:^Letter:] { i } [aoueiAOUEI] > y;
[:^Letter:] { I } [aoueiAOUEI] > Y;

ch } [iI] [aouăâîAOUĂÂÎ] > k;
Ch } [iI] [aouăâîAOUĂÂÎ] > K;
CH } [iI] [aouăâîAOUĂÂÎ] > K;
CH } [iI] [aouăâîAOUĂÂÎ] > K;

[gG] { [hH] } [iI] [aouăâîAOUĂÂÎ] > ;

ci } [oueăâîOUEĂÂÎ] > č;
Ci } [oueăâîOUEĂÂÎ] > Č;
CI } [oueăâîOUEĂÂÎ] > Č;

gi } [oueăâîOUEĂÂÎ] > dž;
Gi } [oueăâîOUEĂÂÎ] > Dž;
GI } [oueăâîOUEĂÂÎ] > DŽ;

ce } [aouăâîAOUĂÂÎ] > č;
Ce } [aouăâîAOUĂÂÎ] > Č;
CE } [aouăâîAOUĂÂÎ] > Č;

ge } [aouăâîAOUĂÂÎ] > dž;
Ge } [aouăâîAOUĂÂÎ] > Dž;
GE } [aouăâîAOUĂÂÎ] > DŽ;

ch } [eiyEIY] > k;
Ch } [eiyEIY] > K;
CH } [eiyEIY] > K;

gh } [eiyEIY] > g;
Gh } [eiyEIY] > G;
GH } [eiyEIY] > G;

c } [eiyEIY] > č;
C } [eiyEIY] > Č;

g } [eiyEIY] > dž;
G } [eiy] > Dž;
G } [EIY] > DŽ;

c > k;
C > K;

[șş] > š;
[ȘŞ] > Š;

[țţ] > ts;
[ȚŢ] } [:Ll:] > Ts;
[ȚŢ] > TS;

j > ž;
J > Ž;

x > ks;
X } [:Ll:] > Ks;
X > KS;

ă > a;
Ă > A;

â > ï;
Â > Ï;

î > ï;
Î > Ï;
`;
