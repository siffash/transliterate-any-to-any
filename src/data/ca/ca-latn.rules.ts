export const caLatnRules = `
::NFC;

l [lL] > ľ;
L [lL] > Ľ;

[lL] { · } [lL] > ;

h > ;
H ([:L:]) >| &Any-Upper($1);
H > ;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { i [gG] } [^[:L:][:M:]] > č;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { I [gG] } [^[:L:][:M:]] > Č;

[iI] { g } [^[:L:][:M:]] > č;
[iI] { G } [^[:L:][:M:]] > Č;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { i [xX] > š;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { I [xX] > Š;

t [xX] > č;
T [xX] > Č;

tz > dz;
Tz > Dz;
tZ > dZ;
TZ > DZ;

n [yY] > ń;
N [yY] > Ń;

tg } [eiéèíEIÉÈÍïÏ] > dž;
Tg } [eiéèíEIÉÈÍïÏ] > Dž;
tG } [eiéèíEIÉÈÍïÏ] > dŽ;
TG } [eiéèíEIÉÈÍïÏ] > DŽ;

tj > dž;
Tj > Dž;
tJ > dŽ;
TJ > DŽ;

q [uU] } [eiéèíEIÉÈÍïÏ] > k;
Q [uU] } [eiéèíEIÉÈÍïÏ] > K;

g [uU] } [eiéèíEIÉÈÍïÏ] > g;
G [uU] } [eiéèíEIÉÈÍïÏ] > G;

s [sS] > s;
S [sS] > S;

[AEIOUÀÈÉÍÒÓÚÏÜ] { X } [AEIOUÀÈÉÍÒÓÚÏÜ] > KS;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { X } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > Ks;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { x } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > ks;

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

[cq] > k;
[CQ] > K;

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
