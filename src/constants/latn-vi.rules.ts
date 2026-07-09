export const latnViRules = `
::Null;

DŽ } [:Upper:] > GI;
DŽ > Gi;
Dž > Gi;
dž > gi;

DZ } [:Upper:] > D;
DZ > D;
Dz > D;
dz > d;

TS } [:Upper:] > X;
TS > X;
Ts > X;
ts > x;

IJ } [:Upper:] > AY;
IJ > Ay;
Ij > Ay;
ij > ay;

NG } [EeÄäIiŸÿ] > NGH;
NG } [eäiÿ] > Ngh;
Ng } [eäiÿ] > Ngh;
ng } [EeÄäIiŸÿ] > ngh;

GH } [EeÄäIiŸÿ] > GH;
Gh } [eäiÿ] > Gh;
gh } [EeÄäIiŸÿ] > gh;
GH > G;
Gh > G;
gh > g;

G } [EeÄäIiŸÿ] > GH;
G } [eäiÿ] > Gh;
g } [EeÄäIiŸÿ] > gh;

KH } [:Upper:] > KH;
KH > Kh;
Kh > Kh;
kh > kh;

K } [UuÜüWw] > Q;
k } [UuÜüWw] > q;

Q { W > U;
Q { w > u;
q { w > u;

Q } [Uu] > Q;
q } [Uu] > q;
Q > C;
q > c;

K } [EeÄäIiŸÿ] > K;
k } [EeÄäIiŸÿ] > k;

K > C;
k > c;

Č } [:Upper:] > TR;
Č > Tr;
č > tr;

Ć } [:Upper:] > CH;
Ć > Ch;
ć > ch;

Ń } [:Upper:] > NH;
Ń > Nh;
ń > nh;

Ž } [:Upper:] > GI;
Ž > Gi;
ž > gi;

Š } [:Upper:] > S;
Š > S;
š > s;

Đ } [:Upper:] > D;
Đ > D;
đ > d;

DH } [:Upper:] > D;
DH > D;
Dh > D;
dh > d;

D > Đ;
d > đ;

F } [:Upper:] > PH;
F > Ph;
f > ph;

X } [:Upper:] > KH;
X > Kh;
x > kh;

Ü } [:Upper:] > UY;
Ü > Uy;
ü > uy;

Y } [:Upper:] > GI;
Y > Gi;
y > gi;

Z > D;
z > d;

S > X;
s > x;

W > V;
w > v;

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

['·] > ;

::Null;

c } [iìỉĩíịeèẻẽéẹêềểễếệyỳỷỹýỵIÌỈĨÍỊEÈẺẼÉẸÊỀỂỄẾỆYỲỶỸÝỴ] > k;
C } [iìỉĩíịeèẻẽéẹêềểễếệyỳỷỹýỵIÌỈĨÍỊEÈẺẼÉẸÊỀỂỄẾỆYỲỶỸÝỴ] > K;

n { g } [iìỉĩíịeèẻẽéẹêềểễếệyỳỷỹýỵIÌỈĨÍỊEÈẺẼÉẸÊỀỂỄẾỆYỲỶỸÝỴ] > gh;
N { g } [iìỉĩíịeèẻẽéẹêềểễếệyỳỷỹýỵIÌỈĨÍỊEÈẺẼÉẸÊỀỂỄẾỆYỲỶỸÝỴ] > gh;
n { G } [iìỉĩíịeèẻẽéẹêềểễếệyỳỷỹýỵIÌỈĨÍỊEÈẺẼÉẸÊỀỂỄẾỆYỲỶỸÝỴ] > GH;
N { G } [iìỉĩíịeèẻẽéẹêềểễếệyỳỷỹýỵIÌỈĨÍỊEÈẺẼÉẸÊỀỂỄẾỆYỲỶỸÝỴ] > GH;

g } [eèẻẽéẹêềểễếệyỳỷỹýỵEÈẺẼÉẸÊỀỂỄẾỆYỲỶỸÝỴ] > gh;
G } [eèẻẽéẹêềểễếệyỳỷỹýỵ] > Gh;
G } [EÈẺẼÉẸÊỀỂỄẾỆYỲỶỸÝỴ] > GH;

g { h } [aàảãáạăằẳẵắặâầẩẫấậoòỏõóọôồổỗốộơờởỡớợuùủũúụưừửữứựAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢUÙỦŨÚỤƯỪỬỮỨỰ] > ;
G { h } [aàảãáạăằẳẵắặâầẩẫấậoòỏõóọôồổỗốộơờởỡớợuùủũúụưừửữứựAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢUÙỦŨÚỤƯỪỬỮỨỰ] > ;
g { H } [aàảãáạăằẳẵắặâầẩẫấậoòỏõóọôồổỗốộơờởỡớợuùủũúụưừửữứựAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢUÙỦŨÚỤƯỪỬỮỨỰ] > ;
G { H } [aàảãáạăằẳẵắặâầẩẫấậoòỏõóọôồổỗốộơờởỡớợuùủũúụưừửữứựAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢUÙỦŨÚỤƯỪỬỮỨỰ] > ;
`;
