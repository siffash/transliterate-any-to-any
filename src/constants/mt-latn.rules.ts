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

GĦ } [:^Letter:] > H;
Għ } [:^Letter:] > H;
għ } [:^Letter:] > h;
GĦ ([:Letter:]) > &Any-Upper($1);
Għ ([:Letter:]) > &Any-Upper($1);
GĦ > ;
Għ > ;
għ > ;

CH > K;
Ch > K;
ch > k;

QU > KW;
Qu > Kw;
qu > kw;

Ġ } [:^Letter:] > Č;
ġ } [:^Letter:] > č;

B } [:^Letter:] > P;
b } [:^Letter:] > p;

D } [:^Letter:] > T;
d } [:^Letter:] > t;

G } [:^Letter:] > K;
g } [:^Letter:] > k;

V } [:^Letter:] > F;
v } [:^Letter:] > f;

Ż } [:^Letter:] > S;
ż } [:^Letter:] > s;

Ġ } [:Upper:] > DŽ;
Ġ > Dž;
ġ > dž;

Z } [:Upper:] > TS;
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

Ħ > H;
ħ > h;
H ([:Letter:]) > &Any-Upper($1);
H } [:Letter:] > ;
h } [:Letter:] > ;

C } [eEiIyY] > Č;
c } [eEiIyY] > č;
C > K;
c > k;

Q ([:Letter:]) > \\' &Any-Upper($1);
Q > \\';
q > \\';
`;
