"use client";

import { useEffect, useState, type MouseEvent } from "react";
import {
  days,
  officialSources,
  photos,
  type OptionalExperience,
  type Photo,
  type Restaurant,
  type TravelDay,
} from "./trip-data";

const mapUrl = (query: string) =>
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(query);

const padDay = (day: number) => String(day).padStart(2, "0");

const chapters = [
  { number: "01", name: "金巴兰", caption: "落地 · 第一晚", day: 1 },
  { number: "02", name: "科莫多", caption: "海岛 · 巨蜥 · 粉沙", day: 2 },
  { number: "03", name: "婆罗摩", caption: "火山 · 凌晨日出", day: 4 },
  { number: "04", name: "北巴厘", caption: "悬崖 · 海豚", day: 6 },
  { number: "05", name: "AYANA", caption: "三日 · 随心而行", day: 8 },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 14" fill="none" aria-hidden="true">
      <path d="M1 7h17m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const hasRating = restaurant.rating !== "酒店餐厅";

  return (
    <article className="restaurant-card">
      <div className="restaurant-heading">
        <div className="restaurant-name-wrap">
          <span className="restaurant-name">{restaurant.name}</span>
          {restaurant.meal ? (
            <span className="meal-tag">{restaurant.meal}</span>
          ) : null}
        </div>
        <span className={hasRating ? "rating" : "rating unverified"}>
          {hasRating ? "★ " : ""}
          {restaurant.rating}
        </span>
      </div>
      <p className="restaurant-cuisine">{restaurant.cuisine}</p>
      <p className="restaurant-note">{restaurant.note}</p>
      <div className="restaurant-details">
        <span>{restaurant.distance}</span>
        <span>{restaurant.reviews}</span>
      </div>
      <div className="restaurant-bottom">
        <div>
          <span className="budget-label">参考人均</span>
          <span className="budget">{restaurant.budget}</span>
        </div>
        <div className="restaurant-actions">
          <a
            href={restaurant.source}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"查看 " + restaurant.name + " 信息来源"}
          >
            评分来源
            <ArrowIcon diagonal />
          </a>
          <a
            href={mapUrl(restaurant.map)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={"在地图中查看 " + restaurant.name}
          >
            地图
            <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      {restaurant.budgetNote ? (
        <p className="budget-note">{restaurant.budgetNote}</p>
      ) : null}
    </article>
  );
}

function ExperienceCard({
  experience,
  onOpenPhoto,
}: {
  experience: OptionalExperience;
  onOpenPhoto: (photo: Photo) => void;
}) {
  return (
    <article className="experience-card">
      <button
        className="experience-photo photo-button"
        type="button"
        onClick={() => onOpenPhoto(experience.photo)}
        aria-label={"查看 " + experience.title + " 照片"}
      >
        <img
          src={experience.photo.url}
          alt={experience.photo.alt}
          loading="lazy"
          decoding="async"
        />
      </button>
      <div className="experience-copy">
        <span className="experience-subtitle">{experience.subtitle}</span>
        <h5>{experience.title}</h5>
        <p>{experience.detail}</p>
        <div className="experience-meta">
          <span>{experience.duration}</span>
          <a
            href={mapUrl(experience.map)}
            target="_blank"
            rel="noopener noreferrer"
          >
            查看位置
            <ArrowIcon diagonal />
          </a>
        </div>
      </div>
    </article>
  );
}

function DaySection({
  day,
  onOpenPhoto,
}: {
  day: TravelDay;
  onOpenPhoto: (photo: Photo) => void;
}) {
  const isFreeDay = day.day >= 8 && day.day <= 10;
  const mainPhoto = day.photos[0];
  const supportingPhotos = day.photos.slice(1);

  return (
    <article
      className={"day-section" + (isFreeDay ? " free-day" : "")}
      id={"day-" + day.day}
    >
      <div className="day-intro">
        <div className="day-index">
          <span>DAY</span>
          <strong>{padDay(day.day)}</strong>
          <span className="day-date">{day.date}</span>
        </div>
        <div className="day-headline">
          <span className="day-region">{day.region}</span>
          <h3>{day.title}</h3>
          <p>{day.subtitle}</p>
        </div>
        <span className="pace-tag">{day.pace}</span>
      </div>

      <div className="day-gallery">
        <button
          className="main-photo photo-button"
          type="button"
          onClick={() => onOpenPhoto(mainPhoto)}
          aria-label={"查看 " + mainPhoto.label + " 大图"}
        >
          <img
            src={mainPhoto.url}
            alt={mainPhoto.alt}
            loading="lazy"
            decoding="async"
          />
          <span className="photo-label">{mainPhoto.label}</span>
        </button>
        {supportingPhotos.length ? (
          <div
            className={
              "supporting-photos" +
              (supportingPhotos.length > 2 ? " supporting-photos-many" : "")
            }
          >
            {supportingPhotos.map((photo) => (
              <button
                className="side-photo photo-button"
                type="button"
                key={photo.label}
                onClick={() => onOpenPhoto(photo)}
                aria-label={"查看 " + photo.label + " 大图"}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="photo-label">{photo.label}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="day-columns">
        <div className="timeline-column">
          <div className="block-heading">
            <span>ITINERARY</span>
            <h4>当日路线</h4>
          </div>

          {day.flight || day.flightDetail || day.transfer ? (
            <div className="travel-meta">
              {day.flight ? <span className="flight-code">{day.flight}</span> : null}
              {day.flightDetail ? <span>{day.flightDetail}</span> : null}
              {day.transfer ? <span>{day.transfer}</span> : null}
            </div>
          ) : null}

          <ol className="timeline">
            {day.stops.map((stop) => (
              <li key={stop.time + stop.title}>
                <span className="stop-time">{stop.time}</span>
                <div className="stop-content">
                  <span className="stop-dot" aria-hidden="true" />
                  <h5>{stop.title}</h5>
                  <p>{stop.detail}</p>
                  {stop.map ? (
                    <a
                      className="stop-map"
                      href={mapUrl(stop.map)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Maps
                      <ArrowIcon diagonal />
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          {day.note ? <aside className="day-note">{day.note}</aside> : null}
          {day.flag ? (
            <aside className="day-flag">
              <span>需再确认</span>
              {day.flag}
            </aside>
          ) : null}
        </div>

        <div className="stay-column">
          <div className="hotel-card">
            <div className="block-heading">
              <span>{day.day === 11 ? "DEPARTURE" : "STAY"}</span>
              <h4>{day.day === 11 ? "返程安排" : "今晚入住"}</h4>
            </div>
            <h5>{day.hotel}</h5>
            <p>{day.hotelDetail}</p>
            <a
              href={mapUrl(day.hotelMap)}
              target="_blank"
              rel="noopener noreferrer"
            >
              查看位置
              <ArrowIcon diagonal />
            </a>
          </div>

          {day.restaurants.length ? (
            <div className="dining-block" id={day.day === 1 ? "dining" : undefined}>
              <div className="block-heading dining-heading">
                <span>{isFreeDay ? "LUNCH & DINNER" : "DINNER ONLY"}</span>
                <h4>{isFreeDay ? "午餐 / 晚餐参考" : "附近晚餐参考"}</h4>
              </div>
              <div className="restaurant-list">
                {day.restaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.name} restaurant={restaurant} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {day.optional ? (
        <div className="optional-block" id={day.day === 8 ? "free-days" : undefined}>
          <div className="optional-heading">
            <div className="block-heading">
              <span>IF YOU FEEL LIKE IT</span>
              <h4>想动一动的话</h4>
            </div>
            <p>都只是备选，不需要全部完成。</p>
          </div>
          <div className="experience-grid">
            {day.optional.map((experience) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
                onOpenPhoto={onOpenPhoto}
              />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const jumpToDay = (event: MouseEvent<HTMLAnchorElement>, day: number) => {
    if (!window.matchMedia("(max-width: 760px)").matches) return;

    const target = document.getElementById("day-" + day);
    if (!target) return;

    event.preventDefault();
    event.currentTarget.blur();

    const rail = document.querySelector<HTMLElement>(".day-rail");
    const railOffset = (rail?.offsetHeight ?? 0) + 16;
    const top = Math.max(
      0,
      window.scrollY + target.getBoundingClientRect().top - railOffset,
    );

    window.scrollTo({ top, left: 0, behavior: "auto" });
  };

  useEffect(() => {
    if (!selectedPhoto) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("modal-open");
    };
  }, [selectedPhoto]);

  return (
    <main id="top">
      <header className="topbar">
        <a className="wordmark" href="#top">
          ANTARA<span>群岛之间</span>
        </a>
        <span className="edition">PRIVATE JOURNEY · 09.26 — 10.06</span>
        <nav className="header-links" aria-label="主要导航">
          <a href="#journey">行程</a>
          <a href="#dining">餐厅</a>
          <a href="#free-days">自由活动</a>
        </nav>
      </header>

      <section className="hero">
        <img
          className="hero-photo"
          src={photos.ayanaPool.url}
          alt={photos.ayanaPool.alt}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="eyebrow">A PRIVATE INDONESIAN ODYSSEY</span>
          <h1>群岛之间</h1>
          <p>以海景酒店为停靠，把火山、群岛与从容时光收进十一天。</p>
          <div className="hero-route">
            巴厘岛<span>—</span>科莫多<span>—</span>婆罗摩<span>—</span>金巴兰
          </div>
          <a href="#journey" className="hero-action">
            开启私人旅程
            <ArrowIcon />
          </a>
        </div>
        <div className="hero-card" aria-label="旅程摘要">
          <span>YOUR PRIVATE VOYAGE</span>
          <strong>舒适与探索，刚刚好的平衡</strong>
          <div>
            <p><b>11</b><span>天从容旅程</span></p>
            <p><b>03</b><span>晚海景连住</span></p>
            <p><b>02</b><span>次快艇小团</span></p>
          </div>
        </div>
        <a
          className="hero-credit"
          href={photos.ayanaPool.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          AYANA Bali 实景 · {photos.ayanaPool.credit}
        </a>
        <span className="hero-count">09.26 — 10.06 / 11 DAYS</span>
      </section>

      <section className="luxury-ribbon" aria-label="旅行体验">
        <div>
          <span>01</span>
          <p><strong>PRIVATE TRANSFER</strong>专车衔接主要转场</p>
        </div>
        <div>
          <span>02</span>
          <p><strong>OCEANFRONT STAYS</strong>从 Waecicu 到金巴兰海岸</p>
        </div>
        <div>
          <span>03</span>
          <p><strong>SMALL-GROUP SAILING</strong>两段科莫多快艇小团</p>
        </div>
        <div>
          <span>04</span>
          <p><strong>TIME TO BREATHE</strong>三天 AYANA 自由留白</p>
        </div>
      </section>

      <section className="journey-index" aria-label="旅程概览">
        <div className="index-title">
          <span className="eyebrow dark">THE ART OF SLOW TRAVEL</span>
          <h2>一场有分寸的奢享旅程</h2>
          <p>清晨追火山，午后潜入海里，也保留足够的时间，回到泳池与日落之间。</p>
        </div>
        <div className="chapters">
          {chapters.map((chapter) => (
            <a
              href={"#day-" + chapter.day}
              key={chapter.number}
              onClick={(event) => jumpToDay(event, chapter.day)}
            >
              <span className="chapter-number">{chapter.number}</span>
              <strong>{chapter.name}</strong>
              <span className="chapter-caption">{chapter.caption}</span>
            </a>
          ))}
        </div>
      </section>

      <nav className="day-rail" aria-label="每日行程导航">
        <div className="day-rail-track">
          {days.map((day) => (
            <a
              href={"#day-" + day.day}
              key={day.day}
              onClick={(event) => jumpToDay(event, day.day)}
            >
              <strong>D{padDay(day.day)}</strong>
              <span>{day.date}</span>
            </a>
          ))}
        </div>
      </nav>

      <section className="journey" id="journey">
        <div className="section-intro">
          <div>
            <span className="eyebrow dark">ELEVEN DAYS, ONE STORY</span>
            <h2>十一日群岛计划</h2>
          </div>
          <p>
            酒店与路线按已确认行程整理。前七天只提供晚餐参考，
            自由活动日再增加午餐和可选体验。
          </p>
        </div>

        <div className="journey-days">
          {days.map((day) => (
            <DaySection
              day={day}
              key={day.day}
              onOpenPhoto={setSelectedPhoto}
            />
          ))}
        </div>
      </section>

      <section className="trip-notes" id="notes">
        <div className="notes-wrap">
          <div className="notes-intro">
            <span className="eyebrow">BEFORE YOU GO</span>
            <h2>出发前，再核对几件小事。</h2>
            <p>截图里有几处信息不够清楚，先如实保留，等订单确认后补上。</p>
          </div>
          <div className="notes-grid">
            <div>
              <span>01 / 转场</span>
              <p>
                D4 前往泗水的航班、抵达时间及接机安排未清晰显示，
                需要根据实际出票信息补录。
              </p>
            </div>
            <div>
              <span>02 / 长途用车</span>
              <p>
                D6 从佩尼达岛返回码头后仍需北上罗威纳，
                请提前与司机确认落船时间和夜间到店时间。
              </p>
            </div>
            <div>
              <span>03 / 活动</span>
              <p>
                D7 ATV 商家、集合位置和具体出发时间仍未清晰显示，
                需对照活动订单确认。
              </p>
            </div>
            <div>
              <span>04 / 返程</span>
              <p>
                D1 上海出发航班和 D11 前往上海 / 昆明的返程航班，
                目前都尚未提供具体班次。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="source-section">
        <div>
          <span className="eyebrow dark">USEFUL LINKS</span>
          <h2>几个用得到的官方入口</h2>
        </div>
        <div className="source-links">
          {officialSources.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {source.name}
              <ArrowIcon diagonal />
            </a>
          ))}
        </div>
        <p className="source-disclaimer">
          餐厅评分与评价数量来自公开页面，会随时间变化；除明确标注官方菜单外，
          人均均为参考估算。人民币价格按 2026 年 8 月参考汇率
          IDR 1,000 ≈ ¥0.38 粗略换算并取整，实际金额会随汇率与税费变化。
          页面内景点与酒店照片均已按对应地点重新核对并随网页加载，
          点击图片可查看公开来源。酒店设施、海况、船期与营业安排均以当天实际情况为准。
        </p>
      </section>

      <footer>
        <a className="footer-mark" href="#top">
          ANTARA <span>群岛之间</span>
        </a>
        <span>私人旅行手册 · 09.26 — 10.06</span>
        <a href="#top" className="back-to-top">
          回到顶部 ↑
        </a>
      </footer>

      {selectedPhoto ? (
        <div
          className="photo-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.label}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="modal-close"
            type="button"
            onClick={() => setSelectedPhoto(null)}
            aria-label="关闭图片"
          >
            ×
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedPhoto.url.replace("w=1500", "w=2200")}
              alt={selectedPhoto.alt}
              decoding="async"
            />
            <figcaption>
              <span>{selectedPhoto.label}</span>
              <a
                href={selectedPhoto.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedPhoto.credit} · 查看来源
                <ArrowIcon diagonal />
              </a>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </main>
  );
}
