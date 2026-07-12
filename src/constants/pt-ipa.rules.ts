export const ptIpaRules = `
::Lower;

ch > ʃ;
lh > ʎ;
nh > ɲ;
rr > ʁ;
ss > s;
ç > s;
ale { x } andr > ʃ;

::Null;

{ qu } [eéêiíî] > k;
{ qu } [aáàãâoóõôuú] > kw;
{ gu } [eéêiíî] > g;
{ gu } [aáàãâoóõôuú] > gw;

{ ex } [aáàãâeéêiíîoóõôuú] > ez;
{ ex } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > eʃ;
[aáàãâeéêiíîoóõôuú] { x } [ptk] > ks;
[:^Letter:] { x } > ʃ;
x > ʃ;

{ c } [eéêiíî] > s;
c > k;
{ g } [eéêiíî] > ʒ;

j > ʒ;

{ r } r > ʁ;
[:^Letter:] {r} > ʁ;
r > ɾ;

[aáàãâeéêiíîoóõôuú] { s } [aáàãâeéêiíîoóõôuú] > z;
{ s } [ptkfsçxh] > ʃ;
{ s } [:^Letter:] > ʃ;
{ s } [bdgvmnlrzʒʎɲ] > ʒ;
s > s;

{ z } [ptkfsçxh] > ʒ;
{ z } [:^Letter:] > ʃ;
{ z } [bdgvmnlrzʒʎɲ] > z;
z > z;

h > ;

[aáàãâeéêiíîoóõôuúɾɫʃʒfv] { b } [aáàãâeéêiíîoóõôuú] > β;
[aáàãâeéêiíîoóõôuúɾɫʃʒfv] { d } [aáàãâeéêiíîoóõôuú] > ð;
[aáàãâeéêiíîoóõôuúɾɫʃʒfv] { g } [aáàãâeéêiíîoóõôuú] > ɣ;

ãe > ɐ̃j̃;
ão > ɐ̃w̃;
õe > õj̃;

{ ens } [:^Letter:] > ɐ̃j̃ʃ;
{ em } [:^Letter:] > ɐ̃j̃;
{ ém } [:^Letter:] > ˈɐ̃j̃;
{ am } [:^Letter:] > ɐ̃w̃;
{ en } [:^Letter:] > ẽj̃;

{ am } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ɐ̃;
{ an } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ɐ̃;
{ em } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ẽ;
{ en } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ẽ;
{ im } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ĩ;
{ in } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ĩ;
{ om } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > õ;
{ on } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > õ;
{ um } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ũ;
{ un } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ũ;

ã > ɐ̃;
õ > õ;

á > ˈa;
à > a;
â > ɐ;
é > ˈɛ;
ê > e;
í > ˈi;
ó > ˈɔ;
ô > o;
ú > ˈu;

{ a } [lrzx] [:^Letter:] > a;
{ a } [:^Letter:] > ɐ;
{ e } [lrzx] [:^Letter:] > ɛ;
{ e } [:^Letter:] > ɨ;
[:Letter:] { e } [:Letter:] > ɨ;
{ o } [lrzx] [:^Letter:] > ɔ;
{ o } [:^Letter:] > u;

{ i } [aáàãâeéêiíîoóõôuú] > j;
{ u } [aáàãâeéêiíîoóõôuú] > w;

{ a } tr [ií] > ɐ;
{ a } [mr] > ɐ;
[:^Letter:] { a } > ɐ;
a > a;
e > e;
{ i } ɲ > ĩ;
i > i;
{ o } s > u;
o > o;
u > u;

{ l } [bcdfgjklmnpqrstvwxyzçɲʎʃʒʁɾ] > ɫ;
{ l } [:^Letter:] > ɫ;
`;
