export const lvLtRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

[žščļņķģjŽŠČĻŅĶĢJ] { i } [^[:L:][:M:]] > iai;
[žščļņķģjŽŠČĻŅĶĢJ] { I } [^[:L:][:M:]] > IAI;

[bcdfghklmnprstvzBCDFGHKLMNPRSTVZ] { i } [^[:L:][:M:]] > ai;
[bcdfghklmnprstvzBCDFGHKLMNPRSTVZ] { I } [^[:L:][:M:]] > AI;

[:L:] { e } [^[:L:][:M:]] > ė;
[:L:] { E } [^[:L:][:M:]] > Ė;

[:L:] { ņš } [^[:L:][:M:]] > nis;
[:L:] { ŅŠ } [^[:L:][:M:]] > NIS;

[aeiouāēīūAEIOUĀĒĪŪ] [BCDFGHKLMNPRTVZČĢĶĻŅŽ]+ { S } [^[:L:][:M:]] > AS;
[aeiouāēīūAEIOUĀĒĪŪ] [bcdfghklmnprtvzčģķļņžBCDFGHKLMNPRTVZČĢĶĻŅŽ]+ { s } [^[:L:][:M:]] > as;

W > V;
w > v;

Q > K;
q > k;

[:Lu:] { X > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

::Null;

Ā > A;
ā > a;

Ē > Ė;
ē > ė;

Ī > Y;
ī > y;

[aeiouāēīūAEIOUĀĒĪŪ] { O > O;
[aeiouāēīūAEIOUĀĒĪŪ] { o > o;

O } [vV] > O;
o } [vV] > o;

O } [nN] [sS] [^[:L:][:M:]] > O;
o } [nN] [sS] [^[:L:][:M:]] > o;

[:Lu:] { O > UO;
O } [:Lu:] > UO;
O > Uo;
o > uo;

Ō > O;
ō > o;

Ļ } [AOUĀŌŪ] > LI;
Ļ } [aouāōū] > Li;
ļ } [aouāōūAOUĀŌŪ] > li;

Ļ > L;
ļ > l;

Ņ } [AOUĀŌŪ] > NI;
Ņ } [aouāōū] > Ni;
ņ } [aouāōūAOUĀŌŪ] > ni;

Ņ > N;
ņ > n;

Ķ } [AOUĀŌŪ] > KI;
Ķ } [aouāōū] > Ki;
ķ } [aouāōūAOUĀŌŪ] > ki;

Ķ > K;
ķ > k;

Ģ } [AOUĀŌŪ] > GI;
Ģ } [aouāōū] > Gi;
ģ } [aouāōūAOUĀŌŪ] > gi;

Ģ > G;
ģ > g;

::Null;

[bB] { [bB] > ;
[cC] { [cC] > ;
[dD] { [dD] > ;
[fF] { [fF] > ;
[gG] { [gG] > ;
[hH] { [hH] > ;
[kK] { [kK] > ;
[lL] { [lL] > ;
[mM] { [mM] > ;
[nN] { [nN] > ;
[pP] { [pP] > ;
[rR] { [rR] > ;
[sS] { [sS] > ;
[tT] { [tT] > ;
[vV] { [vV] > ;
[zZ] { [zZ] > ;
`;
