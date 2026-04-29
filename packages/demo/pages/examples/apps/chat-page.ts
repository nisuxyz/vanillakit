import { computed, css, Each, signal } from "@vanillakit/vanillakit";
import {
  button,
  div,
  h2,
  h3,
  p,
  span,
  strong,
  textarea,
} from "@vanillakit/vanillakit";

type ThreadStatus = "Open" | "Pending" | "Resolved";
type ThreadPriority = "High" | "Medium" | "Low";
type Channel = "Email" | "Live chat" | "Slack";

interface ChatMessage {
  id: number;
  author: string;
  role: "customer" | "agent" | "system";
  text: string;
  time: string;
}

interface ChatThread {
  id: number;
  customer: string;
  company: string;
  channel: Channel;
  priority: ThreadPriority;
  status: ThreadStatus;
  unread: number;
  messages: ChatMessage[];
}

const cannedReplies = [
  "I checked the account and found the issue.",
  "Thanks for the context. I am confirming the next step now.",
  "I have shared a workaround while engineering reviews the fix.",
];

const seededThreads: ChatThread[] = [
  {
    id: 1,
    customer: "Nadia Patel",
    company: "Northstar Health",
    channel: "Email",
    priority: "High",
    status: "Open",
    unread: 2,
    messages: [
      {
        id: 1,
        author: "Nadia Patel",
        role: "customer",
        text: "Our finance export is missing yesterday's invoices after the sync completed.",
        time: "09:04",
      },
      {
        id: 2,
        author: "You",
        role: "agent",
        text: "Thanks. I am reviewing the billing logs and will confirm what changed in the export job.",
        time: "09:11",
      },
    ],
  },
  {
    id: 2,
    customer: "Chris Morgan",
    company: "Canvas Labs",
    channel: "Live chat",
    priority: "Medium",
    status: "Pending",
    unread: 0,
    messages: [
      {
        id: 3,
        author: "Chris Morgan",
        role: "customer",
        text: "Can you confirm whether SSO provisioning works with subteams?",
        time: "10:22",
      },
      {
        id: 4,
        author: "You",
        role: "agent",
        text: "Yes for team-level access. I am checking the nested-role limitation before I reply with setup steps.",
        time: "10:25",
      },
    ],
  },
  {
    id: 3,
    customer: "Mia Torres",
    company: "Lighthouse Media",
    channel: "Slack",
    priority: "Low",
    status: "Resolved",
    unread: 0,
    messages: [
      {
        id: 5,
        author: "Mia Torres",
        role: "customer",
        text: "The analytics widget is working again. Thank you for the patch.",
        time: "Yesterday",
      },
      {
        id: 6,
        author: "You",
        role: "agent",
        text: "Glad it helped. I will keep the incident open until the longer-term fix ships.",
        time: "Yesterday",
      },
    ],
  },
];

let nextMessageId = 7;

function priorityVariant(priority: ThreadPriority) {
  if (priority === "High") return "danger";
  if (priority === "Medium") return "warning";
  return "info";
}

function statusVariant(status: ThreadStatus) {
  if (status === "Resolved") return "success";
  if (status === "Pending") return "warning";
  return "primary";
}

function autoReplyFor(thread: ChatThread) {
  if (thread.priority === "High")
    return "I can confirm the export reran successfully. Please refresh once more and tell me if anything is still missing.";
  if (thread.channel === "Slack")
    return "Perfect. I added the details to the shared thread so the rest of your team can reuse them.";
  return "That helps. I tested the setup path and sent the exact steps you can follow on your side.";
}

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
  }
`;

const sidebarClass = css`
  width: 300px;
  flex-shrink: 0;
  border-right: 1px solid var(--vk-color-border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 48rem) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--vk-color-border);
    flex: 1;
  }
`;

const mainClass = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`;

const messagesClass = css`
  flex: 1;
  overflow-y: auto;
  padding: var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-md);
`;

const composerClass = css`
  flex-shrink: 0;
  border-top: 1px solid var(--vk-color-border);
  padding: var(--vk-space-md) var(--vk-space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--vk-space-sm);
  @media (max-width: 48rem) {
    padding: var(--vk-space-sm) var(--vk-space-md);
  }
`;

const hideMobileClass = css`
  @media (max-width: 48rem) { display: none !important; }
`;

const backBtnClass = css`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--vk-color-accent);
  font-size: var(--vk-font-size-sm);
  padding: var(--vk-space-sm) var(--vk-space-md);
  text-align: left;
  flex-shrink: 0;
  @media (max-width: 48rem) { display: block; }
`;

export function ChatAppPage() {
  const threads = signal<ChatThread[]>(seededThreads);
  const selectedThreadId = signal<number>(seededThreads[0].id);
  const composer = signal("");
  const replyTimers = new Set<number>();

  const threadSummary = computed(() => ({
    open: threads().filter((t) => t.status === "Open").length,
    pending: threads().filter((t) => t.status === "Pending").length,
    resolved: threads().filter((t) => t.status === "Resolved").length,
  }));

  const selectedThread = computed(
    () => threads().find((t) => t.id === selectedThreadId()) ?? null,
  );
  const selectedMessages = computed(() => selectedThread()?.messages ?? []);
  const mobileView = signal<"threads" | "messages">("threads");

  function updateThread(
    threadId: number,
    updater: (t: ChatThread) => ChatThread,
  ) {
    threads((list) => list.map((t) => (t.id === threadId ? updater(t) : t)));
  }

  function scheduleReply(threadId: number) {
    const timer = window.setTimeout(() => {
      replyTimers.delete(timer);
      const thread = threads.peek().find((t) => t.id === threadId);
      if (!thread) return;
      updateThread(threadId, (curr) => ({
        ...curr,
        status: curr.status === "Resolved" ? "Resolved" : "Open",
        unread: selectedThreadId.peek() === threadId ? 0 : curr.unread + 1,
        messages: [
          ...curr.messages,
          {
            id: nextMessageId++,
            author: curr.customer,
            role: "customer",
            text: autoReplyFor(curr),
            time: "Just now",
          },
        ],
      }));
    }, 900);
    replyTimers.add(timer);
  }

  function sendMessage(text = composer()) {
    const body = text.trim();
    const thread = selectedThread();
    if (!thread || !body) return;
    updateThread(thread.id, (curr) => ({
      ...curr,
      unread: 0,
      status: "Pending",
      messages: [
        ...curr.messages,
        {
          id: nextMessageId++,
          author: "You",
          role: "agent",
          text: body,
          time: "Now",
        },
      ],
    }));
    composer("");
    scheduleReply(thread.id);
  }

  const el = div(
    { class: appClass },

    /* ---- Sidebar ---- */
    div(
      { class: () => mobileView() === "messages" ? `${sidebarClass} ${hideMobileClass}` : sidebarClass },
      /* Stats header */
      div(
        {
          style:
            "padding:var(--vk-space-lg);border-bottom:1px solid var(--vk-color-border);flex-shrink:0;",
        },
        h3({ style: "margin:0 0 var(--vk-space-sm);" }, "Inbox"),
        div(
          { style: "display:flex;gap:8px;" },
          div(
            {
              style:
                "flex:1;background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;text-align:center;",
            },
            div(
              { style: "font-size:1.35rem;font-weight:700;" },
              () => `${threadSummary().open}`,
            ),
            div(
              { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
              "Open",
            ),
          ),
          div(
            {
              style:
                "flex:1;background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;text-align:center;",
            },
            div(
              { style: "font-size:1.35rem;font-weight:700;" },
              () => `${threadSummary().pending}`,
            ),
            div(
              { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
              "Pending",
            ),
          ),
          div(
            {
              style:
                "flex:1;background:var(--vk-color-surface);border:1px solid var(--vk-color-border);border-radius:var(--vk-radius-sm);padding:8px;text-align:center;",
            },
            div(
              { style: "font-size:1.35rem;font-weight:700;" },
              () => `${threadSummary().resolved}`,
            ),
            div(
              { style: "font-size:0.7rem;color:var(--vk-color-text-muted);" },
              "Resolved",
            ),
          ),
        ),
      ),
      /* Thread list */
      div(
        { style: "flex:1;overflow-y:auto;" },
        Each(
          {
            list: threads, key: (t) => t.id, render: (tSig) => div(
              {
                style: () => `padding:var(--vk-space-md) var(--vk-space-lg);border-bottom:1px solid var(--vk-color-border);cursor:pointer;background:${selectedThreadId() === tSig().id ? "var(--vk-color-surface-2)" : "transparent"};`,
                onclick: () => {
                  selectedThreadId(tSig().id);
                  updateThread(tSig().id, (curr) => ({ ...curr, unread: 0 }));
                  mobileView("messages");
                },
              },
              div(
                {
                  style: "display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;",
                },
                strong({ style: "font-size:0.85rem;" }, () => tSig().customer),
                () => tSig().unread > 0
                  ? span(
                    { "data-badge": true, "data-color-variant": "primary" },
                    `${tSig().unread}`
                  )
                  : null
              ),
              p(
                {
                  style: "margin:0 0 4px;color:var(--vk-color-text-muted);font-size:0.75rem;",
                },
                () => `${tSig().company} · ${tSig().channel}`
              ),
              p(
                {
                  style: "margin:0 0 6px;font-size:0.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;",
                },
                () => tSig().messages.at(-1)?.text ?? ""
              ),
              div(
                { style: "display:flex;gap:4px;" },
                span(
                  {
                    "data-badge": true,
                    "data-color-variant": () => statusVariant(tSig().status),
                  },
                  () => tSig().status
                ),
                span(
                  {
                    "data-badge": true,
                    "data-color-variant": () => priorityVariant(tSig().priority),
                  },
                  () => tSig().priority
                )
              )
            )
          },
        ),
      ),
    ),

    /* ---- Main panel ---- */
    div(
      { class: () => mobileView() === "threads" ? `${mainClass} ${hideMobileClass}` : mainClass },
      /* Thread header */
      () => {
        const thread = selectedThread();
        if (!thread)
          return div(
            {
              style:
                "flex:1;display:flex;align-items:center;justify-content:center;color:var(--vk-color-text-muted);",
            },
            "Select a conversation",
          );

        return div(
          { style: "flex-shrink:0;display:contents;" },

          /* Mobile back button */
          button({ class: backBtnClass, onclick: () => mobileView("threads") }, "← Inbox"),

          /* Header bar */
          div(
            {
              style:
                "flex-shrink:0;padding:var(--vk-space-md) var(--vk-space-lg);border-bottom:1px solid var(--vk-color-border);display:flex;align-items:center;justify-content:space-between;",
            },
            div(
              h2({ style: "margin:0;font-size:1rem;" }, thread.customer),
              p(
                {
                  style:
                    "margin:0;color:var(--vk-color-text-muted);font-size:0.78rem;",
                },
                `${thread.company} · ${thread.channel}`,
              ),
            ),
            div(
              { style: "display:flex;gap:6px;align-items:center;" },
              span(
                {
                  "data-badge": true,
                  "data-color-variant": statusVariant(thread.status),
                },
                thread.status,
              ),
              span(
                {
                  "data-badge": true,
                  "data-color-variant": priorityVariant(thread.priority),
                },
                thread.priority,
              ),
              button(
                {
                  "data-style-variant": "outline",
                  "data-size": "sm",
                  onclick: () =>
                    updateThread(thread.id, (curr) => ({
                      ...curr,
                      status: "Resolved",
                      unread: 0,
                    })),
                },
                "Resolve",
              ),
            ),
          ),

          /* Messages */
          div(
            { class: messagesClass },
            Each(
              {
                list: selectedMessages, key: (m) => m.id, render: (mSig) => div(
                  {
                    style: () => `display:flex;flex-direction:column;align-items:${mSig().role === "agent" ? "flex-end" : "flex-start"};`,
                  },
                  div(
                    {
                      style: "display:flex;align-items:center;gap:6px;margin-bottom:4px;",
                    },
                    strong({ style: "font-size:0.8rem;" }, () => mSig().author),
                    span(
                      {
                        "data-badge": true,
                        "data-color-variant": () => mSig().role === "agent" ? "primary" : undefined,
                      },
                      () => (mSig().role === "agent" ? "Support" : "Customer")
                    ),
                    span(
                      {
                        style: "font-size:0.7rem;color:var(--vk-color-text-muted);",
                      },
                      () => mSig().time
                    )
                  ),
                  div(
                    {
                      style: () => `max-width:70%;padding:10px 14px;border-radius:var(--vk-radius-lg);font-size:0.85rem;line-height:1.5;background:${mSig().role === "agent" ? "var(--vk-color-accent)" : "var(--vk-color-surface-2)"};color:${mSig().role === "agent" ? "#fff" : "var(--vk-color-text)"};`,
                    },
                    () => mSig().text
                  )
                )
              },
            ),
          ),

          /* Composer */
          div(
            { class: composerClass },
            div(
              { style: "display:flex;gap:6px;flex-wrap:wrap;" },
              ...cannedReplies.map((reply) =>
                button(
                  {
                    "data-size": "sm",
                    "data-style-variant": "outline",
                    onclick: () => sendMessage(reply),
                  },
                  reply,
                ),
              ),
            ),
            textarea({
              rows: "3",
              placeholder: "Type your reply...",
              style: "width:100%;resize:none;",
              value: () => composer(),
              oninput: (event: Event) =>
                composer((event.target as HTMLTextAreaElement).value),
              onkeydown: (event: KeyboardEvent) => {
                if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
                  event.preventDefault();
                  sendMessage();
                }
              },
            }),
            div(
              { style: "display:flex;justify-content:flex-end;" },
              button(
                {
                  "data-color-variant": "primary",
                  onclick: () => sendMessage(),
                },
                "Send reply",
              ),
            ),
          ),
        );
      },
    ),
  );

  /* Attach dispose to element removal */
  const observer = new MutationObserver(() => {
    if (!document.contains(el)) {
      for (const timer of replyTimers) window.clearTimeout(timer);
      replyTimers.clear();
      observer.disconnect();
    }
  });
  if (el.parentNode) observer.observe(el.parentNode, { childList: true });
  else
    requestAnimationFrame(() => {
      if (el.parentNode) observer.observe(el.parentNode, { childList: true });
    });

  return el;
}
