export const ukLatnRules = `
::NFC;

['’‘\`´ʼ"] > ;

ЕЙ > IJ;
Ей > Ij;
ей > ij;

Д } [ЬЮЯЄьюяє] > Đ;
д } [ЬЮЯЄьюяє] > đ;
Т } [ЬЮЯЄьюяє] > Ć;
т } [ЬЮЯЄьюяє] > ć;
Л } [ЬЮЯЄьюяє] > Ľ;
л } [ЬЮЯЄьюяє] > ľ;
Н } [ЬЮЯЄьюяє] > Ń;
н } [ЬЮЯЄьюяє] > ń;

[ĐĆĽŃđćľń] { Я > A;
[ĐĆĽŃđćľń] { я > a;
[ĐĆĽŃđćľń] { Ю > U;
[ĐĆĽŃđćľń] { ю > u;
[ĐĆĽŃđćľń] { Є > E;
[ĐĆĽŃđćľń] { є > e;

[[:^Letter:]AEIOUÏaeiouï] { Є } [:Upper:] > YE;
[[:^Letter:]AEIOUÏaeiouï] { Є > Ye;
[[:^Letter:]AEIOUÏaeiouï] { є > ye;

[[:^Letter:]AEIOUÏaeiouï] { Ю } [:Upper:] > YU;
[[:^Letter:]AEIOUÏaeiouï] { Ю > Yu;
[[:^Letter:]AEIOUÏaeiouï] { ю > yu;

[[:^Letter:]AEIOUÏaeiouï] { Я } [:Upper:] > YA;
[[:^Letter:]AEIOUÏaeiouï] { Я > Ya;
[[:^Letter:]AEIOUÏaeiouï] { я > ya;

Ї } [:Upper:] > YI;
Ї > Yi;
ї > yi;

Й } [:Upper:] > Y;
Й > Y;
й > y;

Є } [:Upper:] > IE;
Є > Ie;
є > ie;

Ю } [:Upper:] > IU;
Ю > Iu;
ю > iu;

Я } [:Upper:] > IA;
Я > Ia;
я > ia;

[:Upper:] { Щ > ŠČ;
Щ } [:Upper:] > ŠČ;
Щ > Šč;
щ > šč;

[:Upper:] { Ц > TS;
Ц } [:Upper:] > TS;
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

Ь > ;
ь > ;
`;
