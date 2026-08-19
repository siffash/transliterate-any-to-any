export const ukLatnRules = `
::NFC;

['’‘\`´ʼ] > \\';

ЕЙ > IJ;
Ей > Ij;
ей > ij;

Д } [ЬЮЯЄьюяє] > Đ;
д } [ЬЮЯЄьюяє] > đ;
Л } [ЬЮЯЄьюяє] > Ľ;
л } [ЬЮЯЄьюяє] > ľ;
Н } [ЬЮЯЄьюяє] > Ń;
н } [ЬЮЯЄьюяє] > ń;

[ĐĽŃđľń] { Я > A;
[ĐĽŃđľń] { я > a;
[ĐĽŃđľń] { Ю > U;
[ĐĽŃđľń] { ю > u;
[ĐĽŃđľń] { Є > E;
[ĐĽŃđľń] { є > e;

[AEIOUÏaeiouï] { Є } [:Lu:] > YE;
[:^Letter:] { Є } [:Lu:] > YE;
[AEIOUÏ] { Є > YE;
[AEIOUÏaeiouï] { Є > Ye;
[:^Letter:] { Є > Ye;
[AEIOUÏaeiouï] { є > ye;
[:^Letter:] { є > ye;

[AEIOUÏaeiouï] { Ю } [:Lu:] > YU;
[:^Letter:] { Ю } [:Lu:] > YU;
[AEIOUÏ] { Ю > YU;
[AEIOUÏaeiouï] { Ю > Yu;
[:^Letter:] { Ю > Yu;
[AEIOUÏaeiouï] { ю > yu;
[:^Letter:] { ю > yu;

[AEIOUÏaeiouï] { Я } [:Lu:] > YA;
[:^Letter:] { Я } [:Lu:] > YA;
[AEIOUÏ] { Я > YA;
[AEIOUÏaeiouï] { Я > Ya;
[:^Letter:] { Я > Ya;
[AEIOUÏaeiouï] { я > ya;
[:^Letter:] { я > ya;

Ї } [:Lu:] > YI;
[:Lu:] { Ї > YI;
Ї > Yi;
ї > yi;

Й } [:Lu:] > Y;
[:Lu:] { Й > Y;
Й > Y;
й > y;

Є } [:Lu:] > IE;
[:Lu:] { Є > IE;
Є > Ie;
є > ie;

Ю } [:Lu:] > IU;
[:Lu:] { Ю > IU;
Ю > Iu;
ю > iu;

Я } [:Lu:] > IA;
[:Lu:] { Я > IA;
Я > Ia;
я > ia;

Щ } [:Lu:] > ŠČ;
[:Lu:] { Щ > ŠČ;
Щ > Šč;
щ > šč;

Ц } [:Lu:] > TS;
[:Lu:] { Ц > TS;
Ц > Ts;
ц > ts;

А > A; а > a;
Б > B; б > b;
В > V; в > v;
Г > H; г > h;
Ґ > G; ґ > g;
Д > D; д > d;
Е > E; е > e;
Ж > Ž; ж > ž;
З > Z; з > z;
И > Ï; и > ï;
І > I; і > i;
К > K; к > k;
Л > L; л > l;
М > M; м > m;
Н > N; н > n;
О > O; о > o;
П > P; п > p;
Р > R; р > r;
С > S; с > s;
Т > T; т > t;
У > U; у > u;
Ф > F; ф > f;
Х > X; х > x;
Ч > Č; ч > č;
Ш > Š; ш > š;

Ь > ; ь > ;
`;
