export const hyIpaRules = `
::Lower;
$vowel_letter = [աեէըիոօւև];

[:^Letter:] { ով } [:^Letter:] > ov;
[:^Letter:] { ովքեր } [:^Letter:] > ovkʰɛɾ;
[:^Letter:] { եմ } [:^Letter:] > ɛm;
[:^Letter:] { ես } [:^Letter:] > ɛs;
[:^Letter:] { ենք } [:^Letter:] > ɛnkʰ;
[:^Letter:] { եք } [:^Letter:] > ɛkʰ;
[:^Letter:] { են } [:^Letter:] > ɛn;

[:^Letter:] { և > jɛv;
$vowel_letter { և > jɛv;
և > ev;

[:^Letter:] { եւ > jɛv;
$vowel_letter { եւ > jɛv;
եւ > ev;

ու > u;

[:^Letter:] { ե > jɛ;
$vowel_letter { ե > jɛ;
ե > ɛ;

[:^Letter:] { ո > vɔ;
$vowel_letter { ո > vɔ;
ո > ɔ;

ա > ɑ;
բ > b;
գ > ɡ;
դ > d;
զ > z;
է > ɛ;
ը > ə;
թ > tʰ;
ժ > ʒ;
ի > i;
լ > l;
խ > χ;
ծ > ts;
կ > k;
հ > h;
ձ > dz;
ղ > ʁ;
ճ > tʃ;
մ > m;
յ > j;
ն > n;
շ > ʃ;
չ > tʃʰ;
պ > p;
ջ > dʒ;
ռ > r;
ս > s;
վ > v;
տ > t;
ր > ɾ;
ց > tsʰ;
ւ > v;
փ > pʰ;
ք > kʰ;
օ > ɔ;
ֆ > f;
`;
