export const ukEnRules = `
::NFC;

['’‘\`´ʼ] > ;

ЗГ > ZGH;
Зг > Zgh;
зГ > zGH;
зг > zgh;

[^[:L:][:M:]] { Є } [:Lu:] > YE;
[^[:L:][:M:]] { Є > Ye;
[^[:L:][:M:]] { є > ye;

[:Lu:] { Є > IE;
Є } [:Lu:] > IE;
Є > Ie;
є > ie;

[^[:L:][:M:]] { Ю } [:Lu:] > YU;
[^[:L:][:M:]] { Ю > Yu;
[^[:L:][:M:]] { ю > yu;

[:Lu:] { Ю > IU;
Ю } [:Lu:] > IU;
Ю > Iu;
ю > iu;

[^[:L:][:M:]] { Я } [:Lu:] > YA;
[^[:L:][:M:]] { Я > Ya;
[^[:L:][:M:]] { я > ya;

[:Lu:] { Я > IA;
Я } [:Lu:] > IA;
Я > Ia;
я > ia;

[^[:L:][:M:]] { Ї } [:Lu:] > YI;
[^[:L:][:M:]] { Ї > Yi;
[^[:L:][:M:]] { ї > yi;

[:Lu:] { Ї > I;
Ї } [:Lu:] > I;
Ї > I;
ї > i;

[^[:L:][:M:]] { Й } [:Lu:] > Y;
[^[:L:][:M:]] { Й > Y;
[^[:L:][:M:]] { й > y;

[:Lu:] { Й > I;
Й } [:Lu:] > I;
Й > I;
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
а > a;

Б > B;
б > b;

В > V;
в > v;

Г > H;
г > h;

Ґ > G;
ґ > g;

Д > D;
д > d;

Е > E;
е > e;

З > Z;
з > z;

И > Y;
и > y;

І > I;
і > i;

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

[Ьь] > ;

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
