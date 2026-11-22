export const hyLatnH0Rules = `
::Null;

[^[:L:][:M:]] { H ([aeiouə]) > &Any-Upper($1);
[^[:L:][:M:]] { [hH] } [aeiouəAEIOUƏ] > ;
`;
