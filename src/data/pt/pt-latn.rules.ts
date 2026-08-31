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

CH > Š;
Ch > Š;
ch > š;

LH > Ľ;
Lh > Ľ;
lh > ľ;

NH > Ń;
Nh > Ń;
nh > ń;

QU } [EIei] > K;
Qu } [EIei] > K;
qu } [EIei] > k;

QU } [AOao] > KW;
Qu } [AOao] > Kw;
qu } [AOao] > kw;

GU } [EIei] > G;
Gu } [EIei] > G;
gu } [EIei] > g;

GU } [AOao] > GW;
Gu } [AOao] > Gw;
gu } [AOao] > gw;

Q > K;
q > k;

C } [EIei] > S;
c } [EIei] > s;
Ç > S;
ç > s;
C > K;
c > k;

G } [EIei] > Ž;
g } [EIei] > ž;
J > Ž;
j > ž;

[AEIOUaeiou] { S } [AEIOUaeiou] > Z;
[AEIOUaeiou] { s } [AEIOUaeiou] > z;

[SZ] } [^[:L:][:M:]] > Š;
[sz] } [^[:L:][:M:]] > š;

[^[:L:][:M:]] E { X } [AEIOUaeiou] [:L:] > Z;
[^[:L:][:M:]] E { x } [AEIOUaeiou] [:L:] > z;
[^[:L:][:M:]] e { X } [AEIOUaeiou] [:L:] > Z;
[^[:L:][:M:]] e { x } [AEIOUaeiou] [:L:] > z;

X > Š;
x > š;
`;
