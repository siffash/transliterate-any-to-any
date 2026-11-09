export const plLatnUkRules = `
::Null;

ʲA > Я;
ʲa > я;

ʲE > Е;
ʲe > е;

[PBMVF] { ʲO > ЙО;
[pbmvfPBMVF] { ʲO } [:Lu:] > ЙО;
[pbmvfPBMVF] { ʲO > Йо;
[pbmvfPBMVF] { ʲo > йо;

[:Lu:] { ʲO > ЬО;
ʲO } [:Lu:] > ЬО;
ʲO > Ьо;
ʲo > ьо;

ʲU > Ю;
ʲu > ю;

[:Lu:] { ʲ > Ь;
ʲ } [:Lu:] > Ь;
ʲ > ь;

ń } [eE] > n;
Ń } [eE] > N;

[цЦ] { i > и;
[цЦ] { I > И;

[дД] [зЗ] { i > и;
[дД] [зЗ] { I > И;

i } č [^[:L:][:M:]] > и;
I } Č [^[:L:][:M:]] > И;

ń } [sS] [kK] [iIaA] [^[:L:][:M:]] > n;
Ń } [sS] [kK] [iIaA] [^[:L:][:M:]] > N;

[sScCẑẐсСзЗ] { KI } [^[:L:][:M:]] > ЬКИЙ;
[sScCẑẐсСзЗ] { ki } [^[:L:][:M:]] > ький;

[sScCẑẐсСзЗ] { KA } [^[:L:][:M:]] > ЬКА;
[sScCẑẐсСзЗ] { ka } [^[:L:][:M:]] > ька;
`;
