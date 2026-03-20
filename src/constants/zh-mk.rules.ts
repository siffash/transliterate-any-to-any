export const zhMkRules = `
  ::Any-Latin;
  ::Latin-ASCII;
  ::Lower();
  
  # 1. ATOMIC SYLLABLES & MACEDONIAN PALATALS
  yuan > јуан;
  qian > ќен;
  xian > сян;
  jian > џијан;
  
  # Vowel clusters
  ong > онг;
  eng > енг;
  ian > јан;
  ai > ај;
  ei > еј;
  ui > уј;
  
  # 2. MACEDONIAN INITIALS
  # Using the unique Macedonian Џ and Ќ
  sh > ш;
  zh > џ;
  ch > ч;
  xi > си;
  ji > џи;
  qi > ќи;
  ju > џу;
  qu > ќу;
  xu > сју;
  
  # 3. THE UMLAUT FIX (Lü and Nü)
  # In Macedonian, these become 'Љу' and 'Њу'
  lü > љу;
  nü > њу;
  lu } $ > љу;
  nu } $ > њу;
  
  # 4. Y and W INITIALS
  y } a > ја;
  y } u > ју;
  y } e > је;
  y > ј;
  w > в;
  
  # 5. ENDING LOGIC (Hard endings)
  ng } [^[:L:]] > нг;
  ng } $ > нг;
  n } [^[:L:]] > н;
  n } $ > н;
  
  ::Any-Cyrillic;
  
  # 6. POST-CYRILLIC CLEANUP
  # Macedonian 'Ј' is the standard, replace any leftover 'Й'
  й > ј;
  
  # Format
  ::Title();
`;
