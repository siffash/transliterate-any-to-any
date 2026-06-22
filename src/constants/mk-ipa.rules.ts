export const mkIpaRules = `
::Lower;

$vowel = [аеиоу'];
$front = [еиј];
$velar = [кг];
$voiced = [бвгдѓжзѕџ];
$voiceless = [пфктќшсцчх];

н } $velar > ŋ;
л } $front > l;

б } $voiceless > p;
в } $voiceless > f;
г } $voiceless > k;
д } $voiceless > t;
ѓ } $voiceless > c;
ж } $voiceless > ʃ;
з } $voiceless > s;
ѕ } $voiceless > t͡s;
џ } $voiceless > t͡ʃ;

п } [бгдѓжзѕџ] > b;
т } [бгдѓжзѕџ] > d;
к } [бгдѓжзѕџ] > ɡ;
ќ } [бгдѓжзѕџ] > ɟ;
ш } [бгдѓжзѕџ] > ʒ;
с } [бгдѓжзѕџ] > z;
ц } [бгдѓжзѕџ] > d͡z;
ч } [бгдѓжзѕџ] > d͡ʒ;

б } [:^Letter:] > p;
в } [:^Letter:] > f;
г } [:^Letter:] > k;
д } [:^Letter:] > t;
ѓ } [:^Letter:] > c;
ж } [:^Letter:] > ʃ;
з } [:^Letter:] > s;
ѕ } [:^Letter:] > t͡s;
џ } [:^Letter:] > t͡ʃ;

а > a;
б > b;
в > v;
г > ɡ;
д > d;
ѓ > ɟ;
е > ɛ;
ж > ʒ;
з > z;
ѕ > d͡z;
и > i;
ј > j;
к > k;
ќ > c;
л > ɫ;
љ > l;
м > m;
н > n;
њ > ɲ;
о > ɔ;
п > p;
р > r;
с > s;
т > t;
у > u;
ф > f;
х > x;
ц > t͡s;
ч > t͡ʃ;
џ > d͡ʒ;
ш > ʃ;
'' > ə;
`;
