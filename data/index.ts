export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Now", link: "#now" },
  { name: "Blog", link: "https://thefifthwall.vercel.app/" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Software, systems, and calmer interfaces.",
    description:
      "Beyond the resume",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/me.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Built between Edmonton and everywhere else.",
    description:
      "Available for thoughtful product work",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tools I use to shape ideas.",
    description:
      "Practical stack choices",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full-stack product work.",
    description:
      "UI, APIs, data, and product decisions",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "From rough idea to usable system.",
    description: "Build notes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's build the clean version.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const icons = {
  react: "https://cdn.simpleicons.org/react/61DAFB",
  reactNative: "https://cdn.simpleicons.org/react/61DAFB",
  nextjs: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  vite: "https://cdn.simpleicons.org/vite/646CFF",
  vue: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",

  python: "https://cdn.simpleicons.org/python/3776AB",
  fastapi: "https://cdn.simpleicons.org/fastapi/009688",
  streamlit: "https://cdn.simpleicons.org/streamlit/FF4B4B",
  pandas: "https://cdn.simpleicons.org/pandas/FFFFFF",
  numpy: "https://cdn.simpleicons.org/numpy/4DABCF",
  scikitLearn: "https://cdn.simpleicons.org/scikitlearn/F7931E",

  nodejs: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
  express: "https://cdn.simpleicons.org/express/FFFFFF",
  ejs: "https://cdn.simpleicons.org/ejs/B4CA65",

  sqlite: "https://cdn.simpleicons.org/sqlite/74A9CF",
  postgresql: "https://cdn.simpleicons.org/postgresql/4169E1",
  mongodb: "https://cdn.simpleicons.org/mongodb/47A248",
  sqlalchemy: "https://cdn.simpleicons.org/sqlalchemy/D71F00",

  axios: "https://cdn.simpleicons.org/axios/5A29E4",
  chartjs: "https://cdn.simpleicons.org/chartdotjs/FF6384",
  jest: "https://cdn.simpleicons.org/jest/C21325",
  threejs: "https://cdn.simpleicons.org/threedotjs/FFFFFF",
  sass: "https://cdn.simpleicons.org/sass/CC6699",
  webpack: "https://cdn.simpleicons.org/webpack/8DD6F9",

  chrome: "https://cdn.simpleicons.org/googlechrome/4285F4",
  rss: "https://cdn.simpleicons.org/rss/FFA500",
  expo: "https://cdn.simpleicons.org/expo/FFFFFF",
  firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
  redux: "https://cdn.simpleicons.org/redux/764ABC",
  stripe: "https://cdn.simpleicons.org/stripe/635BFF",

  vercel: "https://cdn.simpleicons.org/vercel/FFFFFF",
  render: "https://cdn.simpleicons.org/render/46E3B7",
};

export const projects = [
  {
    id: 1,
    title: "FrameVault",
    des: "A local cinematography reference engine that searches FilmGrab, previews and curates scraped film stills, and stores selected frames offline with structured image metadata.",
    img: "/Logo/framevault.png",
    iconLists: [
      icons.react,
      icons.vite,
      icons.tailwind,
      icons.python,
      icons.fastapi,
      icons.sqlite,
      icons.axios,
    ],
    link: "https://github.com/easyvansh/FrameVault",
    signal: "Visual research",
  },
  {
    id: 2,
    title: "Thinking Studio",
    des: "A local-first Chrome new-tab extension that retrieves RSS and Atom feeds from curated sources and organizes articles into focused, searchable reading shelves.",
    img: "/Logo/Thinking Studio logo.png",
    iconLists: [
      icons.react,
      icons.typescript,
      icons.tailwind,
      icons.chrome,
      icons.rss,
    ],
    link: "https://thinking-dashboard-six.vercel.app",
    signal: "Knowledge systems",
  },
  {
    id: 3,
    title: "CelluloidFM",
    des: "A cinematic SomaFM radio player with station search, mood-based discovery, favorites, live track context, playlist export, and a browser-based audio visualizer.",
    img: "/Logo/Celluloid fm.png",
    iconLists: [
      icons.vue,
      icons.javascript,
      icons.threejs,
      icons.axios,
      icons.sass,
      icons.webpack,
    ],
    link: "https://celluloidfm.vercel.app/",
    signal: "Cinematic audio",
  },
  {
    id: 4,
    title: "ApplyIntel",
    des: "A full-stack job application tracker with CRUD workflows, pipeline filtering, follow-up queues, CSV export, response-rate analytics, and interactive dashboard visualizations.",
    img: "/Logo/Apply Intel Logo.png",
    iconLists: [
      icons.nextjs,
      icons.typescript,
      icons.python,
      icons.fastapi,
      icons.sqlalchemy,
      icons.sqlite,
      icons.chartjs,
    ],
    link: "https://github.com/easyvansh/ApplyIntel",
    signal: "Product analytics",
  },
  {
    id: 5,
    title: "Film Wizard",
    des: "A content-based movie recommendation application that uses TF-IDF, cosine similarity, and TMDB metadata to recommend films by title, cast, crew, genre, mood, or keyword.",
    img: "/Logo/2.png",
    iconLists: [
      icons.python,
      icons.streamlit,
      icons.pandas,
      icons.numpy,
      icons.scikitLearn,
    ],
    link: "https://github.com/easyvansh/Film-Wizard",
    signal: "Recommendation systems",
  },
  {
  id: 6,
  title: "Airways",
  des: "A flight search automation and analytics platform that orchestrates Google Flights searches across flexible departure dates, ranks itineraries by price, stops, and duration, and visualizes results through a local dashboard.",
  img: "/Logo/airways.png",
  iconLists: [
    "https://cdn.simpleicons.org/python/3776AB",
    "https://cdn.simpleicons.org/flask/FFFFFF",
    "https://cdn.simpleicons.org/selenium/43B02A",
    "https://cdn.simpleicons.org/googlechrome/4285F4",
    "https://cdn.simpleicons.org/json/FFFFFF",
    "https://cdn.simpleicons.org/html5/E34F26",
    "https://cdn.simpleicons.org/css/1572B6",
    "https://cdn.simpleicons.org/javascript/F7DF1E",
  ],
  link: "https://github.com/easyvansh/Airways",
  signal: "Automation systems",
},
  {
    id: 7,
    title: "News Nexus",
    des: "A full-stack news aggregation platform that normalizes stories from external providers, applies filtering and ranking, and presents them through search, categories, featured stories, and pagination.",
    img: "/Logo/1.png",
    iconLists: [
      icons.react,
      icons.vite,
      icons.tailwind,
      icons.nodejs,
      icons.express,
      icons.jest,
    ],
    link: "https://github.com/easyvansh/News-Nexus",
    signal: "Information design",
  },
  {
    id: 8,
    title: "Quick Wit",
    des: "A Python speed-reading tool that extracts text from documents and presents it through Rapid Serial Visual Presentation for focused, accelerated reading.",
    img: "/Logo/quick_wit_icon.png",
    iconLists: [icons.python],
    link: "https://github.com/easyvansh/Quickwit",
    signal: "Reading tools",
  },
  {
    id: 9,
    title: "Weather App",
    des: "A React Native weather application that presents current conditions, hourly forecasts, city information, and sunrise and sunset data through a responsive mobile interface.",
    img: "/Logo/3.png",
    iconLists: [
      icons.reactNative,
      icons.expo,
      icons.javascript,
    ],
    link: "https://github.com/easyvansh/Weather-App",
    signal: "Mobile UX",
  },
  {
    id: 10,
    title: "Shop Squad",
    des: "A cross-platform ecommerce application where users browse products, manage carts, check out, and join group purchases to unlock shared discounts.",
    img: "/Logo/4.png",
    iconLists: [
      icons.reactNative,
      icons.expo,
      icons.javascript,
      icons.nodejs,
    ],
    link: "https://github.com/easyvansh/shop-squad/tree/main",
    signal: "Social commerce",
  },
  {
    id: 11,
    title: "To Do List",
    des: "A frontend React task manager for creating, completing, editing, and deleting tasks through direct state updates and immediate interface feedback.",
    img: "/Logo/5.png",
    iconLists: [
      icons.react,
      icons.javascript,
    ],
    link: "https://github.com/easyvansh/To-Do-List",
    signal: "Productivity",
  },
  {
    id: 12,
    title: "URL Shortener",
    des: "A server-rendered URL shortening service that creates compact links, persists URL mappings in MongoDB, tracks redirects, and displays click counts.",
    img: "/Logo/6.png",
    iconLists: [
      icons.nodejs,
      icons.express,
      icons.mongodb,
      icons.ejs,
      icons.render,
    ],
    link: "https://github.com/easyvansh/URL-Shortner",
    signal: "Utility systems",
  },
];

export const currentlyBuilding = [
  {
    title: "ApplyIntel",
    label: "Application operating system",
    detail:
      "A structured workspace for tracking applications, follow-ups, and hiring pipelines.",
  },
  {
    title: "FrameVault",
    label: "Visual knowledge system",
    detail:
      "A searchable film reference engine built around structured metadata and image retrieval.",
  },
  {
    title: "CelluloidFM",
    label: "Media interface",
    detail:
      "An immersive music player focused on discovery, listening, and thoughtful interaction.",
  },
  {
    title: "Liberate",
    label: "Personal operating system",
    detail:
      "Exploring tools that help people organize work, reduce friction, and think more clearly.",
  },
];

export const selectedInterests = [
  "Information systems",
  "Human-computer interaction",
  "AI-assisted software",
  "Knowledge management",
  "Full-stack engineering",
  "Developer tools",
  "Data visualization",
  "System design",
  "Visual computing",
  "Film technology",
  "Computational storytelling",
];

export const currentObsessions = [
  "making software feel invisible",
  "why great interfaces feel like great film editing",
  "AI that helps people think more clearly",
  "turning visual archives into searchable knowledge",
  "designing systems that reduce cognitive load",
];

export const testimonials = [
  {
    quote:
      "Collaborating with Vansh was smooth, focused, and practical from day one. He brings curiosity, consistency, and care to the details that make products feel polished.",
    name: "Project Collaborator",
    title: "Software Team Member",
  },
  {
    quote:
      "Vansh is quick to learn, clear in communication, and thoughtful about turning rough ideas into working software.",
    name: "Peer Developer",
    title: "Hackathon Teammate",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineering",
    desc: "Building responsive React and Next.js interfaces with reusable components.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile Development",
    desc: "Creating React Native apps for Android and iOS with clean user flows.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Data & Recommendations",
    desc: "Exploring Python, pandas, and recommendation systems for useful discovery tools.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-stack Projects",
    desc: "Connecting frontends, APIs, databases, and deployment workflows into complete apps.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/easyvansh",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/easyvansh",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/easyvansh/",
  },
];
