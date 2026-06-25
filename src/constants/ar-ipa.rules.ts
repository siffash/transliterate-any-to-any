export const arIpaRules = `
[:^Letter:] { \u0627 } \u064E >;
[:^Letter:] { \u0627 } \u0650 >;
[:^Letter:] { \u0627 } \u064F >;

\u0629 \u064B > atan;
\u0629 \u064D > atin;
\u0629 \u064C > atun;

\u064B \u0627 > an;
\u0627 \u064B > an;
\u0627 \u0629 > aː;
[:^Letter:] { \u0627 > a;
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

[:^Letter:] { aːl > al;
[:^Letter:] { ali > al;
[:^Letter:] { ʔala > al;
[:^Letter:] { lili > lil;
[:^Letter:] { waːl > wal;

::Null;

[:^Letter:] { al } tˤ > atˤ;
[:^Letter:] { al } t > at;
[:^Letter:] { al } dˤ > adˤ;
[:^Letter:] { al } d > ad;
[:^Letter:] { al } r > ar;
[:^Letter:] { al } zˤ > azˤ;
[:^Letter:] { al } z > az;
[:^Letter:] { al } sˤ > asˤ;
[:^Letter:] { al } s > as;
[:^Letter:] { al } ʃ > aʃ;
[:^Letter:] { al } n > an;
[:^Letter:] { al } θ > aθ;
[:^Letter:] { al } ð > að;

[:^Letter:] { lil } tˤ > litˤ;
[:^Letter:] { lil } t > lit;
[:^Letter:] { lil } dˤ > lidˤ;
[:^Letter:] { lil } d > lid;
[:^Letter:] { lil } r > lir;
[:^Letter:] { lil } zˤ > lizˤ;
[:^Letter:] { lil } z > liz;
[:^Letter:] { lil } sˤ > lisˤ;
[:^Letter:] { lil } s > lis;
[:^Letter:] { lil } ʃ > liʃ;
[:^Letter:] { lil } n > lin;
[:^Letter:] { lil } θ > liθ;
[:^Letter:] { lil } ð > lið;

[:^Letter:] { wal } tˤ > watˤ;
[:^Letter:] { wal } t > wat;
[:^Letter:] { wal } dˤ > wadˤ;
[:^Letter:] { wal } d > wad;
[:^Letter:] { wal } r > war;
[:^Letter:] { wal } zˤ > wazˤ;
[:^Letter:] { wal } z > waz;
[:^Letter:] { wal } sˤ > wasˤ;
[:^Letter:] { wal } s > was;
[:^Letter:] { wal } ʃ > waʃ;
[:^Letter:] { wal } n > wan;
[:^Letter:] { wal } θ > waθ;
[:^Letter:] { wal } ð > wað;

[btθdðrzsʃʕɣfqklmnhħʒ] { j } [:^Letter:] > ijj;
[btθdðrzsʃʕɣfqklmnhħʒ]ˤ { j } [:^Letter:] > ijj;

[[:Arabic:]] > ;
`;
