export const bgUkRules = `
$lower = [абвгдежзийклмнопрстуфхцчшщъьюяѝ];
$vowel = [аеєиіїоуъюяАЕЄИІЇОУЪЮЯ];
$non_nine = [бпвмфгкхлнБПВМФГКХЛН];

с } к [аАиИ] > сь;
С } К [аАиИ] > СЬ;
С } к [аАиИ] > Сь;

$vowel { е > є;
$vowel { Е > Є;
$vowel { и > ї;
$vowel { И > Ї;
и } $vowel > і;
И } $vowel > І;
и } й > і;
И } й > І;
и } Й > і;
И } Й > І;
[:^Letter:] { и > і;
[:^Letter:] { И > І;
$non_nine { и > і;
$non_nine { И > І;

ъ > и;
Ъ > И;

::Null;

$vowel_uk = [аеєиіїоуюяАЕЄИІЇОУЮЯ];
$vowel_uk { йа > я;
$vowel_uk { ЙА > Я;
$vowel_uk { йе > є;
$vowel_uk { ЙЕ > Є;
$vowel_uk { йі > ї;
$vowel_uk { ЙІ > Ї;
$vowel_uk { йу > ю;
$vowel_uk { ЙУ > Ю;
шч > щ;
Шч > Щ;
ШЧ > Щ;
`;
