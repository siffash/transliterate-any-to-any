export const plIpaRules = `
::Lower;

[fwszśźżxh] = [fwszśźżxh];

ci } [aąeęioóuy] > t͡ɕ;
dzi } [aąeęioóuy] > d͡ʑ;
si } [aąeęioóuy] > ɕ;
zi } [aąeęioóuy] > ʑ;
ni } [aąeęioóuy] > ɲ;

ci > t͡ɕi;
dzi > d͡ʑi;
si > ɕi;
zi > ʑi;
ni > ɲi;
i } [aąeęioóuy] > j;

ą } [pb] > ɔm;
ą } [tdc] > ɔn;
ą } dz > ɔn;
ą } dź > ɔɲ;
ą } dż > ɔn;
ą } cz > ɔn;
ą } [kg] > ɔŋ;
ą } [ć{dź}] > ɔɲ;
ą } [łl] > ɔ;
ą } [fwszśźżxh] > ɔ̃;
ą } sz > ɔ̃;
ą } ch > ɔ̃;
ą } rz > ɔ̃;
ą > ɔ̃w̃;

ę } [pb] > ɛm;
ę } [tdc] > ɛn;
ę } dz > ɛn;
ę } dź > ɛɲ;
ę } dż > ɛn;
ę } cz > ɛn;
ę } [kg] > ɛŋ;
ę } [ć{dź}] > ɛɲ;
ę } [łl] > ɛ;
ę } [fwszśźżxh] > ɛ̃;
ę } sz > ɛ̃;
ę } ch > ɛ̃;
ę } rz > ɛ̃;
ę } [:^Letter:] > ɛ;
ę > ɛ̃w̃;

chrz > xʂ;
trz > t͡ʂ;
drz > d͡ʐ;
prz > pʂ;
krz > kʂ;

[ptkcfsśćx] { rz > ʂ;

t͡ʂ { w > f;
ʂ { w > f;
[ptkcfsśćx] { w > f;
w } [ptkcfsśćx] > f;
w } [:^Letter:] > f;
w > v;

cz } [bdgzźż] > d͡ʐ;
sz } [bdgzźż] > ʐ;
ch } [bdgzźż] > ɣ;
p } [bdgzźż] > b;
t } [bdgzźż] > d;
k } [bdgzźż] > g;
c } [bdgźż] > d͡z;
ć } [bdgzźż] > d͡ʑ;
s } [bdgźż] > z;
ś } [bdgzźż] > ʑ;
f } [bdgzźż] > v;
x } [bdgzźż] > ɣ;
dz } [ptkcfsśćx] > t͡s;
dź } [ptkcfsśćx] > t͡ɕ;
dż } [ptkcfsśćx] > t͡ʂ;
rz } [ptkcfsśćx] > ʂ;
b } [ptkcfsśćx] > p;
d } [ptkcfsśćx] > t;
g } [ptkcfsśćx] > k;
z } [ptkcfsśćx] > s;
ź } [ptkcfsśćx] > ɕ;
ż } [ptkcfsśćx] > ʂ;

dź } [:^Letter:] > t͡ɕ;
dż } [:^Letter:] > t͡ʂ;
dz } [:^Letter:] > t͡s;
rz } [:^Letter:] > ʂ;

cz > t͡ʂ;
dź > d͡ʑ;
dż > d͡ʐ;
dz > d͡z;
sz > ʂ;
rz > ʐ;
ch > x;

b } [:^Letter:] > p;
d } [:^Letter:] > t;
g } [:^Letter:] > k;
z } [:^Letter:] > s;
ź } [:^Letter:] > ɕ;
ż } [:^Letter:] > ʂ;

a > a;
b > b;
c > t͡s;
ć > t͡ɕ;
d > d;
e > ɛ;
f > f;
g > g;
h > x;
i > i;
j > j;
k > k;
l > l;
ł > w;
m > m;
n } [kg] > ŋ;
n > n;
ń > ɲ;
o > ɔ;
ó > u;
p > p;
r > r;
s > s;
ś > ɕ;
t > t;
u > u;
x > ks;
y > ɨ;
z > z;
ź > ʑ;
ż > ʐ;
`;
