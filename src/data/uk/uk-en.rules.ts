// Ukrainian National (2010) transliteration system

export const ukEnRules = `
['’‘\`´ʼ] > ;

ЗГ > ZGH;
Зг > Zgh;
зГ > zGH;
зг > zgh;

[^[:L:][:M:]] { Є } [:Lu:] > YE;
[^[:L:][:M:]] { Є > Ye;
[:Lu:] { Є > IE;
Є } [:Lu:] > IE;
Є > Ie;
[^[:L:][:M:]] { є > ye;
є > ie;

[^[:L:][:M:]] { Ю } [:Lu:] > YU;
[^[:L:][:M:]] { Ю > Yu;
[:Lu:] { Ю > IU;
Ю } [:Lu:] > IU;
Ю > Iu;
[^[:L:][:M:]] { ю > yu;
ю > iu;

[^[:L:][:M:]] { Я } [:Lu:] > YA;
[^[:L:][:M:]] { Я > Ya;
[:Lu:] { Я > IA;
Я } [:Lu:] > IA;
Я > Ia;
[^[:L:][:M:]] { я > ya;
я > ia;

[^[:L:][:M:]] { Ї } [:Lu:] > YI;
[^[:L:][:M:]] { Ї > Yi;
[:Lu:] { Ї > I;
Ї } [:Lu:] > I;
Ї > I;
[^[:L:][:M:]] { ї > yi;
ї > i;

[^[:L:][:M:]] { Й } [:Lu:] > Y;
[^[:L:][:M:]] { Й > Y;
[:Lu:] { Й > I;
Й } [:Lu:] > I;
Й > I;
[^[:L:][:M:]] { й > y;
й > i;

[:Lu:] { Щ > SHCH;
Щ } [:Lu:] > SHCH;
Щ > Shch;
щ > shch;

[:Lu:] { Ж > ZH;
Ж } [:Lu:] > ZH;
Ж > Zh;
ж > zh;

[:Lu:] { Х > KH;
Х } [:Lu:] > KH;
Х > Kh;
х > kh;

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

А > A;
Б > B;
В > V;
Г > H;
Ґ > G;
Д > D;
Е > E;
З > Z;
И > Y;
І > I;
К > K;
Л > L;
М > M;
Н > N;
О > O;
П > P;
Р > R;
С > S;
Т > T;
У > U;
Ф > F;
Ь > ;
а > a;
б > b;
в > v;
г > h;
ґ > g;
д > d;
е > e;
з > z;
и > y;
і > i;
к > k;
л > l;
м > m;
н > n;
о > o;
п > p;
р > r;
с > s;
т > t;
у > u;
ф > f;
ь > ;

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
