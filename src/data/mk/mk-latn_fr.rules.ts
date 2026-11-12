export const mkLatnFrRules = `
::Null;

Ń } [:Lu:] > NY;
[:Lu:] { Ń > NY;
Ń > Ny;
ń > ny;

Ľ } [:Lu:] > LY;
[:Lu:] { Ľ > LY;
Ľ > Ly;
ľ > ly;
`;
