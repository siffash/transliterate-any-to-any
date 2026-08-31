export const arIpaRules = `
[^[:L:][:M:]] { \u0627 } \u064E >;
[^[:L:][:M:]] { \u0627 } \u0650 >;
[^[:L:][:M:]] { \u0627 } \u064F >;

\u0629 \u064B > atan;
\u0629 \u064D > atin;
\u0629 \u064C > atun;

\u064B \u0627 > an;
\u0627 \u064B > an;
\u0627 \u0629 > aː;
[^[:L:][:M:]] { \u0627 > a;
\u064B > an;
\u064D > in;
\u064C > un;

\u064E \u0627 > aː;
\u0650 \u064A > iː;
\u064F \u0648 > uː;
\u064E \u0649 > aː;

\u0622 > aː;
\u0621 >;
\u0623 >;
\u0625 >;
\u0624 >;
\u0626 >;
\u0628 > b;
\u062A > t;
\u062B > θ;
\u062C > dʒ;
\u062D > ħ;
\u062E > x;
\u062F > d;
\u0630 > ð;
\u0631 > r;
\u0632 > z;
\u0633 > s;
\u0634 > ʃ;
\u0635 > sˤ;
\u0636 > dˤ;
\u0637 > tˤ;
\u0638 > ðˤ;
\u0639 > ʕ;
\u063A > ɣ;
\u0641 > f;
\u0642 > q;
\u0643 > k;
\u0644 > l;
\u0645 > m;
\u0646 > n;
\u0647 > h;
\u0648 > w;
\u064A > j;

\u0627 > aː;
\u0649 > aː;
\u0671 > a;
\u0629 > a;

\u064E > a;
\u0650 > i;
\u064F > u;
\u0652 >;
\u0670 > aː;

::Null;

aa > a;
aʔu > aː;
aʔa > aː;
ħħ > ħ;

::Null;

[^[:L:][:M:]] { aːl > al;
[^[:L:][:M:]] { ali > al;
[^[:L:][:M:]] { ʔala > al;
[^[:L:][:M:]] { lili > lil;
[^[:L:][:M:]] { waːl > wal;

::Null;

[^[:L:][:M:]] { al } tˤ > atˤ;
[^[:L:][:M:]] { al } t > at;
[^[:L:][:M:]] { al } dˤ > adˤ;
[^[:L:][:M:]] { al } d > ad;
[^[:L:][:M:]] { al } r > ar;
[^[:L:][:M:]] { al } zˤ > azˤ;
[^[:L:][:M:]] { al } z > az;
[^[:L:][:M:]] { al } sˤ > asˤ;
[^[:L:][:M:]] { al } s > as;
[^[:L:][:M:]] { al } ʃ > aʃ;
[^[:L:][:M:]] { al } n > an;
[^[:L:][:M:]] { al } θ > aθ;
[^[:L:][:M:]] { al } ð > að;

[^[:L:][:M:]] { lil } tˤ > litˤ;
[^[:L:][:M:]] { lil } t > lit;
[^[:L:][:M:]] { lil } dˤ > lidˤ;
[^[:L:][:M:]] { lil } d > lid;
[^[:L:][:M:]] { lil } r > lir;
[^[:L:][:M:]] { lil } zˤ > lizˤ;
[^[:L:][:M:]] { lil } z > liz;
[^[:L:][:M:]] { lil } sˤ > lisˤ;
[^[:L:][:M:]] { lil } s > lis;
[^[:L:][:M:]] { lil } ʃ > liʃ;
[^[:L:][:M:]] { lil } n > lin;
[^[:L:][:M:]] { lil } θ > liθ;
[^[:L:][:M:]] { lil } ð > lið;

[^[:L:][:M:]] { wal } tˤ > watˤ;
[^[:L:][:M:]] { wal } t > wat;
[^[:L:][:M:]] { wal } dˤ > wadˤ;
[^[:L:][:M:]] { wal } d > wad;
[^[:L:][:M:]] { wal } r > war;
[^[:L:][:M:]] { wal } zˤ > wazˤ;
[^[:L:][:M:]] { wal } z > waz;
[^[:L:][:M:]] { wal } sˤ > wasˤ;
[^[:L:][:M:]] { wal } s > was;
[^[:L:][:M:]] { wal } ʃ > waʃ;
[^[:L:][:M:]] { wal } n > wan;
[^[:L:][:M:]] { wal } θ > waθ;
[^[:L:][:M:]] { wal } ð > wað;

[btθdðrzsʃʕɣfqklmnhħʒ] { j } [^[:L:][:M:]] > ijj;
[btθdðrzsʃʕɣfqklmnhħʒ]ˤ { j } [^[:L:][:M:]] > ijj;

[:Arabic:] > ;
`;
