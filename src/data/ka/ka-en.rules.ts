export const kaEnRules = `
::NFD;

Ა > a;
Ბ > b;
Გ > g;
Დ > d;
Ე > e;
Ვ > v;
Ზ > z;
Თ > t;
Ი > i;
Კ > k;
Ლ > l;
Მ > m;
Ნ > n;
Ო > o;
Პ > p;
Ჟ > zh;
Რ > r;
Ს > s;
Ტ > t;
Უ > u;
Ფ > p;
Ქ > k;
Ღ > gh;
Ყ > q;
Შ > sh;
Ჩ > ch;
Ც > ts;
Ძ > dz;
Წ > ts;
Ჭ > ch;
Ხ > kh;
Ჯ > j;
Ჰ > h;

ა > a;
ბ > b;
გ > g;
დ > d;
ე > e;
ვ > v;
ზ > z;
თ > t;
ი > i;
კ > k;
ლ > l;
მ > m;
ნ > n;
ო > o;
პ > p;
ჟ > zh;
რ > r;
ს > s;
ტ > t;
უ > u;
ფ > p;
ქ > k;
ღ > gh;
ყ > q;
შ > sh;
ჩ > ch;
ც > ts;
ძ > dz;
წ > ts;
ჭ > ch;
ხ > kh;
ჯ > j;
ჰ > h;

::NFC;

[:Georgian:] > ;



::Null;

w { w+ > ;
y { y+ > ;
ch { h > h;
h { h+ > ;
[^[:L:][:M:]] { c+ } k > ;

k { k+ } h > ;
g { g+ } h > ;

::Title;
`;
