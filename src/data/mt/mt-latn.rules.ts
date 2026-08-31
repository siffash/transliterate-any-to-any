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

IE > I;
Ie > I;
ie > i;

TH > T;
Th > T;
th > t;

PH > F;
Ph > F;
ph > f;

QU } [aeiouAEIOU] > KW;
Qu } [aeiouAEIOU] > Kw;
qU } [aeiouAEIOU] > kW;
qu } [aeiouAEIOU] > kw;

G [Ħħ] } [^[:L:][:M:]] > H;
għ } [^[:L:][:M:]] > h;

G [Ħħ] ([:L:]) >| &Any-Upper($1);
[Gg] [Ħħ] > ;

Ħ > H;
ħ > h;

H ([:L:]) >| &Any-Upper($1);
H } [:L:] > ;
h } [:L:] > ;

CH > K;
Ch > K;
ch > k;

Ġ } [:Lu:] > DŽ;
Ġ > Dž;
ġ > dž;

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
