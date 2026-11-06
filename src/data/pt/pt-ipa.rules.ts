export const ptIpaRules = `
::Lower;
::NFC;

ch > ʃ;
lh > ʎ;
nh > ɲ;
rr > ʁ;
ale { x } andr > ʃ;
[lns] { r > ʁ;
h > ;
y > i;
ll > l;

::Null;

qu } [eéêiíî] > k;
qu } [aáàãâoóõôuú] > kw;
gu } [eéêiíî] > g;
gu } [aáàãâoóõôuú] > gw;

[^[:L:][:M:]] { ex } [aáàãâeéêiíîoóõôuú] > iz;
[^[:L:][:M:]] { ex } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > iʃ;
[^[:L:][:M:]] { x > ʃ;
x > ʃ;

[aáàâeéêiíîoóôuú] { s } [aáàãâeéêiíîoóõôuú] > z;
ss > s;
s { [cç] } [eéêiíî] > ;
ç > s;
c } [eéêiíî] > s;
c > k;
g } [eéêiíî] > ʒ;

j > ʒ;

[^[:L:][:M:]] { r > ʁ;
r > ɾ;

ãe > ɐ̃i̯;
ão > ɐ̃u̯;
õe > õi̯;

én } s [^[:L:][:M:]] > ˈẽi̯;
en } s [^[:L:][:M:]] > ẽi̯;
en } [^[:L:][:M:]] > ẽi̯;
em } [^[:L:][:M:]] > ẽi̯;
ém } [^[:L:][:M:]] > ˈẽi̯;
am } [^[:L:][:M:]] > ɐ̃u̯;
im } [^[:L:][:M:]] > ĩ;
in } [^[:L:][:M:]] > ĩ;
om } [^[:L:][:M:]] > õ;
on } [^[:L:][:M:]] > õ;
um } [^[:L:][:M:]] > ũ;
un } [^[:L:][:M:]] > ũ;

ã > ɐ̃;
õ > õ;

::Null;

ei > ei̯;
éi > ˈɛi̯;
ai > ai̯;
ái > ˈai̯;
au > au̯;
áu > ˈau̯;
eu > eu̯;
éu > ˈɛu̯;
mui } t > mũi̯;
ui > ui̯;
úi > ˈui̯;
iu > iu̯;
íu > ˈiu̯;
ou > o;
oi > oi̯;
ói > ˈɔi̯;
á > ˈa;
à > a;
â > ˈɐ;
é > ˈɛ;
ê > ˈe;
í > ˈi;
ó > ˈɔ;
ô > ˈo;
ú > ˈu;

a } s [^[:L:][:M:]] > ɐ;
e } s [^[:L:][:M:]] > ɨ;
o } s [^[:L:][:M:]] > u;
a } [lzʃ] [^[:L:][:M:]] > a;
a } [^[:L:][:M:]] > ɐ;
e } [lzʃ] [^[:L:][:M:]] > ɛ;
e } [^[:L:][:M:]] > ɨ;
o } [lzʃ] [^[:L:][:M:]] > ɔ;
o } [^[:L:][:M:]] > u;

[^[:L:][:M:]] { i } [ˈaáàãâeéêiíîoóõôuúɐɛɨɔõẽĩũɐ̃] > j;
u } [áàâéêíóôú] > u;
u } [ˈaáàãâeéêiíîoóõôuúɐɛɨɔõẽĩũɐ̃] > w;

a } tɾ [ií] > ɐ;
a } [mnɲ] > ɐ;
[^[:L:][:M:]] { a > ɐ;
a > a;
[^[:L:][:M:]] { e > ɨ;
[^[:L:][:M:]] { o > u;
e > e;
i > i;
o > o;
u > u;

l } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ɫ;
l } [^[:L:][:M:]] > ɫ;

z } [^[:L:][:M:]] > s;
z } [ptkfsʃcqçx] > s;
s > s;
z > z;
`;
