export const mkEnRules = `
::NFC;

Ѝ > И;
ѝ > и;
Ѐ > Е;
ѐ > е;

::Null;

Ѓ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > GJ;
Ѓ } [:Lu:] > GJ;
[:Lu:] { Ѓ > GJ;
Ѓ > Gj;
ѓ > gj;

Ж } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > ZH;
Ж } [:Lu:] > ZH;
[:Lu:] { Ж > ZH;
Ж > Zh;
ж > zh;

Ѕ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DZ;
Ѕ } [:Lu:] > DZ;
[:Lu:] { Ѕ > DZ;
Ѕ > Dz;
ѕ > dz;

Љ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > LJ;
Љ } [:Lu:] > LJ;
[:Lu:] { Љ > LJ;
Љ > Lj;
љ > lj;

Њ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > NJ;
Њ } [:Lu:] > NJ;
[:Lu:] { Њ > NJ;
Њ > Nj;
њ > nj;

Ќ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KJ;
Ќ } [:Lu:] > KJ;
[:Lu:] { Ќ > KJ;
Ќ > Kj;
ќ > kj;

Ч } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > CH;
Ч } [:Lu:] > CH;
[:Lu:] { Ч > CH;
Ч > Ch;
ч > ch;

Џ } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > DJ;
Џ } [:Lu:] > DJ;
[:Lu:] { Џ > DJ;
Џ > Dj;
џ > dj;

Ш } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > SH;
Ш } [:Lu:] > SH;
[:Lu:] { Ш > SH;
Ш > Sh;
ш > sh;

А > A;
а > a;
Б > B;
б > b;
В > V;
в > v;
Г > G;
г > g;
Д > D;
д > d;
Е > E;
е > e;
З > Z;
з > z;
И > I;
и > i;
Ј > J;
ј > j;
К > K;
к > k;
Л > L;
л > l;
М > M;
м > m;
Н > N;
н > n;
О > O;
о > o;
П > P;
п > p;
Р > R;
р > r;
С > S;
с > s;
Т > T;
т > t;
У > U;
у > u;
Ф > F;
ф > f;
Х > H;
х > h;
Ц > C;
ц > c;

::Null;

[:Cyrillic:] > ;



::Null;

[wW] { [wW]+ > ;
[yY] { [yY]+ > ;
[hH] { [hH]+ > ;
[iI] { [iI]+ } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { [cC]+ } [kK] > ;

::Null;

[kK] { [kK]+ } [hH] > ;
[gG] { [gG]+ } [hH] > ;
`;
