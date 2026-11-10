import {
  ArrowRight, ArrowUpRight, Buildings, CalendarBlank, CaretLeft, CaretRight, Check, CheckCircle, Drop, EnvelopeSimple, Gear,
  GlobeHemisphereEast, Leaf, Lightning, List, MapPin, Phone, Plant, RoadHorizon,
  ShieldCheck, Stack, Sun, Truck, X,
} from "@phosphor-icons/react/dist/ssr";
import type { HomeStat } from "@/lib/content";

const icons = { arrow: ArrowRight, diagonal: ArrowUpRight, building: Buildings, calendar: CalendarBlank, check: Check, previous: CaretLeft, next: CaretRight, verified: CheckCircle, water: Drop, email: EnvelopeSimple, gear: Gear, globe: GlobeHemisphereEast, leaf: Leaf, power: Lightning, menu: List, pin: MapPin, phone: Phone, irrigation: Plant, road: RoadHorizon, shield: ShieldCheck, layers: Stack, solar: Sun, truck: Truck, close: X };
export type IconName = keyof typeof icons;
export function Icon({ name, size = 22, className = "" }: { name: IconName; size?: number; className?: string }) {
  const Component = icons[name];
  return <Component size={size} weight="regular" className={className} aria-hidden="true" />;
}
export const serviceIcons: IconName[] = ["water", "irrigation", "building", "road", "gear", "solar", "truck"];
export const statIcons: Record<HomeStat["id"], IconName> = { founded: "calendar", projects: "layers", expertise: "gear" };
