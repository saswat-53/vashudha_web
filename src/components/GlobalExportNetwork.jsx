import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeader from './SectionHeader';
import './GlobalExportNetwork.css';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const INDIA = [78.9629, 20.5937];

const destinations = [
  { name: 'USA',          coords: [-95.7129, 37.0902],  region: 'Americas' },
  { name: 'Canada',       coords: [-106.346, 56.1304],  region: 'Americas' },
  { name: 'Brazil',       coords: [-51.925, -14.235],   region: 'Americas' },
  { name: 'UK',           coords: [-3.436, 55.378],     region: 'Europe'   },
  { name: 'Germany',      coords: [10.451, 51.165],     region: 'Europe'   },
  { name: 'Netherlands',  coords: [5.291, 52.132],      region: 'Europe'   },
  { name: 'UAE',          coords: [53.847, 23.424],     region: 'Middle East' },
  { name: 'Saudi Arabia', coords: [45.079, 23.886],     region: 'Middle East' },
  { name: 'South Africa', coords: [22.937, -30.559],    region: 'Africa'   },
  { name: 'Nigeria',      coords: [8.675, 9.082],       region: 'Africa'   },
  { name: 'Australia',    coords: [133.775, -25.274],   region: 'Asia Pacific' },
  { name: 'Singapore',    coords: [103.819, 1.352],     region: 'Asia Pacific' },
  { name: 'Japan',        coords: [138.252, 36.204],    region: 'Asia Pacific' },
];

const regionGroups = [
  { region: 'Americas',    places: ['USA', 'Canada', 'Brazil'] },
  { region: 'Europe',      places: ['UK', 'Germany', 'Netherlands', 'France'] },
  { region: 'Middle East', places: ['UAE', 'Saudi Arabia', 'Qatar'] },
  { region: 'Africa',      places: ['South Africa', 'Nigeria', 'Kenya'] },
  { region: 'Asia Pacific',places: ['Australia', 'Singapore', 'Japan', 'South Korea'] },
];

export default function GlobalExportNetwork() {
  const { ref, isVisible } = useScrollReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="export-network" className="section-wrap alt">
      <div className="container" ref={ref}>
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <SectionHeader
            number="06"
            title="Global Export Network"
            subtitle="Bringing Indian Agriculture to the World"
          />
        </div>

        <div className="export__layout">
          {/* MAP */}
          <div className={`export__map reveal-left ${isVisible ? 'visible' : ''}`}>
            <div className="export__map-wrap">
              <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{ scale: 170, center: [20, 5] }}
                style={{ width: '100%', height: 'auto' }}
              >
                {/* Country fills */}
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: { fill: '#C8DDD0', stroke: '#FAFAF8', strokeWidth: 0.5, outline: 'none' },
                          hover:   { fill: '#A8C8B8', stroke: '#FAFAF8', strokeWidth: 0.5, outline: 'none' },
                          pressed: { fill: '#C8DDD0', outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* India highlighted */}
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies
                      .filter((geo) => geo.properties.name === 'India')
                      .map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: { fill: '#D4A017', stroke: '#B8860B', strokeWidth: 1, outline: 'none' },
                            hover:   { fill: '#E5B62E', stroke: '#B8860B', strokeWidth: 1, outline: 'none' },
                            pressed: { fill: '#D4A017', outline: 'none' },
                          }}
                        />
                      ))
                  }
                </Geographies>

                {/* Connection lines from India */}
                {destinations.map((d) => (
                  <Line
                    key={d.name}
                    from={INDIA}
                    to={d.coords}
                    stroke={hovered === d.name ? '#D4A017' : 'rgba(212,160,23,0.35)'}
                    strokeWidth={hovered === d.name ? 1.5 : 0.8}
                    strokeDasharray="4 3"
                    strokeLinecap="round"
                  />
                ))}

                {/* Destination markers */}
                {destinations.map((d) => (
                  <Marker
                    key={d.name}
                    coordinates={d.coords}
                    onMouseEnter={() => setHovered(d.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <circle
                      r={hovered === d.name ? 6 : 4}
                      fill={hovered === d.name ? '#D4A017' : 'rgba(212,160,23,0.75)'}
                      stroke="#fff"
                      strokeWidth={1.2}
                      style={{ transition: 'r 0.2s, fill 0.2s', cursor: 'pointer' }}
                    />
                    {hovered === d.name && (
                      <text
                        y={-10}
                        textAnchor="middle"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '9px',
                          fontWeight: '600',
                          fill: '#1B4332',
                          pointerEvents: 'none',
                        }}
                      >
                        {d.name}
                      </text>
                    )}
                  </Marker>
                ))}

                {/* India origin marker */}
                <Marker coordinates={INDIA}>
                  <circle r={7} fill="#1B4332" stroke="#D4A017" strokeWidth={2} />
                  <circle r={3} fill="#D4A017" />
                  <text
                    y={16}
                    textAnchor="middle"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '8px',
                      fontWeight: '700',
                      fill: '#1B4332',
                    }}
                  >
                    INDIA
                  </text>
                </Marker>
              </ComposableMap>

              <div className="export__map-legend">
                <span className="export__legend-item export__legend-item--origin">
                  <span className="export__legend-dot export__legend-dot--origin" /> India (Origin)
                </span>
                <span className="export__legend-item">
                  <span className="export__legend-dot" /> Export Destination
                </span>
              </div>
            </div>
          </div>

          {/* DESTINATIONS LIST */}
          <div className={`export__destinations reveal-right ${isVisible ? 'visible' : ''}`}>
            <h3 className="export__dest-title">Our Export Destinations</h3>
            <div className="export__dest-list">
              {regionGroups.map((d, i) => (
                <div key={i} className="export__region">
                  <div className="export__region-header">
                    <span className="export__region-dot" />
                    <span className="export__region-name">{d.region}</span>
                  </div>
                  <div className="export__region-places">
                    {d.places.map((place, j) => (
                      <span key={j} className="export__place">{place}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="export__stat">
              <span className="export__stat-num">30+</span>
              <span className="export__stat-label">Countries &amp; Growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
