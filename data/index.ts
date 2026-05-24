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
    title: "Beyond the Resume",
    description:
      "I am interested in software that solves real workflow problems with clear architecture and thoughtful UX.",
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
      "I like remote collaboration, async notes, and turning scattered ideas into clean product decisions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tools I Think With",
    description:
      "Less hype stack, more thoughtful choices that help ideas become usable.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Frontend, backend, data, and interface design.",
    description:
      "I like building across the stack: clean UI, reliable APIs, useful data models, and practical product decisions.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "I like turning rough ideas into working product systems.",
    description: "The build notes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have a product idea? Let's build a clean version of it.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Thinking Studio",
    des: "A local-first Chrome new-tab extension that turns every new tab into a personal reading studio. It pulls real RSS/Atom updates from curated intellectual sources, organizes them into shelves, and gives readers a fast place to search, save, and return to good ideas.",
    img: "/Logo/Thinking Studio logo.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/re.svg"],
    link: "https://thinking-dashboard-six.vercel.app",
    signal: "Knowledge systems",
  },
  {
    id: 2,
    title: "CelluloidFM",
    des: "A cinematic SomaFM radio player built around station discovery, mood-based browsing, favorites, now-playing track context, and an ambient audio visualizer.",
    img: "/Logo/Celluloid fm.png",
    iconLists: [
      "/vue.svg",
      "/js.svg",
      "/three.svg",
      "/axios.svg",
      "/vercel.svg",
    ],
    link: "https://celluloidfm.vercel.app/",
    signal: "Cinematic audio",
  },
  {
    id: 3,
    title: "ApplyIntel",
    des: "A full-stack job application tracking and analytics dashboard that turns a scattered job search into a structured system. It simulates a lightweight ATS for individual job seekers with workflow management, pipeline insights, and follow-up tracking.",
    img: "/Logo/Apply Intel Logo.png",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/mongodb-icon-1.svg",
      "/nodejs.svg",
    ],
    link: "https://github.com/easyvansh/ApplyIntel",
    signal: "Product analytics",
  },
  {
    id: 4,
    title: "Quick Wit",
    des: "A speed reading application built around Rapid Serial Visual Presentation. Quick Wit helps people move through text documents and PDFs at an accelerated pace while staying focused on comprehension.",
    img: "/Logo/quick_wit_icon.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://github.com/easyvansh/Quick-Wit",
    signal: "Reading tools",
  },
  {
    id: 5,
    title: "News Nexus",
    des: "A real-time news aggregation platform designed to reduce information overload and surface meaningful stories across multiple sources with clean retrieval and modular content systems.",
    img: "/Logo/1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb-icon-1.svg",
      "/nodejs.svg",
    ],
    link: "https://github.com/easyvansh/News-Nexus",
    signal: "Information design",
  },
  {
    id: 6,
    title: "Film Wizard",
    des: "A movie recommendation engine built with Python data tooling to explore metadata, genre, and similarity-based discovery.",
    img: "/Logo/2.png",
    iconLists: ["/py.svg", "/numpy.svg", "/pandas.svg", "/jupyter.png", "/imdb.svg"],
    link: "https://github.com/easyvansh/Film-Wizard",
    signal: "Recommendation systems",
  },
  {
    id: 7,
    title: "Weather App",
    des: "A minimalist weather application built in React Native with an emphasis on speed, clarity, and mobile-first interaction design.",
    img: "/Logo/3.png",
    iconLists: [
      "/react-native.svg",
      "/expo.svg",
      "/tail.svg",
      "/firebase.svg",
      "/react-native-firebase.svg",
    ],
    link: "https://github.com/easyvansh/Weather-App",
    signal: "Mobile UX",
  },
  {
    id: 8,
    title: "Shop Squad",
    des: "A collaborative ecommerce concept exploring group-buy dynamics inside a mobile shopping experience with cross-platform React Native architecture.",
    img: "/Logo/4.png",
    iconLists: [
      "/react-native.svg",
      "/expo.svg",
      "/tail.svg",
      "/firebase.svg",
      "/react-native-firebase.svg",
    ],
    link: "https://github.com/easyvansh/shop-squad/tree/main",
    signal: "Social commerce",
  },
  {
    id: 9,
    title: "To Do List",
    des: "A lightweight productivity system designed around clarity instead of feature overload, built to explore state management and fast UI feedback loops in React.",
    img: "/Logo/5.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb-icon-1.svg",
      "/nodejs.svg",
    ],
    link: "https://github.com/easyvansh/To-Do-List",
    signal: "Productivity",
  },
  {
    id: 10,
    title: "URL Shortener",
    des: "A clean URL shortening service focused on simplicity, fast redirects, and minimal interface friction.",
    img: "/Logo/6.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/mongodb-icon-1.svg",
      "/nodejs.svg",
    ],
    link: "https://github.com/easyvansh/URL-Shortner",
    signal: "Utility systems",
  },
];

export const currentlyBuilding = [
  {
    title: "Thinking Studio",
    label: "Curated reading workspace",
    detail:
      "A calmer knowledge interface for RSS, saved ideas, and personal reading rituals.",
  },
  {
    title: "CelluloidFM",
    label: "Cinematic audio interface",
    detail:
      "A SomaFM player shaped around station discovery, mood browsing, favorites, and immersive listening.",
  },
  {
    title: "ApplyIntel",
    label: "Job search operating system",
    detail:
      "A structured dashboard for applications, follow-ups, analytics, and pipeline clarity.",
  },
  {
    title: "Liberate",
    label: "Productivity tooling",
    detail:
      "Exploring software that helps people organize work and move faster.",
  },
  {
    title: "Grey Matter",
    label: "Developer experiments",
    detail:
      "Experiments around AI, data modeling, dashboards, and interface design.",
  },
];

export const selectedInterests = [
  "Human-computer interaction",
  "AI-assisted knowledge systems",
  "Full-stack development",
  "Developer tooling",
  "Product analytics",
  "Data dashboards",
  "Recommendation systems",
  "Mobile-first interfaces",
];

export const currentObsessions = [
  "how to make dashboards feel fast and focused",
  "AI features that solve real user problems",
  "systems that reduce repetitive work",
  "clean component architecture in production apps",
  "interfaces that make complex workflows easier to understand",
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
