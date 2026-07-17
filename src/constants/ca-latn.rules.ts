export const caLatnRules = `
::NFC;

ll > ľ;
Ll > Ľ;
LL > Ľ;

l·l > ll;
L·l > Ll;
L·L > LL;

h > ;
H ([:Letter:]) >| &Any-Upper($1);
H > ;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { ig } [:^Letter:] > č;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { Ig } [:^Letter:] > Č;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { IG } [:^Letter:] > Č;

i { g } [:^Letter:] > č;
I { g } [:^Letter:] > Č;
I { G } [:^Letter:] > Č;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { ix > š;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { Ix > Š;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { IX > Š;

tx > č;
Tx > Č;
TX > Č;

tz > dz;
Tz > Dz;
TZ > DZ;

ny > ń;
Ny > Ń;
NY > Ń;

tg } [eiéèíEIÉÈÍïÏ] > dž;
Tg } [eiéèíEIÉÈÍïÏ] > Dž;
TG } [eiéèíEIÉÈÍïÏ] > DŽ;

tj > dž;
Tj > Dž;
TJ > DŽ;

qu } [eiéèíEIÉÈÍïÏ] > k;
Qu } [eiéèíEIÉÈÍïÏ] > K;
QU } [eiéèíEIÉÈÍïÏ] > K;

gu } [eiéèíEIÉÈÍïÏ] > g;
Gu } [eiéèíEIÉÈÍïÏ] > G;
GU } [eiéèíEIÉÈÍïÏ] > G;

ss > s;
Ss > S;
SS > S;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { s } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > z;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { S } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > Z;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { x } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > ks;
[AEIOUÀÈÉÍÒÓÚÏÜ] { X } [AEIOUÀÈÉÍÒÓÚÏÜ] > KS;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { X } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > Ks;

x > š;
X > Š;

c } [eiéèíEIÉÈÍïÏ] > s;
C } [eiéèíEIÉÈÍïÏ] > S;

g } [eiéèíEIÉÈÍïÏ] > ž;
G } [eiéèíEIÉÈÍïÏ] > Ž;

j > ž;
J > Ž;
ç > s;
Ç > S;
c > k;
C > K;
q > k;
Q > K;

[àá] > a;
[ÀÁ] > A;
[èé] > e;
[ÈÉ] > E;
[íï] > i;
[ÍÏ] > I;
[òó] > o;
[ÒÓ] > O;
[úü] > u;
[ÚÜ] > U;
`;
