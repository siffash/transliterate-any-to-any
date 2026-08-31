// Streamlined System with -ia-exception (2009 Transliteration Act)

export const bgEnRules = `
ия } [^[:L:][:M:]] > ia;
Ия } [^[:L:][:M:]] > Ia;
ИЯ } [^[:L:][:M:]] > IA;
иЯ } [^[:L:][:M:]] > iA;

[:Lu:] { Ж > ZH;
Ж } [:Lu:] > ZH;
Ж > Zh;
ж > zh;

[:Lu:] { Ц > TS;
Ц } [:Lu:] > TS;
Ц > Ts;
ц > ts;

[:Lu:] { Ч > CH;
Ч } [:Lu:] > CH;
Ч > Ch;
ч > ch;

[:Lu:] { Ш > SH;
Ш } [:Lu:] > SH;
Ш > Sh;
ш > sh;

[:Lu:] { Щ > SHT;
Щ } [:Lu:] > SHT;
Щ > Sht;
щ > sht;

[:Lu:] { Ю > YU;
Ю } [:Lu:] > YU;
Ю > Yu;
ю > yu;

[:Lu:] { Я > YA;
Я } [:Lu:] > YA;
Я > Ya;
я > ya;

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
Ѝ > I;
ѝ > i;
Й > Y;
й > y;
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
Ъ > A;
ъ > a;
Ь > Y;
ь > y;

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
