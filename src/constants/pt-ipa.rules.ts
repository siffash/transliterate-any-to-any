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

[:^Letter:] { ex } [aáàãâeéêiíîoóõôuú] > iz;
[:^Letter:] { ex } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > iʃ;
[:^Letter:] { x > ʃ;
x > ʃ;

[aáàâeéêiíîoóôuú] { s } [aáàãâeéêiíîoóõôuú] > z;
ss > s;
ç > s;
c } [eéêiíî] > s;
c > k;
g } [eéêiíî] > ʒ;

j > ʒ;

[:^Letter:] { r > ʁ;
r > ɾ;

ãe > ɐ̃j̃;
ão > ɐ̃w̃;
õe > õj̃;

én } s [:^Letter:] > ˈɐ̃j̃;
en } s [:^Letter:] > ɐ̃j̃;
en } [:^Letter:] > ẽj̃;
em } [:^Letter:] > ɐ̃j̃;
ém } [:^Letter:] > ˈɐ̃j̃;
am } [:^Letter:] > ɐ̃w̃;
im } [:^Letter:] > ĩ;
in } [:^Letter:] > ĩ;
om } [:^Letter:] > õ;
on } [:^Letter:] > õ;
um } [:^Letter:] > ũ;
un } [:^Letter:] > ũ;

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

a } s [:^Letter:] > ɐ;
e } s [:^Letter:] > ɨ;
o } s [:^Letter:] > u;
a } [lzʃ] [:^Letter:] > a;
a } [:^Letter:] > ɐ;
e } [lzʃ] [:^Letter:] > ɛ;
e } [:^Letter:] > ɨ;
o } [lzʃ] [:^Letter:] > ɔ;
o } [:^Letter:] > u;

i } [ˈaáàãâeéêiíîoóõôuúɐɛɨɔõẽĩũɐ̃] > j;
u } [ˈaáàãâeéêiíîoóõôuúɐɛɨɔõẽĩũɐ̃] > w;

a } tɾ [ií] > ɐ;
a } [mnɲ] > ɐ;
[:^Letter:] { a > ɐ;
a > a;
[:^Letter:] { e > ɨ;
[:^Letter:] { o > u;
e > e;
i } ɲ > ĩ;
i > i;
o > o;
u > u;

l } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ɫ;
l } [:^Letter:] > ɫ;

[sz] } [:^Letter:] [aáàãâeéêiíîoóõôuúɐ̃ẽĩõũɐɛɨɔjwˈ] > z;
[sz] } [:^Letter:] [bdgvmnɲlɫʎʁɾʒzj] > ʒ;
[sz] } [bdgvmnɲlɫʎʁɾʒzj] > ʒ;
[sz] } [:^Letter:] > ʃ;
[sz] } [ptkfsʃcqçx] > ʃ;
s > s;
z > z;
`;
