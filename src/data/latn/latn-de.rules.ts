export const latnDeRules = `
::Null;

[:Lu:] { Ŋ > NG;
Ŋ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NG;
Ŋ } [:Lu:] > NG;
Ŋ > Ng;
ŋ > ng;

C > Ç;
c > ç;

[Šš] { [Šš] > ;

[:Lu:] { Ǯ > DSCH;
Ǯ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DSCH;
Ǯ } [:Lu:] > DSCH;
Ǯ > Dsch;
ǯ > dsch;

[:Lu:] { Ẑ > DS;
Ẑ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DS;
Ẑ } [:Lu:] > DS;
Ẑ > Ds;
ẑ > ds;

ij > ei;
iJ > eI;
Ij > Ei;
IJ > EI;

ɣ > g;
Ɣ > G;

[:Lu:] { Ḫ > CH;
Ḫ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Ḫ } [:Lu:] > CH;
Ḫ > Ch;
ḫ > ch;

::Null;

[^[:L:][:M:]] { ['·] > ;
['·] } [^[:L:][:M:]] > ;
· > \\-;

[^[:L:][:M:]] { š } [pPtTþÞ] > s;
[^[:L:][:M:]] { Š } [pPtTþÞ] > S;

[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [AÄEIÏOÖUÜŸ] > SS;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { S } [aäeiïoöuüÿ] > Ss;
[aäeiïoöuüÿAÄEIÏOÖUÜŸ] { s } [aäeiïoöuüÿAÄEIÏOÖUÜŸ] > ss;

[:Lu:] { Đ > DSCH;
Đ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DSCH;
Đ } [:Lu:] > DSCH;
Đ > Dsch;
đ > dsch;

[:Lu:] { [ČĆ] > TSCH;
[ČĆ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TSCH;
[ČĆ] } [:Lu:] > TSCH;
[ČĆ] > Tsch;
[čć] > tsch;

[:Lu:] { [ŠŽ] > SCH;
[ŠŽ] } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SCH;
[ŠŽ] } [:Lu:] > SCH;
[ŠŽ] > Sch;
[šž] > sch;

[:Lu:] { X > CH;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
X } [:Lu:] > CH;
X > Ch;
x > ch;

Ń } [^[:L:][:M:]] > N;
ń } [^[:L:][:M:]] > n;
Ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁþÞ] > N;
ń } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁþÞ] > n;
Ń } [Jj] > N;
ń } [Jj] > n;
[:Lu:] { Ń > NJ;
Ń } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Ń } [:Lu:] > NJ;
Ń > Nj;
ń > nj;

Ľ } [^[:L:][:M:]] > L;
ľ } [^[:L:][:M:]] > l;
Ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁþÞ] > L;
ľ } [bcdfghjklmnpqrstvwxzçčćđšžțșłBCDFGHJKLMNPQRSTVWXZÇČĆĐŠŽȚȘŁþÞ] > l;
Ľ } [Jj] > L;
ľ } [Jj] > l;
[:Lu:] { Ľ > LJ;
Ľ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Ľ } [:Lu:] > LJ;
Ľ > Lj;
ľ > lj;

q > k;
Q > K;

v > w;
V > W;

y > j;
Y > J;

þ > t;
Þ > T;

ç > z;
Ç > Z;

z > s;
Z > S;

ï > y;
Ï > Y;

ÿ > ü;
Ÿ > Ü;



::Null;

[^[:L:][:M:]] { [ßẞ] } [:Lu:] > SS;
[^[:L:][:M:]] { [ßẞ] > Ss;
[^[:L:][:M:]] { c [kK] > k;
[^[:L:][:M:]] { C [kK] > K;

[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { t [zZ] > z;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { T [zZ] > Z;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { c [kK] > k;
[aAeEiIoOuUäÄöÖüÜyY] [aAeEiIoOuUäÄöÖüÜyY] { C [kK] > K;

[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { t [zZ] > z;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { T [zZ] > Z;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { c [kK] > k;
[bcdfghjklmnpqrstvwxzßBCDFGHJKLMNPQRSTVWXZẞ] { C [kK] > K;

q } [^uU] > k;
Q } [^uU] > K;
q } [^[:L:][:M:]] > k;
Q } [^[:L:][:M:]] > K;

[Ww] { [Ww]+ > ;
[Yy] { [Yy]+ > ;
[Jj] { [Jj]+ > ;
[Dd] [Ss] [Cc] [Hh] { ([Dd] [Ss] [Cc] [Hh])+ > ;
[Tt] [Ss] [Cc] [Hh] { ([Tt] [Ss] [Cc] [Hh])+ > ;
`;
