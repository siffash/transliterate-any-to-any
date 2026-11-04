export const svLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

À > A;
à > a;
É > E;
é > e;
[ÈÊË] > E;
[èêë] > e;
Ï > I;
ï > i;
Ô > O;
ô > o;
Ç > S;
ç > s;
Ņ > Ń;
ņ > ń;

::Null;

[Nn] { G > G;
[Nn] { g > g;

S [ktKT] [jJ] > Š;
s [ktKT] [jJ] > š;

S [cC] [hH] > Š;
s [cC] [hH] > š;

S [hjHJ] > Š;
s [hjHJ] > š;

[TK] [jJ] > Ć;
[tk] [jJ] > ć;

CHR > KR;
Chr > Kr;
c [hH] [rR] > kr;

MICH > MIK;
Mich > Mik;
m [iI] [cC] [hH] > mik;

C [hH] > Š;
c [hH] > š;

C [kK] > K;
c [kK] > k;

QU } [aouåäöAOUÅÄÖ] > KV;
qU } [aouåäöAOUÅÄÖ] > kV;
Qu } [aouåäöAOUÅÄÖ] > Kv;
qu } [aouåäöAOUÅÄÖ] > kv;

TION > ŠON;
Tion > Šon;
t [iI] [oO] [nN] > šon;

[:L:] { T } [hH] [aA] [mM] [mM] > T;
[:L:] { t } [hH] [aA] [mM] [mM] > t;
[:L:] { T } [hH] [aA] [mM] [nN] > T;
[:L:] { t } [hH] [aA] [mM] [nN] > t;
[:L:] { T } [hH] [uU] [sS] > T;
[:L:] { t } [hH] [uU] [sS] > t;
[:L:] { T } [hH] [oO] [lL] [mM] > T;
[:L:] { t } [hH] [oO] [lL] [mM] > t;
[:L:] { T } [hH] [uU] [lL] [tT] > T;
[:L:] { t } [hH] [uU] [lL] [tT] > t;
[:L:] { T } [hH] [aA] [gG] [eE] > T;
[:L:] { t } [hH] [aA] [gG] [eE] > t;
T [hH] > T;
t [hH] > t;

[Pp] { P } [hH] > P;
[Pp] { p } [hH] > p;
P [hH] > F;
p [hH] > f;

[^[:L:][:M:]] { [DGHL] ([Jj]) > &Any-Upper($1);
[^[:L:][:M:]] { [dghl] ([Jj]) > &Any-Lower($1);

[Ff] [Aa] [Ll] { K } [Ee] [Nn] > K;
[Ff] [Aa] [Ll] { k } [Ee] [Nn] > k;
[Ll] [Aa] { G } [Ee] [Rr] > G;
[Ll] [Aa] { g } [Ee] [Rr] > g;
[Tt] [Aa] { G } [Ee] [Nn] > G;
[Tt] [Aa] { g } [Ee] [Nn] > g;
[Bb] [Ii] [Rr] { G } [Ii] [Tt] > G;
[Bb] [Ii] [Rr] { g } [Ii] [Tt] > g;
[Åå] { K } [Ee] > K;
[Åå] { k } [Ee] > k;

[Rr] { G } [AOUÅRaouår] > G;
[Rr] { g } [AOUÅRaouår] > g;
[Ll] { G } [AOUÅRaouår] > G;
[Ll] { g } [AOUÅRaouår] > g;

S [kK] } [EIYÄÖÆØeiyäöæø] > Š;
s [kK] } [EIYÄÖÆØeiyäöæø] > š;
C } [EIYÄÖÆØeiyäöæø] > S;
c } [EIYÄÖÆØeiyäöæø] > s;

::Null;

[AaEeOo] { Y > Y;
[AaEeOo] { y > y;

Å > O;
å > o;

Y > Ü;
y > ü;

Æ > Ä;
æ > ä;

Ø > Ö;
ø > ö;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

Z > S;
z > s;

W > V;
w > v;

[QC] > K;
[qc] > k;

J > Y;
j > y;

EIJ > IJ;
Eij > Ij;
e [iI] [jJ] > ij;

E [JI] > IJ;
e [JI] > iJ;
E [ji] > Ij;
e [ji] > ij;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
N [Gg] [Hh] } [^[:L:][:M:]] > Ŋ;
n [Gg] [Hh] } [^[:L:][:M:]] > ŋ;
N [Gg] > Ŋ;
n [Gg] > ŋ;
[:L:] { T } [hH] [aA] [mM] [mM] > T;
[:L:] { t } [hH] [aA] [mM] [mM] > t;
[:L:] { T } [hH] [aA] [mM] [nN] > T;
[:L:] { t } [hH] [aA] [mM] [nN] > t;
[:L:] { T } [hH] [uU] [sS] > T;
[:L:] { t } [hH] [uU] [sS] > t;
[:L:] { T } [hH] [oO] [lL] [mM] > T;
[:L:] { t } [hH] [oO] [lL] [mM] > t;
[:L:] { T } [hH] [uU] [lL] [tT] > T;
[:L:] { t } [hH] [uU] [lL] [tT] > t;
[:L:] { T } [hH] [aA] [gG] [eE] > T;
[:L:] { t } [hH] [aA] [gG] [eE] > t;
T [Hh] > Þ;
t [Hh] > þ;
[:L:] { K } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > K;
[:L:] { k } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > k;
K [Hh] > Ḫ;
k [Hh] > ḫ;
[fF] { G [Hh] > Ɣ;
[fF] { g [Hh] > ɣ;
[:L:] { G } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > G;
[:L:] { g } [hH] [aeiouyäöüåæøáéíóúýőűıâêîôûàèìòùëïõAEIOUYÄÖÜÅÆØÁÉÍÓÚÝŐŰIİÂÊÎÔÛÀÈÌÒÙËÏÕ] > g;
G [Hh] } [^[:L:][:M:]] > G;
g [Hh] } [^[:L:][:M:]] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
