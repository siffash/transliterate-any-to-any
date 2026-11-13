export const svLatnLvRules = `
::Null;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { a } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > ā;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { A } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > Ā;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { e } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > ē;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { E } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > Ē;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { u } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > ū;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { U } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > Ū;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { ä } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > ē;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { Ä } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > Ē;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { ö } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > ē;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { Ö } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > Ē;
`;
