export const ptIpaRules = `
::Lower;

ch > ʃ;
lh > ʎ;
nh > ɲ;
rr > ʁ;
ale { x } andr > ʃ;
[lns] { r > ʁ;
h > ;

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
ç > s;
c } [eéêiíî] > s;
c > k;
g } [eéêiíî] > ʒ;

j > ʒ;

[^[:L:][:M:]] { r > ʁ;
r > ɾ;

ãe > ɐ̃j̃;
ão > ɐ̃w̃;
õe > õj̃;

én } s [^[:L:][:M:]] > ˈɐ̃j̃;
en } s [^[:L:][:M:]] > ɐ̃j̃;
en } [^[:L:][:M:]] > ẽj̃;
em } [^[:L:][:M:]] > ɐ̃j̃;
ém } [^[:L:][:M:]] > ˈɐ̃j̃;
am } [^[:L:][:M:]] > ɐ̃w̃;
im } [^[:L:][:M:]] > ĩ;
in } [^[:L:][:M:]] > ĩ;
om } [^[:L:][:M:]] > õ;
on } [^[:L:][:M:]] > õ;
um } [^[:L:][:M:]] > ũ;
un } [^[:L:][:M:]] > ũ;

âm } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈɐ̃;
ân } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈɐ̃;
êm } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈẽ;
ên } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈẽ;
ím } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈĩ;
ín } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈĩ;
óm } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈõ;
ón } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈõ;
úm } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈũ;
ún } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ˈũ;
am } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ɐ̃;
an } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ɐ̃;
em } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ẽ;
en } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ẽ;
im } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ĩ;
in } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ĩ;
om } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > õ;
on } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > õ;
um } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ũ;
un } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ũ;

ã > ɐ̃;
õ > õ;

::Null;

ei > ɐj;
éi > ˈɛj;
ae > ɐj;
ai > aj;
ái > ˈaj;
au > aw;
áu > ˈaw;
eu > ew;
éu > ˈɛw;
mui } t > mũj̃;
ui > uj;
úi > ˈuj;
iu > iw;
íu > ˈiw;
ou > o;
oi > oj;
ói > ˈɔj;
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

i } [ˈaáàãâeéêiíîoóõôuúɐɛɨɔõẽĩũɐ̃] > j;
u } [ˈaáàãâeéêiíîoóõôuúɐɛɨɔõẽĩũɐ̃] > w;

a } tɾ [ií] > ɐ;
a } [mnɲ] > ɐ;
[^[:L:][:M:]] { a > ɐ;
a > a;
[^[:L:][:M:]] { e > ɨ;
[^[:L:][:M:]] { o > u;
e > e;
i } ɲ > ĩ;
i > i;
o > o;
u > u;

l } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ɫ;
l } [^[:L:][:M:]] > ɫ;

[sz] } [^[:L:][:M:]] [aáàãâeéêiíîoóõôuúɐ̃ẽĩõũɐɛɨɔjwˈ] > z;
[sz] } [^[:L:][:M:]] [bdgvmnɲlɫʎʁɾʒzj] > ʒ;
[sz] } [bdgvmnɲlɫʎʁɾʒzj] > ʒ;
[sz] } [^[:L:][:M:]] > ʃ;
[sz] } [ptkfsʃcqçx] > ʃ;
s > s;
z > z;
`;
