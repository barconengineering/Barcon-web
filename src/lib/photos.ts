export const photos = {
  irrigation: { src: '/images/irrigation.jpg', alt: 'Lined concrete irrigation canal winding through terraced farmland and trees on a dry hillside', caption: 'Irrigation canal construction' },
  reservoir: { src: '/images/reservoir.jpg', alt: 'Inauguration of a circular concrete water reservoir with a blue band, behind a blue gate with ribbon and project banners', caption: 'Water storage infrastructure' },
  reservoirSite: { src: '/images/reserviornew.jpeg', alt: 'Circular concrete water reservoir with a blue band inside a blue-post security fence on a hilltop site', caption: 'Water storage infrastructure' },
  pumpStation: { src: '/images/electro-mechanical.jpg', alt: 'Two electric surface pumps with blue pipework, gate valves and air valves inside a pump house', caption: 'Pump house electromechanical installation' },
  grading: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.45.jpeg', alt: 'Motor grader shaping an unpaved road', caption: 'Road grading and earthworks' },
  compaction: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.47.jpeg', alt: 'Road roller compacting a gravel road', caption: 'Gravel compaction' },
  earthRoad: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.49.jpeg', alt: 'Graded red earth road between buildings and trees', caption: 'Road formation' },
  gravelRoad: { src: '/images/road.jpeg', alt: 'Freshly laid gravel road between maize fields and woven fences, with a yellow roller working ahead', caption: 'Gravel surfacing' },
  waterPoint: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.53.jpeg', alt: 'Concrete public water point and drainage apron beside a wooded area', caption: 'Community water access' },
  solarArray: { src: '/images/WhatsApp Image 2026-10-21 at 11.03.30.jpeg', alt: 'Solar panel array and small buildings in a fenced green hillside compound', caption: 'Solar array installation' },
  solarRows: { src: '/images/WhatsApp Image 2026-10-21 at 11.03.31.jpeg', alt: 'Two rows of solar panels beside a small equipment building', caption: 'Solar panels and supporting infrastructure' },
  generatorHouse: { src: '/images/hobicha/generator-house.jpg', alt: 'Block generator house with blue trim and a corrugated roof inside a blue fence, beside a pole-mounted transformer', caption: 'Generator house, Hobicha water supply' },
  boosterHouse: { src: '/images/hobicha/booster-station.jpg', alt: 'Pump house and stone-masonry reservoir behind the blue gate of a fenced booster station', caption: 'Booster pump house, Hobicha water supply' },
  pipeShed: { src: '/images/dimeka/pipe-shade.jpg', alt: 'Steel-framed shed with a corrugated roof on a masonry plinth, sheltering coils of black pipe', caption: 'Steel-framed storage shed, Dimeka water supply' },
  solarCommunity:{ src: '/images/WhatsApp Image 2026-10-21 at 11.03.32.jpeg', alt: 'People gathered beside an equipment building and solar panels', caption: 'People and solar infrastructure' },
};
export type SitePhoto = (typeof photos)[keyof typeof photos];
