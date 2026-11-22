export const svLatnCyrlYuRules = `
::Null;

[^[:L:][:M:]] [Yy] { ([oO]) } [{bb}{BB}{dd}{DD}{ff}{FF}{gg}{GG}{kk}{KK}{ll}{LL}{mm}{MM}{nn}{NN}{pp}{PP}{rr}{RR}{ss}{SS}{tt}{TT}{vv}{VV}] > $1;
[^[:L:][:M:]] [Yy] { o > u;
[^[:L:][:M:]] [Yy] { O > U;
`;
