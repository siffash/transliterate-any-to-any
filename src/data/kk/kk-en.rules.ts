export const kkEnRules = `
::NFC;

[AÄEIÏOÖUÜaäeiïoöuü] { Е } [:Ll:] > Ye;
[AÄEIÏOÖUÜaäeiïoöuü] { Е > YE;
[AÄEIÏOÖUÜaäeiïoöuü] { е > ye;

[ЪЬ] Е } [^[:L:][:M:]] > Ye;
[ЪЬ] Е } [:Ll:] > Ye;
[ЪЬ] Е > YE;
[ЪЬ] е > Ye;
[ъь] е > ye;

[ЪЬъь] > ;

Ё } [:Lu:] > YO;
[:Lu:] { Ё > YO;
Ё > Yo;
ё > yo;

Ю } [:Lu:] > YU;
[:Lu:] { Ю > YU;
Ю > Yu;
ю > yu;

Я } [:Lu:] > YA;
[:Lu:] { Я > YA;
Я > Ya;
я > ya;

Ғ } [:Lu:] > GH;
[:Lu:] { Ғ > GH;
Ғ > Gh;
ғ > gh;

Х } [:Lu:] > KH;
[:Lu:] { Х > KH;
Х > Kh;
х > kh;

Ж } [:Lu:] > ZH;
[:Lu:] { Ж > ZH;
Ж > Zh;
ж > zh;

Ц } [:Lu:] > TS;
[:Lu:] { Ц > TS;
Ц > Ts;
ц > ts;

Ч } [:Lu:] > CH;
[:Lu:] { Ч > CH;
Ч > Ch;
ч > ch;

Ш } [:Lu:] > SH;
[:Lu:] { Ш > SH;
Ш > Sh;
ш > sh;

Щ } [:Lu:] > SHCH;
[:Lu:] { Щ > SHCH;
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
