export const kkEnRules = `
::NFC;

[AÄEIÏOÖUÜ] { Е > YE;
[AÄEIÏOÖUÜaäeiïoöuü] { Е > Ye;
[AÄEIÏOÖUÜaäeiïoöuü] { е > ye;

[ЪЬ] Е > YE;
[ЪЬ] е > Ye;
[ъь] Е > yE;
[ъь] е > ye;

[ЪЬъь] > ;

[:Lu:] { Ё > YO;
Ё } [:Lu:] > YO;
Ё > Yo;
ё > yo;

[:Lu:] { Ю > YU;
Ю } [:Lu:] > YU;
Ю > Yu;
ю > yu;

[:Lu:] { Я > YA;
Я } [:Lu:] > YA;
Я > Ya;
я > ya;

[:Lu:] { Ғ > GH;
Ғ } [:Lu:] > GH;
Ғ > Gh;
ғ > gh;

[:Lu:] { Х > KH;
Х } [:Lu:] > KH;
Х > Kh;
х > kh;

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

[:Lu:] { Щ > SHCH;
Щ } [:Lu:] > SHCH;
Щ > Shch;
щ > shch;

[АӘ] > A;
[аә] > a;

Б > B;
б > b;

В > V;
в > v;

Г > G;
г > g;

Д > D;
д > d;

[ЕЭ] > E;
[еэ] > e;

З > Z;
з > z;

[ИІ] > I;
[иі] > i;

[ЙЫ] > Y;
[йы] > y;

К > K;
к > k;

Қ > Q;
қ > q;

Л > L;
л > l;

М > M;
м > m;

[НҢ] > N;
[нң] > n;

[ОӨ] > O;
[оө] > o;

П > P;
п > p;

Р > R;
р > r;

С > S;
с > s;

Т > T;
т > t;

[УҰҮ] > U;
[уұү] > u;

Ф > F;
ф > f;

Һ > H;
һ > h;

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
