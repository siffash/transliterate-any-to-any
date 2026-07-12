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

[AEIOUÏaeiouï] { Є } [:Upper:] > YE;
[:^Letter:] { Є } [:Upper:] > YE;
[AEIOUÏ] { Є > YE;
[AEIOUÏaeiouï] { Є > Ye;
[:^Letter:] { Є > Ye;
[AEIOUÏaeiouï] { є > ye;
[:^Letter:] { є > ye;

[AEIOUÏaeiouï] { Ю } [:Upper:] > YU;
[:^Letter:] { Ю } [:Upper:] > YU;
[AEIOUÏ] { Ю > YU;
[AEIOUÏaeiouï] { Ю > Yu;
[:^Letter:] { Ю > Yu;
[AEIOUÏaeiouï] { ю > yu;
[:^Letter:] { ю > yu;

[AEIOUÏaeiouï] { Я } [:Upper:] > YA;
[:^Letter:] { Я } [:Upper:] > YA;
[AEIOUÏ] { Я > YA;
[AEIOUÏaeiouï] { Я > Ya;
[:^Letter:] { Я > Ya;
[AEIOUÏaeiouï] { я > ya;
[:^Letter:] { я > ya;

Ї } [:Upper:] > YI;
[:Upper:] { Ї > YI;
Ї > Yi;
ї > yi;

Й } [:Upper:] > Y;
[:Upper:] { Й > Y;
Й > Y;
й > y;

Є } [:Upper:] > IE;
[:Upper:] { Є > IE;
Є > Ie;
є > ie;

Ю } [:Upper:] > IU;
[:Upper:] { Ю > IU;
Ю > Iu;
ю > iu;

Я } [:Upper:] > IA;
[:Upper:] { Я > IA;
Я > Ia;
я > ia;

Щ } [:Upper:] > ŠČ;
[:Upper:] { Щ > ŠČ;
Щ > Šč;
щ > šč;

Ц } [:Upper:] > TS;
[:Upper:] { Ц > TS;
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
