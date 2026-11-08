export const ptLatnHiatusRules = `
::NFC;

[aeouáéóúâêôãõAEOUÁÉÓÚÂÊÔÃÕ] { í } [^[:L:][:M:]] > yi;
[aeouáéóúâêôãõAEOUÁÉÓÚÂÊÔÃÕ] { Í } [^[:L:][:M:]] > YI;
`;
