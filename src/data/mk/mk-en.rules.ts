// Digraph system ICAO Doc 9303

export const mkEnRules = `
Ѓ } [:Lu:] > GJ;
[:Lu:] { Ѓ > GJ;
Ѓ > Gj;
ѓ > gj;

Ж } [:Lu:] > ZH;
[:Lu:] { Ж > ZH;
Ж > Zh;
ж > zh;

Ѕ } [:Lu:] > DZ;
[:Lu:] { Ѕ > DZ;
Ѕ > Dz;
ѕ > dz;

Љ } [:Lu:] > LJ;
[:Lu:] { Љ > LJ;
Љ > Lj;
љ > lj;

Њ } [:Lu:] > NJ;
[:Lu:] { Њ > NJ;
Њ > Nj;
њ > nj;

Ќ } [:Lu:] > KJ;
[:Lu:] { Ќ > KJ;
Ќ > Kj;
ќ > kj;

Ч } [:Lu:] > CH;
[:Lu:] { Ч > CH;
Ч > Ch;
ч > ch;

Џ } [:Lu:] > DJ;
[:Lu:] { Џ > DJ;
Џ > Dj;
џ > dj;

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

[wW] { [wW] > ;
[yY] { [yY] > ;
[hH] { [hH] > ;
[iI] { [iIyY] } [^[:L:][:M:]] > ;
[yY] { [iIyY] } [^[:L:][:M:]] > ;
[^[:L:][:M:]] { [cC] } [kK] > ;

::Null;

[kK] { [kK] } [hH] > ;
[gG] { [gG] } [hH] > ;
`;
