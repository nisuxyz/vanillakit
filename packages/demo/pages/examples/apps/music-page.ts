import { computed, css, signal } from "@vanillakit/vanillakit";
import {
  button, div, h2, h3, input, p, progress, span, strong,
  table, tbody, td, th, thead, tr,
} from "@vanillakit/vanillakit";

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: number;
  mood: string;
}

interface Playlist {
  id: number;
  name: string;
  description: string;
  tracks: Track[];
}

const playlists: Playlist[] = [
  {
    id: 1, name: "Focus Mix", description: "Instrumentals for deep work and design reviews.",
    tracks: [
      { id: 1, title: "Signal Bloom", artist: "Northern Static", duration: 194, mood: "Focus" },
      { id: 2, title: "Quiet Metrics", artist: "Harbor Tape", duration: 221, mood: "Ambient" },
      { id: 3, title: "Draft State", artist: "Low Orbit", duration: 188, mood: "Calm" },
    ],
  },
  {
    id: 2, name: "Launch Day", description: "Brighter tracks for shipping, demos, and post-release cleanup.",
    tracks: [
      { id: 4, title: "Green Checks", artist: "Circuit Parade", duration: 205, mood: "Upbeat" },
      { id: 5, title: "Midnight Deploy", artist: "Aster Loop", duration: 236, mood: "Electronic" },
      { id: 6, title: "Cold Cache", artist: "Paper Satellites", duration: 173, mood: "Indie" },
    ],
  },
  {
    id: 3, name: "Weekend Reset", description: "Softer tracks for planning, wrap-ups, and weekly reviews.",
    tracks: [
      { id: 7, title: "Notebook Coast", artist: "Luna Vale", duration: 243, mood: "Warm" },
      { id: 8, title: "Late Summary", artist: "Glass Transit", duration: 214, mood: "Downtempo" },
      { id: 9, title: "Soft Merge", artist: "Basin Lights", duration: 199, mood: "Acoustic" },
    ],
  },
];

function formatDuration(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/* ---- Styles ---- */
const appClass = css`
  display: flex;
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  position: relative;
  background: var(--vk-color-bg);
  font-size: var(--vk-font-size-sm);
  @media (max-width: 48rem) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const sidebarClass = css`
  width: 210px;
  flex-shrink: 0;
  border-right: 1px solid var(--vk-color-border);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: var(--vk-space-lg);
  gap: var(--vk-space-md);
  @media (max-width: 48rem) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 50;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    box-shadow: 4px 0 16px rgba(0, 0, 0, 0.15);
  }
`;

const sidebarOpenClass = css`
  @media (max-width: 48rem) {
    transform: translateX(0) !important;
  }
`;

const mobileTriggerClass = css`
  display: none;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px 6px;
  line-height: 1;
  color: var(--vk-color-text);
  flex-shrink: 0;
  @media (max-width: 48rem) {
    display: flex;
    align-items: center;
  }
`;

const overlayClass = css`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 40;
  @media (min-width: 48.0625rem) { display: none; }
`;

const mainClass = css`
  flex: 1;
  overflow-y: auto;
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-md);
  min-width: 0;
  @media (max-width: 48rem) {
    overflow-y: visible;
    padding: var(--vk-space-md);
  }
`;

const nowPlayingClass = css`
  width: 270px;
  flex-shrink: 0;
  border-left: 1px solid var(--vk-color-border);
  overflow-y: auto;
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-md);
  @media (max-width: 48rem) {
    width: 100%;
    border-left: none;
    border-top: 1px solid var(--vk-color-border);
    padding: var(--vk-space-md);
  }
`;

export function MusicAppPage() {
  const activePlaylistId = signal(playlists[0].id);
  const search = signal("");
  const queue = signal<Track[]>([...playlists[0].tracks]);
  const currentIndex = signal(0);
  const isPlaying = signal(false);
  const elapsed = signal(0);
  let playbackTimer: number | null = null;

  const activePlaylist = computed(() => playlists.find((pl) => pl.id === activePlaylistId()) ?? playlists[0]);
  const currentTrack = computed(() => queue()[currentIndex()] ?? null);
  const filteredTracks = computed(() => {
    const term = search().trim().toLowerCase();
    if (!term) return activePlaylist().tracks;
    return activePlaylist().tracks.filter((t) => [t.title, t.artist, t.mood].join(" ").toLowerCase().includes(term));
  });

  function stopTimer() {
    if (playbackTimer !== null) { window.clearInterval(playbackTimer); playbackTimer = null; }
  }

  function advanceTrack() {
    const next = currentIndex.peek() + 1;
    if (next < queue.peek().length) { currentIndex(next); elapsed(0); if (isPlaying.peek()) startTimer(); return; }
    stopTimer(); elapsed(0); isPlaying(false);
  }

  function startTimer() {
    stopTimer();
    if (!isPlaying.peek()) return;
    playbackTimer = window.setInterval(() => {
      const t = currentTrack();
      if (!t) { stopTimer(); isPlaying(false); return; }
      if (elapsed.peek() + 1 >= t.duration) { advanceTrack(); return; }
      elapsed((v) => v + 1);
    }, 1000);
  }

  function selectPlaylist(id: number) {
    const pl = playlists.find((p) => p.id === id);
    if (!pl) return;
    activePlaylistId(id); queue([...pl.tracks]); currentIndex(0); elapsed(0); isPlaying(false); stopTimer();
  }

  function togglePlayback() {
    if (!currentTrack()) return;
    isPlaying((v) => !v);
    if (isPlaying.peek()) startTimer(); else stopTimer();
  }

  function playTrack(track: Track) {
    queue((list) => [track, ...list.filter((t) => t.id !== track.id)]);
    currentIndex(0); elapsed(0); isPlaying(true); startTimer();
  }

  function addToQueue(track: Track) {
    queue((list) => [...list, track]);
  }

  const sidebarOpen = signal(false);

  const el = div(
    { class: appClass },

    /* Mobile overlay */
    () => sidebarOpen() ? div({ class: overlayClass, onclick: () => sidebarOpen(false) }) : null,

    /* ---- Playlist sidebar ---- */
    div(
      { class: () => sidebarOpen() ? `${sidebarClass} ${sidebarOpenClass}` : sidebarClass },
      h3({ style: "margin:0;" }, "Playlists"),
      div(
        { style: "display:flex;flex-direction:column;gap:4px;" },
        playlists.map((pl) =>
          button(
            {
              "data-style-variant": () => activePlaylistId() === pl.id ? "primary" : "ghost",
              style: "text-align:left;",
              onclick: () => selectPlaylist(pl.id),
            },
            pl.name,
          ),
        ),
      ),
      p({ style: "font-size:0.78rem;color:var(--vk-color-text-muted);margin:0;" }, () => activePlaylist().description),
      div(
        h3({ style: "margin:0 0 4px;" }, "Search"),
        input({
          placeholder: "Filter tracks...",
          value: () => search(),
          oninput: (e: Event) => search((e.target as HTMLInputElement).value),
        }),
        p({ style: "font-size:0.72rem;color:var(--vk-color-text-muted);margin:4px 0 0;" }, () => `${filteredTracks().length} tracks`),
      ),
    ),

    /* ---- Library + Queue ---- */
    div(
      { class: mainClass },
      div(
        div(
          { style: "display:flex;align-items:center;gap:var(--vk-space-sm);margin-bottom:var(--vk-space-sm);" },
          button({ class: mobileTriggerClass, onclick: () => sidebarOpen((v) => !v) }, "☰"),
          h2({ style: "margin:0;" }, "Library"),
        ),
        div(
          { style: "overflow-x:auto;" },
          table(
            { style: "width:100%;" },
            thead(tr(
              th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "Track"),
              th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "Artist"),
              th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "Mood"),
              th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "Duration"),
              th({ style: "padding:8px 12px;text-align:left;" }),
            )),
            tbody(() =>
              filteredTracks().map((track) =>
                tr(
                  { style: "border-bottom:1px solid var(--vk-color-border);" },
                  td({ style: "padding:10px 12px;" }, strong(track.title)),
                  td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, track.artist),
                  td({ style: "padding:10px 12px;" }, span({ "data-badge": true }, track.mood)),
                  td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, formatDuration(track.duration)),
                  td({ style: "padding:10px 12px;" },
                    div({ style: "display:flex;gap:4px;" },
                      button({ "data-size": "sm", "data-color-variant": "primary", onclick: () => playTrack(track) }, "Play"),
                      button({ "data-size": "sm", "data-style-variant": "outline", onclick: () => addToQueue(track) }, "Queue"),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      div(
        h2({ style: "margin:0 0 var(--vk-space-sm);" }, "Queue"),
        div(
          { style: "overflow-x:auto;" },
          table(
            { style: "width:100%;" },
            thead(tr(
              th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "#"),
              th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "Track"),
              th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "Artist"),
              th({ style: "padding:8px 12px;text-align:left;color:var(--vk-color-text-muted);font-weight:500;" }, "Duration"),
              th({ style: "padding:8px 12px;" }),
            )),
            tbody(() =>
              queue().map((track, idx) =>
                tr(
                  { style: () => `border-bottom:1px solid var(--vk-color-border);background:${idx === currentIndex() ? "var(--vk-color-surface-2)" : "transparent"};` },
                  td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, `${idx + 1}`),
                  td({ style: "padding:10px 12px;" }, strong(track.title)),
                  td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, track.artist),
                  td({ style: "padding:10px 12px;color:var(--vk-color-text-muted);" }, formatDuration(track.duration)),
                  td({ style: "padding:10px 12px;" },
                    idx === currentIndex()
                      ? span({ "data-badge": true, "data-color-variant": "primary" }, "Now")
                      : button({ "data-size": "sm", "data-style-variant": "outline", onclick: () => playTrack(track) }, "Play"),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),

    /* ---- Now Playing panel ---- */
    div(
      { class: nowPlayingClass },
      h3({ style: "margin:0;" }, "Now Playing"),
      () => {
        const track = currentTrack();
        if (!track) return p({ style: "color:var(--vk-color-text-muted);" }, "No track selected");

        return div(
          { style: "display:flex;flex-direction:column;gap:var(--vk-space-md);" },
          div(
            { style: "aspect-ratio:1;background:var(--vk-color-surface-2);border-radius:var(--vk-radius-lg);display:flex;align-items:center;justify-content:center;font-size:3rem;" },
            "🎵",
          ),
          div(
            h2({ style: "margin:0;font-size:1.1rem;" }, () => currentTrack()?.title ?? ""),
            p({ style: "margin:4px 0 0;color:var(--vk-color-text-muted);" }, () => `${currentTrack()?.artist} · ${currentTrack()?.mood}`),
          ),
          div(
            progress({ style: "width:100%;", max: () => String(currentTrack()?.duration ?? 1), value: () => String(elapsed()) }),
            p({ style: "margin:4px 0 0;font-size:0.72rem;color:var(--vk-color-text-muted);" }, () => `${formatDuration(elapsed())} / ${formatDuration(currentTrack()?.duration ?? 0)}`),
          ),
          div(
            { style: "display:flex;gap:var(--vk-space-sm);justify-content:center;" },
            button({
              "data-style-variant": "outline",
              onclick: () => { elapsed(0); if (isPlaying.peek()) startTimer(); },
            }, "⏮"),
            button({ "data-color-variant": "primary", onclick: togglePlayback }, () => isPlaying() ? "⏸" : "▶"),
            button({ "data-style-variant": "outline", onclick: advanceTrack }, "⏭"),
          ),
          div(
            { style: "display:flex;flex-direction:column;gap:4px;" },
            h3({ style: "margin:0 0 4px;font-size:0.85rem;" }, "Up Next"),
            () =>
              queue().slice(currentIndex() + 1, currentIndex() + 4).map((t) =>
                div(
                  { style: "display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--vk-color-border);" },
                  div({ style: "width:28px;height:28px;border-radius:4px;background:var(--vk-color-surface-2);flex-shrink:0;" }),
                  div(
                    p({ style: "margin:0;font-size:0.78rem;font-weight:500;" }, t.title),
                    p({ style: "margin:0;font-size:0.7rem;color:var(--vk-color-text-muted);" }, t.artist),
                  ),
                ),
              ),
          ),
        );
      },
    ),
  );

  /* cleanup */
  const obs = new MutationObserver(() => {
    if (!document.contains(el)) { stopTimer(); obs.disconnect(); }
  });
  requestAnimationFrame(() => { if (el.parentNode) obs.observe(el.parentNode, { childList: true }); });
  return el;
}
