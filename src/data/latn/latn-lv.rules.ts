export const latnLvRules = `
::Null;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

T [sS] > C;
t [sS] > c;

T [hH] > T;
t [hH] > t;

G [hH] > G;
g [hH] > g;

K [hH] > H;
k [hH] > h;

::Null;

[:Lu:] { Đ > DŽ;
Đ } [:Lu:] > DŽ;
Đ > Dž;
đ > dž;

Ć > Č;
ć > č;

Ľ > Ļ;
ľ > ļ;

Ń > Ņ;
ń > ņ;

Ä > E;
ä > e;

Ï > I;
ï > i;

[ÜŸ] > U;
[üÿ] > u;

Ö > O;
ö > o;

Q > K;
q > k;

W > V;
w > v;

X > H;
x > h;

Y > J;
y > j;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

::Null;

[ķģļņšžčĶĢĻŅŠŽČ] { [jJ] > ;
[dD] [žŽ] { [jJ] > ;
[jJ] { ie > e;
[jJ] { Ie > e;
[jJ] { iE > E;
[jJ] { IE > E;
[bB] { [bB] > ;
[cC] { [cC] > ;
[dD] { [dD] > ;
[fF] { [fF] > ;
[gG] { [gG] > ;
[hH] { [hH] > ;
[jJ] { [jJ] > ;
[kK] { [kK] > ;
[pP] { [pP] > ;
[sS] { [sS] > ;
[tT] { [tT] > ;
[vV] { [vV] > ;
[zZ] { [zZ] > ;
[šŠ] { [šŠ] > ;
[žŽ] { [žŽ] > ;
[čČ] { [čČ] > ;
[ķĶ] { [ķĶ] > ;
[ģĢ] { [ģĢ] > ;
[ļĻ] { [ļĻ] > ;
[ņŅ] { [ņŅ] > ;
[dD] [zZ] { [dD] [zZ] > ;
[dD] [žŽ] { [dD] [žŽ] > ;

[^[:L:][:M:]] [lL] { [lL] > ;
[^[:L:][:M:]] [mM] { [mM] > ;
[^[:L:][:M:]] [nN] { [nN] > ;
[^[:L:][:M:]] [rR] { [rR] > ;
[lL] { [lL] } [^[:L:][:M:]] > ;
[mM] { [mM] } [^[:L:][:M:]] > ;
[nN] { [nN] } [^[:L:][:M:]] > ;
[rR] { [rR] } [^[:L:][:M:]] > ;
`;
