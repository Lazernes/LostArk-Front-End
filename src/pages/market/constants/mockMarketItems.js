import { ITEM_CATEGORY } from './itemCategory';

const CDN = 'https://cdn-lostark.game.onstove.com/';

export const mockMarketItems = [
  /* ================= 각인서 ================= */
  {
    itemId: 65200105,
    name: '유물 약자 무시 각인서',
    grade: 'RELIC',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/use/use_9_25.png`,
    category: ITEM_CATEGORY.ENGRAVING,

    currentPrice: 12500,
    priceChange: +800,
    changeRate: +6.8,
  },
  {
    itemId: 65200505,
    name: '유물 원한 각인서',
    grade: 'RELIC',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/use/use_9_25.png`,
    category: ITEM_CATEGORY.ENGRAVING,

    currentPrice: 9800,
    priceChange: -300,
    changeRate: -3.0,
  },
  {
    itemId: 65203905,
    name: '유물 아드레날린 각인서',
    grade: 'RELIC',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/use/use_9_25.png`,
    category: ITEM_CATEGORY.ENGRAVING,

    currentPrice: 15300,
    priceChange: +1200,
    changeRate: +8.5,
  },

  /* ================= 재련 재료 ================= */
  {
    itemId: 66102006,
    name: '운명의 파괴석',
    grade: 'UNCOMMON',
    bundleCount: 10,
    iconUrl: `${CDN}efui_iconatlas/use/use_12_88.png`,
    category: ITEM_CATEGORY.REFORGING,

    currentPrice: 420,
    priceChange: -20,
    changeRate: -4.5,
  },
  {
    itemId: 66102106,
    name: '운명의 수호석',
    grade: 'UNCOMMON',
    bundleCount: 10,
    iconUrl: `${CDN}efui_iconatlas/use/use_12_89.png`,
    category: ITEM_CATEGORY.REFORGING,

    currentPrice: 390,
    priceChange: +10,
    changeRate: +2.6,
  },
  {
    itemId: 66110225,
    name: '운명의 돌파석',
    grade: 'RARE',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/use/use_12_85.png`,
    category: ITEM_CATEGORY.REFORGING,

    currentPrice: 1850,
    priceChange: 0,
    changeRate: 0,
  },

  /* ================= 아크 그리드 ================= */
  {
    itemId: 67400003,
    name: '질서의 젬 : 안정 (영웅)',
    grade: 'EPIC',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/use/use_13_110.png`,
    category: ITEM_CATEGORY.ARK_GRID,

    currentPrice: 6200,
    priceChange: +400,
    changeRate: +6.9,
  },
  {
    itemId: 67410303,
    name: '혼돈의 젬 : 침식 (영웅)',
    grade: 'EPIC',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/use/use_13_114.png`,
    category: ITEM_CATEGORY.ARK_GRID,

    currentPrice: 5900,
    priceChange: -150,
    changeRate: -2.4,
  },

  /* ================= 보석 ================= */
  {
    itemId: 70000001,
    name: '10레벨 작열의 보석',
    grade: 'ANCIENT',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/use/use_12_115.png`,
    category: ITEM_CATEGORY.GEM,

    currentPrice: 135000,
    priceChange: +5000,
    changeRate: +3.8,
  },
  {
    itemId: 70000002,
    name: '7레벨 겁화의 보석',
    grade: 'LEGENDARY',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/use/use_12_102.png`,
    category: ITEM_CATEGORY.GEM,

    currentPrice: 128000,
    priceChange: -2000,
    changeRate: -1.5,
  },

  /* ================= 악세서리 ================= */
  {
    itemId: 90000001,
    name: '마주한 종언의 반지',
    grade: 'ANCIENT',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/acc/acc_21.png`,
    category: ITEM_CATEGORY.ACCESSORY,

    currentPrice: 250000,
    priceChange: +15000,
    changeRate: +6.4,
  },

  /* ================= 생활 ================= */
  {
    itemId: 6882101,
    name: '들꽃',
    grade: 'COMMON',
    bundleCount: 100,
    iconUrl: `${CDN}efui_iconatlas/use/use_8_46.png`,
    category: ITEM_CATEGORY.LIFESKILL,

    currentPrice: 85,
    priceChange: +5,
    changeRate: +6.2,
  },
  {
    itemId: 6882301,
    name: '목재',
    grade: 'COMMON',
    bundleCount: 100,
    iconUrl: `${CDN}efui_iconatlas/use/use_3_252.png`,
    category: ITEM_CATEGORY.LIFESKILL,

    currentPrice: 110,
    priceChange: -3,
    changeRate: -2.7,
  },

  /* ================= UI에 안 보이지만 ALL에는 포함 ================= */
  {
    itemId: 101061,
    name: '회복약',
    grade: 'COMMON',
    bundleCount: 1,
    iconUrl: `${CDN}efui_iconatlas/battle_item/battle_item_01_6.png`,
    category: ITEM_CATEGORY.HIDDEN,

    currentPrice: 120,
    priceChange: 0,
    changeRate: 0,
  },
];
