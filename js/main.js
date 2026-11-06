/* ============================================================
   APEX ZERO — MODERN ARCADE REDESIGN
============================================================ */
:root {
    --bg: #0b1020;
    --bg-soft: #111b2f;
    --panel: rgba(17, 23, 35, 0.88);
    --panel-strong: #121d32;
    --panel-alt: rgba(25, 35, 52, 0.9);
    --border: rgba(161, 182, 213, 0.18);
    --text: #edf4ff;
    --text-soft: #a6b4cf;
    --text-muted: #7090be;
    --accent: #b8f36b;
    --accent-2: #6ee7ff;
    --shadow: rgba(11, 16, 32, 0.6);
    --radius: 18px;
    --font-size: 16px;
    --card-size: 180px;
    --grid-gap: 18px;
}

[data-theme="light"] {
    --bg: #eef3ff;
    --bg-soft: #dfe9ff;
    --panel: rgba(255, 255, 255, 0.88);
    --panel-strong: #f5f8ff;
    --panel-alt: rgba(233, 240, 255, 0.95);
    --border: rgba(77, 99, 142, 0.15);
    --text: #0f172a;
    --text-soft: #495a7a;
    --text-muted: #6b7ea4;
    --shadow: rgba(128, 148, 188, 0.18);
}

body[data-bgstyle="gradient"] {
    background: radial-gradient(circle at top left, rgba(110, 231, 255, 0.12), transparent 30%),
                radial-gradient(circle at bottom right, rgba(184, 243, 107, 0.14), transparent 25%),
                var(--bg);
}

body[data-bgstyle="noise"] {
    background-image: radial-gradient(rgba(255,255,255,0.04) 0.7px, transparent 0.7px), linear-gradient(135deg, var(--bg), var(--bg-soft));
    background-size: 12px 12px;
}

body[data-bgstyle="blur"] {
    background: var(--bg);
}

body[data-layout="compact"] .grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

body[data-layout="list"] .grid {
    grid-template-columns: 1fr;
}

body[data-contrast="low"] {
    --text-soft: #d6def3;
}

body[data-contrast="high"] {
    --text: #ffffff;
    --text-soft: #ecf3ff;
}

* { box-sizing: border-box; }

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: "DM Sans", sans-serif;
    font-size: var(--font-size);
    overflow-x: hidden;
    transition: background 0.25s ease, color 0.25s ease;
}

body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent 20%, transparent 80%, rgba(255,255,255,0.02));
}

#content {
    padding: 24px 18px 80px;
    max-width: 1360px;
    margin: 0 auto;
}

h1, h2, h3, h4 {
    margin: 0;
    font-family: "Space Grotesk", sans-serif;
    letter-spacing: -0.04em;
}

button, input, select {
    font: inherit;
}

#topbar {
    position: sticky;
    top: 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(1360px, calc(100% - 24px));
    margin: 12px auto 0;
    padding: 18px 22px;
    border: 1px solid var(--border);
    background: rgba(12, 18, 31, 0.7);
    backdrop-filter: blur(14px);
    border-radius: 18px;
    box-shadow: 0 15px 30px rgba(5, 10, 20, 0.25);
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: var(--text);
    text-decoration: none;
}

.brand-mark {
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: #0d1422;
    font-weight: 800;
    box-shadow: 0 8px 18px rgba(184, 243, 107, 0.35);
}

.brand-name {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.08em;
}

.brand-name span {
    color: var(--accent-2);
}

.top-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.online-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(110, 231, 255, 0.1);
    border: 1px solid rgba(110, 231, 255, 0.15);
    color: var(--text-soft);
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.online-pill i {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 6px rgba(184, 243, 107, 0.15);
}

.icon-btn, .close-btn, .cancel-btn, .launch-btn, .admin-action, .tab-btn {
    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease, opacity 0.18s ease;
}

.icon-btn, .close-btn {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.02);
    color: var(--text);
    cursor: pointer;
}

.icon-btn:hover, .close-btn:hover, .admin-action:hover, .tab-btn:hover, .cancel-btn:hover, .launch-btn:hover {
    transform: translateY(-1px);
}

.hero {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr auto;
    gap: 24px;
    align-items: center;
    margin-top: 28px;
    padding: 36px 26px 30px;
    border: 1px solid var(--border);
    background: linear-gradient(135deg, rgba(17, 26, 42, 0.92), rgba(12, 18, 31, 0.9));
    border-radius: 28px;
    box-shadow: 0 30px 60px rgba(5, 10, 20, 0.28);
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 12px;
    color: var(--text-muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.72rem;
    font-weight: 700;
}

.eyebrow-line {
    width: 26px;
    height: 1px;
    background: linear-gradient(90deg, var(--accent), transparent);
}

.hero-copy h1 {
    font-size: clamp(2.5rem, 5vw, 5.2rem);
    line-height: 0.96;
    margin-bottom: 16px;
}

.hero-copy h1 span {
    color: var(--accent);
}

.hero-description {
    max-width: 560px;
    margin: 0 0 26px;
    color: var(--text-soft);
    font-size: 1.08rem;
    line-height: 1.7;
}

.hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 18px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: #101827;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0 16px 24px rgba(184, 243, 107, 0.22);
}

.hero-art {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 260px;
}

.art-disc {
    position: relative;
    display: grid;
    place-items: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 12%),
                linear-gradient(135deg, rgba(110, 231, 255, 0.22), rgba(184, 243, 107, 0.18), rgba(30, 41, 59, 0.9));
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: inset 0 0 40px rgba(110, 231, 255, 0.14), 0 18px 40px rgba(13, 20, 34, 0.45);
}

.art-disc span {
    font-size: 3.3rem;
    font-weight: 800;
    font-family: "Space Grotesk", sans-serif;
    letter-spacing: 0.08em;
    color: var(--text);
}

.art-orbit {
    position: absolute;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 50%;
}

.orbit-one {
    width: 250px;
    height: 250px;
}

.orbit-two {
    width: 285px;
    height: 285px;
    border-style: dashed;
}

.art-spark {
    position: absolute;
    color: var(--accent);
    font-size: 1.6rem;
    filter: drop-shadow(0 0 12px rgba(184, 243, 107, 0.55));
}

.spark-one { top: 10%; right: 10%; }
.spark-two { bottom: 15%; left: 12%; color: var(--accent-2); }

.art-caption {
    position: absolute;
    right: -10px;
    bottom: 12px;
    padding: 12px 14px;
    border: 1px solid var(--border);
    border-radius: 14px;
    background: rgba(6, 12, 21, 0.6);
    color: var(--text-soft);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.68rem;
}

.hero-index {
    align-self: end;
    justify-self: end;
    color: var(--text-soft);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.hero-index span {
    color: var(--accent);
    font-weight: 700;
}

.library-section {
    margin-top: 32px;
    padding: 20px 10px 0;
}

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 12px;
    margin-bottom: 16px;
}

.section-heading h2 {
    font-size: clamp(1.7rem, 2vw, 2.4rem);
}

.section-note {
    color: var(--text-muted);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.7rem;
}

.search-wrap {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    width: min(420px, 100%);
    padding: 13px 16px;
    border: 1px solid var(--border);
    border-radius: 16px;
    background: rgba(12, 18, 31, 0.7);
    color: var(--text-soft);
}

.search-wrap input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text);
    font-size: 1rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--card-size), 1fr));
    gap: var(--grid-gap);
}

.game-card {
    position: relative;
    background: linear-gradient(180deg, rgba(17, 25, 37, 0.9), rgba(10, 16, 27, 0.96));
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 12px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 12px 30px rgba(4, 10, 20, 0.22);
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.game-card::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), transparent);
}

.game-card:hover {
    transform: translateY(-5px);
    border-color: rgba(184, 243, 107, 0.35);
    box-shadow: 0 18px 36px rgba(7, 13, 26, 0.32);
}

.game-thumb {
    width: 100%;
    height: calc(var(--card-size) * 0.72);
    object-fit: cover;
    border-radius: 14px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.03);
}

.game-title {
    margin-top: 12px;
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.site-footer {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 28px;
    padding: 18px 8px 0;
    color: var(--text-soft);
    border-top: 1px solid var(--border);
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.footer-brand {
    color: var(--accent);
    font-weight: 700;
}

.side-panel {
    position: fixed;
    top: 0;
    right: -420px;
    width: min(400px, calc(100vw - 20px));
    height: 100vh;
    padding: 22px 18px 28px;
    border-left: 1px solid var(--border);
    background: rgba(13, 19, 31, 0.9);
    backdrop-filter: blur(18px);
    box-shadow: -18px 0 42px rgba(0,0,0,0.28);
    transition: right 0.28s ease;
    z-index: 200;
    overflow-y: auto;
}

.side-panel.active {
    right: 0;
}

.side-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 12px;
    margin-bottom: 18px;
}

.settings-tabs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 16px;
}

.tab-btn {
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.02);
    color: var(--text-soft);
    border-radius: 12px;
    padding: 10px 8px;
    cursor: pointer;
}

.tab-btn.active {
    background: linear-gradient(135deg, rgba(184, 243, 107, 0.18), rgba(110, 231, 255, 0.1));
    border-color: rgba(184, 243, 107, 0.38);
    color: var(--text);
}

.tab-content {
    display: block;
}

.tab-content h3 {
    margin: 18px 0 8px;
    font-size: 0.95rem;
    color: var(--text);
}

.tab-content select,
.tab-content input[type="range"],
.tab-content input[type="color"],
.tab-content input[type="password"],
.tab-content input[type="search"] {
    width: 100%;
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.02);
    border-radius: 12px;
    color: var(--text);
    padding: 12px 10px;
    outline: none;
}

.tab-content input[type="color"] {
    min-height: 46px;
    padding: 6px;
}

.check-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--text-soft);
}

.admin-action {
    width: 100%;
    margin-top: 12px;
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.02);
    color: var(--text);
    border-radius: 12px;
    padding: 11px 12px;
    cursor: pointer;
}

.admin-action.primary {
    background: linear-gradient(135deg, rgba(184, 243, 107, 0.2), rgba(110, 231, 255, 0.18));
    border-color: rgba(184, 243, 107, 0.38);
}

.analytics-gate {
    padding: 12px 0 0;
}

.analytics-gate p,
.analytics-lock p,
.status-text {
    color: var(--text-soft);
    line-height: 1.6;
}

.status-text {
    margin-top: 12px;
    font-size: 0.88rem;
}

.analytics-panel {
    z-index: 210;
}

.analytics-lock, .analytics-dashboard {
    margin-top: 18px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
}

.metric-card {
    padding: 16px 14px;
    border: 1px solid var(--border);
    border-radius: 16px;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
}

.metric-label {
    display: block;
    margin-bottom: 8px;
    color: var(--text-soft);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.metric-card strong {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.8rem;
    letter-spacing: -0.05em;
}

.analytics-section {
    margin-top: 20px;
    padding-top: 14px;
    border-top: 1px solid var(--border);
}

.analytics-list {
    list-style: none;
    margin: 10px 0 0;
    padding: 0;
    display: grid;
    gap: 8px;
}

.analytics-list li {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-soft);
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255,255,255,0.02);
}

.analytics-list.subtle li {
    justify-content: flex-start;
}

.overlay {
    position: fixed;
    inset: 0;
    display: none;
    place-items: center;
    background: rgba(9, 15, 25, 0.6);
    z-index: 300;
    backdrop-filter: blur(6px);
}

.overlay.active {
    display: grid;
}

.launch-box {
    width: min(360px, calc(100vw - 30px));
    padding: 24px 20px 18px;
    border: 1px solid var(--border);
    border-radius: 26px;
    background: rgba(12, 19, 31, 0.95);
    box-shadow: 0 25px 60px rgba(0,0,0,0.35);
    text-align: center;
}

.launch-box h2 {
    font-size: 2rem;
    margin-bottom: 12px;
}

.launch-thumb {
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 16px;
    border: 1px solid var(--border);
    margin: 12px 0;
}

.launch-buttons {
    display: flex;
    gap: 10px;
    margin-top: 18px;
}

.cancel-btn, .launch-btn {
    flex: 1;
    border-radius: 12px;
    border: 1px solid var(--border);
    padding: 12px 10px;
    cursor: pointer;
}

.cancel-btn {
    background: rgba(255,255,255,0.02);
    color: var(--text);
}

.launch-btn {
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: #0d1623;
    font-weight: 800;
}

#fpsCounter {
    position: fixed;
    right: 18px;
    bottom: 18px;
    padding: 8px 12px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: rgba(11, 16, 32, 0.8);
    color: var(--text-soft);
    font-size: 0.78rem;
    display: none;
    z-index: 160;
}

#loadingScreen {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    background: rgba(9, 13, 22, 0.98);
    z-index: 9999;
    transition: opacity 0.35s ease;
}

.loader {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 3px solid rgba(255,255,255,0.14);
    border-top-color: var(--accent);
    animation: spin 0.75s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

@media (max-width: 980px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-copy {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero-index {
        justify-self: center;
    }
}

@media (max-width: 640px) {
    #topbar {
        width: calc(100% - 12px);
        padding: 14px 14px;
    }

    .brand-name {
        font-size: 0.95rem;
    }

    .top-actions .online-pill {
        display: none;
    }

    .settings-tabs {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .section-heading {
        flex-direction: column;
        align-items: flex-start;
    }
}

