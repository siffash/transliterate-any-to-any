export const azIpaRules = `
  ::Lower;

  $front_v = [e ə i ö ü];
  $back_v = [a ı o u];
  $voiceless = [p f k t s ş x ç h];
  $voiced = [b v g ğ d z c j l m n r y];
  $boundary = [:^Letter:];
  
  bb > bː;
  cc > d͡ʒː;
  çç > t͡ʃː;
  dd > dː;
  ff > fː;
  gg > ɡː;
  ğğ > ɣː;
  jj > ʒː;
  kk > kː;
  ll > lː;
  mm > mː;
  nn > nː;
  pp > pː;
  rr > ɾː;
  ss > sː;
  şş > ʃː;
  tt > tː;
  vv > vː;
  zz > zː;
  
  b } [ $voiceless $boundary ] > p;
  v } [ $voiceless $boundary ] > f;
  g } [ $voiceless $boundary ] > k;
  ğ } [ $voiceless $boundary ] > x;
  d } [ $voiceless $boundary ] > t;
  z } [ $voiceless $boundary ] > s;
  c } [ $voiceless $boundary ] > t͡ʃ;
  j } [ $voiceless $boundary ] > ʃ;
  
  p } $voiced > b;
  f } $voiced > v;
  k } $voiced > ɡ;
  x } $voiced > ɣ;
  t } $voiced > d;
  s } $voiced > z;
  ç } $voiced > d͡ʒ;
  ş } $voiced > ʒ;
  
  q } [ $voiceless $boundary ] > x;
  q } [ $back_v $voiced ] > ɡ;
  q > ɡ;
  
  k } $front_v > c;
  k } [ $voiceless $boundary ] > ç;
  
  l } $back_v > ɫ;
  
  g } $front_v > ɟ;
  
  c > d͡ʒ;
  ç > t͡ʃ;
  ş > ʃ;
  j > ʒ;
  ğ > ɣ;
  x > χ;
  r > ɾ;
  y > j;
  
  a > ɑ;
  ə > æ;
  e > e;
  i > i;
  ı > ɯ;
  o > o;
  ö > œ;
  u > u;
  ü > y;
  
  b > b;
  d > d;
  f > f;
  g > ɡ;
  h > h;
  k > k;
  l > l;
  m > m;
  n > n;
  p > p;
  s > s;
  t > t;
  v > v;
  z > z;
`;
