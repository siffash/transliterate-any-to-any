export const itLatnRules = `
$boundary = [:^Letter:];

à > a;
À > A;
è > e;
é > e;
È > E;
É > E;
ì > i;
í > i;
Ì > I;
Í > I;
ò > o;
ó > o;
Ò > O;
Ó > O;
ù > u;
ú > u;
Ù > U;
Ú > U;

::Null;

s c i } [a o u A O U] > š;
S c i } [a o u] > Š;
S C I } [A O U] > Š;

c c i } [a o u A O U] > č č;
C c i } [a o u] > Č č;
C C I } [A O U] > Č Č;

g g i } [a o u A O U] > dž dž;
G g i } [a o u] > Dž dž;
G G I } [A O U] > DŽ DŽ;

c i } [a o u A O U] > č;
C i } [a o u] > Č;
C I } [A O U] > Č;

g i } [a o u A O U] > dž;
G i } [a o u] > Dž;
G I } [A O U] > DŽ;

g l i } [a e o u A E O U] > ľ;
G l i } [a e o u] > Ľ;
G L I } [A E O U] > Ľ;

g l i > ľ i;
G l i > Ľ i;
G L I > Ľ I;

s c h > s k;
S c h > S k;
S C H > S K;

c c h > k k;
C c h > K k;
C C H > K K;

c h > k;
C h > K;
C H > K;

g g h > g g;
G g h > G g;
G G H > G G;

g h > g;
G h > G;
G H > G;

q u > k v;
Q u > K v;
Q U > K V;

s c } [i e I E] > š;
S c } [i e] > Š;
S C } [I E] > Š;

c c } [i e I E] > č č;
C c } [i e I E] > Č č;
C C } [I E] > Č Č;

g g } [i e I E] > dž dž;
G g } [i e I E] > Dž dž;
G G } [I E] > DŽ DŽ;

c } [i e I E] > č;
C } [i e I E] > Č;

g } [i e I E] > dž;
G } [i e] > Dž;
G } [I E] > DŽ;

g n > ń;
G n > Ń;
G N > Ń;

z > ts;
Z } [[:Lower:]] > Ts;
Z } $boundary > TS;
Z > TS;

q > k;
Q > K;

c > k;
C > K;

j > y;
J > Y;

x > k s;
X } [[:Lower:]] > K s;
X } $boundary > K S;
X > K S;

h > ;
H ([:Letter:]) > &Any-Upper($1);
H > ;
`;
