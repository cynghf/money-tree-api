export default async function handler(req, res) {
  try {
const fortunes = [
    {
      "date": "2025-04-01",
      "hexagram": {
        "primary": "水泽节 (Hexagram 60: Limitation)",
        "changed": "水天需 (Hexagram 5: Waiting)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "辛丑 (Xīn-Chǒu, Metal Ox)"
      },
      "advice": {
        "cn": "金水相生，土气受克，节制有度。宜理财规划，忌盲目扩张。",
        "en": "Metal generates Water, Earth restrained—moderation brings fortune. Plan finances carefully, avoid blind expansion."
      }
    },
    {
      "date": "2025-04-02",
      "hexagram": {
        "primary": "山火贲 (Hexagram 22: Grace)",
        "changed": "风火家人 (Hexagram 37: Family)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "壬寅 (Rén-Yín, Water Tiger)"
      },
      "advice": {
        "cn": "水木相生，火土受克，内外兼修。宜稳健投资，忌急躁冒进。",
        "en": "Water nourishes Wood, Fire and Earth controlled—balance inner and outer. Steady investments yield returns, avoid hasty actions."
      }
    },
    {
      "date": "2025-04-03",
      "hexagram": {
        "primary": "雷水解 (Hexagram 40: Release)",
        "changed": "地水师 (Hexagram 7: The Army)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "癸卯 (Guǐ-Mǎo, Water Rabbit)"
      },
      "advice": {
        "cn": "木火旺盛，水日受生，财机暗藏。宜整合资源，忌冲动投资。",
        "en": "Wood-Fire overpowers, Water day nurtures—wealth opportunities lurk. Consolidate resources, avoid impulsive investments."
      }
    },
    {
      "date": "2025-04-04",
      "hexagram": {
        "primary": "风山渐 (Hexagram 53: Development)",
        "changed": "雷山小过 (Hexagram 62: Small Exceeding)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "甲辰 (Jiǎ-Chén, Wood Dragon)"
      },
      "advice": {
        "cn": "木日临门，土制水生，循序渐进。宜长线布局，忌短期贪利。",
        "en": "Wood day arrives, Earth controls Water—gradual progress wins. Focus on long-term planning, avoid short-term greed."
      }
    },
    {
      "date": "2025-04-05",
      "hexagram": {
        "primary": "天火同人 (Hexagram 13: Fellowship)",
        "changed": "天山遁 (Hexagram 33: Retreat)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "乙巳 (Yǐ-Sì, Wood Snake)"
      },
      "advice": {
        "cn": "木旺成林，火助木势，同心协力。宜合作共赢，忌独断专行。",
        "en": "Abundant Wood, Fire strengthens—united efforts succeed. Seek win-win cooperation, avoid acting alone."
      }
    },
    {
      "date": "2025-04-06",
      "hexagram": {
        "primary": "水天需 (Hexagram 5: Waiting)",
        "changed": "风天小畜 (Hexagram 9: Small Accumulation)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "丙午 (Bǐng-Wǔ, Fire Horse)"
      },
      "advice": {
        "cn": "火日当旺，木受火生，耐心守候。宜蓄势待发，忌操之过急。",
        "en": "Fire day dominates, Wood flourishes—patience is key. Accumulate strength before acting, avoid haste."
      }
    },
    {
      "date": "2025-04-07",
      "hexagram": {
        "primary": "地风升 (Hexagram 46: Pushing Upward)",
        "changed": "风泽中孚 (Hexagram 61: Inner Truth)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "丁未 (Dīng-Wèi, Fire Goat)"
      },
      "advice": {
        "cn": "火土相生，木受助长，步步高升。宜进取开拓，忌安于现状。",
        "en": "Fire nourishes Earth, Wood rises—steady advancement. Pursue new opportunities, avoid complacency."
      }
    },
    {
      "date": "2025-04-08",
      "hexagram": {
        "primary": "雷天大壮 (Hexagram 34: Great Power)",
        "changed": "火天大有 (Hexagram 14: Great Possession)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "戊申 (Wù-Shēn, Earth Monkey)"
      },
      "advice": {
        "cn": "土金相生，木火受制，势能蓄积。宜稳固资产，忌贸然扩张。",
        "en": "Earth produces Metal, Wood and Fire controlled—power accumulates. Secure assets, avoid rash expansion."
      }
    },
    {
      "date": "2025-04-09",
      "hexagram": {
        "primary": "火地晋 (Hexagram 35: Progress)",
        "changed": "雷地豫 (Hexagram 16: Enthusiasm)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "己酉 (Jǐ-Yǒu, Earth Rooster)"
      },
      "advice": {
        "cn": "土金旺相，火气通达，步步晋升。宜把握机遇，忌犹豫不决。",
        "en": "Earth and Metal thrive, Fire flows—steady advancement. Seize opportunities, avoid indecision."
      }
    },
    {
      "date": "2025-04-10",
      "hexagram": {
        "primary": "火风鼎 (Hexagram 50: The Cauldron)",
        "changed": "山风蛊 (Hexagram 18: Decay)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "庚戌 (Gēng-Xū, Metal Dog)"
      },
      "advice": {
        "cn": "金土相助，火木相生，革故鼎新。宜改革创新，忌守旧不变。",
        "en": "Metal strengthens Earth, Fire and Wood interact—renewal time. Embrace innovation, avoid clinging to old patterns."
      }
    },
    {
      "date": "2025-04-11",
      "hexagram": {
        "primary": "山水蒙 (Hexagram 4: Youthful Folly)",
        "changed": "地水师 (Hexagram 7: The Army)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "辛亥 (Xīn-Hài, Metal Pig)"
      },
      "advice": {
        "cn": "金水相生，土克水势，谨慎求知。宜学习钻研，忌盲目投资。",
        "en": "Metal produces Water, Earth restricts—seek knowledge carefully. Study before investing, avoid blind ventures."
      }
    },
    {
      "date": "2025-04-12",
      "hexagram": {
        "primary": "地天泰 (Hexagram 11: Peace)",
        "changed": "水天需 (Hexagram 5: Waiting)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "壬子 (Rén-Zǐ, Water Rat)"
      },
      "advice": {
        "cn": "水旺生木，泰运当头，天地交泰。宜大胆开拓，忌固步自封。",
        "en": "Strong Water feeds Wood—supreme harmony prevails. Boldly explore opportunities, avoid self-limitation."
      }
    },
    {
      "date": "2025-04-13",
      "hexagram": {
        "primary": "泽天夬 (Hexagram 43: Breakthrough)",
        "changed": "风天小畜 (Hexagram 9: Small Accumulation)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "癸丑 (Guǐ-Chǒu, Water Ox)"
      },
      "advice": {
        "cn": "水土相战，金助水势，决断有利。宜果断行动，忌拖泥带水。",
        "en": "Water challenges Earth, Metal supports—decisive action benefits. Act decisively, avoid procrastination."
      }
    },
    {
      "date": "2025-04-14",
      "hexagram": {
        "primary": "天雷无妄 (Hexagram 25: Innocence)",
        "changed": "火雷噬嗑 (Hexagram 21: Biting Through)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "甲寅 (Jiǎ-Yín, Wood Tiger)"
      },
      "advice": {
        "cn": "木旺当令，火助木势，无妄生有。宜自然顺势，忌刻意追求。",
        "en": "Wood dominates, Fire supports—spontaneous gains appear. Follow natural trends, avoid forced pursuit."
      }
    },
    {
      "date": "2025-04-15",
      "hexagram": {
        "primary": "山天大畜 (Hexagram 26: Great Accumulation)",
        "changed": "天山遁 (Hexagram 33: Retreat)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "乙卯 (Yǐ-Mǎo, Wood Rabbit)"
      },
      "advice": {
        "cn": "木旺成林，相助相生，大畜丰盈。宜蓄积资源，忌立即消耗。",
        "en": "Wood abundance creates synergy—great accumulation forms. Store resources wisely, avoid immediate consumption."
      }
    },
    {
      "date": "2025-04-16",
      "hexagram": {
        "primary": "风雷益 (Hexagram 42: Increase)",
        "changed": "山雷颐 (Hexagram 27: Nourishment)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "丙辰 (Bǐng-Chén, Fire Dragon)"
      },
      "advice": {
        "cn": "火生土势，木受火扶，互益共赢。宜共创共赢，忌独利独行。",
        "en": "Fire strengthens Earth, supports Wood—mutual benefits thrive. Seek win-win scenarios, avoid selfish pursuits."
      }
    },
    {
      "date": "2025-04-17",
      "hexagram": {
        "primary": "泽山咸 (Hexagram 31: Influence)",
        "changed": "水山蹇 (Hexagram 39: Obstruction)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "丁巳 (Dīng-Sì, Fire Snake)"
      },
      "advice": {
        "cn": "火助木势，互感互通，财源顺畅。宜人际拓展，忌孤立己见。",
        "en": "Fire enhances Wood, mutual resonance—wealth flows smoothly. Expand connections, avoid isolated viewpoints."
      }
    },
    {
      "date": "2025-04-18",
      "hexagram": {
        "primary": "火水未济 (Hexagram 64: Before Completion)",
        "changed": "地水师 (Hexagram 7: The Army)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "戊午 (Wù-Wǔ, Earth Horse)"
      },
      "advice": {
        "cn": "土制水势，火土相生，临近成功。宜稳中求胜，忌急于求成。",
        "en": "Earth controls Water, Fire nourishes Earth—completion approaches. Seek steady progress, avoid rushing results."
      }
    },
    {
      "date": "2025-04-19",
      "hexagram": {
        "primary": "水泽节 (Hexagram 60: Limitation)",
        "changed": "泽地萃 (Hexagram 45: Gathering)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "己未 (Jǐ-Wèi, Earth Goat)"
      },
      "advice": {
        "cn": "土旺克水，财源受节，适度控制。宜节制开支，忌奢侈浪费。",
        "en": "Strong Earth restrains Water—finances need discipline. Control expenditure, avoid extravagance."
      }
    },
    {
      "date": "2025-04-20",
      "hexagram": {
        "primary": "地泽临 (Hexagram 19: Approach)",
        "changed": "坤为地 (Hexagram 2: The Receptive)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "庚申 (Gēng-Shēn, Metal Monkey)"
      },
      "advice": {
        "cn": "金旺生水，土金相助，财源将至。宜积极准备，忌静待不动。",
        "en": "Strong Metal produces Water, Earth supports—wealth approaches. Prepare actively, avoid passive waiting."
      }
    },
    {
      "date": "2025-04-21",
      "hexagram": {
        "primary": "风地观 (Hexagram 20: Contemplation)",
        "changed": "天地否 (Hexagram 12: Standstill)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "辛酉 (Xīn-Yǒu, Metal Rooster)"
      },
      "advice": {
        "cn": "金旺克木，需审时度势，观察为主。宜谨慎观察，忌贸然行动。",
        "en": "Strong Metal restrains Wood—careful observation needed. Watch market trends, avoid hasty moves."
      }
    },
    {
      "date": "2025-04-22",
      "hexagram": {
        "primary": "雷风恒 (Hexagram 32: Duration)",
        "changed": "雷天大壮 (Hexagram 34: Great Power)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "壬戌 (Rén-Xū, Water Dog)"
      },
      "advice": {
        "cn": "水克火势，木受水生，持久稳健。宜长期投资，忌短线操作。",
        "en": "Water controls Fire, nourishes Wood—sustainable stability. Focus on long-term investments, avoid short-term trades."
      }
    },
    {
      "date": "2025-04-23",
      "hexagram": {
        "primary": "泽火革 (Hexagram 49: Revolution)",
        "changed": "水火既济 (Hexagram 63: After Completion)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "癸亥 (Guǐ-Hài, Water Pig)"
      },
      "advice": {
        "cn": "水旺助木，革故鼎新，变中求财。宜创新突破，忌因循守旧。",
        "en": "Strong Water aids Wood—revolutionary change brings wealth. Embrace innovation, avoid outdated methods."
      }
    },
    {
      "date": "2025-04-24",
      "hexagram": {
        "primary": "震为雷 (Hexagram 51: Arousing)",
        "changed": "雷风恒 (Hexagram 32: Duration)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "甲子 (Jiǎ-Zǐ, Wood Rat)"
      },
      "advice": {
        "cn": "木水相生，震动而起，启迪财智。宜把握时机，忌犹豫不决。",
        "en": "Wood and Water harmonize—awakening brings financial insight. Seize timely opportunities, avoid hesitation."
      }
    },
    {
      "date": "2025-04-25",
      "hexagram": {
        "primary": "山火贲 (Hexagram 22: Grace)",
        "changed": "山天大畜 (Hexagram 26: Great Accumulation)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "乙丑 (Yǐ-Chǒu, Wood Ox)"
      },
      "advice": {
        "cn": "木旺生火，贲卦当道，财源装饰。宜注重细节，忌粗心大意。",
        "en": "Strong Wood feeds Fire—elegant appearance attracts wealth. Focus on details, avoid carelessness."
      }
    },
    {
      "date": "2025-04-26",
      "hexagram": {
        "primary": "天泽履 (Hexagram 10: Treading)",
        "changed": "风泽中孚 (Hexagram 61: Inner Truth)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "丙寅 (Bǐng-Yín, Fire Tiger)"
      },
      "advice": {
        "cn": "火助木势，谨慎履行，诚信为本。宜守信用，忌投机取巧。",
        "en": "Fire supports Wood—proceed carefully with integrity. Honor commitments, avoid shortcuts."
      }
    },
    {
      "date": "2025-04-27",
      "hexagram": {
        "primary": "泽雷随 (Hexagram 17: Following)",
        "changed": "地雷复 (Hexagram 24: Return)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "丁卯 (Dīng-Mǎo, Fire Rabbit)"
      },
      "advice": {
        "cn": "火旺生土，木火相助，随势而动。宜跟随大势，忌逆流而上。",
        "en": "Strong Fire produces Earth, aids Wood—follow the trend. Move with market currents, avoid swimming upstream."
      }
    },
    {
      "date": "2025-04-28",
      "hexagram": {
        "primary": "地山谦 (Hexagram 15: Modesty)",
        "changed": "风山渐 (Hexagram 53: Development)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "戊辰 (Wù-Chén, Earth Dragon)"
      },
      "advice": {
        "cn": "土旺克水，金水受制，谦虚致富。宜低调行事，忌张扬炫耀。",
        "en": "Strong Earth controls Water, Metal and Water restrained—modesty brings wealth. Stay humble, avoid showing off."
      }
    },
    {
      "date": "2025-04-29",
      "hexagram": {
        "primary": "风水涣 (Hexagram 59: Dispersion)",
        "changed": "水风井 (Hexagram 48: The Well)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "己巳 (Jǐ-Sì, Earth Snake)"
      },
      "advice": {
        "cn": "土木相战，水火不容，涣散之象。宜重整资源，忌分散投资。",
        "en": "Earth challenges Wood, Water and Fire clash—dispersion appears. Reorganize resources, avoid scattered investments."
      }
    },
    {
      "date": "2025-04-30",
      "hexagram": {
        "primary": "坎为水 (Hexagram 29: The Abysmal)",
        "changed": "水地比 (Hexagram 8: Holding Together)"
      },
      "stems_branches": {
        "year": "乙巳 (Yǐ-Sì, Wood Snake)",
        "month": "己卯 (Jǐ-Mǎo, Earth Rabbit)",
        "day": "庚午 (Gēng-Wǔ, Metal Horse)"
      },
      "advice": {
        "cn": "金火相克，水受金生，深藏不露。宜积蓄潜伏，忌急于求成。",
        "en": "Metal and Fire clash, Metal produces Water—hidden depths prevail. Build reserves quietly, avoid forcing results."
      }
    }
];

// Return the data
    res.status(200).json(fortunes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load fortune data' });
  }
}

