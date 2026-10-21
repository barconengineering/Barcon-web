import {
  ArrowRight, ArrowUpRight, Buildings, Check, CheckCircle, Drop, EnvelopeSimple,
  GlobeHemisphereEast, Leaf, Lightning, List, MapPin, Phone, Plant, RoadHorizon,
  ShieldCheck, Sun, X,
} from "@phosphor-icons/react/dist/ssr";

const icons = { arrow: ArrowRight, diagonal: ArrowUpRight, building: Buildings, check: Check, verified: CheckCircle, water: Drop, email: EnvelopeSimple, globe: GlobeHemisphereEast, leaf: Leaf, power: Lightning, menu: List, pin: MapPin, phone: Phone, irrigation: Plant, road: RoadHorizon, shield: ShieldCheck, solar: Sun, close: X };
export type IconName = keyof typeof icons;
export function Icon({ name, size = 22, className = "" }: { name: IconName; size?: number; className?: string }) {
  const Component = icons[name];
  return <Component size={size} weight="regular" className={className} aria-hidden="true" />;
}
export const serviceIcons: IconName[] = ["water", "irrigation", "building", "road", "power", "solar", "globe"];
