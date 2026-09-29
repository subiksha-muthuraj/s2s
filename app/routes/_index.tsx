import { useState } from "react";

import { APP_TITLE } from "@/lib/app-config";

export function meta() {
  return [
    { title: APP_TITLE },
    {
      name: "description",
      content: "Vision-based autonomous navigation for outdoor UGVs.",
    },
  ];
}

const sensors = [
  { label: "Visual SLAM", detail: "Pose locked", value: "98.4%" },
  { label: "Optic flow", detail: "Free space clear", value: "ACTIVE" },
  { label: "Looming guard", detail: "LGMD response", value: "ARMED" },
  { label: "Route memory", detail: "Visual landmark match", value: "94%" },
];

export default function HomeRoute() {
  const [missionState, setMissionState] = useState<
    "ready" | "active" | "paused"
  >("ready");
  const isActive = missionState === "active";

  return (
    <div className="s2s-app-shell">
      <aside className="s2s-sidebar" aria-label="Main navigation">
        <a className="s2s-brand" href="#overview" aria-label="S2S home">
          <span className="s2s-brand-mark">S2S</span>
          <span className="s2s-brand-name">Sight to Safety</span>
        </a>
        <div className="s2s-sidebar-rule" />
        <span className="s2s-nav-caption">MISSION</span>
        <nav className="s2s-nav-list">
          <a className="s2s-nav-item active" href="#overview">
            <span className="s2s-nav-dot" />
            Overview
          </a>
          <a className="s2s-nav-item" href="#route-map">
            <span className="s2s-nav-dot" />
            Route map
          </a>
          <a className="s2s-nav-item" href="#camera-feed">
            <span className="s2s-nav-dot" />
            Camera feed
          </a>
          <a className="s2s-nav-item" href="#safety-systems">
            <span className="s2s-nav-dot" />
            Safety systems
          </a>
        </nav>
        <div className="s2s-sidebar-bottom">
          <span className="s2s-unit-label">FIELD UNIT</span>
          <div className="s2s-unit">
            <span className="s2s-unit-indicator" />
            <span>
              <strong>UGV-01</strong>
              <small>Outdoor rover</small>
            </span>
            <span className="s2s-unit-menu" aria-hidden="true">
              ···
            </span>
          </div>
          <div className="s2s-sidebar-foot">
            S2S AUTONOMY <span>v1.0.0</span>
          </div>
        </div>
      </aside>

      <main className="s2s-main" id="overview">
        <header className="s2s-topbar">
          <div className="s2s-breadcrumb">
            <span>Operations</span>
            <span className="s2s-breadcrumb-sep">/</span>
            <strong>Mission control</strong>
          </div>
          <div className="s2s-topbar-right">
            <span className="s2s-environment">
              <span />
              FIELD SIMULATION
            </span>
            <span className="s2s-topbar-divider" />
            <span className="s2s-clock">09:41:26 IST</span>
          </div>
        </header>

        <div className="s2s-content">
          <section className="s2s-page-heading">
            <div>
              <div className="s2s-eyebrow">
                PROBLEM STATEMENT 26126 <span /> BHARAT ELECTRONICS LIMITED
              </div>
              <h1>Mission control</h1>
              <p className="s2s-tagline">
                Vision-Based Autonomous Navigation for Outdoor UGVs
              </p>
            </div>
            <button
              className={`s2s-primary-button ${isActive ? "is-live" : ""}`}
              type="button"
              onClick={() => setMissionState(isActive ? "paused" : "active")}
            >
              <span className="s2s-button-indicator" />
              {isActive
                ? "Pause mission"
                : missionState === "paused"
                  ? "Resume mission"
                  : "Begin mission"}
            </button>
          </section>

          <section className="s2s-status-strip" aria-label="Vehicle telemetry">
            <div className="s2s-status-cell mission-cell">
              <span
                className={`s2s-status-light ${isActive ? "is-pulsing" : ""}`}
              />
              <span className="s2s-status-label">MISSION</span>
              <strong>
                {isActive
                  ? "IN PROGRESS"
                  : missionState === "paused"
                    ? "PAUSED"
                    : "READY"}
              </strong>
            </div>
            <div className="s2s-status-cell">
              <span className="s2s-status-label">SPEED</span>
              <strong>
                {isActive ? "1.2" : "0.0"}
                <small> m/s</small>
              </strong>
            </div>
            <div className="s2s-status-cell">
              <span className="s2s-status-label">HEADING</span>
              <strong>
                NE <small>042°</small>
              </strong>
            </div>
            <div className="s2s-status-cell">
              <span className="s2s-status-label">BATTERY</span>
              <strong>
                87<small>%</small>
              </strong>
              <span className="s2s-battery-track">
                <i />
              </span>
            </div>
            <div className="s2s-status-cell">
              <span className="s2s-status-label">ROUTE</span>
              <strong>
                240<small> m</small>
              </strong>
            </div>
          </section>

          <section className="s2s-workbench" aria-label="Mission overview">
            <article className="s2s-panel s2s-map-panel" id="route-map">
              <div className="s2s-panel-heading">
                <div>
                  <span className="s2s-panel-kicker">NAVIGATION</span>
                  <h2>Planned route</h2>
                </div>
                <span className="s2s-route-tag">
                  <span /> PATH CLEAR
                </span>
              </div>
              <div
                className="s2s-map-canvas"
                role="img"
                aria-label="Topographic route map from point A to point B, avoiding rocks and uneven ground"
              >
                <div className="s2s-map-grid" />
                <div className="s2s-contour contour-one" />
                <div className="s2s-contour contour-two" />
                <div className="s2s-contour contour-three" />
                <span className="s2s-map-coordinate coord-nw">
                  GPS-DENIED MODE
                  <br />
                  LOCAL MAP FRAME
                </span>
                <span className="s2s-map-coordinate coord-se">
                  VISUAL ODOMETRY · LOCAL FRAME
                </span>
                <div className="s2s-route-segment segment-a" />
                <div className="s2s-route-segment segment-b" />
                <div className="s2s-route-segment segment-c" />
                <span className="s2s-waypoint start-point">
                  <i />A
                </span>
                <span className="s2s-waypoint end-point">
                  <i />B
                </span>
                <span
                  className="s2s-obstacle obstacle-one"
                  aria-label="Detected rock"
                >
                  <i />
                </span>
                <span
                  className="s2s-obstacle obstacle-two"
                  aria-label="Uneven ground"
                >
                  <i />
                </span>
                <span className="s2s-map-legend">
                  <i className="legend-route" /> Planned path{" "}
                  <i className="legend-obstacle" /> Obstacle
                </span>
                <span className="s2s-map-scale">
                  N <b>↑</b>
                </span>
              </div>
              <div className="s2s-map-footer">
                <span>
                  <i className="s2s-destination-dot" /> START{" "}
                  <strong>Point A</strong>
                </span>
                <span className="s2s-map-footer-line" />
                <span>
                  <i className="s2s-destination-dot destination-end" />{" "}
                  DESTINATION <strong>Point B</strong>
                </span>
                <span className="s2s-distance">
                  240 m <small>estimated</small>
                </span>
              </div>
            </article>

            <article className="s2s-panel s2s-camera-panel" id="camera-feed">
              <div className="s2s-panel-heading camera-heading">
                <div>
                  <span className="s2s-panel-kicker">PERCEPTION</span>
                  <h2>Front camera</h2>
                </div>
                <span
                  className={`s2s-camera-live ${isActive ? "live-active" : ""}`}
                >
                  <i />
                  {isActive ? "LIVE" : "STANDBY"}
                </span>
              </div>
              <div className="s2s-camera-view">
                <img
                  src="https://images.pexels.com/photos/10823339/pexels-photo-10823339.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Open terrain with a winding dirt path through a rural field"
                />
                <div className="s2s-camera-shade" />
                <span className="s2s-camera-label">
                  CAM 01 <span>·</span> 1280 × 720
                </span>
                <span className="s2s-camera-detection">
                  <i /> TRAVERSABLE PATH <small>0.96</small>
                </span>
                <span className="s2s-camera-reticle" aria-hidden="true" />
                <span className="s2s-camera-timestamp">00:00:12:08</span>
              </div>
              <div className="s2s-camera-footer">
                <span>
                  <i className="s2s-signal-bars">
                    <b />
                    <b />
                    <b />
                    <b />
                  </i>{" "}
                  30 FPS
                </span>
                <span>
                  FIELD OF VIEW <strong>92°</strong>
                </span>
                <span>
                  EXPOSURE <strong>AUTO</strong>
                </span>
              </div>
            </article>
          </section>

          <section className="s2s-systems-section" id="safety-systems">
            <div className="s2s-section-heading">
              <h2>Autonomy systems</h2>
              <span>ALL SYSTEMS NOMINAL</span>
            </div>
            <div className="s2s-sensor-grid">
              {sensors.map((sensor, index) => (
                <article className="s2s-sensor-card" key={sensor.label}>
                  <span className={`s2s-sensor-index index-${index + 1}`}>
                    0{index + 1}
                  </span>
                  <div className="s2s-sensor-copy">
                    <h3>{sensor.label}</h3>
                    <p>{sensor.detail}</p>
                  </div>
                  <strong className="s2s-sensor-value">
                    <i />
                    {sensor.value}
                  </strong>
                </article>
              ))}
            </div>
          </section>
          <footer className="s2s-footer">
            <span>S2S — SIGHT TO SAFETY</span>
            <span>
              SMART INDIA HACKATHON <i /> 2025
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}
