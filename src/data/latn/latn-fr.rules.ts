export const latnFrRules = `
::Null;

[Čč] { [Čč] > ;
[Šš] { [Šš] > ;
[Dd] [Žž] { [Dd] [Žž] > ;

::Null;

ts } ts > ;
TS } TS > ;

IJ > EI;
iJ > eI;
Ij > Ei;
ij > ei;

::Null;

[^[:L:][:M:]] { \\' > ;
\\' } [^[:L:][:M:]] > ;
· > ;

[:Lu:] { Š > CH;
Š } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Š } [:Lu:] > CH;
Š > Ch;
š > ch;

[:Lu:] { [ČĆ] > TCH;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TCH;
[ČĆ] } [:Lu:] > TCH;
[ČĆ] > Tch;
[čć] > tch;

[:Lu:] { Đ > DJ;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DJ;
Đ } [:Lu:] > DJ;
Đ > Dj;
đ > dj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > l;

Ľ } [IÏiï] > L;
ľ } [IÏiï] > l;

[:Lu:] { Ľ > LI;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LI;
Ľ } [:Lu:] > LI;
Ľ > Li;
ľ > li;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁ] > n;
[:Lu:] { Ń > GN;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GN;
Ń } [:Lu:] > GN;
Ń > Gn;
ń > gn;

[:Lu:] { X > KH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KH;
X } [:Lu:] > KH;
X > Kh;
x > kh;

Ž > J;
ž > j;

[AEIOUYÄÏÖÜŸ] { S } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸ] > SS;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { S } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > Ss;
[AEIOUYÄÏÖÜŸaeiouyäïöüÿ] { s } [AEIOUYÄÏÖÜŸaeiouyäïöüÿ] > ss;

[^[:L:][:M:]] { S } [^[:L:][:M:]] > S;
[^[:L:][:M:]] { s } [^[:L:][:M:]] > s;
[sS] { S } [^[:L:][:M:]] > SE;
[sS] { s } [^[:L:][:M:]] > se;
[aeoAEO] { K [sS] } [^[:L:][:M:]] > X;
[aeoAEO] { k [sS] } [^[:L:][:M:]] > x;
[^aeiouAEIOU] [iI] { K [sS] } [^[:L:][:M:]] > X;
[^aeiouAEIOU] [iI] { k [sS] } [^[:L:][:M:]] > x;
[BCDFGHJKLMNPQRTVWXZbcdfghjklmnpqrtvwxz] { S } [^[:L:][:M:]] > S;
[BCDFGHJKLMNPQRTVWXZbcdfghjklmnpqrtvwxz] { s } [^[:L:][:M:]] > s;
[:Lu:] { S } [^[:L:][:M:]] > SSE;
S } [^[:L:][:M:]] > Sse;
s } [^[:L:][:M:]] > sse;

G } [EIYÖÏ] > GU;
G } [eiyöï] > Gu;
g } [EIYÖÏ] > gU;
g } [eiyöï] > gu;

[:Lu:] { Ä > AE;
Ä } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > AE;
Ä } [:Lu:] > AE;
Ä > Ae;
ä > ae;

[:Lu:] { Ö > EU;
Ö } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > EU;
Ö } [:Lu:] > EU;
Ö > Eu;
ö > eu;

OU > OU;
oU > oU;
Ou > Ou;
ou > ou;

[:Lu:] { U > OU;
U } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > OU;
U } [:Lu:] > OU;
U > Ou;
u > ou;

[ÜŸ] > U;
[üÿ] > u;

Ï > I;
ï > i;

::Null;

ç } [eéèêëiîïyEÉÈÊËIÎÏY] > c;
Ç } [eéèêëiîïyEÉÈÊËIÎÏY] > C;
`;
