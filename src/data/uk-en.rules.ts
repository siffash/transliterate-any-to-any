// Ukrainian National (2010) transliteration system

export const ukEnRules = `
['’‘\`´ʼ] > ;

ЗГ > ZGH;
Зг > Zgh;
зГ > zGH;
зг > zgh;

[:^Letter:] { Є } [:Lu:] > YE;
[:^Letter:] { Є > Ye;
[:Lu:] { Є > IE;
Є } [:Lu:] > IE;
Є > Ie;
[:^Letter:] { є > ye;
є > ie;

[:^Letter:] { Ю } [:Lu:] > YU;
[:^Letter:] { Ю > Yu;
[:Lu:] { Ю > IU;
Ю } [:Lu:] > IU;
Ю > Iu;
[:^Letter:] { ю > yu;
ю > iu;

[:^Letter:] { Я } [:Lu:] > YA;
[:^Letter:] { Я > Ya;
[:Lu:] { Я > IA;
Я } [:Lu:] > IA;
Я > Ia;
[:^Letter:] { я > ya;
я > ia;

[:^Letter:] { Ї } [:Lu:] > YI;
[:^Letter:] { Ї > Yi;
[:Lu:] { Ї > I;
Ї } [:Lu:] > I;
Ї > I;
[:^Letter:] { ї > yi;
ї > i;

[:^Letter:] { Й } [:Lu:] > Y;
[:^Letter:] { Й > Y;
[:Lu:] { Й > I;
Й } [:Lu:] > I;
Й > I;
[:^Letter:] { й > y;
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
[iI] { [iIyY] } [:^Letter:] > ;
[yY] { [iIyY] } [:^Letter:] > ;
[:^Letter:] { [cC] } [kK] > ;

::Null;

[kK] { [kK] } [hH] > ;
[gG] { [gG] } [hH] > ;
`;
