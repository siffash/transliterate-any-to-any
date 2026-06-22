// Digraph system ICAO Doc 9303

export const mkEnRules = `
$uc = [АБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ[:Upper:]];

{ Ѓ } $uc > GJ;
$uc { Ѓ } > GJ;
Ѓ > Gj;
ѓ > gj;

{ Ж } $uc > ZH;
$uc { Ж } > ZH;
Ж > Zh;
ж > zh;

{ Ѕ } $uc > DZ;
$uc { Ѕ } > DZ;
Ѕ > Dz;
ѕ > dz;

{ Љ } $uc > LJ;
$uc { Љ } > LJ;
Љ > Lj;
љ > lj;

{ Њ } $uc > NJ;
$uc { Њ } > NJ;
Њ > Nj;
њ > nj;

{ Ќ } $uc > KJ;
$uc { Ќ } > KJ;
Ќ > Kj;
ќ > kj;

{ Ч } $uc > CH;
$uc { Ч } > CH;
Ч > Ch;
ч > ch;

{ Џ } $uc > DJ;
$uc { Џ } > DJ;
Џ > Dj;
џ > dj;

{ Ш } $uc > SH;
$uc { Ш } > SH;
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
`;
