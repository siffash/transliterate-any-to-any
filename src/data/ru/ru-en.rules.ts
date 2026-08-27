// Wikipedia romanization of Russian

export const ruEnRules = `
[ыи] й } [:^Letter:] > y;
[ЫИ] й } [:^Letter:] > Y;
[ЫИ] Й } [:^Letter:] > Y;

ые } [:^Letter:] > ye;
Ые } [:^Letter:] > Ye;
ЫЕ } [:^Letter:] > YE;

[:^Letter:] { Е } [:Lu:] > YE;
[:^Letter:] { Е > Ye;
[:^Letter:] { е > ye;

[АЕЁИОУЫЭЮЯаеёиоуыэюя] { Е } [:Lu:] > YE;
[АЕЁИОУЫЭЮЯ] { Е > YE;
[аеёиоуыэюя] { Е > Ye;
[АЕЁИОУЫЭЮЯаеёиоуыэюя] { е > ye;

[ЪЬ] Е } [:Lu:] > YE;
[ЪЬ] Е > YE;
[ЪЬ] е > Ye;
[ъь] Е } [:Lu:] > YE;
[ъь] Е > Ye;
[ъь] е > ye;

[ЪЬ] } [АИОУЫЭаиоуыэ] > Y;
[ъь] } [АИОУЫЭаиоуыэ] > y;
[ЪъЬь] > ;

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
Е } [:Lu:] > E;
[:Lu:] { Е > E;
Е > E;
е > e;
Ё } [:Lu:] > YO;
[:Lu:] { Ё > YO;
Ё > Yo;
ё > yo;
Ж } [:Lu:] > ZH;
[:Lu:] { Ж > ZH;
Ж > Zh;
ж > zh;
З > Z;
з > z;
И > I;
и > i;
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
Х } [:Lu:] > KH;
[:Lu:] { Х > KH;
Х > Kh;
х > kh;
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
Ы > Y;
ы > y;
Э > E;
э > e;
Ю } [:Lu:] > YU;
[:Lu:] { Ю > YU;
Ю > Yu;
ю > yu;
Я } [:Lu:] > YA;
[:Lu:] { Я > YA;
Я > Ya;
я > ya;

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
