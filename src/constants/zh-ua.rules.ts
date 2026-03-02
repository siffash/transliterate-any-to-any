export const zhUaRules = `
  :: Any-Latin;
  :: Latin-ASCII;
  :: Lower();
  
  # 1. ATOMIC SYLLABLE PROTECTIONS (Longest first)
  # 1. Syllable Boundaries (Xi'an, Tian'anmen)
  '' > ;
  # 2. Umlaut Fixes (Lü, Nü)
  lü > лю;
  nü > ню;
  lyu > лю;
  nyu > ню;
  lu } $ > лю;
  nu } $ > ню;
  # 3. The 'E' vs 'IE' Distinction (Ukrainian specific)
  # After 'j, q, x', the 'e' sound is 'є'
  xie > сє;
  jie > цзіє;
  qie > ціє;
  ye > є;
  # After 'zh, ch, sh', the 'e' sound is 'е'
  shen > шень;
  zhen > чжень;
  zhe > чже;
  che > че;
  she > ше;
  re > же;
  ian > янь;
  # 4. Final 'i' sound for Ukrainian names
  # (Ensures all names ending in 'i' use 'і' not 'и')
  i } $ > і;
  # 5. This prevents 'jing' from being broken into 'jin' + 'g'
  ping } $ > пін;
  ping > пінь;
  jing } $ > цзін;
  jing > цзінь;
  ning } $ > нін;
  ning > нінь;
  
  # 2. PINYIN INITIALS
  yuan > юань;
  qian > цянь;
  sh > ш;
  zh > чж;
  ch > ч;
  xi > сі;
  ji > цзі;
  qi > ці;
  ju > цзю;
  qu > цю;
  xu > сю;
  
  # 3. VOWEL CLUSTERS
  ong > ун;
  ai > ай;
  ei > ей;
  ui > уй;
  w > в;
  g } [aeiou] > ґ;
  
  # 4. THE N vs NG LOGIC (Crucial Fix)
  # We must catch 'ng' BEFORE 'n'
  ng } [^[:L:]] > н;
  ng } $ > н;
  # Only then do we soften the standalone 'n'
  n } [^[:L:]] > нь; 
  n } $ > нь;
  
  # 5. Y-INITIAL FIX
  y } a > я;
  y } u > ю;
  y } e > є;
  y > і;
  
  :: Any-Cyrillic;
  
  # 6. POST-CYRILLIC CLEANUP
  # Fixes the 'ee' sound and removes accidental double-softening
  ци > ці;
  зи > зі;
  пи > пі;
  ли > лі;
  ми > мі;
  ни > ні;
  ньг > нг;
  ннь > нь;
  
  # Format
  :: Title();
`;
