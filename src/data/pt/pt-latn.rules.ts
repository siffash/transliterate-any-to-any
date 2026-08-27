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

GU } [EIei] > G;
Gu } [EIei] > G;
gu } [EIei] > g;

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

[SZ] } [^[:Letter:][:Mark:]] > Š;
[sz] } [^[:Letter:][:Mark:]] > š;

[^[:Letter:][:Mark:]] E { X } [AEIOUaeiou] [:Letter:] > Z;
[^[:Letter:][:Mark:]] E { x } [AEIOUaeiou] [:Letter:] > z;
[^[:Letter:][:Mark:]] e { X } [AEIOUaeiou] [:Letter:] > Z;
[^[:Letter:][:Mark:]] e { x } [AEIOUaeiou] [:Letter:] > z;

X > Š;
x > š;
`;
