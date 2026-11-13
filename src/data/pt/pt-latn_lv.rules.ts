export const ptLatnLvRules = `
::Null;

[aeiouáéíóúâêôãõAEIOUÁÉÍÓÚÂÊÔÃÕ] [^aeiouáéíóúâêôãõAEIOUÁÉÍÓÚÂÊÔÃÕ[^[:L:][:M:]]]+ { o } [sS]? [^[:L:][:M:]] > u;
[aeiouáéíóúâêôãõAEIOUÁÉÍÓÚÂÊÔÃÕ] [^aeiouáéíóúâêôãõAEIOUÁÉÍÓÚÂÊÔÃÕ[^[:L:][:M:]]]+ { O } [sS]? [^[:L:][:M:]] > U;
`;
