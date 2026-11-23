export const svLatnLvRules = `
::Null;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { a } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > ā;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { A } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > Ā;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { [eäö] } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > ē;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { [EÄÖ] } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > Ē;

[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { u } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > ū;
[^[:L:][:M:]] [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ]* { U } [bcdfghjklmnpqrstvwxzčšžǯẑḫɣþBCDFGHJKLMNPQRSTVWXZČŠŽǮẐḪƔÞ] [aeiouåäöüAEIOUÅÄÖÜ] > Ū;
`;
