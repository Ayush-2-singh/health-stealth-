"use client";
import { motion } from "framer-motion";

const CONTINENTS = [
  { id: "greenland",    d: "M 306,8 L 370,4 L 406,18 L 410,42 L 382,54 L 338,54 L 308,38 Z" },
  { id: "north-america",d: "M 228,58 L 302,40 L 362,50 L 402,70 L 418,106 L 426,150 L 416,196 L 392,226 L 348,254 L 296,262 L 260,240 L 242,204 L 234,166 L 222,130 L 220,92 Z" },
  { id: "south-america",d: "M 316,266 L 392,250 L 442,270 L 454,324 L 458,390 L 436,450 L 396,472 L 352,458 L 330,418 L 318,360 L 314,304 Z" },
  { id: "europe",       d: "M 460,80 L 536,62 L 584,80 L 598,106 L 580,138 L 542,156 L 504,160 L 468,142 L 450,116 Z" },
  { id: "africa",       d: "M 460,164 L 578,148 L 616,184 L 620,268 L 608,360 L 558,412 L 498,428 L 436,408 L 414,340 L 414,260 L 430,198 Z" },
  { id: "asia",         d: "M 583,60 L 770,42 L 900,48 L 960,88 L 968,146 L 936,210 L 872,244 L 800,254 L 732,230 L 672,236 L 606,230 L 580,194 L 570,154 L 572,112 Z" },
  { id: "india",        d: "M 680,232 L 714,220 L 722,268 L 702,298 L 676,280 Z" },
  { id: "australia",    d: "M 750,310 L 852,296 L 888,324 L 886,378 L 848,404 L 788,410 L 752,382 L 736,346 Z" },
  { id: "antarctica",   d: "M 40,490 L 960,490 L 1000,500 L 0,500 Z" },
];

const MISSIONS = [
  { id: "dc",        x: 286, y: 142, label: "PENTAGON",  coords: "38.9N 77.1W",  delay: 0.0 },
  { id: "london",    x: 500, y: 107, label: "LONDON",    coords: "51.5N 0.1W",   delay: 0.5 },
  { id: "dubai",     x: 653, y: 181, label: "DUBAI",     coords: "25.2N 55.3E",  delay: 1.0 },
  { id: "delhi",     x: 714, y: 170, label: "NEW DELHI", coords: "28.6N 77.2E",  delay: 1.5 },
  { id: "singapore", x: 789, y: 246, label: "SINGAPORE", coords: "1.3N 103.8E",  delay: 2.0 },
  { id: "sydney",    x: 920, y: 344, label: "SYDNEY",    coords: "33.9S 151.2E", delay: 2.5 },
];

const CONNECTIONS: [string,string][] = [
  ["dc","london"], ["london","dubai"],
  ["dubai","delhi"], ["delhi","singapore"],
  ["dc","delhi"], ["london","sydney"],
];

export default function WorldMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className="w-1 h-3 bg-secondary rounded-full" />
          <span className="text-[10px] font-mono font-semibold text-secondary tracking-[0.22em] uppercase">
            Operational Coverage
          </span>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-mono text-gray-400">
          <span>WGS84 / MERCATOR</span>
          <span>SCALE 1:120,000,000</span>
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
            </span>
            ACTIVE
          </span>
        </div>
      </div>

      {/* Map frame */}
      <div className="relative border border-border rounded-[var(--radius-card)] overflow-hidden bg-surface">
        {/* Blueprint grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: "linear-gradient(rgba(10,35,66,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(10,35,66,0.04) 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <svg viewBox="0 0 1000 500" style={{ display: "block", width: "100%", height: "auto" }} aria-label="World operations map">
          {/* Latitude lines */}
          {[60,30,0,-30,-60].map(lat => {
            const y = (90 - lat) * 500 / 180;
            return (
              <line key={lat} x1="0" y1={y} x2="1000" y2={y}
                stroke={lat === 0 ? "rgba(10,35,66,0.10)" : "rgba(10,35,66,0.05)"}
                strokeWidth={lat === 0 ? 0.8 : 0.5}
                strokeDasharray={lat === 0 ? undefined : "3,10"} />
            );
          })}

          {/* Longitude lines */}
          {[-120,-60,0,60,120].map(lon => {
            const x = (lon + 180) * 1000 / 360;
            return <line key={lon} x1={x} y1="0" x2={x} y2="500" stroke="rgba(10,35,66,0.045)" strokeWidth="0.5" strokeDasharray="3,10" />;
          })}

          {/* Continents */}
          {CONTINENTS.map(c => (
            <path key={c.id} d={c.d} fill="rgba(10,35,66,0.07)" stroke="rgba(10,35,66,0.20)" strokeWidth="0.7" strokeLinejoin="round" />
          ))}

          {/* Connection lines */}
          {CONNECTIONS.map(([a,b],i) => {
            const ma = MISSIONS.find(m => m.id === a)!;
            const mb = MISSIONS.find(m => m.id === b)!;
            return <line key={i} x1={ma.x} y1={ma.y} x2={mb.x} y2={mb.y} stroke="rgba(37,99,235,0.18)" strokeWidth="0.8" strokeDasharray="4,8" />;
          })}

          {/* Mission pings */}
          {MISSIONS.map(m => (
            <g key={m.id}>
              <circle cx={m.x} cy={m.y} r="3" fill="none" stroke="rgba(37,99,235,0.30)" strokeWidth="0.8">
                <animate attributeName="r" values="3;16" dur="2.8s" begin={m.delay + "s"} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.5;0" dur="2.8s" begin={m.delay + "s"} repeatCount="indefinite" />
              </circle>
              <circle cx={m.x} cy={m.y} r="3" fill="none" stroke="rgba(37,99,235,0.20)" strokeWidth="0.6">
                <animate attributeName="r" values="3;10" dur="2.8s" begin={(m.delay + 0.8) + "s"} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.4;0" dur="2.8s" begin={(m.delay + 0.8) + "s"} repeatCount="indefinite" />
              </circle>
              <circle cx={m.x} cy={m.y} r="2.5" fill="rgba(37,99,235,0.85)" />
              <circle cx={m.x} cy={m.y} r="1.1" fill="rgba(255,255,255,0.9)" />
            </g>
          ))}

          {/* Lat labels */}
          {[60,30,0,-30].map(lat => {
            const y = (90 - lat) * 500 / 180;
            const lbl = lat >= 0 ? lat + "N" : (-lat) + "S";
            return <text key={lat} x="5" y={y - 3} fontSize="6" fill="rgba(10,35,66,0.28)" fontFamily="monospace">{lbl}</text>;
          })}

          {/* Corner brackets */}
          <polyline points="16,6 6,6 6,16"   fill="none" stroke="rgba(10,35,66,0.22)" strokeWidth="1" />
          <polyline points="984,6 994,6 994,16"   fill="none" stroke="rgba(10,35,66,0.22)" strokeWidth="1" />
          <polyline points="16,494 6,494 6,484" fill="none" stroke="rgba(10,35,66,0.22)" strokeWidth="1" />
          <polyline points="984,494 994,494 994,484" fill="none" stroke="rgba(10,35,66,0.22)" strokeWidth="1" />

          {/* Scale bar */}
          <g transform="translate(814,476)">
            <line x1="0" y1="0" x2="72" y2="0" stroke="rgba(10,35,66,0.30)" strokeWidth="0.9" />
            <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(10,35,66,0.30)" strokeWidth="0.9" />
            <line x1="72" y1="-3" x2="72" y2="3" stroke="rgba(10,35,66,0.30)" strokeWidth="0.9" />
            <text x="14" y="12" fontSize="6.5" fill="rgba(10,35,66,0.38)" fontFamily="monospace">5,000 KM</text>
          </g>
        </svg>

        {/* Mission labels – overlaid for crisp rendering */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {MISSIONS.map(m => (
            <div
              key={m.id}
              className="absolute"
              style={{
                left: ((m.x / 1000) * 100) + "%",
                top: ((m.y / 500) * 100 + 3.5) + "%",
                transform: "translateX(-50%)",
              }}
            >
              <p className="text-[8px] font-mono font-semibold text-heading/40 tracking-[0.07em] text-center whitespace-nowrap">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-3 px-1">
        <div className="flex items-center gap-5 text-[9px] font-mono text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg width="18" height="6" viewBox="0 0 18 6">
              <line x1="0" y1="3" x2="18" y2="3" stroke="rgba(37,99,235,0.45)" strokeWidth="1" strokeDasharray="3,5" />
            </svg>
            COMM LINK
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 10 10">
              <circle cx="5" cy="5" r="2.5" fill="rgba(37,99,235,0.85)" />
              <circle cx="5" cy="5" r="4" fill="none" stroke="rgba(37,99,235,0.30)" strokeWidth="0.8" />
            </svg>
            ACTIVE SITE
          </span>
        </div>
        <span className="text-[9px] font-mono text-gray-400 tracking-[0.05em]">
          CLASSIFICATION: UNCLASSIFIED // FOUO
        </span>
      </div>
    </motion.div>
  );
}