export const zhBgRules = `
  :: Any-Latin;
  :: Latin-ASCII;
  :: Lower();
  
  # 1. ATOMIC SYLLABLES & BULGARIAN VOCALIZATION
  lu } $ > лю;
  nu } $ > ню;
  yuan > юан;
  qian > цян;
  xian > сян;
  jian > дзян;
  
  # The "Ъ" (Er Golyam) is perfect for Chinese 'en' and 'eng'
  shen > шън;  
  zhen > джън;
  eng > ън;
  en > ън;
  ong > ун;
  
  # Ensure 'ing' endings don't get split
  ping > пин;
  jing > дзин;
  ning > нин;
  ming > мин;
  ling > лин;
  ding > дин;
  
  # 2. BULGARIAN INITIALS (The Digraphs)
  # Bulgarian strictly uses дж and дз instead of чж and цз
  sh > ш;
  zh > дж;
  ch > ч;
  xi > си;
  ji > дзи;
  qi > ци;
  ju > дзю;
  qu > цю;
  xu > сю;
  z > дз;
  c > ц;
  
  # 3. VOWEL CLUSTERS
  ian > иен;
  ai > ай;
  ei > ей;
  ui > уй;
  ou > оу;
  
  # 'w' translates well to 'в' in established Bulgarian toponyms (e.g., Тайван)
  w > в; 
  
  # 4. ENDINGS (The Bulgarian Relief)
  # All 'ng' sounds just become a hard 'н'. No soft signs needed!
  ng } [^[:L:]] > н;
  ng } $ > н;
  
  # 5. Y-INITIAL FIX
  y } a > я;
  y } u > ю;
  y } e > е;
  y } i > и;
  y > й;
  
  :: Any-Cyrillic;
  
  # 6. POST-CYRILLIC CLEANUP
  # Format
  :: Title();
`;
