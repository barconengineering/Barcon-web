export const photos = {
  irrigation: { src: '/images/irrigation.jpeg', alt: 'Truck-mounted crane lowering irrigation pipes into a trench in open farmland', caption: 'Irrigation pipeline installation' },
  reservoir: { src: '/images/reservoir.jpeg', alt: 'Circular concrete water reservoir with a blue band on a red-earth site behind a blue fence', caption: 'Water storage infrastructure' },
  grading: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.45.jpeg', alt: 'Motor grader shaping an unpaved road', caption: 'Road grading and earthworks' },
  compaction: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.47.jpeg', alt: 'Road roller compacting a gravel road', caption: 'Gravel compaction' },
  earthRoad: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.49.jpeg', alt: 'Graded red earth road between buildings and trees', caption: 'Road formation' },
  gravelRoad: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.50.jpeg', alt: 'Gravel road surface with a roller in the distance', caption: 'Gravel surfacing' },
  waterPoint: { src: '/images/WhatsApp Image 2026-10-21 at 11.02.53.jpeg', alt: 'Concrete public water point and drainage apron beside a wooded area', caption: 'Community water access' },
  solarArray: { src: '/images/WhatsApp Image 2026-10-21 at 11.03.30.jpeg', alt: 'Solar panel array and small buildings in a fenced green hillside compound', caption: 'Solar array installation' },
  solarRows: { src: '/images/WhatsApp Image 2026-10-21 at 11.03.31.jpeg', alt: 'Two rows of solar panels beside a small equipment building', caption: 'Solar panels and supporting infrastructure' },
  solarCommunity: { src: '/images/WhatsApp Image 2026-10-21 at 11.03.32.jpeg', alt: 'People gathered beside an equipment building and solar panels', caption: 'People and solar infrastructure' },
};
export type SitePhoto = (typeof photos)[keyof typeof photos];
