export const noCyrlRuRules = `
::Null;

[нН] { д } [^[:L:][:M:]] > н;
[нН] { Д } [^[:L:][:M:]] > Н;

[лЛ] { [ьЬ] } [^[:L:][:M:]] > ;
`;
