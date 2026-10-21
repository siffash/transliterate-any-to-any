export const skLatnRules = `
::NFC;

[rR] { n } [eE] [^[:L:][:M:]] > ń;
[rR] { N } [eE] [^[:L:][:M:]] > Ń;

c [hH] > x;
C [hH] > X;

[:L:] { C } SS > K;
[:L:] { c } ss > k;
[:Lu:] { C > TS;
C } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > TS;
C } [:Lu:] > TS;
C > Ts;
c > ts;

[:Lu:] { X > KS;
X } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > KS;
X } [:Lu:] > KS;
X > Ks;
x > ks;

q > k;
Q > K;

ô > o;
Ô > O;

[:Lu:] { Ř > RŽ;
Ř } ['’‘\`´ʼ-] [:Lu:] [:Lu:] > RŽ;
Ř } [:Lu:] > RŽ;
Ř > Rž;
ř > rž;

ď > đ;
Ď > Đ;

ť > ć;
Ť > Ć;

ň > ń;
Ň > Ń;

j > y;
J > Y;

w > v;
W > V;

á > a;
Á > A;

é > e;
É > E;

[íýy] > i;
[ÍÝY] > I;

ó > o;
Ó > O;

ú > u;
Ú > U;

ĺ > l;
Ĺ > L;

ŕ > r;
Ŕ > R;
`;
