export default async function handler(req, res) {
  try {
const fortunes =
[
  {
    "date": "2025-04-10",
    "lunardate": {
      "cn": "二零二五年三月十三",
      "en": "March 13, 2025"
    },
    "hexagram": {
      "primary": { "cn": "山火贲", "en": "Hexagram 22: Bi" },
      "changed": { "cn": "地火明夷", "en": "Hexagram 36: Ming Yi" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "己酉", "en": "Ji-You" }
    },
    "fortune": {
      "cn": "文采焕然，虚饰可成一时之美，守朴归真方见大器晚成。",
      "en": "Adornments gleam briefly, while substance matures slowly—true worth withstands seasons."
    }
  },
  {
    "date": "2025-04-11",
    "lunardate": {
      "cn": "二零二五年三月十四",
      "en": "March 14, 2025"
    },
    "hexagram": {
      "primary": { "cn": "地雷复", "en": "Hexagram 24: Fu" },
      "changed": { "cn": "震为雷", "en": "Hexagram 51: Zhen" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "庚戌", "en": "Geng-Xu" }
    },
    "fortune": {
      "cn": "一阳初动，暗财渐显端倪，忌揠苗助长，静待春雷破土。",
      "en": "First yang stirs—hidden assets emerge with patience, forced growth withers potential."
    }
  },
  {
    "date": "2025-04-12",
    "lunardate": {
      "cn": "二零二五年三月十五",
      "en": "March 15, 2025"
    },
    "hexagram": {
      "primary": { "cn": "天泽履", "en": "Hexagram 10: Lv" },
      "changed": { "cn": "乾为天", "en": "Hexagram 1: Qian" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "辛亥", "en": "Xin-Hai" }
    },
    "fortune": {
      "cn": "如履薄冰，慎行可化险为夷，忌骄矜大意，终见天行健不息。",
      "en": "Treading thin ice—caution turns risks to rewards, arrogance invites falls."
    }
  },
  {
    "date": "2025-04-13",
    "lunardate": {
      "cn": "二零二五年三月十六",
      "en": "March 16, 2025"
    },
    "hexagram": {
      "primary": { "cn": "风天小畜", "en": "Hexagram 9: Xiao Xu" },
      "changed": { "cn": "水天需", "en": "Hexagram 5: Xu" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "壬子", "en": "Ren-Zi" }
    },
    "fortune": {
      "cn": "密云不雨，蓄财待时而动，忌怨天尤人，终见云开月明。",
      "en": "Clouds gather without rain—wait patiently, and skies will clear in time."
    }
  },
  {
    "date": "2025-04-14",
    "lunardate": {
      "cn": "二零二五年三月十七",
      "en": "March 17, 2025"
    },
    "hexagram": {
      "primary": { "cn": "雷风恒", "en": "Hexagram 32: Heng" },
      "changed": { "cn": "地风升", "en": "Hexagram 46: Sheng" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "癸丑", "en": "Gui-Chou" }
    },
    "fortune": {
      "cn": "雷风相薄，持恒生财之道，忌朝三暮四，深耕自有岁稔。",
      "en": "Wind and thunder persist—steadfast effort wears down mountains."
    }
  },
  {
    "date": "2025-04-15",
    "lunardate": {
      "cn": "二零二五年三月十八",
      "en": "March 18, 2025"
    },
    "hexagram": {
      "primary": { "cn": "水火未济", "en": "Hexagram 64: Wei Ji" },
      "changed": { "cn": "山水蒙", "en": "Hexagram 4: Meng" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "甲寅", "en": "Jia-Yin" }
    },
    "fortune": {
      "cn": "火水未交，财机隐而未发，忌半途而废，守成终见柳暗花明。",
      "en": "Fire and water unmet—potential waits, while perseverance turns obstacles to gateways."
    }
  },
  {
    "date": "2025-04-16",
    "lunardate": {
      "cn": "二零二五年三月十九",
      "en": "March 19, 2025"
    },
    "hexagram": {
      "primary": { "cn": "天山遁", "en": "Hexagram 33: Dun" },
      "changed": { "cn": "天地否", "en": "Hexagram 12: Pi" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "乙卯", "en": "Yi-Mao" }
    },
    "fortune": {
      "cn": "高山隐退，舍小财避大耗，忌恋战贪功，退守反得海阔天空。",
      "en": "Retreat like mountain mists—small losses prevent greater ones, yielding expands horizons."
    }
  },
  {
    "date": "2025-04-17",
    "lunardate": {
      "cn": "二零二五年三月二十",
      "en": "March 20, 2025"
    },
    "hexagram": {
      "primary": { "cn": "雷水解", "en": "Hexagram 40: Xie" },
      "changed": { "cn": "地水师", "en": "Hexagram 7: Shi" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "丙辰", "en": "Bing-Chen" }
    },
    "fortune": {
      "cn": "春雷化雨，旧债宜清新生，忌执念困局，活水自来财源通。",
      "en": "Spring thunder breaks drought—clearing debts frees new streams of wealth to flow."
    }
  },
  {
    "date": "2025-04-18",
    "lunardate": {
      "cn": "二零二五年三月廿一",
      "en": "March 21, 2025"
    },
    "hexagram": {
      "primary": { "cn": "风火家人", "en": "Hexagram 37: Jia Ren" },
      "changed": { "cn": "天火同人", "en": "Hexagram 13: Tong Ren" }
    },
    "stems_branches": {
      "year": { "cn": "乙巳", "en": "Yi-Si" },
      "month": { "cn": "庚辰", "en": "Geng-Chen" },
      "day": { "cn": "丁巳", "en": "Ding-Si" }
    },
    "fortune": {
      "cn": "家宅生财，合作利市，忌内部分歧，自有众志成城之利。",
      "en": "Household harmony breeds wealth—united efforts multiply gains, discord drains them."
    }
  }
];
    
// Return the data
    res.status(200).json(fortunes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load fortune data' });
  }
}

