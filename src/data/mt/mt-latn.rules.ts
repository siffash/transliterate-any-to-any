export const mtLatnRules = `
::NFC;

’ } [^[:L:][:M:]] > ;

[ÀÁÂ] > A;
[àáâ] > a;
[ÈÉÊ] > E;
[èéê] > e;
[ÌÍÎ] > I;
[ìíî] > i;
[ÒÓÔ] > O;
[òóô] > o;
[ÙÚÛ] > U;
[ùúû] > u;

::Null;

I [eE] > I;
i [eE] > i;

T [hH] > T;
t [hH] > t;

P [hH] > F;
p [hH] > f;

S [hH] > Š;
s [hH] > š;

QU } [aeiouAEIOU] > KW;
Qu } [aeiouAEIOU] > Kw;
qU } [aeiouAEIOU] > kW;
qu } [aeiouAEIOU] > kw;

G [Ħħ] } [^[:L:][:M:]] > H;
g [Ħħ] } [^[:L:][:M:]] > h;

G [Ħħ] ([:L:]) >| &Any-Upper($1);
[Gg] [Ħħ] > ;

Ħ > H;
ħ > h;

H ([:L:]) >| &Any-Upper($1);
[Hh] } [:L:] > ;

C [hH] > K;
c [hH] > k;

Ġ > Ǯ;
ġ > ǯ;

Z > C;
z > c;

Ċ > Č;
ċ > č;

X > Š;
x > š;

J > Y;
j > y;

Ż > Z;
ż > z;

S [Cc] [iI] } [aAoOuU] > Š;
s [Cc] [iI] } [aAoOuU] > š;
S [Cc] } [eEiIyY] > Š;
s [Cc] } [eEiIyY] > š;
C [iI] } [aAoOuU] > Č;
c [iI] } [aAoOuU] > č;
C } [eEiIyY] > Č;
c } [eEiIyY] > č;
G [iI] } [aAoOuU] > Ǯ;
g [iI] } [aAoOuU] > ǯ;
[Ǯǯ] [iI] { G } [^[:L:][:M:]] > Ǯ;
[Ǯǯ] [iI] { g } [^[:L:][:M:]] > ǯ;
GG } [eEiIyY] > ǮǮ;
gG } [eEiIyY] > ǯǮ;
Gg } [eEiIyY] > Ǯǯ;
gg } [eEiIyY] > ǯǯ;
G } [eEiIyY] > Ǯ;
g } [eEiIyY] > ǯ;
C > K;
c > k;

Q > K;
q > k;

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
[nN] { G } [hH] > G;
[nN] { g } [hH] > g;
G [Hh] > Ɣ;
g [Hh] > ɣ;
`;
