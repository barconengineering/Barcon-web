'use client';
import { useId, type Ref } from 'react';

const panels = [0, 1, 2].map(i => ({ key: i, transform: `translate(${i*42} ${i*24})` }));
const panelPath = 'M541 267L669 195L711 220L582 293Z';

export function InfrastructureDrawing() {
  const id = useId().replace(/:/g, '');
  return <svg className="infrastructure-drawing" viewBox="0 0 1000 720" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={`${id}-land`} x1="180" y1="200" x2="800" y2="650" gradientUnits="userSpaceOnUse"><stop stopColor="#254c58"/><stop offset="1" stopColor="#112e3b"/></linearGradient>
      <linearGradient id={`${id}-water`} x1="300" y1="210" x2="600" y2="600" gradientUnits="userSpaceOnUse"><stop stopColor="#b1edf0"/><stop offset="1" stopColor="#418fab"/></linearGradient>
      <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="0"><stop stopColor="#fff" stopOpacity="0"/><stop offset=".5" stopColor="#fff" stopOpacity=".38"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
      <pattern id={`${id}-panel`} width="30" height="25" patternUnits="userSpaceOnUse"><rect width="30" height="25" fill="#193f68"/><path d="M0 0H30V25H0Z M15 0V25" stroke="#7ca4c2" strokeWidth=".7"/></pattern>
      <clipPath id={`${id}-panels`}>{panels.map(p=><path key={p.key} d={panelPath} transform={p.transform}/>)}</clipPath>
    </defs>
    <g className="site-ground">
      <path d="M100 386L486 180L917 406L530 634Z" fill={`url(#${id}-land)`} stroke="#71959b"/>
      <path d="M100 386V414L530 665V634Z" fill="#112b37" stroke="#34525e"/><path d="M530 634L917 406V434L530 665Z" fill="#0c2330" stroke="#34525e"/>
      <g stroke="#5c8278" opacity=".6">{[0,1,2,3,4].map(i=><path key={i} d={`M${585+i*35} ${452-i*19}l116 66m-126-56l116 66m-126-56l116 66`}/>)}</g>
      <path d="M180 344L468 198L522 226L239 379Z" fill="#447c8c" stroke="#9ac8ce"/>
      <path d="M200 346L480 204M222 355L494 215" stroke="#b8e7e8" strokeDasharray="20 14" opacity=".6"/>
    </g>
    <g className="scene-part" data-for="environment">
      <path d="M307 295L338 278L370 296L350 309L491 387L472 400L326 320Z" fill="#c5d0c7" stroke="#e7e9da"/>
      <path d="M325 298L344 291L350 300L334 310L480 389L473 395L325 315Z" fill={`url(#${id}-water)`}/>
      <path d="M307 295V325L469 416L472 400L326 320V307" stroke="#84a2a3" fill="#667e7f"/>
      <path d="M324 282V264L341 255V275M324 265L341 255" stroke="#e0d5be" strokeWidth="3"/>
      <path d="M307 278L349 302" stroke="#b8a27c" strokeWidth="5"/>
    </g>
    <g className="scene-part" data-for="quality">
      <path d="M472 392L541 433L583 409" stroke="#d1d9cd" strokeWidth="14"/><path d="M472 392L541 433L583 409" stroke="#42657b" strokeWidth="8"/>
    </g>
    <g className="scene-part" data-for="quality">
      <path d="M390 391V451C390 489 554 489 554 451V391" fill="#849b9b" stroke="#c4d0c7"/>
      <path d="M472 420V478C522 478 554 467 554 451V391" fill="#597984" opacity=".7"/>
      <ellipse cx="472" cy="391" rx="82" ry="30" fill="#d5d9c9" stroke="#eef1e3"/>
      <ellipse cx="472" cy="389" rx="68" ry="22" fill={`url(#${id}-water)`} stroke="#537d87"/>
      <ellipse className="scene-ripple" cx="472" cy="389" rx="62" ry="19" stroke="#f2fbfa" strokeWidth="1.5"/>
      <ellipse className="scene-ripple" cx="472" cy="389" rx="62" ry="19" stroke="#f2fbfa" strokeWidth="1.5"/>
      <path d="M400 383V369M425 371V355M472 365V349M519 371V355M545 383V369M400 369Q472 329 545 369" stroke="#ece4d2" strokeWidth="2"/>
      <path d="M406 433V463M413 438V467" stroke="#dae1d4" strokeWidth="2"/>
      <path d="M404 439H415M404 448H415M404 457H415" stroke="#dae1d4"/>
    </g>
    <g className="scene-part" data-for="safety">
      <path d="M576 382L642 346L701 379V443L635 481L576 447Z" fill="#d5d6c3" stroke="#ebe8d8"/>
      <path d="M635 416L701 379V443L635 481Z" fill="#879b9b"/>
      <path d="M570 382L638 337L710 377L635 420Z" fill="#ae8c63" stroke="#d4bd93"/>
      <path d="M647 438L670 425V460L647 473Z" fill="#244656"/>
      <path d="M590 405L614 419V438L590 424Z" fill="#395f72" stroke="#8daeb6"/>
      <circle className="scene-pulse" cx="602" cy="421" r="5" stroke="#f2b37a" strokeWidth="1.5"/>
      <circle cx="602" cy="421" r="3" fill="#f2b37a"/>
    </g>
    <g className="scene-part" data-for="quality">
      <path d="M681 456V476L722 500L680 525L631 499" stroke="#c6d3ca" strokeWidth="9"/>
      <circle cx="686" cy="480" r="9" fill="#25556c" stroke="#a1c8cc"/><path d="M680 480H692M686 474V486" stroke="#d3e3dc"/>
    </g>
    <g className="scene-part" data-for="environment">
      {panels.map(p=><g key={p.key} transform={p.transform}><path d="M560 280V307M682 215V244" stroke="#bac5c1" strokeWidth="3"/><path d={panelPath} fill={`url(#${id}-panel)`} stroke="#a7c2c9" strokeWidth="2"/><path d="M582 293V300L711 227V220" fill="#0b2c42" stroke="#6a8e9e"/></g>)}
      <g clipPath={`url(#${id}-panels)`}><path className="scene-shimmer" d="M450 150h70l-110 240h-70z" fill={`url(#${id}-shine)`}/></g>
      <path d="M716 300L747 319L711 341L678 360" stroke="#bd9d6e" strokeWidth="2" strokeDasharray="5 5"/>
    </g>
    <g className="scene-part water-route" data-for="quality" stroke="#c1f9f1" strokeWidth="3" strokeLinecap="round">
      <path d="M344 291L329 309L473 391L541 433L575 413" pathLength="100" strokeDasharray="5 10"/>
      <path d="M683 478L722 500L680 525L620 492M680 525L729 553M680 525L642 548" pathLength="100" strokeDasharray="5 10"/>
    </g>
    <g className="drawing-labels" fontFamily="inherit" fontSize="12" fill="#d6e5e3" stroke="#83a3ac" strokeWidth=".7">
      <g className="drawing-label" data-for="environment"><path d="M330 278L245 228H170" pathLength="1" fill="none"/><text x="170" y="218" stroke="none">River intake</text></g>
      <g className="drawing-label" data-for="environment"><path d="M709 244L790 209H863" pathLength="1" fill="none"/><text x="786" y="198" stroke="none">Solar power</text></g>
      <g className="drawing-label" data-for="safety"><path d="M703 421L817 453H870" pathLength="1" fill="none"/><text x="792" y="477" stroke="none">Pumping station</text></g>
      <g className="drawing-label" data-for="quality"><path d="M414 456L307 482H214" pathLength="1" fill="none"/><text x="214" y="503" stroke="none">Water storage</text></g>
    </g>
  </svg>;
}

export function BoxedInfrastructure({ ref, active, playing }: { ref?: Ref<HTMLElement>; active: string; playing: boolean }) {
  return <figure ref={ref} className="illustration responsible-scene"><div className="image-frame original-infrastructure" data-active={active} data-playing={playing || undefined}><InfrastructureDrawing /></div></figure>;
}
