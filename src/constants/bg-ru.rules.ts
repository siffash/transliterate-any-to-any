export const bgRuRules = `
$lower_cons = [бвгджзклмнпрстфхцчшщ];
$upper_cons = [БВГДЖЗКЛМНПРСТФХЦЧШЩ];
$lower_all = [а-я];
$non_letter = [^[:L:]];

$non_letter { е > э;
$non_letter { Е > Э;

българ > болгар;
Българ > Болгар;
БЪЛГАР > БОЛГАР;
първ > перв;
Първ > Перв;
ПЪРВ > ПЕРВ;
сърб > серб;
Сърб > Серб;
СЪРБ > СЕРБ;
въз > воз;
Въз > Воз;
ВЪЗ > ВОЗ;
съ > со;
Съ > Со;
СЪ > СО;

$lower_cons { ъ } р $non_letter > ;
$lower_cons { ъ } р $ > ;
$upper_cons { Ъ } Р $non_letter > ;
$upper_cons { Ъ } Р $ > ;
$upper_cons { ъ } р $non_letter > ;
$upper_cons { ъ } р $ > ;
$lower_cons { Ъ } Р $non_letter > ;
$lower_cons { Ъ } Р $ > ;
$lower_cons { ъ } л $non_letter > ;
$lower_cons { ъ } л $ > ;
$upper_cons { Ъ } Л $non_letter > ;
$upper_cons { Ъ } Л $ > ;
$upper_cons { ъ } л $non_letter > ;
$upper_cons { ъ } л $ > ;
$lower_cons { Ъ } Л $non_letter > ;
$lower_cons { Ъ } Л $ > ;

$lower_cons { ъ } $non_letter > ;
$lower_cons { ъ } $ > ;
$upper_cons { Ъ } $non_letter > ;
$upper_cons { Ъ } $ > ;
$upper_cons { ъ } $non_letter > ;
$upper_cons { ъ } $ > ;
$lower_cons { Ъ } $non_letter > ;
$lower_cons { Ъ } $ > ;

$non_letter { ъ > и;
$non_letter { Ъ > И;

жъ > же;
Жъ > Же;
ЖЪ > ЖЕ;
шъ > ше;
Шъ > Ше;
ШЪ > ШЕ;
чъ > че;
Чъ > Че;
ЧЪ > ЧЕ;
цъ > це;
Цъ > Це;
ЦЪ > ЦЕ;

ъ > ы;
Ъ > Ы;

$lower_cons { йо > ё;
$upper_cons { йо > ё;
$lower_cons { Йо > Ё;
$upper_cons { Йо > Ё;
$lower_cons { ЙО > Ё;
$upper_cons { ЙО > Ё;

ьо > ё;
Ьо > Ё;
ЬО > Ё;
`;
