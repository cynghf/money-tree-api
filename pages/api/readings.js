export default async function handler(req, res) {
  try {
const fortunes =
[
  {
    "date": "2025-05-01",
    "lunardate": {"cn": "二零二五年四月初四", "en": "4th Month, 4th Day"},
    "hexagram": {
      "primary": {"symbol": "䷗", "name": {"cn": "地雷复", "en": "Fu"}},
      "changed": {"symbol": "䷁", "name": {"cn": "坤为地", "en": "Kun"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "辛巳", "en": "Xin-Si"},
      "day": {"cn": "庚午", "en": "Geng-Wu"}
    },
    "fortune": {
      "cn": "一阳复始，暗财渐显，忌贪快求多，静待春种秋收。",
      "en": "New beginnings stir—patient sowing brings harvest."
    }
  },
  {
    "date": "2025-05-02",
    "lunardate": {"cn": "二零二五年四月初五", "en": "4th Month, 5th Day"},
    "hexagram": {
      "primary": {"symbol": "䷒", "name": {"cn": "地泽临", "en": "Lin"}},
      "changed": {"symbol": "䷗", "name": {"cn": "地雷复", "en": "Fu"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "辛巳", "en": "Xin-Si"},
      "day": {"cn": "辛未", "en": "Xin-Wei"}
    },
    "fortune": {
      "cn": "泽被大地，低处聚财，忌孤高自许，终得细水长流。",
      "en": "Wealth gathers in humility—pride repels abundance."
    }
  },
  {
    "date": "2025-05-03",
    "lunardate": {"cn": "二零二五年四月初六", "en": "4th Month, 6th Day"},
    "hexagram": {
      "primary": {"symbol": "䷊", "name": {"cn": "地天泰", "en": "Tai"}},
      "changed": {"symbol": "䷒", "name": {"cn": "地泽临", "en": "Lin"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "辛巳", "en": "Xin-Si"},
      "day": {"cn": "壬申", "en": "Ren-Shen"}
    },
    "fortune": {
      "cn": "天地交泰，稳中求进，忌冒进失序，自有水到渠成。",
      "en": "Heaven meets earth—orderly steps reap rewards."
    }
  },
  {
    "date": "2025-05-04",
    "lunardate": {"cn": "二零二五年四月初七", "en": "4th Month, 7th Day"},
    "hexagram": {
      "primary": {"symbol": "䷡", "name": {"cn": "雷天大壮", "en": "Da Zhuang"}},
      "changed": {"symbol": "䷪", "name": {"cn": "泽天夬", "en": "Guai"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "辛巳", "en": "Xin-Si"},
      "day": {"cn": "癸酉", "en": "Gui-You"}
    },
    "fortune": {
      "cn": "雷震刚猛，进则易折，柔韧守势，终得厚积薄发。",
      "en": "Thunder's might breaks the rigid—flexibility preserves gains."
    }
  },
  {
    "date": "2025-05-05",
    "lunardate": {"cn": "二零二五年四月初八", "en": "4th Month, 8th Day"},
    "hexagram": {
      "primary": {"symbol": "䷪", "name": {"cn": "泽天夬", "en": "Guai"}},
      "changed": {"symbol": "䷀", "name": {"cn": "乾为天", "en": "Qian"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"}, // 立夏后月份干支变更
      "day": {"cn": "甲戌", "en": "Jia-Xu"}
    },
    "fortune": {
      "cn": "决断之时，利清旧账，忌优柔寡断，当断则断免后患。",
      "en": "Decisiveness clears debts—indecision breeds complications."
    }
  },
  {
    "date": "2025-05-06",
    "lunardate": {"cn": "二零二五年四月初九", "en": "4th Month, 9th Day"},
    "hexagram": {
      "primary": {"symbol": "䷀", "name": {"cn": "乾为天", "en": "Qian"}},
      "changed": {"symbol": "䷫", "name": {"cn": "天风姤", "en": "Gou"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "乙亥", "en": "Yi-Hai"}
    },
    "fortune": {
      "cn": "天行刚健，开拓进取，忌骄傲自满，虚怀若谷纳百川。",
      "en": "Heaven's vigor favors bold moves—humility gathers fortune."
    }
  },
  {
    "date": "2025-05-07",
    "lunardate": {"cn": "二零二五年四月初十", "en": "4th Month, 10th Day"},
    "hexagram": {
      "primary": {"symbol": "䷫", "name": {"cn": "天风姤", "en": "Gou"}},
      "changed": {"symbol": "䷈", "name": {"cn": "风天小畜", "en": "Xiao Xu"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "丙子", "en": "Bing-Zi"}
    },
    "fortune": {
      "cn": "风云际会，人脉生财，忌轻信许诺，察言观色辨真伪。",
      "en": "Networking brings opportunities—verify before trusting."
    }
  },
  {
    "date": "2025-05-08",
    "lunardate": {"cn": "二零二五年四月十一", "en": "4th Month, 11th Day"},
    "hexagram": {
      "primary": {"symbol": "䷈", "name": {"cn": "风天小畜", "en": "Xiao Xu"}},
      "changed": {"symbol": "䷅", "name": {"cn": "天水讼", "en": "Song"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "丁丑", "en": "Ding-Chou"}
    },
    "fortune": {
      "cn": "密云不雨，蓄势待发，忌怨天尤人，静待时机莫强求。",
      "en": "Clouds withhold rain—wait patiently for the right moment."
    }
  },
  {
    "date": "2025-05-09",
    "lunardate": {"cn": "二零二五年四月十二", "en": "4th Month, 12th Day"},
    "hexagram": {
      "primary": {"symbol": "䷅", "name": {"cn": "天水讼", "en": "Song"}},
      "changed": {"symbol": "䷄", "name": {"cn": "水天需", "en": "Xu"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "戊寅", "en": "Wu-Yin"}
    },
    "fortune": {
      "cn": "讼端初起，以退为进，舍小保大，破财消灾为上策。",
      "en": "Conflict looms—compromise preserves greater interests."
    }
  },
  {
    "date": "2025-05-10",
    "lunardate": {"cn": "二零二五年四月十三", "en": "4th Month, 13th Day"},
    "hexagram": {
      "primary": {"symbol": "䷄", "name": {"cn": "水天需", "en": "Xu"}},
      "changed": {"symbol": "䷂", "name": {"cn": "水雷屯", "en": "Zhun"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "己卯", "en": "Ji-Mao"}
    },
    "fortune": {
      "cn": "云上于天，待机而动，忌急躁冒进，守得云开见月明。",
      "en": "Wait for the clouds to part—haste wastes potential."
    }
  },
  {
    "date": "2025-05-11",
    "lunardate": {"cn": "二零二五年四月十四", "en": "4th Month, 14th Day"},
    "hexagram": {
      "primary": {"symbol": "䷂", "name": {"cn": "水雷屯", "en": "Zhun"}},
      "changed": {"symbol": "䷾", "name": {"cn": "水火既济", "en": "Ji Ji"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "庚辰", "en": "Geng-Chen"}
    },
    "fortune": {
      "cn": "屯难之时，守成为要，忌盲目投资，稳扎稳打度难关。",
      "en": "Preserve capital in hard times—recklessness invites loss."
    }
  },
  {
    "date": "2025-05-12",
    "lunardate": {"cn": "二零二五年四月十五", "en": "4th Month, 15th Day"},
    "hexagram": {
      "primary": {"symbol": "䷾", "name": {"cn": "水火既济", "en": "Ji Ji"}},
      "changed": {"symbol": "䷿", "name": {"cn": "水火未济", "en": "Wei Ji"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "辛巳", "en": "Xin-Si"}
    },
    "fortune": {
      "cn": "既济之时，居安思危，忌得意忘形，未雨绸缪防变故。",
      "en": "Success demands vigilance—complacency breeds reversal."
    }
  },
  {
    "date": "2025-05-13",
    "lunardate": {"cn": "二零二五年四月十六", "en": "4th Month, 16th Day"},
    "hexagram": {
      "primary": {"symbol": "䷿", "name": {"cn": "水火未济", "en": "Wei Ji"}},
      "changed": {"symbol": "䷚", "name": {"cn": "山雷颐", "en": "Yi"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "壬午", "en": "Ren-Wu"}
    },
    "fortune": {
      "cn": "未济之局，韬光养晦，忌半途而废，持之以恒终有获。",
      "en": "Persist through uncertainty—abandonment forfeits gains."
    }
  },
  {
    "date": "2025-05-14",
    "lunardate": {"cn": "二零二五年四月十七", "en": "4th Month, 17th Day"},
    "hexagram": {
      "primary": {"symbol": "䷚", "name": {"cn": "山雷颐", "en": "Yi"}},
      "changed": {"symbol": "䷐", "name": {"cn": "山泽损", "en": "Sun"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "癸未", "en": "Gui-Wei"}
    },
    "fortune": {
      "cn": "颐养之道，节俭持家，忌奢侈浪费，细水长流保平安。",
      "en": "Frugality preserves wealth—extravagance drains reserves."
    }
  },
  {
    "date": "2025-05-15",
    "lunardate": {"cn": "二零二五年四月十八", "en": "4th Month, 18th Day"},
    "hexagram": {
      "primary": {"symbol": "䷐", "name": {"cn": "山泽损", "en": "Sun"}},
      "changed": {"symbol": "䷮", "name": {"cn": "地泽临", "en": "Lin"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "甲申", "en": "Jia-Shen"}
    },
    "fortune": {
      "cn": "损下益上，取舍有道，忌因小失大，权衡利弊慎决断。",
      "en": "Prudent sacrifice brings gain—short-term loss, long-term benefit."
    }
  },
  {
    "date": "2025-05-16",
    "lunardate": {"cn": "二零二五年四月十九", "en": "4th Month, 19th Day"},
    "hexagram": {
      "primary": {"symbol": "䷮", "name": {"cn": "地泽临", "en": "Lin"}},
      "changed": {"symbol": "䷎", "name": {"cn": "地天泰", "en": "Tai"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "乙酉", "en": "Yi-You"}
    },
    "fortune": {
      "cn": "居高临下，统筹全局，忌目光短浅，胸怀格局纳百川。",
      "en": "Broad perspective reveals opportunities—narrow vision misses fortunes."
    }
  },
  {
    "date": "2025-05-17",
    "lunardate": {"cn": "二零二五年四月二十", "en": "4th Month, 20th Day"},
    "hexagram": {
      "primary": {"symbol": "䷎", "name": {"cn": "地天泰", "en": "Tai"}},
      "changed": {"symbol": "䷋", "name": {"cn": "天地否", "en": "Pi"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "丙戌", "en": "Bing-Xu"}
    },
    "fortune": {
      "cn": "泰极否来，未雨绸缪，忌安于现状，思患预防保长久。",
      "en": "Prosperity sows decline—prepare while fortune lasts."
    }
  },
  {
    "date": "2025-05-18",
    "lunardate": {"cn": "二零二五年四月廿一", "en": "4th Month, 21st Day"},
    "hexagram": {
      "primary": {"symbol": "䷋", "name": {"cn": "天地否", "en": "Pi"}},
      "changed": {"symbol": "䷓", "name": {"cn": "风地观", "en": "Guan"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "丁亥", "en": "Ding-Hai"}
    },
    "fortune": {
      "cn": "否塞之时，静观其变，忌逆势而为，韬光养晦待天时。",
      "en": "Observe during stagnation—forcing action worsens plight."
    }
  },
  {
    "date": "2025-05-19",
    "lunardate": {"cn": "二零二五年四月廿二", "en": "4th Month, 22nd Day"},
    "hexagram": {
      "primary": {"symbol": "䷓", "name": {"cn": "风地观", "en": "Guan"}},
      "changed": {"symbol": "䷖", "name": {"cn": "山地剥", "en": "Bo"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "戊子", "en": "Wu-Zi"}
    },
    "fortune": {
      "cn": "观而后行，谋定后动，忌道听途说，明察秋毫辨真伪。",
      "en": "Scrutinize before acting—gossip obscures truth."
    }
  },
  {
    "date": "2025-05-20",
    "lunardate": {"cn": "二零二五年四月廿三", "en": "4th Month, 23rd Day"},
    "hexagram": {
      "primary": {"symbol": "䷖", "name": {"cn": "山地剥", "en": "Bo"}},
      "changed": {"symbol": "䷁", "name": {"cn": "坤为地", "en": "Kun"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "己丑", "en": "Ji-Chou"}
    },
    "fortune": {
      "cn": "剥极必复，守柔处下，忌强硬对抗，以退为进待转机。",
      "en": "Decline precedes renewal—yielding now brings future strength."
    }
  },
  {
    "date": "2025-05-21",
    "lunardate": {"cn": "二零二五年四月廿四", "en": "4th Month, 24th Day"},
    "hexagram": {
      "primary": {"symbol": "䷁", "name": {"cn": "坤为地", "en": "Kun"}},
      "changed": {"symbol": "䷗", "name": {"cn": "地雷复", "en": "Fu"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "庚寅", "en": "Geng-Yin"}
    },
    "fortune": {
      "cn": "坤德载物，厚积薄发，忌急功近利，脚踏实地是正途。",
      "en": "Earth's patience bears fruit—steady effort yields bounty."
    }
  },
  {
    "date": "2025-05-22",
    "lunardate": {"cn": "二零二五年四月廿五", "en": "4th Month, 25th Day"},
    "hexagram": {
      "primary": {"symbol": "䷗", "name": {"cn": "地雷复", "en": "Fu"}},
      "changed": {"symbol": "䷒", "name": {"cn": "地泽临", "en": "Lin"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "辛卯", "en": "Xin-Mao"}
    },
    "fortune": {
      "cn": "一阳来复，生机初现，忌揠苗助长，顺应天时自然成。",
      "en": "New growth emerges—forcing haste withers potential."
    }
  },
  {
    "date": "2025-05-23",
    "lunardate": {"cn": "二零二五年四月廿六", "en": "4th Month, 26th Day"},
    "hexagram": {
      "primary": {"symbol": "䷒", "name": {"cn": "地泽临", "en": "Lin"}},
      "changed": {"symbol": "䷭", "name": {"cn": "地风升", "en": "Sheng"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "壬辰", "en": "Ren-Chen"}
    },
    "fortune": {
      "cn": "居高临下，统筹兼顾，忌顾此失彼，全局谋划利长久。",
      "en": "Elevated view reveals connections—partial focus misses synergies."
    }
  },
  {
    "date": "2025-05-24",
    "lunardate": {"cn": "二零二五年四月廿七", "en": "4th Month, 27th Day"},
    "hexagram": {
      "primary": {"symbol": "䷭", "name": {"cn": "地风升", "en": "Sheng"}},
      "changed": {"symbol": "䷯", "name": {"cn": "地水师", "en": "Shi"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "癸巳", "en": "Gui-Si"}
    },
    "fortune": {
      "cn": "柔顺上升，借势而为，忌刚愎自用，谦和纳谏得助力。",
      "en": "Rise through adaptability—stubbornness isolates allies."
    }
  },
  {
    "date": "2025-05-25",
    "lunardate": {"cn": "二零二五年四月廿八", "en": "4th Month, 28th Day"},
    "hexagram": {
      "primary": {"symbol": "䷯", "name": {"cn": "地水师", "en": "Shi"}},
      "changed": {"symbol": "䷆", "name": {"cn": "山水蒙", "en": "Meng"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "甲午", "en": "Jia-Wu"}
    },
    "fortune": {
      "cn": "师出有名，团队协作，忌独断专行，集思广益事方成。",
      "en": "Collective action succeeds—solitary efforts falter."
    }
  },
  {
    "date": "2025-05-26",
    "lunardate": {"cn": "二零二五年四月廿九", "en": "4th Month, 29th Day"},
    "hexagram": {
      "primary": {"symbol": "䷆", "name": {"cn": "山水蒙", "en": "Meng"}},
      "changed": {"symbol": "䷇", "name": {"cn": "风水涣", "en": "Huan"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "乙未", "en": "Yi-Wei"}
    },
    "fortune": {
      "cn": "启蒙之初，虚心求教，忌固步自封，广开言路得真知。",
      "en": "Beginner's mind gathers wisdom—arrogance blinds insight."
    }
  },
  {
    "date": "2025-05-27",
    "lunardate": {"cn": "二零二五年五月初一", "en": "5th Month, 1st Day"},
    "hexagram": {
      "primary": {"symbol": "䷇", "name": {"cn": "风水涣", "en": "Huan"}},
      "changed": {"symbol": "䷺", "name": {"cn": "天水讼", "en": "Song"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "丙申", "en": "Bing-Shen"}
    },
    "fortune": {
      "cn": "涣散之时，凝心聚力，忌各自为政，同心同德渡难关。",
      "en": "Dispersion demands unity—division invites failure."
    }
  },
  {
    "date": "2025-05-28",
    "lunardate": {"cn": "二零二五年五月初二", "en": "5th Month, 2nd Day"},
    "hexagram": {
      "primary": {"symbol": "䷺", "name": {"cn": "天水讼", "en": "Song"}},
      "changed": {"symbol": "䷅", "name": {"cn": "水天需", "en": "Xu"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "丁酉", "en": "Ding-You"}
    },
    "fortune": {
      "cn": "讼端初现，以柔克刚，忌针锋相对，退让三分保平安。",
      "en": "Softness resolves conflict—confrontation escalates strife."
    }
  },
  {
    "date": "2025-05-29",
    "lunardate": {"cn": "二零二五年五月初三", "en": "5th Month, 3rd Day"},
    "hexagram": {
      "primary": {"symbol": "䷅", "name": {"cn": "水天需", "en": "Xu"}},
      "changed": {"symbol": "䷄", "name": {"cn": "水火既济", "en": "Ji Ji"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "戊戌", "en": "Wu-Xu"}
    },
    "fortune": {
      "cn": "需待之时，养精蓄锐，忌急躁冒进，静候良机莫强求。",
      "en": "Waiting cultivates strength—premature action wastes energy."
    }
  },
  {
    "date": "2025-05-30",
    "lunardate": {"cn": "二零二五年五月初四", "en": "5th Month, 4th Day"},
    "hexagram": {
      "primary": {"symbol": "䷄", "name": {"cn": "水火既济", "en": "Ji Ji"}},
      "changed": {"symbol": "䷾", "name": {"cn": "火水未济", "en": "Wei Ji"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "己亥", "en": "Ji-Hai"}
    },
    "fortune": {
      "cn": "既济之功，居安思危，忌得意忘形，未雨绸缪防后患。",
      "en": "Success sows complacency—vigilance preserves achievements."
    }
  },
  {
    "date": "2025-05-31",
    "lunardate": {"cn": "二零二五年五月初五", "en": "5th Month, 5th Day"},
    "hexagram": {
      "primary": {"symbol": "䷾", "name": {"cn": "火水未济", "en": "Wei Ji"}},
      "changed": {"symbol": "䷿", "name": {"cn": "山水蒙", "en": "Meng"}}
    },
    "stems_branches": {
      "year": {"cn": "乙巳", "en": "Yi-Si"},
      "month": {"cn": "壬午", "en": "Ren-Wu"},
      "day": {"cn": "庚子", "en": "Geng-Zi"}
    },
    "fortune": {
      "cn": "未济之局，韬光养晦，忌轻举妄动，厚积薄发待天时。",
      "en": "Incompletion demands patience—premature efforts misfire."
    }
  }
]
    
// Return the data
    res.status(200).json(fortunes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load fortune data' });
  }
}

