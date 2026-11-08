export const latnIsRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[Šš] { [Šš] > ;
č } č > t;
Č } Č > T;
ć } ć > t;
Ć } Ć > T;
đ } đ > d;
Đ } Đ > D;
ǯ } ǯ > d;
Ǯ } Ǯ > D;

::Null;

[Tt] [Ss] { [Tt] [Ss] > ;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

[:Lu:] { Ǯ > DSJ;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DSJ;
Ǯ } [:Lu:] > DSJ;
Ǯ > Dsj;
ǯ > dsj;

[:Lu:] { Ẑ > DS;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DS;
Ẑ } [:Lu:] > DS;
Ẑ > Ds;
ẑ > ds;

Þ > Þ;
þ > þ;

Ɣ > G;
ɣ > g;

Ḫ > K;
ḫ > k;

::Null;

[:Lu:] { [ČĆ] > TSJ;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TSJ;
[ČĆ] } [:Lu:] > TSJ;
[ČĆ] > Tsj;
[čć] > tsj;

[:Lu:] { Đ > DJ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
Ľ } [Yy] > L;
ľ } [Yy] > l;
[:Lu:] { Ľ > LJ;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
Ń } [Yy] > N;
ń } [Yy] > n;
[:Lu:] { Ń > NJ;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

[:Lu:] { [ŠŽ] > SJ;
[ŠŽ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SJ;
[ŠŽ] } [:Lu:] > SJ;
[ŠŽ] > Sj;
[šž] > sj;

Ä > Æ;
ä > æ;

Ï > Í;
ï > í;

U > Ú;
u > ú;

Ü > Y;
ü > y;

Ÿ > U;
ÿ > u;

QU } [aeiouyáéíóúýæööäïüÿAEIOUYÁÉÍÓÚÝÆÖÖÄÏÜŸ] > KV;
Qu } [aeiouyáéíóúýæööäïüÿAEIOUYÁÉÍÓÚÝÆÖÖÄÏÜŸ] > Kv;
qU } [aeiouyáéíóúýæööäïüÿAEIOUYÁÉÍÓÚÝÆÖÖÄÏÜŸ] > kV;
qu } [aeiouyáéíóúýæööäïüÿAEIOUYÁÉÍÓÚÝÆÖÖÄÏÜŸ] > kv;

[QX] > K;
[qx] > k;

W > V;
w > v;

Y > J;
y > j;

Z > S;
z > s;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;



::Null;

[kKgGhH] { [jJ] } [eEéÉiIíÍyYýÝæÆ] > ;
[^[:L:][:M:]] { ð > d;
[^[:L:][:M:]] { Ð > D;

qu } [aeiouyáéíóúýæööAEIOUYÁÉÍÓÚÝÆÖÖ] > kv;
Qu } [aeiouyáéíóúýæööAEIOUYÁÉÍÓÚÝÆÖÖ] > Kv;
qU } [aeiouyáéíóúýæööAEIOUYÁÉÍÓÚÝÆÖÖ] > kV;
QU } [aeiouyáéíóúýæööAEIOUYÁÉÍÓÚÝÆÖÖ] > KV;

c } [eEéÉiIíÍyYýÝæÆ] > s;
C } [eEéÉiIíÍyYýÝæÆ] > S;

[cq] > k;
[CQ] > K;

w > v;
W > V;

z > s;
Z > S;

a [aA] > á;
A [aA] > Á;
e [eE] > é;
E [eE] > É;
i [iI] > í;
I [iI] > Í;
o [oO] > ó;
O [oO] > Ó;
u [uU] > ú;
U [uU] > Ú;
y [yY] > ý;
Y [yY] > Ý;

[öÖ] { [öÖ]+ > ;
[æÆ] { [æÆ]+ > ;

[bcdfghklmnpqrstvwxzBCDFGHKLMNPQRSTVWXZ] [jJ] { [jJ]+ > ;
`;
