export type ExampleAppId =
  | "todo"
  | "playground"
  | "dashboard"
  | "chat"
  | "social"
  | "kanban"
  | "music"
  | "auth";

export interface ExampleAppMeta {
  id: ExampleAppId;
  path: `/examples/${ExampleAppId}`;
  title: string;
  summary: string;
  kicker: string;
  tags: string[];
}

export const exampleApps: ExampleAppMeta[] = [
  {
    id: "todo",
    path: "/examples/todo",
    title: "Team Todo",
    summary:
      "Plan work, track priorities, and manage a realistic task backlog.",
    kicker: "Productivity",
    tags: ["signals", "lists", "forms"],
  },
  {
    id: "playground",
    path: "/examples/playground",
    title: "Playground",
    summary:
      "Change nested state, derived values, and UI controls in a live reactive lab.",
    kicker: "Reactivity",
    tags: ["reactive", "computed", "forms"],
  },
  {
    id: "dashboard",
    path: "/examples/dashboard",
    title: "Ops Dashboard",
    summary:
      "Review KPIs, incidents, workload, and system activity in one place.",
    kicker: "Analytics",
    tags: ["cards", "stats", "activity"],
  },
  {
    id: "chat",
    path: "/examples/chat",
    title: "Support Inbox",
    summary:
      "Work through conversations with unread counts, canned replies, and status.",
    kicker: "Messaging",
    tags: ["threads", "composer", "presence"],
  },
  {
    id: "social",
    path: "/examples/social",
    title: "Community Feed",
    summary:
      "Publish updates, browse a feed, and engage with comments and reactions.",
    kicker: "Social",
    tags: ["feed", "composer", "engagement"],
  },
  {
    id: "kanban",
    path: "/examples/kanban",
    title: "Launch Board",
    summary:
      "Move work across columns, assign owners, and keep delivery visible.",
    kicker: "Planning",
    tags: ["board", "workflow", "handoffs"],
  },
  {
    id: "music",
    path: "/examples/music",
    title: "Music Room",
    summary:
      "Browse playlists, queue tracks, and simulate playback in a focused player.",
    kicker: "Media",
    tags: ["queue", "player", "search"],
  },
  {
    id: "auth",
    path: "/examples/auth",
    title: "Authentication",
    summary:
      "Sign-in and account creation flow with email and OAuth provider options.",
    kicker: "Auth",
    tags: ["forms", "auth", "layout"],
  },
];

export const exampleAppById = Object.fromEntries(
  exampleApps.map((app) => [app.id, app]),
) as Record<ExampleAppId, ExampleAppMeta>;
