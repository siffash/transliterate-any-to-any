export const svLatnRules = `
::NFC;

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

T [hH] > T;
t [hH] > t;

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
`;
