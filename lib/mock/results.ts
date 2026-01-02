export interface ResultCase {
  id: string;
  artistName: string;
  handle: string;
  city: string;
  promoType: "Post" | "Reel" | "Story";
  goal: "Streams" | "Followers" | "Visibility";
  before: {
    views?: number;
    profileVisits?: number;
    linkClicks?: number;
    followers?: number;
    streams?: number;
  };
  after: {
    views?: number;
    profileVisits?: number;
    linkClicks?: number;
    followers?: number;
    streams?: number;
  };
  deltaLabel: string;
  date: string;
  screenshot?: string;
}

export const results: ResultCase[] = [
  {
    id: "1",
    artistName: "Kai Zen",
    handle: "@kaizen_music",
    city: "Atlanta, GA",
    promoType: "Post",
    goal: "Streams",
    before: {
      views: 1200,
      profileVisits: 340,
      linkClicks: 85,
      streams: 2800,
    },
    after: {
      views: 8900,
      profileVisits: 2100,
      linkClicks: 520,
      streams: 18600,
    },
    deltaLabel: "+564% streams",
    date: "2024-11-15",
    screenshot: "/demo/results/proof_01_novak_rap.png",
  },
  {
    id: "2",
    artistName: "Luna Nova",
    handle: "@lunanova_",
    city: "Los Angeles, CA",
    promoType: "Reel",
    goal: "Followers",
    before: {
      views: 2500,
      profileVisits: 680,
      linkClicks: 120,
      followers: 3200,
    },
    after: {
      views: 18400,
      profileVisits: 5400,
      linkClicks: 890,
      followers: 11200,
    },
    deltaLabel: "+250% followers",
    date: "2024-11-22",
    screenshot: "/demo/results/proof_02_lirix_music.png",
  },
  {
    id: "3",
    artistName: "Jax Flow",
    handle: "@jaxflowmusic",
    city: "Chicago, IL",
    promoType: "Story",
    goal: "Visibility",
    before: {
      views: 890,
      profileVisits: 210,
      linkClicks: 45,
      followers: 1500,
    },
    after: {
      views: 6200,
      profileVisits: 1800,
      linkClicks: 380,
      followers: 4200,
    },
    deltaLabel: "+597% reach",
    date: "2024-12-01",
    screenshot: "/demo/results/proof_03_ardiblaze.png",
  },
  {
    id: "4",
    artistName: "Sage Moon",
    handle: "@sagemoon",
    city: "New York, NY",
    promoType: "Post",
    goal: "Streams",
    before: {
      views: 3100,
      profileVisits: 920,
      linkClicks: 180,
      streams: 5600,
    },
    after: {
      views: 22100,
      profileVisits: 6800,
      linkClicks: 1350,
      streams: 43200,
    },
    deltaLabel: "+671% streams",
    date: "2024-11-28",
    screenshot: "/demo/results/proof_04_vala_wav.png",
  },
  {
    id: "5",
    artistName: "Blaze Carter",
    handle: "@blazecarter",
    city: "Houston, TX",
    promoType: "Reel",
    goal: "Followers",
    before: {
      views: 1800,
      profileVisits: 450,
      linkClicks: 95,
      followers: 2400,
    },
    after: {
      views: 14200,
      profileVisits: 3600,
      linkClicks: 720,
      followers: 8900,
    },
    deltaLabel: "+271% followers",
    date: "2024-12-05",
    screenshot: "/demo/results/proof_05_kronikbars.png",
  },
  {
    id: "6",
    artistName: "Maya Rivers",
    handle: "@mayarivers",
    city: "Miami, FL",
    promoType: "Story",
    goal: "Visibility",
    before: {
      views: 1500,
      profileVisits: 380,
      linkClicks: 75,
      followers: 2800,
    },
    after: {
      views: 9800,
      profileVisits: 2400,
      linkClicks: 490,
      followers: 6400,
    },
    deltaLabel: "+553% reach",
    date: "2024-11-19",
    screenshot: "/demo/results/proof_06_mirasounds.png",
  },
  {
    id: "7",
    artistName: "Zion Wave",
    handle: "@zionwave",
    city: "Oakland, CA",
    promoType: "Post",
    goal: "Streams",
    before: {
      views: 2100,
      profileVisits: 580,
      linkClicks: 110,
      streams: 4200,
    },
    after: {
      views: 15600,
      profileVisits: 4400,
      linkClicks: 850,
      streams: 31200,
    },
    deltaLabel: "+643% streams",
    date: "2024-12-08",
    screenshot: "/demo/results/proof_07_donidrift.png",
  },
  {
    id: "8",
    artistName: "Aria Sky",
    handle: "@ariasky_music",
    city: "Seattle, WA",
    promoType: "Reel",
    goal: "Followers",
    before: {
      views: 3200,
      profileVisits: 950,
      linkClicks: 200,
      followers: 4100,
    },
    after: {
      views: 23800,
      profileVisits: 7100,
      linkClicks: 1480,
      followers: 15200,
    },
    deltaLabel: "+271% followers",
    date: "2024-11-25",
    screenshot: "/demo/results/proof_08_rin_flow.png",
  },
  {
    id: "9",
    artistName: "Drake Jr.",
    handle: "@drakejr_official",
    city: "Toronto, ON",
    promoType: "Story",
    goal: "Visibility",
    before: {
      views: 1100,
      profileVisits: 290,
      linkClicks: 60,
      followers: 1900,
    },
    after: {
      views: 7400,
      profileVisits: 1900,
      linkClicks: 410,
      followers: 5100,
    },
    deltaLabel: "+573% reach",
    date: "2024-12-12",
    screenshot: "/demo/results/proof_09_kleo_verse.png",
  },
  {
    id: "10",
    artistName: "Neo Phoenix",
    handle: "@neophoenix",
    city: "Phoenix, AZ",
    promoType: "Post",
    goal: "Streams",
    before: {
      views: 2800,
      profileVisits: 820,
      linkClicks: 165,
      streams: 5100,
    },
    after: {
      views: 20100,
      profileVisits: 5900,
      linkClicks: 1180,
      streams: 38700,
    },
    deltaLabel: "+659% streams",
    date: "2024-11-30",
    screenshot: "/demo/results/proof_10_zani808.png",
  },
  {
    id: "11",
    artistName: "Roxie Lane",
    handle: "@roxielane",
    city: "Nashville, TN",
    promoType: "Reel",
    goal: "Followers",
    before: {
      views: 1900,
      profileVisits: 480,
      linkClicks: 100,
      followers: 2700,
    },
    after: {
      views: 14800,
      profileVisits: 3800,
      linkClicks: 780,
      followers: 9200,
    },
    deltaLabel: "+241% followers",
    date: "2024-12-03",
    screenshot: "/demo/results/proof_11_sirastage.png",
  },
  {
    id: "12",
    artistName: "Cruz Martinez",
    handle: "@cruzmartinez",
    city: "San Antonio, TX",
    promoType: "Story",
    goal: "Visibility",
    before: {
      views: 1400,
      profileVisits: 350,
      linkClicks: 70,
      followers: 2200,
    },
    after: {
      views: 9100,
      profileVisits: 2300,
      linkClicks: 460,
      followers: 5800,
    },
    deltaLabel: "+550% reach",
    date: "2024-12-10",
    screenshot: "/demo/results/proof_12_besobeats.png",
  },
  {
    id: "13",
    artistName: "Ivory Stone",
    handle: "@ivorystone",
    city: "Portland, OR",
    promoType: "Post",
    goal: "Streams",
    before: {
      views: 2300,
      profileVisits: 640,
      linkClicks: 125,
      streams: 4600,
    },
    after: {
      views: 17100,
      profileVisits: 4800,
      linkClicks: 950,
      streams: 33100,
    },
    deltaLabel: "+620% streams",
    date: "2024-12-07",
    screenshot: "/demo/results/proof_01_novak_rap.png",
  },
  {
    id: "14",
    artistName: "Miles Ahead",
    handle: "@milesahead",
    city: "Boston, MA",
    promoType: "Reel",
    goal: "Followers",
    before: {
      views: 2700,
      profileVisits: 780,
      linkClicks: 155,
      followers: 3500,
    },
    after: {
      views: 19900,
      profileVisits: 5800,
      linkClicks: 1150,
      followers: 12600,
    },
    deltaLabel: "+260% followers",
    date: "2024-11-27",
    screenshot: "/demo/results/proof_02_lirix_music.png",
  },
];

