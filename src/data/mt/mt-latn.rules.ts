export const mtLatnRules = `
::NFC;

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

[:Lu:] { Ġ > DŽ;
Ġ } [:Lu:] > DŽ;
Ġ > Dž;
ġ > dž;

[:Lu:] { Z > TS;
Z } [:Lu:] > TS;
Z > Ts;
z > ts;

Ċ > Č;
ċ > č;

X > Š;
x > š;

J > Y;
j > y;

Ż > Z;
ż > z;

C } [eEiIyY] > Č;
c } [eEiIyY] > č;
C > K;
c > k;

Q ([:L:]) >| \\' &Any-Upper($1);
Q > \\';
q > \\';
`;
