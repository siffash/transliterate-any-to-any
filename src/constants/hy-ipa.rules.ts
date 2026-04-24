export const hyIpaRules = `
::Lower;
$vowel_letter = [աեէըիոօւև];
$boundary = [:^Letter:];

$boundary { ով } $boundary > ov;
$boundary { ովքեր } $boundary > ovkʰɛɾ;
$boundary { եմ } $boundary > ɛm;
$boundary { ես } $boundary > ɛs;
$boundary { ենք } $boundary > ɛnkʰ;
$boundary { եք } $boundary > ɛkʰ;
$boundary { են } $boundary > ɛn;

$boundary { և > jɛv;
$vowel_letter { և > jɛv;
և > ev;

$boundary { եւ > jɛv;
$vowel_letter { եւ > jɛv;
եւ > ev;

ու > u;

$boundary { ե > jɛ;
$vowel_letter { ե > jɛ;
ե > ɛ;

$boundary { ո > vɔ;
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
