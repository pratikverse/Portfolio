export const profile = {
  name: "Pratik Shrivastava",
  title: "Software Engineer",
  tagline:
    "I build full-stack and ML-powered applications — from retrieval systems and recommenders to the APIs and interfaces that ship them.",
  email: "kpratik653@gmail.com",
  github: "https://github.com/pratikverse",
  linkedin: "https://linkedin.com/in/pratikshrivastava19",
  resumeUrl: "/Pratik-Shrivastava-Resume.pdf",
};

export const education = {
  degree: "B.Tech in Computer Science",
  school: "Manipal University Jaipur",
  period: "July 2022 — June 2026",
  detail:
    "Coursework: Data Structures, OOPs, Software Engineering, Computer Networking, DBMS, Cloud Computing, AI/ML",
};

export const experience = [
  {
    role: "Data Science Intern",
    org: "Dodge AI",
    period: "June 2025 — July 2025",
    points: [
      "Designed an end-to-end ML pipeline for customer purchase behavior prediction using regression models and Random Forests.",
      "Built a hybrid recommendation engine combining content-based and collaborative filtering for personalized recommendations.",
      "Ran exploratory data analysis and engineered behavioral/transactional features to improve prediction accuracy.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Siemens Technology & Services Pvt. Ltd.",
    period: "May 2024 — Aug 2024",
    points: [
      "Built a real-time frontend for an IIoT water-monitoring platform, visualizing live sensor data on interactive dashboards.",
      "Integrated REST APIs with near real-time updates for operational monitoring and historical trend analysis.",
      "Built GIS-based map visualizations with live meter status and anomaly alerts across multiple sites.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    category: "Software Development",
    items: ["OOPs", "Data Structures", "RESTful APIs", "JWT Auth"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "Node.js", "Express.js", "React"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    category: "ML & Data",
    items: ["TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "OpenCV", "Matplotlib"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Linux", "Docker"],
  },
];

export const projects = [
  {
    name: "Drape",
    summary:
      "AI-powered visual fashion search engine that finds visually similar catalog products from an uploaded photo — YOLOv8 for garment detection, DINOv2 for embeddings, and FAISS for similarity search. Generates NLP garment descriptions and retailer links directly from retrieval results, and runs real-time inference on a 20K-image catalog via AWS Lambda.",
    github: "https://github.com/pratikverse/Drape",
    live: "https://drape-orcin.vercel.app",
    tags: ["FastAPI", "React", "YOLOv8", "DINOv2", "FAISS"],
    featured: true,
  },
  {
    name: "Harmoniq",
    summary:
      "Hybrid music recommender blending autoencoder latent similarity, audio features, genre, and popularity into one ranked score, with a per-result panel explaining each signal's contribution. Ships recommendations, mood discovery, genre exploration, playlist building, and a 3D PCA visualization of the embedding space.",
    github: "https://github.com/pratikverse/Harmoniq",
    live: "https://harmoniq-ruddy.vercel.app",
    tags: ["FastAPI", "React", "Vite", "Spotify API"],
    featured: true,
  },
  {
    name: "Booktures",
    summary:
      "AI-powered book illustration pipeline that extracts text from PDFs via OCR, identifies characters with LLM-based NER and alias merging, and generates page-consistent illustrations by feeding a running visual profile into each prompt. Supports multiple LLM and image-generation backends (OpenAI, Gemini, Cloudflare Workers AI).",
    github: "https://github.com/pratikverse/Booktures",
    live: "https://booktures-rho.vercel.app",
    tags: ["OCR", "LLM NER", "Image Generation", "Supabase"],
    featured: true,
  },
  {
    name: "Palmify",
    summary:
      "Real-time hand gesture recognition system that detects hand landmarks from live webcam input to classify static poses and dynamic finger movements with low latency.",
    github: "https://github.com/pratikverse/Palmify",
    live: null,
    tags: ["MediaPipe", "TensorFlow Lite", "OpenCV"],
    featured: false,
  },
  {
    name: "ScribeAPI",
    summary:
      "Secure RESTful blogging API with JWT authentication, CRUD for posts, comments, and dynamic tagging on a scalable relational schema.",
    github: "https://github.com/pratikverse/ScribeAPI",
    live: null,
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    featured: false,
  },
  {
    name: "LMS-using-PHP",
    summary:
      "Full-stack library management system handling book catalog management, borrowing/return tracking, and role-based access for students, librarians, and admins.",
    github: "https://github.com/pratikverse/LMS-using-PHP",
    live: null,
    tags: ["PHP", "MySQL", "Bootstrap"],
    featured: false,
  },
];
