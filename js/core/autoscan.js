export const APEX_AUTOSCAN = {
    gamesFolder: "games",
    thumbnailName: "thumbnail.png",
    repoCandidates: ["feebberg/AZ", "feebberg/Apex-Zero"],

    buildGames(data) {
        const games = [];

        for (const item of data) {
            if (item.type !== "file" || !item.name.endsWith(".html")) continue;

            const name = item.name.replace(/\.html$/i, "");
            const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            games.push({
                id,
                name,
                url: `${this.gamesFolder}/${item.name}`,
                thumbnail: `${this.gamesFolder}/${name}/${this.thumbnailName}`,
                source: "autoscan"
            });
        }

        return games;
    },

    async fetchGamesFromRepo(repo) {
        const url = `https://api.github.com/repos/${repo}/contents/${this.gamesFolder}`;

        const res = await fetch(url, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        if (!res.ok) return [];

        const data = await res.json();
        if (!Array.isArray(data)) return [];

        return this.buildGames(data);
    },

    async autoscanGames() {
        for (const repo of this.repoCandidates) {
            try {
                const games = await this.fetchGamesFromRepo(repo);
                if (games.length) return games;
            } catch {
                // Try the next candidate repo.
            }
        }

        return [];
    },

    async loadAllGames() {
        const auto = await this.autoscanGames();
        const manual = window.APEX.manualGames || [];

        const merged = [...auto];
        for (const m of manual) {
            if (!merged.find(g => g.id === m.id)) merged.push(m);
        }

        return merged;
    }
};
