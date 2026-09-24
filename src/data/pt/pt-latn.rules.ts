export const ptLatnRules = `
[ÁÀÂÃ] > A;
[áàâã] > a;

[ÉÊ] > E;
[éê] > e;

Í > I;
í > i;

[ÓÔÕ] > O;
[óôõ] > o;

[ÚÜ] > U;
[úü] > u;

::Null;

C [hH] > Š;
c [hH] > š;

L [hH] > Ľ;
l [hH] > ľ;

N [hH] > Ń;
n [hH] > ń;

Q [Uu] } [EIei] > K;
q [Uu] } [EIei] > k;

QU } [AOao] > KW;
qU } [AOao] > kW;
Qu } [AOao] > Kw;
qu } [AOao] > kw;

G [Uu] } [EIei] > G;
g [Uu] } [EIei] > g;

GU } [AOao] > GW;
gU } [AOao] > gW;
Gu } [AOao] > Gw;
gu } [AOao] > gw;

Q > K;
q > k;

C } [EIei] > S;
c } [EIei] > s;
C > K;
c > k;

Ç > S;
ç > s;

G } [EIei] > Ž;
g } [EIei] > ž;

J > Ž;
j > ž;

[AEIOUaeiou] { S } [AEIOUaeiou] > Z;
[AEIOUaeiou] { s } [AEIOUaeiou] > z;

[SZ] } [^[:L:][:M:]] > Š;
[sz] } [^[:L:][:M:]] > š;

[^[:L:][:M:]] [Ee] { X } [AEIOUaeiou] [:L:] > Z;
[^[:L:][:M:]] [Ee] { x } [AEIOUaeiou] [:L:] > z;

X > Š;
x > š;
`;
