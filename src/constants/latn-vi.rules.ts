export const latnViRules = `
::Null;

$boundary = [:^Letter:];

D } Ž > ;
D } ž > ;
d } ž > ;

K } Ü > Q;
K } ü > Q;
k } ü > q;

K } [aAoOuUöÖïÏ] > C;
K } $boundary > C;
k } [aAoOuUöÖïÏ] > c;
k } $boundary > c;

G } [EÄIÏYŸ] > GH;
G } [eäiïyÿ] > Gh;
g } [eEäÄiIïÏyYÿŸ] > gh;

Č } [:Upper:] > CH;
Č > Ch;
č > ch;

Ć } [:Upper:] > CH;
Ć > Ch;
ć > ch;

Ń } [:Upper:] > NH;
Ń > Nh;
ń > nh;

Ž } [:Upper:] > GI;
Ž > Gi;
ž > gi;

F } [:Upper:] > PH;
F > Ph;
f > ph;

X } [:Upper:] > KH;
X > Kh;
x > kh;

Ü } [:Upper:] > UY;
Ü > Uy;
ü > uy;

Š > S;
š > s;

W > V;
w > v;

Z > D;
z > d;

D > Đ;
d > đ;

Ä > E;
ä > e;

Ï > Ư;
ï > ư;

Ö > Ơ;
ö > ơ;

Ÿ > Y;
ÿ > y;

Ľ > L;
ľ > l;
`;
