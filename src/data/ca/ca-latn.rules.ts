export const caLatnRules = `
::NFC;

[[:L:][:M:]] { \\' } [[:L:][:M:]] > ’;

l [lL] > ľ;
L [lL] > Ľ;

[lL] { · } [lL] > ;

[nN] { [tT] } [bcçdfgjkmnpqsvBCÇDFGJKMNPQSV] [[:L:][:M:]] > ;
[nN] { t } [^[:L:][:M:]] [aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜhH] > t;
[nN] { T } [^[:L:][:M:]] [aeiouàèéíòóúïüAEIOUÀÈÉÍÒÓÚÏÜhH] > T;
[^[:L:][:M:]] [vV] [iI] [csCS] [eE] [nN] { t } [^[:L:][:M:]] > t;
[^[:L:][:M:]] [vV] [iI] [csCS] [eE] [nN] { T } [^[:L:][:M:]] > T;
[nN] { [tT] } [^[:L:][:M:]] > ;

h > ;
H ([:L:]) >| &Any-Upper($1);
H > ;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { i [gG] } [^[:L:][:M:]] > č;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { I [gG] } [^[:L:][:M:]] > Č;

[iI] { g } [^[:L:][:M:]] > č;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { i [gG] } [bcdfjklmnpqrstvwxzBCDFJKLMNPQRSTVWXZǯǮẑẐ] > č;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { I [gG] } [bcdfjklmnpqrstvwxzBCDFJKLMNPQRSTVWXZǯǮẑẐ] > Č;
[iI] { G } [^[:L:][:M:]] > Č;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { i [xX] > š;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { I [xX] > Š;

t [xX] > č;
T [xX] > Č;

t [zZ] > ẑ;
T [zZ] > Ẑ;

n [yY] > ń;
N [yY] > Ń;

t [gG] } [eiéèíEIÉÈÍïÏ] > ǯ;
T [gG] } [eiéèíEIÉÈÍïÏ] > Ǯ;

t [jJ] > ǯ;
T [jJ] > Ǯ;

q [uU] } [eiéèíEIÉÈÍïÏ] > k;
Q [uU] } [eiéèíEIÉÈÍïÏ] > K;

g [uU] } [eiéèíEIÉÈÍïÏ] > g;
G [uU] } [eiéèíEIÉÈÍïÏ] > G;

[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { s } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > z;
[aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] { S } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > Z;

s [sS] > s;
S [sS] > S;

[AEOUÀÈÉÒÓÚÜ] { X } [AEIOUÀÈÉÍÒÓÚÏÜ] > KS;
[aeouAEOUàèéòóúÀÈÉÒÓÚüÜ] { X } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > Ks;
[aeouAEOUàèéòóúÀÈÉÒÓÚüÜ] { x } [aeiouAEIOUàèéíòóúÀÈÉÍÒÓÚïÏüÜ] > ks;

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

::Null;

[^[:L:][:M:]] { T [Ss] > C;
[^[:L:][:M:]] { t [Ss] > c;
D [Žž] > Ǯ;
d [Žž] > ǯ;
`;
