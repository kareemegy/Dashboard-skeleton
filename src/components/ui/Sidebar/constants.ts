export interface ISidebarList {
  id: string | number;
  title: string;
  slug: string;
  icon?: string;
}

const DISCOVER_LIST: ISidebarList[] = [
  {
    id: 1,
    title: "Popular",
    icon: "🔥",
    slug: "/discover",
  },
  {
    id: 2,
    title: "Most upvoted",
    icon: "✔",
    slug: "/highvoted",
  },
  {
    id: 3,
    title: "Best Discussions",
    icon: "💕",
    slug: "/discussions",
  },
];

const CONTRIBUTE_LIST: ISidebarList[] = [
  {
    id: 1,
    title: "Submit Link",
    icon: "💬",
    slug: "/submit",
  },
  {
    id: 2,
    title: "Share Link",
    icon: "💬",
    slug: "/share",
  },
];

const MANAGE_LIST: ISidebarList[] = [
  {
    id: 1,
    title: "Manage",
    icon: "💬",
    slug: "/manage",
  },
  {
    id: 2,
    title: "Manage",
    icon: "💬",
    slug: "/manage",
  },
  {
    id: 3,
    title: "Manage",
    icon: "💬",
    slug: "/manage",
  },
];

export interface ISidebarMenu {
  id: string | number;
  title: string;
  content: ISidebarList[];
}

export const SIDEBAR_MENUS: ISidebarMenu[] = [
  {
    id: 1,
    title: "Discover",
    content: DISCOVER_LIST,
  },
  {
    id: 2,
    title: "Contributors",
    content: CONTRIBUTE_LIST,
  },
  {
    id: 3,
    title: "Manage",
    content: MANAGE_LIST,
  },
];
