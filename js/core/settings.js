export const APEX_ANALYTICS = {
    storageKey: "apex_analytics_state",
    accessKey: "apex_analytics_access",
    clientKey: "apex_analytics_client",
    passcode: "AZOWNER2026",

    getState() {
        const fallback = {
            visits: 0,
            uniqueVisitors: 0,
            today: 0,
            sessions: 0,
            topGames: [],
            recent: []
        };

        try {
            return { ...fallback, ...JSON.parse(localStorage.getItem(this.storageKey) || "{}") };
        } catch (error) {
            return fallback;
        }
    },

    saveState(state) {
        localStorage.setItem(this.storageKey, JSON.stringify(state));
    },

    getClientId() {
        let id = localStorage.getItem(this.clientKey);
        if (!id) {
            id = `visitor-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
            localStorage.setItem(this.clientKey, id);
        }
        return id;
    },

    recordVisit() {
        const state = this.getState();
        const today = new Date().toISOString().slice(0, 10);

        state.visits = (Number(state.visits) || 0) + 1;
        state.sessions = (Number(state.sessions) || 0) + 1;
        state.today = (state.todayKey === today) ? (Number(state.today) || 0) + 1 : 1;
        state.todayKey = today;

        const seenToday = localStorage.getItem(`apex_analytics_seen_${today}`);
        if (!seenToday) {
            state.uniqueVisitors = (Number(state.uniqueVisitors) || 0) + 1;
            localStorage.setItem(`apex_analytics_seen_${today}`, this.getClientId());
        }

        const recent = [...(state.recent || [])];
        recent.unshift({
            label: `Session ${state.sessions}`,
            time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
        });
        state.recent = recent.slice(0, 5);

        const games = [...(window.APEX?.allGames || [])];
        if (games.length) {
            const topGames = games.slice(0, 4).map((game, index) => ({
                name: game.name,
                value: Math.max(1, 4 - index)
            }));
            state.topGames = topGames;
        }

        this.saveState(state);
    },

    renderDashboard() {
        const state = this.getState();
        const visitsEl = document.getElementById("analyticsVisits");
        const uniqueEl = document.getElementById("analyticsUnique");
        const todayEl = document.getElementById("analyticsToday");
        const sessionsEl = document.getElementById("analyticsSessions");
        const topGamesEl = document.getElementById("analyticsTopGames");
        const recentEl = document.getElementById("analyticsRecent");

        if (!visitsEl) return;

        visitsEl.textContent = Number(state.visits || 0);
        uniqueEl.textContent = Number(state.uniqueVisitors || 0);
        todayEl.textContent = Number(state.today || 0);
        sessionsEl.textContent = Number(state.sessions || 0);

        if (topGamesEl) {
            const items = (state.topGames || []).length ? state.topGames : [
                { name: "Apex Zero", value: 1 },
                { name: "Arcade Picks", value: 1 },
                { name: "Recent games", value: 1 }
            ];
            topGamesEl.innerHTML = items.map(item => `<li><span>${item.name}</span><strong>${item.value}</strong></li>`).join("");
        }

        if (recentEl) {
            const items = (state.recent || []).length ? state.recent : [{ label: "No activity yet", time: "Waiting" }];
            recentEl.innerHTML = items.map(item => `<li><span>${item.label}</span><strong>${item.time}</strong></li>`).join("");
        }
    },

    unlock(code) {
        if ((code || "").trim() === this.passcode) {
            localStorage.setItem(this.accessKey, "true");
            return true;
        }
        return false;
    },

    isUnlocked() {
        return localStorage.getItem(this.accessKey) === "true";
    },

    setupAnalyticsPanel() {
        const passInput = document.getElementById("analyticsPasscode");
        const unlockBtn = document.getElementById("analyticsUnlockBtn");
        const statusEl = document.getElementById("analyticsStatus");
        const openBtn = document.getElementById("openAnalyticsPanelBtn");
        const panel = document.getElementById("analyticsPanel");
        const lockedState = document.getElementById("analyticsLockedState");
        const unlockedState = document.getElementById("analyticsUnlockedState");
        const closeBtn = document.getElementById("closeAnalyticsPanel");

        if (!passInput || !unlockBtn || !openBtn || !panel || !lockedState || !unlockedState) return;

        const syncUnlockedUI = () => {
            const unlocked = this.isUnlocked();
            lockedState.style.display = unlocked ? "none" : "block";
            unlockedState.style.display = unlocked ? "block" : "none";
            if (unlocked) {
                statusEl.textContent = "Owner dashboard unlocked.";
            } else {
                statusEl.textContent = "Protected analytics is active.";
            }
        };

        unlockBtn.onclick = () => {
            const ok = this.unlock(passInput.value);
            if (ok) {
                syncUnlockedUI();
                this.renderDashboard();
                panel.classList.add("active");
                panel.setAttribute("aria-hidden", "false");
            } else {
                statusEl.textContent = "Access denied. Try the owner code.";
            }
        };

        openBtn.onclick = () => {
            if (!this.isUnlocked()) {
                statusEl.textContent = "Unlock first using the owner code.";
                return;
            }
            this.renderDashboard();
            panel.classList.add("active");
            panel.setAttribute("aria-hidden", "false");
        };

        closeBtn.onclick = () => {
            panel.classList.remove("active");
            panel.setAttribute("aria-hidden", "true");
        };

        passInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                unlockBtn.click();
            }
        });

        syncUnlockedUI();
    }
};























































































































































































































































































