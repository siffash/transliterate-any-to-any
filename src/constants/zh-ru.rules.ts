export const zhRuRules = `
  ::Any-Latin;
  
  ::Latin-ASCII;
  ::Lower();
  
  # 1. ATOMIC PINYIN TO CYRILLIC (The "Nuclear" Option)
  # We map these directly to Russian letters so ICU can't break them.
  yuan > юань;
  qian > цянь;
  shen > шэнь;
  zhen > чжэнь;
  sh > ш;
  zh > чж;
  ch > ч;
  xi > си;
  ji > цзи;
  qi > ци;
  ju > цзю;
  qu > цю;
  xu > сю;
  
  # 2. VOWEL CLUSTERS (Handle what's left)
  ian > янь;
  ong > ун;
  ai > ай;
  ei > эй;
  ui > уй;
  w > в;
  
  # 3. ENDING LOGIC (n vs ng)
  # Catch cases where the dots were already stripped to 'u'
  lu } $ > лю;
  nu } $ > ню;
  # If 'n' or 'ng' didn't get caught above, handle them here.
  ng } [^[:L:]] > н;
  ng } $ > н;
  n } [^[:L:]] > нь; 
  n } $ > нь;
  
  # 4. Y-INITIAL FIX (For things like 'ya', 'yo')
  y } a > я;
  y } u > ю;
  y } e > е;
  y > и;
  
  ::Any-Cyrillic;
  
  # 5. POST-CYRILLIC CLEANUP
  # Fix double soft signs or weird overlaps
  ньнь > нь;
  ннь > нь;
  ывань > айвань;
  иуань > юань;
  
  # Format
  ::Title();
`;
