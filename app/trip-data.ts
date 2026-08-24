export type Photo = {
  url: string;
  alt: string;
  label: string;
  credit: string;
  source: string;
};

export type Stop = {
  time: string;
  title: string;
  detail: string;
  map?: string;
};

export type Restaurant = {
  name: string;
  cuisine: string;
  rating: string;
  reviews: string;
  budget: string;
  budgetNote?: string;
  distance: string;
  note: string;
  map: string;
  source: string;
  meal?: string;
};

export type OptionalExperience = {
  title: string;
  subtitle: string;
  detail: string;
  duration: string;
  map: string;
  photo: Photo;
};

export type TravelDay = {
  day: number;
  date: string;
  weekday: string;
  region: string;
  title: string;
  english: string;
  subtitle: string;
  hotel: string;
  hotelMap: string;
  hotelDetail: string;
  flight?: string;
  flightDetail?: string;
  transfer?: string;
  note?: string;
  flag?: string;
  photos: Photo[];
  stops: Stop[];
  restaurants: Restaurant[];
  optional?: OptionalExperience[];
  pace: string;
  chapter: "巴厘岛" | "科莫多" | "婆罗摩" | "北巴厘" | "AYANA";
};

export const photos = {
  menjerite: {
    url: "/photos/menjerite.webp",
    alt: "门捷列特岛木栈桥与清澈海水实景",
    label: "门捷列特岛 · Menjerite",
    credit: "Traveloka · Journey Under The Water",
    source: "https://www.traveloka.com/en-id/activities/indonesia/product/journey-under-the-water-by-ayana-lako-taka-2-hour-tour-2000022407440",
  },
  kelor: {
    url: "/photos/kelor.webp",
    alt: "科莫多克洛尔岛白沙滩与翠绿山丘实景",
    label: "克洛尔岛 · Kelor",
    credit: "Komodo Luxury · Kelor Island",
    source: "https://www.komodoluxury.com/blog/all-you-need-to-know-visiting-kelor-island-labuan-bajo/",
  },
  kalong: {
    url: "/photos/kalong.webp",
    alt: "卡隆岛日落时蝙蝠飞越天空实景",
    label: "卡隆岛 · 蝙蝠日落",
    credit: "Adventure Indonesia · Kalong Island",
    source: "https://adventureindonesia.com/magical-kalong-island-trip/",
  },
  padar: {
    url: "/photos/padar.webp",
    alt: "科莫多国家公园帕达尔岛真实海湾摄影",
    label: "帕达尔岛 · 科莫多",
    credit: "Unsplash · Padar Island",
    source: "https://unsplash.com/photos/an-aerial-view-of-a-large-body-of-water-kUjkV_NKczA",
  },
  pink: {
    url: "/photos/pink-beach.webp",
    alt: "科莫多国家公园粉色沙滩的真实摄影",
    label: "粉色沙滩 · Komodo",
    credit: "Unsplash · Pink Beach",
    source: "https://unsplash.com/photos/pink-beach-with-clear-water-under-a-blue-sky-4t8ar23MmJs",
  },
  dragon: {
    url: "/photos/komodo-dragon.webp",
    alt: "科莫多巨蜥的真实摄影",
    label: "科莫多巨蜥",
    credit: "Unsplash · Komodo dragon",
    source: "https://unsplash.com/photos/close-up-of-a-komodo-dragons-head-aoym5CJI_lc",
  },
  takaMakassar: {
    url: "/photos/taka-makassar.webp",
    alt: "科莫多塔卡望加锡月牙形白色沙洲实景",
    label: "月牙沙滩 · Taka Makassar",
    credit: "MyBaliTrips · Taka Makassar",
    source: "https://mybalitrips.com/fr/places/taka-makassar/",
  },
  manta: {
    url: "/photos/manta-point.webp",
    alt: "科莫多 Manta Point 浮潜与魔鬼鱼实景",
    label: "曼塔点 · Manta Point",
    credit: "Komodo Luxury · Manta Point",
    source: "https://www.komodoluxury.com/destination/labuan-bajo/",
  },
  kanawa: {
    url: "/photos/kanawa.webp",
    alt: "卡纳瓦岛白沙滩、栈桥与碧蓝海水实景",
    label: "卡纳瓦岛 · Kanawa",
    credit: "Trip.com Moments · Kanawa Island",
    source: "https://www.trip.com/moments/detail/komodo-national-park-14378-10904571/",
  },
  bromo: {
    url: "/photos/bromo.webp",
    alt: "东爪哇婆罗摩火山与晨雾的真实摄影",
    label: "婆罗摩火山 · 东爪哇",
    credit: "Unsplash · Mount Bromo",
    source: "https://unsplash.com/photos/mount-bromo-with-clouds-around-it-verlQNDfi0Y",
  },
  bromoCrater: {
    url: "/photos/bromo-crater.webp",
    alt: "婆罗摩火山口烟雾的真实摄影",
    label: "婆罗摩火山口",
    credit: "Unsplash · Mount Bromo",
    source: "https://unsplash.com/photos/mount-bromo-volcano-with-smoke-plume-5ZsI-rFsoHU",
  },
  kelingking: {
    url: "/photos/kelingking.webp",
    alt: "佩尼达岛精灵坠崖与海岸的真实摄影",
    label: "精灵坠崖 · Nusa Penida",
    credit: "Unsplash · Kelingking Beach",
    source: "https://unsplash.com/photos/aerial-photography-of-people-at-the-beach-LO14F1Yj0j0",
  },
  brokenBeach: {
    url: "/photos/broken-beach.webp",
    alt: "佩尼达岛破碎沙滩天然石拱与海湾实景",
    label: "破碎沙滩 · Broken Beach",
    credit: "Traveloka · Nusa Penida guide",
    source: "https://www.traveloka.com/en-my/explore/destination/what-to-do-in-nusa-penida-acc/227362",
  },
  angelsBillabong: {
    url: "/photos/angels-billabong.webp",
    alt: "佩尼达岛天神浴池天然潮汐池实景",
    label: "天神浴池 · Angel's Billabong",
    credit: "Go Guides · Angel's Billabong",
    source: "https://www.hotels.com/go/indonesia/angels-billabong",
  },
  dolphin: {
    url: "/photos/lovina-dolphins.webp",
    alt: "罗威纳海域乘传统船出海观海豚实景",
    label: "罗威纳 · 海豚日出",
    credit: "Bali Holiday Secrets · Lovina",
    source: "https://www.baliholidaysecrets.com/lovina-guide/",
  },
  uluwatu: {
    url: "/photos/uluwatu.webp",
    alt: "乌鲁瓦图海岸与悬崖的真实摄影",
    label: "乌鲁瓦图海岸",
    credit: "Unsplash · Uluwatu",
    source: "https://unsplash.com/photos/brown-and-green-rock-formation-beside-blue-sea-under-blue-and-white-cloudy-sky-during-daytime-ht60XVGJfRM",
  },
  temple: {
    url: "/photos/uluwatu-temple.webp",
    alt: "乌鲁瓦图悬崖寺庙日落的真实摄影",
    label: "乌鲁瓦图日落",
    credit: "Unsplash · Uluwatu Temple",
    source: "https://unsplash.com/photos/sunset-over-a-cliff-with-a-temple-YqAwXI4AxlM",
  },
  bali: {
    url: "/photos/bali.webp",
    alt: "巴厘岛海岛与热带风景参考照片",
    label: "巴厘岛 · 海岛印象",
    credit: "Unsplash · Bali travel",
    source: "https://unsplash.com/s/photos/bali",
  },
  jimbaran: {
    url: "/photos/jimbaran.webp",
    alt: "巴厘岛金巴兰海滩日落实景",
    label: "金巴兰海滩 · 日落",
    credit: "品冠旅游 · Jimbaran Beach",
    source: "https://www.pktravel.com.tw/products/group/mold-new/DPS24CB0011",
  },
  gaingMas: {
    url: "/photos/gaing-mas.webp",
    alt: "Gaing Mas Jimbaran Villas 私人泳池实景",
    label: "Gaing Mas · 私人泳池别墅",
    credit: "Expedia · Gaing Mas Jimbaran Villas",
    source: "https://www.expedia.com/Jimbaran-Hotels-Gaing-Mas-Jimbaran-Villas-By-Gaing-Mas-Group.h15673181.Hotel-Information",
  },
  ayanaPool: {
    url: "/photos/ayana-pool.webp",
    alt: "AYANA Bali 临海无边泳池实景",
    label: "AYANA Bali · 临海泳池",
    credit: "AYANA Bali Official · Pools",
    source: "https://www.ayana.com/media-center/blog/australians-favorite-swim-relax-sip/",
  },
  ayanaAerial: {
    url: "/photos/ayana-aerial.webp",
    alt: "AYANA Bali 悬崖度假村与泳池实景",
    label: "AYANA Bali · 悬崖度假村",
    credit: "Luxury Escapes · AYANA Bali",
    source: "https://luxuryescapes.com/inspiration/ayana-bali/",
  },
  kubuBeach: {
    url: "/photos/kubu-beach.webp",
    alt: "AYANA Bali Kubu Beach 悬崖海滩实景",
    label: "Kubu Beach · AYANA",
    credit: "TravelOnline · Kubu Beach",
    source: "https://www.travelonline.com/packages/bali/ayana-villas-bali-2445",
  },
  rockBar: {
    url: "/photos/rock-bar.webp",
    alt: "AYANA Bali Rock Bar 悬崖海景实景",
    label: "Rock Bar · 悬崖日落",
    credit: "Check in Bali+ · Rock Bar",
    source: "https://checkinnbaliplus.com/ayana-resort-the-rock-bar/",
  },
} satisfies Record<string, Photo>;

const jimbaranDinner: Restaurant[] = [
  {
    name: "Kayumanis Resto Jimbaran",
    cuisine: "印尼菜 · 花园庭院",
    rating: "4.7",
    reviews: "1,114 条评价",
    budget: "IDR 250k–450k / 人",
    budgetNote: "用餐预算估算，非官方固定套餐价",
    distance: "金巴兰 · 车程约 10–15 分钟",
    note: "适合抵达当晚慢慢吃一顿巴厘风味正餐。",
    map: "Kayumanis Resto Jimbaran Bali",
    source: "https://www.tripadvisor.com/Restaurant_Review-g297696-d10748732-Reviews-Kayumanis_Resto_Jimbaran-Jimbaran_South_Kuta_Badung_Regency_Bali.html",
  },
  {
    name: "Cuca Restaurant",
    cuisine: "创意 Tapas · 预约推荐",
    rating: "4.7",
    reviews: "3,661 条评价",
    budget: "IDR 960k++ / 人",
    budgetNote: "官网 Chef Tasting Menu 公示价；另有单点",
    distance: "金巴兰 · 车程约 10–15 分钟",
    note: "适合想把第一顿晚餐认真对待的人；品鉴套餐建议预订。",
    map: "Cuca Restaurant Jimbaran",
    source: "https://www.cucabali.com/all-menu/",
  },
  {
    name: "Sundara",
    cuisine: "海滨西餐 · 日落景观",
    rating: "4.6",
    reviews: "1,447 条评价",
    budget: "IDR 450k–900k / 人",
    budgetNote: "用餐预算估算，实际取决于菜品与饮品",
    distance: "金巴兰海湾 · 车程约 15 分钟",
    note: "四季度假村海边餐厅，适合看日落或庆祝第一晚。",
    map: "Sundara Four Seasons Jimbaran Bali",
    source: "https://www.tripadvisor.com/Restaurant_Review-g297696-d3905955-Reviews-Sundara-Jimbaran_South_Kuta_Badung_Regency_Bali.html",
  },
];

const komodoResortDinner: Restaurant[] = [
  {
    name: "RINCA Restaurant",
    cuisine: "国际料理 · AYANA 酒店内",
    rating: "4.9",
    reviews: "347 条评价",
    budget: "IDR 250k–450k / 人",
    budgetNote: "根据公开菜价估算，实际以当日菜单为准",
    distance: "酒店内 · 可直接步行",
    note: "不用出酒店，适合半日出海或一整天跳岛后轻松用餐。",
    map: "RINCA Restaurant AYANA Komodo Waecicu Beach",
    source: "https://www.tripadvisor.com/Restaurant_Review-g1777483-d15147319-Reviews-Rinca_Restaurant-Labuan_Bajo_Flores_East_Nusa_Tenggara.html",
  },
  {
    name: "UNIQUE Rooftop Bar",
    cuisine: "屋顶酒吧 · 日落简餐",
    rating: "5.0",
    reviews: "85 条评价",
    budget: "IDR 200k–400k / 人",
    budgetNote: "按简餐与饮品估算",
    distance: "酒店内 · 顶楼",
    note: "适合在酒店内继续看 Waecicu 海湾日落。",
    map: "UNIQUE Rooftop Bar AYANA Komodo",
    source: "https://www.tripadvisor.com/Restaurant_Review-g1777483-d15147320-Reviews-UNIQUE_Rooftop_Bar-Labuan_Bajo_Flores_East_Nusa_Tenggara.html",
  },
  {
    name: "La Cucina",
    cuisine: "意大利菜 · 披萨 / 意面",
    rating: "4.3",
    reviews: "1,145 条评价",
    budget: "IDR 120k–250k / 人",
    budgetNote: "公开资料显示披萨约 90k 起、意面约 100k–150k",
    distance: "Labuan Bajo 市区 · 车程约 15–25 分钟",
    note: "不想在酒店用餐时的轻松选择，需要安排往返接送。",
    map: "La Cucina Labuan Bajo",
    source: "https://www.tripadvisor.com/Restaurant_Review-g1777483-d4471445-Reviews-La_Cucina-Labuan_Bajo_Flores_East_Nusa_Tenggara.html",
  },
];

const komodoTownDinner: Restaurant[] = [
  {
    name: "Happy Banana Komodo",
    cuisine: "日料 · 寿司 / Poke Bowl",
    rating: "4.6",
    reviews: "1,218 条评价",
    budget: "IDR 150k–300k / 人",
    budgetNote: "用餐预算估算",
    distance: "Labuan Bajo 市区 · 车程约 15–25 分钟",
    note: "结束跳岛后想换换口味时很合适。",
    map: "Happy Banana Komodo Labuan Bajo",
    source: "https://www.tripadvisor.com/Restaurant_Review-g1777483-d8448989-Reviews-Happy_Banana_Komodo-Labuan_Bajo_Flores_East_Nusa_Tenggara.html",
  },
  {
    name: "Taman Laut Handayani",
    cuisine: "当地海鲜 · 印尼风味",
    rating: "4.5",
    reviews: "约 190 条评价",
    budget: "IDR 150k–300k / 人",
    budgetNote: "用餐预算估算，海鲜按品类另计",
    distance: "Labuan Bajo 市区 · 车程约 20 分钟",
    note: "适合看海后继续吃新鲜当地海鲜。",
    map: "Taman Laut Handayani Seafood Restaurant Labuan Bajo",
    source: "https://www.tripadvisor.com/Restaurant_Review-g1777483-d21355997-Reviews-or15-Taman_Laut_Handayani_Seafood_Restaurant-Labuan_Bajo_Flores_East_Nusa_Teng.html",
  },
  komodoResortDinner[0],
];

const bromoDinner: Restaurant[] = [
  {
    name: "Teras Bromo",
    cuisine: "东爪哇料理 · 山景露台",
    rating: "4.8",
    reviews: "约 116 条评价",
    budget: "IDR 100k–220k / 人",
    budgetNote: "公开菜单单品约 32k–55k 起，据此估算一餐",
    distance: "Tosari 区域 · 车程约 15–25 分钟",
    note: "景观更好；山路用餐务必确认返程车和营业时间。",
    map: "Teras Bromo Plataran Bromo",
    source: "https://www.tripadvisor.com/Restaurant_Review-g297711-d12187382-Reviews-Teras_Bromo-Pasuruan_East_Java_Java.html",
  },
  {
    name: "Frestro Hillside",
    cuisine: "酒店内餐厅 · 印尼 / 国际料理",
    rating: "酒店餐厅",
    reviews: "独立评分待核实",
    budget: "IDR 100k–250k / 人",
    budgetNote: "预算估算，菜单以酒店当日为准",
    distance: "Jambuluwuk Bromo Resort 酒店内",
    note: "次日凌晨出发追日出，住店用餐最省时间。",
    map: "Frestro Hillside Jambuluwuk Bromo Resort",
    source: "https://www.booking.com/hotel/id/jambuluwuk-bromo-resorts.html",
  },
];

const kutaDinner: Restaurant[] = [
  {
    name: "Sands Restaurant",
    cuisine: "海滨西餐 · 海景",
    rating: "4.7",
    reviews: "246 条评价",
    budget: "IDR 200k–400k / 人",
    budgetNote: "用餐预算估算",
    distance: "Bintang Bali 周边 · 步行约 9 分钟",
    note: "适合火山行程结束、飞回巴厘岛后的轻松晚餐。",
    map: "Sands Restaurant The Anvaya Beach Resort Bali",
    source: "https://www.tripadvisor.com/RestaurantsNear-g297697-d307567-Bintang_Bali_Resort-Kuta_Kuta_District_Badung_Regency_Bali.html",
  },
  {
    name: "Queen’s of India Kuta",
    cuisine: "印度料理 · 咖喱 / 烤饼",
    rating: "4.9",
    reviews: "约 215 条评价",
    budget: "IDR 150k–300k / 人",
    budgetNote: "用餐预算估算",
    distance: "Kartika Plaza · 车程约 5–10 分钟",
    note: "想吃热乎的咖喱和烤饼时很稳妥。",
    map: "Queen's Of India Kuta",
    source: "https://www.tripadvisor.co/Restaurant_Review-g562690-d27532391-Reviews-Queen_s_Of_India_Kuta-Tuban_Kuta_Kuta_District_Badung_Regency_Bali.html",
  },
  {
    name: "La Brasserie",
    cuisine: "酒店餐厅 · 国际 / 本地料理",
    rating: "酒店餐厅",
    reviews: "独立评分待核实",
    budget: "IDR 150k–300k / 人",
    budgetNote: "预算估算，菜单以酒店当日为准",
    distance: "Bintang Bali Resort 酒店内",
    note: "航班或送机延误时可直接在酒店用餐。",
    map: "La Brasserie Bintang Bali Resort Kuta",
    source: "https://bintang-bali-hotel.com/dining/",
  },
];

const lovinaDinner: Restaurant[] = [
  {
    name: "Secret Garden Restaurant",
    cuisine: "当地料理 · 花园餐厅",
    rating: "4.8",
    reviews: "1,286 条评价",
    budget: "IDR 100k–220k / 人",
    budgetNote: "根据公开菜单和当地餐饮水平估算",
    distance: "Anturan / Lovina · 车程约 10–15 分钟",
    note: "口碑很好，适合抵达罗威纳后吃一顿安静的正餐。",
    map: "Secret Garden Restaurant Lovina Bali",
    source: "https://www.tripadvisor.com/Restaurant_Review-g1600236-d8368942-Reviews-or150-Secret_Garden_Restaurant-Anturan_Lovina_Beach_Buleleng_District_Buleleng_R.html",
  },
  {
    name: "Semina Bar & Restaurant",
    cuisine: "海鲜 · 印尼 / 亚洲菜",
    rating: "4.7",
    reviews: "145 条评价",
    budget: "IDR 100k–220k / 人",
    budgetNote: "用餐预算估算",
    distance: "Anturan / Lovina · 车程约 10–15 分钟",
    note: "适合吃烤鱼、海鲜和当地家常菜。",
    map: "Semina Bar Restaurant Lovina",
    source: "https://www.tripadvisor.com/Restaurants-g1599559-Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html",
  },
  {
    name: "Spice Beach Club",
    cuisine: "海边餐厅 · 印尼 / 西餐",
    rating: "4.3",
    reviews: "1,263 条评价",
    budget: "IDR 150k–300k / 人",
    budgetNote: "用餐预算估算，官网未公开统一人均",
    distance: "Kaliasem 海边 · 车程约 15–20 分钟",
    note: "如果当天抵达不太晚，可在海边吃饭看夜色。",
    map: "Spice Beach Club Lovina Bali",
    source: "https://www.tripadvisor.com/Restaurant_Review-g1600250-d3721695-Reviews-Spice_Beach_Club-Kaliasem_Lovina_Beach_Buleleng_District_Buleleng_Regency_Bali.html",
  },
];

const ayanaDinner: Restaurant[] = [
  {
    name: "KISIK Seafood & Grill",
    cuisine: "海滩海鲜 · 烛光晚餐",
    rating: "4.7",
    reviews: "1,077 条评价",
    budget: "IDR 500k–1,000k / 人",
    budgetNote: "用餐预算估算，海鲜和酒水另计",
    distance: "AYANA 园区内 · 沙滩区域",
    note: "最适合安排一顿正式海边晚餐，建议预约。",
    map: "KISIK Seafood Grill AYANA Bali",
    source: "https://www.tripadvisor.com/Restaurant_Review-g297696-d2085565-Reviews-Kisik_Seafood_Grill-Jimbaran_South_Kuta_Badung_Regency_Bali.html",
  },
  {
    name: "Sami Sami",
    cuisine: "意大利菜 · 海景露台",
    rating: "4.7",
    reviews: "约 882 条评价",
    budget: "IDR 300k–600k / 人",
    budgetNote: "用餐预算估算",
    distance: "AYANA 园区内 · 海景餐厅",
    note: "意面与披萨更轻松，适合入住 AYANA 第一晚。",
    map: "Sami Sami Restaurant AYANA Bali",
    source: "https://www.tripadvisor.com/Restaurant_Review-g297696-d3454615-Reviews-Sami_Sami-Jimbaran_South_Kuta_Badung_Regency_Bali.html",
  },
  {
    name: "Kampoeng Bali",
    cuisine: "巴厘文化 · 晚餐与表演",
    rating: "4.9",
    reviews: "497 条评价",
    budget: "IDR 450k–850k / 人",
    budgetNote: "用餐预算估算，演出日期与套餐需确认",
    distance: "AYANA 园区内 · RIMBA 区域",
    note: "适合体验巴厘传统晚餐与表演，需提前问清营业日。",
    map: "Kampoeng Bali AYANA RIMBA",
    source: "https://www.tripadvisor.com/Restaurant_Review-g297696-d8523032-Reviews-Kampoeng_Bali-Jimbaran_South_Kuta_Badung_Regency_Bali.html",
  },
];

const ayanaDayDining: Restaurant[] = [
  {
    ...ayanaDinner[1],
    meal: "午餐 / 晚餐",
  },
  {
    ...ayanaDinner[0],
    meal: "晚餐",
  },
  {
    name: "Rock Bar",
    cuisine: "悬崖酒吧 · 日落简餐",
    rating: "4.3",
    reviews: "7,681 条评价",
    budget: "IDR 250k–500k / 人",
    budgetNote: "按饮品与简餐估算",
    distance: "AYANA 园区内 · 悬崖海岸",
    note: "更适合日落时段；座位政策以酒店当天安排为准。",
    map: "Rock Bar AYANA Bali",
    source: "https://www.tripadvisor.com/Restaurant_Review-g297696-d1935354-Reviews-Rock_Bar-Jimbaran_South_Kuta_Badung_Regency_Bali.html",
    meal: "日落 / 晚餐",
  },
  {
    ...jimbaranDinner[2],
    meal: "午餐 / 晚餐",
  },
];

const resortOptions: OptionalExperience[] = [
  {
    title: "Kubu Beach",
    subtitle: "酒店海滩 · 慢节奏",
    detail: "在 AYANA 自有海滩区域散步、看海；开放情况和接驳方式以酒店当天通知为准。",
    duration: "1.5–2.5 小时",
    map: "Kubu Beach AYANA Bali",
    photo: photos.kubuBeach,
  },
  {
    title: "泳池巡游",
    subtitle: "度假村内 · 自由切换",
    detail: "按当天心情选择可使用的泳池；不同酒店楼栋与房型的设施权限可能有区别。",
    duration: "2–3 小时",
    map: "AYANA Resort Bali pools",
    photo: photos.ayanaPool,
  },
  {
    title: "Rock Bar 日落",
    subtitle: "悬崖视角 · 建议提前到",
    detail: "按酒店实际预约和入场规则安排；以日落观景和简餐为主。",
    duration: "1.5–2 小时",
    map: "Rock Bar AYANA Bali",
    photo: photos.rockBar,
  },
];

const nearbyOptions: OptionalExperience[] = [
  {
    title: "乌鲁瓦图悬崖",
    subtitle: "海岸线 · 日落半日",
    detail: "适合下午出发，安排悬崖观景；寺庙着装与凯卡克舞时间请以当天通知为准。",
    duration: "3–5 小时",
    map: "Uluwatu Temple Bali",
    photo: photos.uluwatu,
  },
  {
    title: "金巴兰海边晚餐",
    subtitle: "海滩散步 · 海鲜",
    detail: "从酒店出发前往金巴兰海湾，傍晚沿海滩散步，再选择口碑更稳的餐厅。",
    duration: "2–3 小时",
    map: "Jimbaran Beach Bali",
    photo: photos.jimbaran,
  },
  {
    title: "南部海岸轻探索",
    subtitle: "海滩 · 咖啡馆",
    detail: "按当天浪况和天气选择南部海岸；不用把自由日安排成赶场。",
    duration: "2–4 小时",
    map: "Melasti Beach Ungasan Bali",
    photo: photos.uluwatu,
  },
];

export const days: TravelDay[] = [
  {
    day: 1, date: "09.26", weekday: "DAY 01", region: "上海 → 巴厘岛", title: "落地后的第一缕海风", english: "THE ARRIVAL",
    subtitle: "抵达登巴萨后直接前往金巴兰别墅，第一晚不赶行程。",
    hotel: "Gaing Mas Jimbaran Villas", hotelMap: "Gaing Mas Jimbaran Villas by Gaing Mas Group",
    hotelDetail: "金巴兰 · 泳池别墅", flightDetail: "上海出发航班待确认", transfer: "机场 → 酒店，按航班时间安排接机",
    photos: [photos.gaingMas, photos.jimbaran],
    stops: [
      { time: "待定", title: "上海出发 · 飞往登巴萨", detail: "原始表格未提供航班号和抵达时间，确认后再补录。", map: "Ngurah Rai International Airport Bali" },
      { time: "抵达后", title: "机场接机 · 入住金巴兰", detail: "前往 Gaing Mas Jimbaran Villas，先办理入住和休息。" },
      { time: "傍晚", title: "附近散步 · 选择晚餐", detail: "根据实际落地时间选择酒店周边餐厅，无需跨区奔波。", map: "Jimbaran Beach Bali" },
    ],
    restaurants: jimbaranDinner, pace: "轻松抵达", chapter: "巴厘岛",
  },
  {
    day: 2, date: "09.27", weekday: "DAY 02", region: "巴厘岛 → 科莫多", title: "海岛浮潜与蝙蝠日落", english: "ISLANDS AT DUSK",
    subtitle: "上午飞抵 Labuan Bajo，享用午餐后参加拼船英文导游快艇日落小团。",
    hotel: "AYANA Komodo Waecicu Beach", hotelMap: "AYANA Komodo Waecicu Beach",
    hotelDetail: "Waecicu 海湾 · 豪华海景房", flight: "QZ642", flightDetail: "09:00 → 10:10 · 巴厘岛 → Labuan Bajo",
    photos: [photos.menjerite, photos.kelor, photos.kalong],
    stops: [
      { time: "09:00", title: "巴厘岛起飞", detail: "QZ642，预计 10:10 抵达 Labuan Bajo。", map: "Komodo Airport Labuan Bajo" },
      { time: "中午", title: "接机 · 酒店午餐与休整", detail: "按航班抵达时间安排专车接机，前往 AYANA Komodo 办理入住并享用午餐。", map: "AYANA Komodo Waecicu Beach" },
      { time: "14:30", title: "酒店接人 · 前往码头", detail: "14:30–15:00 从酒店出发，前往码头登上拼船英文导游快艇。" },
      { time: "15:15", title: "门捷列特岛 · 抵达", detail: "到达 Menjerite Island，沿海湾木栈桥进入第一处海岛站。", map: "Menjerite Island Komodo" },
      { time: "15:30", title: "门捷列特岛 · 浮潜", detail: "在清澈浅海浮潜游玩，注意听从船员对水流与时间的安排。", map: "Menjerite Island Komodo" },
      { time: "16:30", title: "出发前往克洛尔岛", detail: "离开门捷列特岛，继续乘快艇前往 Kelor Island。" },
      { time: "16:45", title: "克洛尔岛 · 自由体验", detail: "抵达后可登高、浮潜或在沙滩放松，按体力自由选择。", map: "Kelor Island Labuan Bajo" },
      { time: "17:30", title: "出发前往卡隆岛", detail: "离开克洛尔岛，前往当天最后一站 Kalong Island。" },
      { time: "17:45", title: "卡隆岛 · 蝙蝠与日落", detail: "在红树林海湾欣赏成群蝙蝠飞越暮色的壮观景象。", map: "Kalong Island Komodo" },
      { time: "19:00", title: "行程结束 · 返回酒店", detail: "司机送回 AYANA Komodo，晚上优先在酒店内用餐。" },
    ],
    restaurants: komodoResortDinner, pace: "下午出海", chapter: "科莫多",
    note: "拼船英文导游快艇日落团：门捷列特岛 + 克洛尔岛 + 卡隆岛。海况与到离时间以当天船方安排为准。",
  },
  {
    day: 3, date: "09.28", weekday: "DAY 03", region: "科莫多国家公园", title: "帕达尔、巨蜥与粉色海岸", english: "THE KOMODO EXPEDITION",
    subtitle: "快艇英文小团一日游：帕达尔、科莫多岛、粉色沙滩、月牙沙洲、曼塔点与卡纳瓦岛。",
    hotel: "AYANA Komodo Waecicu Beach", hotelMap: "AYANA Komodo Waecicu Beach",
    hotelDetail: "Waecicu 海湾 · 继续入住", transfer: "酒店 → 码头 → 国家公园 → AYANA",
    photos: [photos.padar, photos.dragon, photos.pink, photos.takaMakassar, photos.manta, photos.kanawa],
    stops: [
      { time: "05:30", title: "酒店接人 · 码头登船", detail: "司机从 AYANA Komodo 接人前往码头，乘快艇约 45 分钟抵达帕达尔岛。" },
      { time: "07:30", title: "帕达尔岛 · 观景徒步", detail: "徒步约 30 分钟登顶，俯瞰三湾海岸；建议穿防滑鞋并带足饮水。", map: "Padar Island Komodo National Park" },
      { time: "10:00", title: "科莫多岛 · 寻找科莫多龙", detail: "跟随国家公园向导徒步游览，保持安全距离，不单独靠近野生动物。", map: "Komodo Island National Park" },
      { time: "12:00", title: "粉色沙滩 · 浮潜与拍照", detail: "在 Pink Beach 游泳、浮潜和拍照，停留时长视当天潮汐安排。", map: "Pink Beach Komodo National Park" },
      { time: "13:30", title: "月牙沙滩 · 沙洲戏水", detail: "抵达 Taka Makassar 月牙形沙洲，在浅海戏水、浮潜和拍照。", map: "Taka Makassar Komodo" },
      { time: "14:00", title: "曼塔点 · 浮潜", detail: "前往 Manta Point 浮潜，可能遇见魔鬼鱼；野生动物出现不能保证。", map: "Manta Point Komodo National Park" },
      { time: "15:00", title: "卡纳瓦岛 · 登岛徒步", detail: "抵达 Kanawa Island，上岛徒步游览，在清澈海湾为一日快艇行程收尾。", map: "Kanawa Island Labuan Bajo" },
      { time: "16:00", title: "返回码头 · 送回酒店", detail: "回到 Labuan Bajo 码头，由司机送回 AYANA Komodo 继续入住。" },
    ],
    restaurants: komodoTownDinner, pace: "全天出海", chapter: "科莫多",
    note: "当天包含徒步、海岛与多次下水活动。实际停靠顺序、浮潜时间和动物观赏均以海况及船方安排为准。",
  },
  {
    day: 4, date: "09.29", weekday: "DAY 04", region: "科莫多 / 泗水 → 婆罗摩", title: "驶向爪哇的云上火山", english: "INTO EAST JAVA",
    subtitle: "衔接泗水与婆罗摩山地酒店，提前休息，为次日凌晨日出留出体力。",
    hotel: "Jambuluwuk Bromo Resort", hotelMap: "Jambuluwuk Bromo Resort",
    hotelDetail: "婆罗摩山地区域", flightDetail: "前往泗水的航班及抵达时间待确认", transfer: "泗水机场 → 婆罗摩山地区域",
    photos: [photos.bromo, photos.bromoCrater],
    stops: [
      { time: "待定", title: "飞往 / 汇合于泗水", detail: "原截图列出部分旅客早班机待定，航班与接机时间需根据实际预订确认。", map: "Juanda International Airport Surabaya" },
      { time: "抵达后", title: "专车前往婆罗摩酒店", detail: "进入山地区域后车程可能受天气和路况影响。", map: "Jambuluwuk Bromo Resort" },
      { time: "傍晚", title: "入住 · 提前吃晚餐", detail: "第二天接近凌晨出发，建议早吃、早休息。" },
    ],
    restaurants: bromoDinner, pace: "转场休整", chapter: "婆罗摩",
    note: "爪哇 / 泗水采用 WIB，当地时间比巴厘岛、科莫多的 WITA 晚 1 小时。",
  },
  {
    day: 5, date: "09.30", weekday: "DAY 05", region: "婆罗摩 → 泗水 → 巴厘岛", title: "凌晨四点，等火山醒来", english: "THE BROMO SUNRISE",
    subtitle: "深夜出发追婆罗摩日出，穿过火山沙海，下午飞回巴厘岛。",
    hotel: "Bintang Bali Resort", hotelMap: "Bintang Bali Resort Kuta",
    hotelDetail: "库塔 / Tuban 海岸", flight: "QG698", flightDetail: "16:50 → 18:55 · 泗水 → 巴厘岛",
    photos: [photos.bromo, photos.bromoCrater, photos.bali],
    stops: [
      { time: "01:00", title: "酒店出发 · 换乘 Jeep", detail: "根据原行程凌晨约 1 点出发，山区温度低，建议带保暖外套。" },
      { time: "日出前", title: "Penanjakan 观景区", detail: "等待日出和火山群逐渐显现；实际观景点视道路开放安排。", map: "Penanjakan Bromo Sunrise Viewpoint" },
      { time: "06:30", title: "Pasir Berbisik · 火山沙海", detail: "穿越火山沙海，防风沙和防晒都很重要。", map: "Pasir Berbisik Bromo" },
      { time: "08:15", title: "返回酒店 · 休整", detail: "原行程约 08:15 回酒店，之后整理行李。" },
      { time: "10:00", title: "退房 · 前往泗水机场", detail: "提前预留山路下山和机场安检时间。", map: "Juanda International Airport" },
      { time: "16:50", title: "QG698 飞往巴厘岛", detail: "预计 18:55 抵达巴厘岛；注意两个城市的时区不同。", map: "Ngurah Rai International Airport" },
      { time: "晚上", title: "入住 Bintang Bali Resort", detail: "当天行程很长，优先选择步行可达或酒店内晚餐。" },
    ],
    restaurants: kutaDinner, pace: "日出 + 转场", chapter: "婆罗摩",
  },
  {
    day: 6, date: "10.01", weekday: "DAY 06", region: "佩尼达岛 → 罗威纳", title: "悬崖尽头，是另一片蓝", english: "NUSA PENIDA WEST",
    subtitle: "快艇前往佩尼达岛西线，看精灵坠崖、破碎沙滩和天神浴池，晚上入住罗威纳。",
    hotel: "Puri Bagus Lovina", hotelMap: "Puri Bagus Lovina",
    hotelDetail: "北巴厘 · 罗威纳海岸", transfer: "酒店 → 码头 → 佩尼达岛 → 罗威纳",
    photos: [photos.kelingking, photos.brokenBeach, photos.angelsBillabong],
    stops: [
      { time: "07:00", title: "酒店出发 · 前往快艇码头", detail: "按订单确认集合码头和登船时间，提前准备防晒与防晕船用品。" },
      { time: "08:00", title: "快艇前往佩尼达岛", detail: "原行程约 08:00–09:00 上岛，实际受船班和海况影响。", map: "Sanur Harbour Bali" },
      { time: "09:30", title: "精灵坠崖 · Kelingking Beach", detail: "以观景平台拍照为主；下到海滩需要更多体力和时间。", map: "Kelingking Beach Nusa Penida" },
      { time: "中午", title: "破碎沙滩 · Broken Beach", detail: "沿海岸步道看天然拱桥与海湾。", map: "Broken Beach Nusa Penida" },
      { time: "下午", title: "天神浴池 · Angel’s Billabong", detail: "重点留意潮汐和浪况，不进入危险区域。", map: "Angel's Billabong Nusa Penida" },
      { time: "16:00", title: "返回巴厘岛 · 前往罗威纳", detail: "你已确认当晚入住罗威纳；跨南北岛转场较长，请提前落实车辆和到店时间。" },
      { time: "晚上", title: "入住 Puri Bagus Lovina", detail: "若抵达较晚，优先选择酒店内或开车较近的餐厅。", map: "Puri Bagus Lovina" },
    ],
    restaurants: lovinaDinner, pace: "全天 + 长转场", chapter: "北巴厘",
    note: "佩尼达岛返回巴厘岛后仍需北上罗威纳，建议提前和司机确认落船时间与夜间用车。",
  },
  {
    day: 7, date: "10.02", weekday: "DAY 07", region: "罗威纳 → AYANA", title: "海豚之后，奔向金巴兰", english: "DOLPHINS & SOUTH COAST",
    subtitle: "罗威纳清晨出海观海豚，搭配浮潜与 ATV，下午南下入住 AYANA。",
    hotel: "AYANA Resort Bali", hotelMap: "AYANA Resort Bali",
    hotelDetail: "金巴兰 · 海景房连住", transfer: "罗威纳 → ATV 体验 → AYANA",
    photos: [photos.dolphin, photos.ayanaAerial],
    stops: [
      { time: "06:00", title: "罗威纳出海 · 追海豚", detail: "包船出海，海豚为野生动物，无法保证数量或出现时间。", map: "Lovina Dolphin Watching Bali" },
      { time: "上午", title: "近海浮潜体验", detail: "是否浮潜、具体点位与海况以船方安排为准。" },
      { time: "中午", title: "ATV 越野 · 约 1.5 小时", detail: "原订单为 2 人 1 辆；具体商家与出发地址在截图中未清晰显示。" },
      { time: "下午", title: "前往 AYANA Resort Bali", detail: "从北巴厘南下金巴兰，预计需要较长车程。", map: "AYANA Resort Bali" },
      { time: "傍晚", title: "入住 · 酒店内享用晚餐", detail: "适合先从酒店内餐厅开始，不必继续跨区出行。" },
    ],
    restaurants: ayanaDinner, pace: "清晨出海", chapter: "北巴厘",
  },
  {
    day: 8, date: "10.03", weekday: "DAY 08", region: "AYANA 度假村", title: "今天只和海风见面", english: "A DAY WITH NO PLANS",
    subtitle: "留在酒店慢慢度假：泳池、海滩、SPA，以及悬崖上的一场日落。",
    hotel: "AYANA Resort Bali", hotelMap: "AYANA Resort Bali",
    hotelDetail: "金巴兰 · 海景房连住", photos: [photos.ayanaPool, photos.kubuBeach, photos.rockBar],
    stops: [
      { time: "上午", title: "慢慢开始 · 泳池与花园", detail: "从酒店内可以使用的泳池和花园开始，不设固定出发时间。" },
      { time: "下午", title: "Kubu Beach 或 SPA", detail: "按当天心情二选一；设施开放和预约情况请向酒店确认。", map: "Kubu Beach AYANA Bali" },
      { time: "日落前", title: "Rock Bar · 海边日落", detail: "提前问清酒店住客预约和入场安排。", map: "Rock Bar AYANA Bali" },
    ],
    restaurants: ayanaDayDining, optional: resortOptions, pace: "自由度假", chapter: "AYANA",
  },
  {
    day: 9, date: "10.04", weekday: "DAY 09", region: "金巴兰 / 乌鲁瓦图", title: "半天给悬崖，半天给海", english: "THE SOUTHERN COAST",
    subtitle: "可选酒店度假，也可以前往乌鲁瓦图或金巴兰，只做轻松的半日探索。",
    hotel: "AYANA Resort Bali", hotelMap: "AYANA Resort Bali",
    hotelDetail: "金巴兰 · 海景房连住", photos: [photos.uluwatu, photos.temple, photos.jimbaran],
    stops: [
      { time: "上午", title: "酒店内自由活动", detail: "留在泳池或海滩，不必为了打卡赶早。" },
      { time: "下午", title: "乌鲁瓦图 / 南部海岸二选一", detail: "按天气、体力和拥堵情况选择，不强制安排。", map: "Uluwatu Temple Bali" },
      { time: "傍晚", title: "金巴兰海边晚餐", detail: "想看日落可选择金巴兰海边；不想出门就回 AYANA 用餐。", map: "Jimbaran Beach Bali" },
    ],
    restaurants: [ayanaDayDining[3], { ...jimbaranDinner[0], meal: "晚餐" }, ayanaDayDining[0], ayanaDayDining[2]],
    optional: nearbyOptions, pace: "自由探索", chapter: "AYANA",
  },
  {
    day: 10, date: "10.05", weekday: "DAY 10", region: "AYANA / 金巴兰", title: "把最后一天留给喜欢", english: "ONE LAST GOLDEN HOUR",
    subtitle: "补去最想体验的海滩、餐厅或酒店设施，把行程留得松弛一点。",
    hotel: "AYANA Resort Bali", hotelMap: "AYANA Resort Bali",
    hotelDetail: "金巴兰 · 海景房连住", photos: [photos.ayanaAerial, photos.ayanaPool, photos.kubuBeach],
    stops: [
      { time: "上午", title: "泳池 / SPA / 海滩任选", detail: "前两天还没体验到的设施都可以留到今天。" },
      { time: "下午", title: "金巴兰轻松散步", detail: "可以选择咖啡馆、附近海岸，或者继续在酒店里发呆。", map: "Jimbaran Beach Bali" },
      { time: "傍晚", title: "安排最后一顿喜欢的晚餐", detail: "KISIK、Kampoeng Bali 或 Cuca，按口味与预约情况决定。" },
    ],
    restaurants: [{ ...ayanaDinner[2], meal: "晚餐" }, { ...jimbaranDinner[1], meal: "晚餐" }, ayanaDayDining[1], ayanaDayDining[0]],
    optional: [resortOptions[0], resortOptions[1], nearbyOptions[1]], pace: "自由收尾", chapter: "AYANA",
  },
  {
    day: 11, date: "10.06", weekday: "DAY 11", region: "巴厘岛 → 上海 / 昆明", title: "带着群岛的光回家", english: "UNTIL NEXT TIME",
    subtitle: "按实际航班时间安排退房、送机和返程。",
    hotel: "返程日 · 不再安排住宿", hotelMap: "Ngurah Rai International Airport",
    hotelDetail: "航班信息待确认", flightDetail: "上海 / 昆明返程航班待确认", transfer: "AYANA → 登巴萨机场",
    photos: [photos.ayanaPool, photos.jimbaran],
    stops: [
      { time: "待定", title: "退房 · 从 AYANA 出发", detail: "按确认后的航班时间安排司机，建议预留交通与安检时间。" },
      { time: "待定", title: "抵达登巴萨机场", detail: "分别核对前往上海 / 昆明的航班与航站安排。", map: "Ngurah Rai International Airport Bali" },
    ],
    restaurants: [], pace: "返程", chapter: "巴厘岛",
  },
];

export const officialSources = [
  { name: "AYANA Bali · 酒店餐厅与酒吧", url: "https://www.ayana.com/bali/dining/list/" },
  { name: "AYANA Komodo · 酒店餐厅", url: "https://www.ayana.com/labuan-bajo/komodo/dining/" },
  { name: "AYANA Bali · 官方度假体验", url: "https://www.ayana.com/bali/itineraries/charm/" },
  { name: "Cuca · 官方菜单与套餐价格", url: "https://www.cucabali.com/all-menu/" },
];
