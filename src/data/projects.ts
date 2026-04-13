export interface Project {
  slug: string;
  title: string;
  timeline: string;
  shortDescription: string[];
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  demoType?: 'Live Demo' | 'Watch Demo' | 'App Store';
  videoDemo?: string;
  image: string;
  story: string;
  challenge: string;
  opportunity: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "budget-wizer",
    title: "Budget Wizer: Full-Stack Financial Suite",
    timeline: "Mar. 2026 – Present",
    shortDescription: [
      "Used React Native and Firebase NoSQL to sync multi-user expense data, achieving sub-second latency across devices.",
      "Built a Python CSV parser with strict validation rules, reducing manual data entry by 80%.",
      "Developed a SQL-backed transaction categorization engine, cutting manual budgeting time by 30%."
    ],
    techStack: ["React Native", "Firebase", "Python", "SQL"],
    githubLink: "https://github.com/Arman-Fathabadi/Budget-wizer",
    demoLink: "https://budget-wizer.web.app",
    demoType: "Live Demo",
    image: "/images/projects/budget-wizer.png",
    story: "Budget Wizer was born from a personal need to track expenses across different platforms seamlessly. My family needed a way to sync budget data without the lag associated with traditional spreadsheets.",
    challenge: "The primary technical hurdle was maintaining data consistency in a multi-user environment. Implementing optimistic UI updates with Firebase listeners was critical to achieve the 'sub-second' feel the users demanded.",
    opportunity: "This project allowed me to dive deep into NoSQL architecture and cross-platform mobile development using React Native, specifically focusing on complex state management for real-time applications.",
    features: ["Real-time Multi-user Sync", "Automated CSV Imports", "Categorization Engine", "Custom Analytics Dashboard"]
  },
  {
    slug: "fatal-chase",
    title: "FatalChase: 3D Survival Driving Game",
    timeline: "Feb. 2026 – Apr. 2026",
    shortDescription: [
      "Built a Unity 6 3D survival driving game with reactive AI pursuit, boost mechanics, and real-time physics.",
      "Designed the full C# gameplay loop including chase AI, timed objectives, and collision feedback systems.",
      "Integrated physics-based vehicle handling with spatial audio, shipping a cross-platform MVP for Windows and macOS."
    ],
    techStack: ["Unity 6", "C#", "3D Physics"],
    githubLink: "https://github.com/Arman-Fathabadi/FatalChase",
    demoType: "Watch Demo",
    videoDemo: "https://www.youtube.com/embed/placeholder", 
    image: "/images/projects/fatal-chase.png",
    story: "As a student at the Metropolitan Game Studio, I wanted to create a game that focused on the visceral feeling of speed and the tension of pursuit. FatalChase is the result of exploring advanced Unity physics.",
    challenge: "Balancing the AI pursuit speed against the player's boost mechanics without making the game unfair was the most difficult design challenge. I used a PID-controlled steering system for the AI cars.",
    opportunity: "Working on FatalChase gave me hands-on experience with C# system architecture in Unity, specifically managing complex game states and optimizing 3D physics for mid-tier hardware.",
    features: ["Reactive AI Pursuit System", "Physics-based Car Controller", "Dynamic Collision Feedback", "Spatial Audio Integration"]
  },
  {
    slug: "scientific-calculator",
    title: "Scientific Calculator: Java Graphing Suite",
    timeline: "Jan. 2026 – Feb. 2026",
    shortDescription: [
      "Engineered a BigDecimal math engine eliminating floating-point drift across complex trigonometric operations.",
      "Built a Graphics2D graphing module with zoom-adaptive coordinate mapping for real-time function scaling.",
      "Implemented a Shunting-yard expression parser handling 50+ unit-tested edge cases across nested logic."
    ],
    techStack: ["Java", "Graphics2D", "Algorithms"],
    githubLink: "https://github.com/Arman-Fathabadi/Scientific-Calculator",
    demoType: "Watch Demo",
    videoDemo: "https://www.youtube.com/embed/placeholder",
    image: "/images/projects/scientific-calculator.png",
    story: "Dissatisfied with the precision of standard floating-point calculators in my advanced calculus courses, I decided to build a tool that prioritized absolute accuracy using Java's BigDecimal.",
    challenge: "Developing a robust expression parser that could handle deeply nested parentheses and operator precedence (Shunting-yard algorithm) while being efficient enough for real-time graphing.",
    opportunity: "This project significantly sharpened my understanding of data structures and algorithms, as well as low-level UI rendering using Java's Graphics2D library.",
    features: ["High-Precision Math Engine", "Dynamic Function Graphing", "Advanced Expression Parsing", "Zoom-Adaptive Grid"]
  },
  {
    slug: "preptime",
    title: "PrepTime: AI-Driven Schedule Generation",
    timeline: "Dec. 2025 – Present",
    shortDescription: [
      "Architected a Next.js 14 and Zustand calendar interface, optimizing rendering across 50+ concurrent tasks.",
      "Built a FastAPI and Hugging Face inference pipeline deployed on Vercel for async schedule generation.",
      "Fixed TypeScript hydration errors, ensuring millisecond-accurate Pomodoro session tracking and data persistence."
    ],
    techStack: ["Next.js", "TypeScript", "FastAPI", "Zustand"],
    githubLink: "https://github.com/Arman-Fathabadi/Preptime-updated",
    demoLink: "https://preptime.vercel.app",
    demoType: "Live Demo",
    image: "/images/projects/preptime.png",
    story: "PrepTime is an all-in-one productivity tool designed to help students manage their time effectively using AI to automate the scheduling process based on priority and deadlines.",
    challenge: "Integrating an asynchronous AI pipeline with a highly reactive calendar interface. Ensuring Zustand state stayed in sync with the FastAPI backend without frequent re-renders was the key focus.",
    opportunity: "Leading the architecture of this project provided deep insights into Next.js App Router patterns and the deployment of microservices (FastAPI/Hugging Face) in a serverless environment.",
    features: ["AI Schedule Generator", "Interactive Task Calendar", "Integrated Pomodoro Timer", "Task Priority Management"]
  }
];
