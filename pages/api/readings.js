export default async function handler(req, res) {
  try {
const fortunes =
[
  {
    "date": "2025-04-15",
    "lunardate": {
      "cn": "二零二五年三月十八",
      "en": "March 18, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷿",  // 水火未济
        "name": { "cn": "水火未济", "en": "Wei Ji" }
      },
      "changed": {
        "symbol": "䷃",  // 山水蒙
        "name": { "cn": "山水蒙", "en": "Meng" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "甲寅", "en": "Jia-Yin" }
    },
    "fortune": {
      "cn": "火水未交，财机隐而未发，忌半途而废，守成终见柳暗花明。",
      "en": "Potential waits—perseverance turns obstacles to gateways."
    }
  },
  {
    "date": "2025-04-16",
    "lunardate": {
      "cn": "二零二五年三月十九",
      "en": "March 19, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷠",  // 天山遁
        "name": { "cn": "天山遁", "en": "Dun" }
      },
      "changed": {
        "symbol": "䷋",  // 天地否
        "name": { "cn": "天地否", "en": "Pi" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "乙卯", "en": "Yi-Mao" }
    },
    "fortune": {
      "cn": "高山隐退，舍小财避大耗，忌恋战贪功，退守反得海阔天空。",
      "en": "Yield small gains to preserve greater fortunes."
    }
  },
  {
    "date": "2025-04-17",
    "lunardate": {
      "cn": "二零二五年三月二十",
      "en": "March 20, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷧",  // 雷水解
        "name": { "cn": "雷水解", "en": "Xie" }
      },
      "changed": {
        "symbol": "䷆",  // 地水师
        "name": { "cn": "地水师", "en": "Shi" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "丙辰", "en": "Bing-Chen" }
    },
    "fortune": {
      "cn": "春雷化雨，旧债宜清新生，忌执念困局，活水自来财源通。",
      "en": "Clear old debts to free new streams of wealth."
    }
  },
  {
    "date": "2025-04-18",
    "lunardate": {
      "cn": "二零二五年三月廿一",
      "en": "March 21, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷤",  // 风火家人
        "name": { "cn": "风火家人", "en": "Jia Ren" }
      },
      "changed": {
        "symbol": "䷌",  // 天火同人
        "name": { "cn": "天火同人", "en": "Tong Ren" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "丁巳", "en": "Ding-Si" }
    },
    "fortune": {
      "cn": "家宅生财，合作利市，忌内部分歧，自有众志成城之利。",
      "en": "Household harmony multiplies collective gains."
    }
  },
  {
    "date": "2025-04-19",
    "lunardate": {
      "cn": "二零二五年三月廿二",
      "en": "March 22, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷾",  // 水火既济
        "name": { "cn": "水火既济", "en": "Ji Ji" }
      },
      "changed": {
        "symbol": "䷤",  // 风火家人
        "name": { "cn": "风火家人", "en": "Jia Ren" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "戊午", "en": "Wu-Wu" }
    },
    "fortune": {
      "cn": "渡险守成，先理旧账，忌新债叠加，终得轻装前行。",
      "en": "Settle past accounts before new ventures."
    }
  },
  {
    "date": "2025-04-20",
    "lunardate": {
      "cn": "二零二五年三月廿三",
      "en": "March 23, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷚",  // 山雷颐
        "name": { "cn": "山雷颐", "en": "Yi" }
      },
      "changed": {
        "symbol": "䷗",  // 地雷复
        "name": { "cn": "地雷复", "en": "Fu" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "己未", "en": "Ji-Wei" }
    },
    "fortune": {
      "cn": "厚土生金，储蓄为上策，忌投机短视，静待金石为开。",
      "en": "Fertile earth grows metal—patient savings compound."
    }
  },
  {
    "date": "2025-04-21",
    "lunardate": {
      "cn": "二零二五年三月廿四",
      "en": "March 24, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷛",  // 泽风大过
        "name": { "cn": "泽风大过", "en": "Da Guo" }
      },
      "changed": {
        "symbol": "䷟",  // 雷风恒
        "name": { "cn": "雷风恒", "en": "Heng" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "庚申", "en": "Geng-Shen" }
    },
    "fortune": {
      "cn": "非常之道，慎行险招，留有余地，终得转危为安。",
      "en": "Extraordinary paths demand extraordinary caution."
    }
  },
  {
    "date": "2025-04-22",
    "lunardate": {
      "cn": "二零二五年三月廿五",
      "en": "March 25, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷍",  // 火天大有
        "name": { "cn": "火天大有", "en": "Da You" }
      },
      "changed": {
        "symbol": "䷙",  // 山天大畜
        "name": { "cn": "山天大畜", "en": "Da Xu" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "辛酉", "en": "Xin-You" }
    },
    "fortune": {
      "cn": "天火同辉，丰盈在望，忌盈满招损，谦和自得天禄。",
      "en": "Abundance beckons—moderation preserves prosperity."
    }
  },
  {
    "date": "2025-04-23",
    "lunardate": {
      "cn": "二零二五年三月廿六",
      "en": "March 26, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷒",  // 地泽临
        "name": { "cn": "地泽临", "en": "Lin" }
      },
      "changed": {
        "symbol": "䷻",  // 水泽节
        "name": { "cn": "水泽节", "en": "Jie" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "壬戌", "en": "Ren-Xu" }
    },
    "fortune": {
      "cn": "泽被大地，聚财于低处，忌孤高独揽，终得众流归海。",
      "en": "Wealth pools where humility flows."
    }
  },
  {
    "date": "2025-04-24",
    "lunardate": {
      "cn": "二零二五年三月廿七",
      "en": "March 27, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷡",  // 雷天大壮
        "name": { "cn": "雷天大壮", "en": "Da Zhuang" }
      },
      "changed": {
        "symbol": "䷪",  // 泽天夬
        "name": { "cn": "泽天夬", "en": "Guai" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "癸亥", "en": "Gui-Hai" }
    },
    "fortune": {
      "cn": "雷震苍穹，进则易折，忌刚愎强求，柔韧自保长远。",
      "en": "Thunder's might breaks the rigid—flexibility endures."
    }
  },
  {
    "date": "2025-04-25",
    "lunardate": {
      "cn": "二零二五年三月廿八",
      "en": "March 28, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷅",  // 天水讼
        "name": { "cn": "天水讼", "en": "Song" }
      },
      "changed": {
        "symbol": "䷫",  // 天风姤
        "name": { "cn": "天风姤", "en": "Gou" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "甲子", "en": "Jia-Zi" }
    },
    "fortune": {
      "cn": "天悬冰刃，争讼耗财，忌意气相争，退让反得福荫。",
      "en": "Legal conflicts drain wealth—compromise preserves gains."
    }
  },
  {
    "date": "2025-04-26",
    "lunardate": {
      "cn": "二零二五年三月廿九",
      "en": "March 29, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷊",  // 地天泰
        "name": { "cn": "地天泰", "en": "Tai" }
      },
      "changed": {
        "symbol": "䷡",  // 雷天大壮
        "name": { "cn": "雷天大壮", "en": "Da Zhuang" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "乙丑", "en": "Yi-Chou" }
    },
    "fortune": {
      "cn": "天地交泰，稳中求进，忌冒进失序，自有春华秋实。",
      "en": "Heaven meets earth—orderly steps reap harvests."
    }
  },
  {
    "date": "2025-04-27",
    "lunardate": {
      "cn": "二零二五年三月三十",
      "en": "March 30, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷬",  // 泽地萃
        "name": { "cn": "泽地萃", "en": "Cui" }
      },
      "changed": {
        "symbol": "䷋",  // 天地否
        "name": { "cn": "天地否", "en": "Pi" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "丙寅", "en": "Bing-Yin" }
    },
    "fortune": {
      "cn": "众泽归洼，合伙生财，忌利令智昏，公道方得久长。",
      "en": "Shared pools nourish all—fairness sustains prosperity."
    }
  },
  {
    "date": "2025-04-28",
    "lunardate": {
      "cn": "二零二五年四月初一",
      "en": "April 1, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷔",  // 火雷噬嗑
        "name": { "cn": "火雷噬嗑", "en": "Shi He" }
      },
      "changed": {
        "symbol": "䷚",  // 山雷颐
        "name": { "cn": "山雷颐", "en": "Yi" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "辛巳", "en": "Xin-Si" },
      "day": { "cn": "丁卯", "en": "Ding-Mao" }
    },
    "fortune": {
      "cn": "雷火相激，契约护财，忌口头承诺，白纸黑字为凭。",
      "en": "Contracts shield wealth from fiery disputes."
    }
  },
  {
    "date": "2025-04-29",
    "lunardate": {
      "cn": "二零二五年四月初二",
      "en": "April 2, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷴",  // 风山渐
        "name": { "cn": "风山渐", "en": "Jian" }
      },
      "changed": {
        "symbol": "䷦",  // 水山蹇
        "name": { "cn": "水山蹇", "en": "Jian" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "辛巳", "en": "Xin-Si" },
      "day": { "cn": "戊辰", "en": "Wu-Chen" }
    },
    "fortune": {
      "cn": "风行山上，循序渐进，忌好高骛远，积跬步以至千里。",
      "en": "Winds climb slopes—small steps reach summits."
    }
  },
  {
    "date": "2025-04-30",
    "lunardate": {
      "cn": "二零二五年四月初三",
      "en": "April 3, 2025"
    },
    "hexagram": {
      "primary": {
        "symbol": "䷏",  // 雷地豫
        "name": { "cn": "雷地豫", "en": "Yu" }
      },
      "changed": {
        "symbol": "䷁",  // 坤为地
        "name": { "cn": "坤为地", "en": "Kun" }
      }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "辛巳", "en": "Xin-Si" },
      "day": { "cn": "己巳", "en": "Ji-Si" }
    },
    "fortune": {
      "cn": "雷出地奋，顺势而为，忌逆天强求，自有水到渠成。",
      "en": "Thunder stirs earth—flow with heaven's timing."
    }
  }
]
    
// Return the data
    res.status(200).json(fortunes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load fortune data' });
  }
}

