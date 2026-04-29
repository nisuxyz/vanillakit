import { computed, css, Each, signal } from "@vanillakit/vanillakit";
import {
  button,
  div,
  h2,
  h3,
  input,
  li,
  ol,
  option,
  p,
  select,
  span,
  strong,
  textarea,
} from "@vanillakit/vanillakit";

type FeedFilter = "All" | "Following";
type ComposerAudience = "Everyone" | "Followers";

interface CommentItem {
  id: number;
  author: string;
  text: string;
}
interface PostItem {
  id: number;
  author: string;
  handle: string;
  role: string;
  text: string;
  topic: string;
  postedAt: string;
  audience: ComposerAudience;
  following: boolean;
  likes: number;
  liked: boolean;
  comments: CommentItem[];
}
interface SuggestionItem {
  id: number;
  name: string;
  role: string;
  following: boolean;
}

const seededPosts: PostItem[] = [
  {
    id: 1,
    author: "Ari Chen",
    handle: "@ariops",
    role: "Infrastructure lead",
    text: "We cut image processing time by 18% after moving the thumbnail queue to the new worker pool.",
    topic: "Engineering",
    postedAt: "2h ago",
    audience: "Everyone",
    following: true,
    likes: 18,
    liked: false,
    comments: [
      {
        id: 1,
        author: "Maya",
        text: "Great win. That should help the launch gallery load much faster.",
      },
    ],
  },
  {
    id: 2,
    author: "Maya Romero",
    handle: "@mayadesign",
    role: "Design director",
    text: "Uploaded the final homepage concept. I would love feedback on the onboarding card density before tomorrow.",
    topic: "Design",
    postedAt: "4h ago",
    audience: "Followers",
    following: true,
    likes: 27,
    liked: true,
    comments: [
      {
        id: 2,
        author: "Jules",
        text: "The tighter spacing feels better on mobile.",
      },
      {
        id: 3,
        author: "Noah",
        text: "I like the clearer hierarchy for the help content.",
      },
    ],
  },
  {
    id: 3,
    author: "Rina Kapoor",
    handle: "@rinagrowth",
    role: "Growth marketer",
    text: "The lifecycle refresh lifted week-one activation by 7.4%. Sharing the notes and screenshots now.",
    topic: "Growth",
    postedAt: "Yesterday",
    audience: "Everyone",
    following: false,
    likes: 34,
    liked: false,
    comments: [],
  },
];

const seededSuggestions: SuggestionItem[] = [
  { id: 1, name: "Jonah Miles", role: "Analytics", following: false },
  { id: 2, name: "Lena Park", role: "Support", following: true },
  { id: 3, name: "Jules Carter", role: "Product", following: false },
];

let nextPostId = 4;
let nextCommentId = 4;

/* ---- Styles ---- */
const appClass = css`
  display: flex;
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  background: var(--vk-color-bg);
  font-size: var(--vk-font-size-sm);
  @media (max-width: 48rem) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const feedClass = css`
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

const sidebarClass = css`
  width: 280px;
  flex-shrink: 0;
  border-left: 1px solid var(--vk-color-border);
  overflow-y: auto;
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-lg);
  @media (max-width: 48rem) {
    width: 100%;
    border-left: none;
    border-top: 1px solid var(--vk-color-border);
    overflow-y: visible;
    padding: var(--vk-space-md);
  }
`;

const postCardClass = css`
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-lg);
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-sm);
  @media (max-width: 48rem) {
    padding: var(--vk-space-md);
  }
`;

export function SocialAppPage() {
  const posts = signal<PostItem[]>(seededPosts);
  const suggestions = signal<SuggestionItem[]>(seededSuggestions);
  const composer = signal("");
  const composerAudience = signal<ComposerAudience>("Everyone");
  const filter = signal<FeedFilter>("All");

  const visiblePosts = computed(() =>
    posts().filter((post) =>
      filter() === "Following" ? post.following : true,
    ),
  );

  const summary = computed(() => ({
    posts: posts().length,
    following: suggestions().filter((s) => s.following).length,
    comments: posts().reduce((n, p) => n + p.comments.length, 0),
  }));

  function toggleFollow(id: number) {
    suggestions((list) =>
      list.map((s) => (s.id === id ? { ...s, following: !s.following } : s)),
    );
  }

  function toggleLike(id: number) {
    posts((list) =>
      list.map((p) =>
        p.id === id
          ? { ...p, liked: !p.liked, likes: p.likes + (p.liked ? -1 : 1) }
          : p,
      ),
    );
  }

  function addPost() {
    const text = composer().trim();
    if (!text) return;
    posts((list) => [
      {
        id: nextPostId++,
        author: "You",
        handle: "@you",
        role: "Product lead",
        text,
        topic: composerAudience() === "Everyone" ? "Updates" : "Team",
        postedAt: "Just now",
        audience: composerAudience(),
        following: true,
        likes: 0,
        liked: false,
        comments: [],
      },
      ...list,
    ]);
    composer("");
  }

  function addComment(postId: number, text: string) {
    const v = text.trim();
    if (!v) return;
    posts((list) =>
      list.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [
                ...p.comments,
                { id: nextCommentId++, author: "You", text: v },
              ],
            }
          : p,
      ),
    );
  }

  return div(
    { class: appClass },

    /* ---- Feed ---- */
    div(
      { class: feedClass },
      /* Header + filter */
      div(
        {
          style:
            "display:flex;align-items:center;justify-content:space-between;flex-shrink:0;",
        },
        h2({ style: "margin:0;" }, "Team Feed"),
        div(
          { style: "display:flex;gap:4px;" },
          ...(["All", "Following"] as FeedFilter[]).map((value) =>
            button(
              {
                "data-size": "sm",
                "data-style-variant": () =>
                  filter() === value ? "primary" : "outline",
                onclick: () => filter(value),
              },
              value,
            ),
          ),
        ),
      ),

      /* Composer */
      div(
        { class: postCardClass },
        textarea({
          rows: "3",
          placeholder: "What changed today?",
          style: "width:100%;resize:none;",
          value: () => composer(),
          oninput: (e: Event) =>
            composer((e.target as HTMLTextAreaElement).value),
        }),
        div(
          {
            style:
              "display:flex;align-items:center;justify-content:space-between;",
          },
          select(
            {
              value: () => composerAudience(),
              onchange: (e: Event) =>
                composerAudience(
                  (e.target as HTMLSelectElement).value as ComposerAudience,
                ),
              style: "width:130px;",
            },
            (["Everyone", "Followers"] as ComposerAudience[]).map((a) =>
              option({ value: a }, a),
            ),
          ),
          button(
            { "data-color-variant": "primary", onclick: addPost },
            "Publish",
          ),
        ),
      ),

      /* Posts */
      Each(
        {
          list: visiblePosts, key: (p) => p.id, render: (postSig) => {
            const commentDraft = signal("");

            return div(
              { class: postCardClass },
              div(
                {
                  style: "display:flex;align-items:flex-start;justify-content:space-between;",
                },
                div(
                  strong(() => postSig().author),
                  p(
                    {
                      style: "margin:2px 0 0;font-size:0.75rem;color:var(--vk-color-text-muted);",
                    },
                    () => `${postSig().handle} · ${postSig().role}`
                  )
                ),
                div(
                  { style: "display:flex;gap:4px;" },
                  span({ "data-badge": true }, () => postSig().postedAt),
                  span(
                    { "data-badge": true, "data-color-variant": "info" },
                    () => postSig().topic
                  )
                )
              ),
              p({ style: "margin:0;" }, () => postSig().text),
              div(
                {
                  style: "display:flex;align-items:center;gap:var(--vk-space-sm);",
                },
                button(
                  {
                    "data-size": "sm",
                    "data-style-variant": () => postSig().liked ? "primary" : "outline",
                    onclick: () => toggleLike(postSig().id),
                  },
                  () => `♥ ${postSig().likes}`
                ),
                span(
                  {
                    style: "font-size:0.75rem;color:var(--vk-color-text-muted);",
                  },
                  () => `${postSig().comments.length} replies`
                ),
                span(
                  {
                    "data-badge": true,
                    "data-color-variant": () => postSig().following ? "primary" : "warning",
                  },
                  () => (postSig().following ? "Following" : "Discover")
                )
              ),
              /* Comments */
              () => postSig().comments.length > 0
                ? ol(
                  {
                    style: "margin:0;padding:0 0 0 var(--vk-space-md);list-style:none;display:flex;flex-direction:column;gap:6px;",
                  },
                  postSig().comments.map((c) => li(
                    { style: "font-size:0.8rem;" },
                    strong(`${c.author}: `),
                    c.text
                  )
                  )
                )
                : null,
              /* Comment input */
              div(
                { style: "display:flex;gap:var(--vk-space-sm);" },
                input({
                  placeholder: "Reply...",
                  style: "flex:1;",
                  value: () => commentDraft(),
                  oninput: (e: Event) => commentDraft((e.target as HTMLInputElement).value),
                  onkeydown: (e: KeyboardEvent) => {
                    if (e.key === "Enter") {
                      addComment(postSig().id, commentDraft());
                      commentDraft("");
                    }
                  },
                }),
                button(
                  {
                    "data-size": "sm",
                    "data-style-variant": "outline",
                    onclick: () => {
                      addComment(postSig().id, commentDraft());
                      commentDraft("");
                    },
                  },
                  "Reply"
                )
              )
            );
          }
        },
      ),

      () =>
        visiblePosts().length === 0
          ? p(
              { style: "color:var(--vk-color-text-muted);text-align:center;" },
              "Nothing here yet. Follow more teammates or switch to the full feed.",
            )
          : null,
    ),

    /* ---- Sidebar ---- */
    div(
      { class: sidebarClass },
      div(
        h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Stats"),
        div(
          { style: "display:flex;flex-direction:column;gap:6px;" },
          div(
            {
              style:
                "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;",
            },
            div(
              { style: "font-size:1.35rem;font-weight:700;" },
              () => `${summary().posts}`,
            ),
            div(
              { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
              "Posts",
            ),
          ),
          div(
            {
              style:
                "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;",
            },
            div(
              { style: "font-size:1.35rem;font-weight:700;" },
              () => `${summary().following}`,
            ),
            div(
              { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
              "Following",
            ),
          ),
          div(
            {
              style:
                "background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;",
            },
            div(
              { style: "font-size:1.35rem;font-weight:700;" },
              () => `${summary().comments}`,
            ),
            div(
              { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
              "Comments",
            ),
          ),
        ),
      ),
      div(
        h3({ style: "margin:0 0 var(--vk-space-sm);" }, "People to Follow"),
        div(
          {
            style: "display:flex;flex-direction:column;gap:var(--vk-space-sm);",
          },
          Each(
            {
              list: suggestions, key: (s) => s.id, render: (sSig) => div(
                {
                  style: "display:flex;align-items:center;justify-content:space-between;",
                },
                div(
                  strong({ style: "font-size:0.85rem;" }, () => sSig().name),
                  p(
                    {
                      style: "margin:0;font-size:0.72rem;color:var(--vk-color-text-muted);",
                    },
                    () => sSig().role
                  )
                ),
                button(
                  {
                    "data-size": "sm",
                    "data-style-variant": () => sSig().following ? "primary" : "outline",
                    onclick: () => toggleFollow(sSig().id),
                  },
                  () => (sSig().following ? "Following" : "Follow")
                )
              )
            },
          ),
        ),
      ),
    ),
  );
}
