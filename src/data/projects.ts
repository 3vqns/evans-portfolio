export interface Project {
  id: string;
  title: string;
  outcome: string;
  role: string;
  stack: string[];
  category: "Research/ML" | "Security" | "Full-Stack" | "Java/OOP";
  tags: string[];
  sceneId: string;
  detailedDescription?: string;
  challenges?: string[];
  keyAchievements?: string[];
  technicalDetails?: string;
  metrics?: Array<{ label: string; value: string }>;
}

export const projects: Project[] = [
  {
    id: "sturgeon",
    title: "AI-Driven Sturgeon Breach Detection (YOLO-Based)",
    outcome:
      "Built an automated computer vision system to detect endangered sturgeon breach events in long-form video, earning 1st place at the MAC-AFS Conference and supporting real-world fisheries conservation research.",
    role: "Lead Developer & Researcher",
    stack: [
      "Python",
      "PyTorch",
      "YOLOv5 / YOLOv8",
      "OpenCV",
      "Roboflow",
      "Google Colab",
      "PyCharm",
    ],
    category: "Research/ML",
    tags: ["Computer Vision", "YOLO", "Conservation", "Award Winner"],
    sceneId: "sturgeon",
    metrics: [
      { label: "Award", value: "1st Place" },
      { label: "Conference", value: "MAC-AFS Conference" },
    ],
    detailedDescription:
      "Developed an end-to-end computer vision pipeline that analyzes hours of video footage to identify rare sturgeon surface-breach events. The system reduces the need for manual review by fisheries researchers and supports conservation efforts through automated, data-driven monitoring.",
    keyAchievements: [
      "Awarded 1st place at the MAC-AFS Conference, competing against graduate-level research",
      "Trained and fine-tuned YOLO-based object detection models on domain-specific sturgeon breach footage",
      "Built and curated a labeled dataset using manual annotation and Roboflow-assisted workflows",
      "Generated timestamps for detected breach events, enabling efficient review and validation",
      "Contributed directly to ongoing conservation-focused research initiatives",
    ],
    technicalDetails:
      "Leveraged YOLOv5 and YOLOv8 architectures, fine-tuning pre-trained models on a curated dataset of sturgeon breach events. Implemented data augmentation strategies to handle varying water conditions and lighting. Used OpenCV for video preprocessing and frame extraction. Developed post-processing pipeline to filter false positives and track detections across frames. Optimized model inference using PyTorch's JIT compilation and batch processing for efficient video analysis.",
  },
  {
    id: "aiid",
    title: "Image Origin Identifier + Router (AIID)",
    outcome:
      "Developed an image forensics pipeline that classifies images by generation source, including DALL·E, Midjourney, Stable Diffusion, and real photographs, and routes them to specialized detection models to improve robustness against AI-generated and manipulated content.",
    role: "Lead ML Engineer",
    stack: [
      "Python",
      "PyTorch",
      "CNN-based Classifiers",
      "Dataset Curation",
      "Routing Logic",
      "Experiment Tracking",
    ],
    category: "Research/ML",
    tags: ["Image Forensics", "CNN", "AI Detection"],
    sceneId: "aiid",
    detailedDescription:
      "Designed and implemented a multi-stage image forensics system that first predicts the generation origin of an image and then routes it to downstream detectors optimized for that category. This routing-based architecture enables more reliable analysis than a single, generalized detection model.",
    keyAchievements: [
      "Trained a CNN-based image source classifier distinguishing between real images and AI-generated images from DALL·E, Midjourney, and Stable Diffusion",
      "Built a routing layer that directs images to specialized detectors based on predicted origin",
      "Curated and labeled datasets spanning multiple image generation models and real-world photographs",
      "Improved robustness to real-world transformations through targeted dataset balancing and augmentation",
    ],
    technicalDetails:
      "Built a two-stage pipeline: first, a lightweight CNN classifier determines image origin category, then a routing layer directs the image to specialized detectors (each optimized for their specific domain). Used transfer learning from ImageNet-pretrained models, fine-tuning on custom datasets. Implemented data augmentation including compression artifacts, noise injection, and format conversions to improve robustness. Used PyTorch for model development and training, with custom data loaders for efficient batch processing.",
  },
  {
    id: "gonephishin",
    title: "Gone Phishin' – AI Phishing Detection Chrome Extension",
    outcome:
      "Built as part of a team at the Delaware State University Hackathon, this project delivers real-time phishing detection in the browser using AI-based email analysis and earned 3rd place overall.",
    role: "Full-Stack Engineer (Team Project)",
    stack: [
      "React (JavaScript)",
      "Flask",
      "Google Gemini API",
      "Chrome Extension APIs",
    ],
    category: "Security",
    tags: ["Chrome Extension", "NLP", "Hackathon", "Award Winner"],
    sceneId: "gonephishin",
    metrics: [
      { label: "Award", value: "3rd Place" },
      { label: "Event", value: "Delaware State University Hackathon" },
    ],
    detailedDescription:
      "Collaborated with a small team to design and build a Chrome extension that helps users identify phishing emails as they read them. The system analyzes email content using an AI-powered backend and surfaces clear warnings to support safer decision-making without disrupting the user experience.",
    keyAchievements: [
      "Awarded 3rd place at the Delaware State University Hackathon",
      "Contributed to a full end-to-end solution spanning frontend, backend, and AI analysis",
      "Helped integrate browser-based email analysis with an external AI service",
      "Focused on delivering a clean, intuitive user experience under tight time constraints",
      "Demonstrated strong teamwork, rapid iteration, and problem-solving in a competitive setting",
    ],
    technicalDetails:
      "Frontend built with React (Create React App) for the extension popup and content scripts. Used Chrome Extension Manifest V3 APIs to inject content scripts into Gmail pages. Backend Flask server handles API requests, integrates with Google Gemini API for NLP analysis, and returns structured threat assessments. Implemented caching to reduce API calls for repeated emails. Used Chrome storage API for user preferences and detection history.",
  },
  {
    id: "fico",
    title: "FICO Educational Analytics Challenge – Intent Classification",
    outcome:
      "As part of The Transformers Team, won the FICO Educational Analytics Challenge by building a machine learning model that classifies customer conversation intent from noisy, real-world text, achieving ~92% accuracy on FICO's Dataset.",
    role: "ML Engineer — The Transformers",
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "BERT-base-uncased",
      "Unsloth",
      "Google Colab",
    ],
    category: "Research/ML",
    tags: ["NLP", "BERT", "High Accuracy", "FICO"],
    sceneId: "fico",
    metrics: [
      { label: "Result", value: "Challenge Winners" },
      { label: "Accuracy", value: "~92%" },
    ],
    detailedDescription:
      "Competed in FICO's Educational Analytics Challenge as a member of The Transformers, where teams were tasked with accurately classifying customer service conversation intents under realistic conditions such as typos, informal language, and unstructured text. Our team delivered a high-performing BERT-based solution that balanced accuracy with efficiency for real-world deployment.",
    keyAchievements: [
      "Won the FICO Educational Analytics Challenge as The Transformers",
      "Achieved ~92% accuracy on the official golden dataset",
      "Fine-tuned BERT-base-uncased for domain-specific intent classification",
      "Leveraged Unsloth for efficient training and optimization",
      "Built a preprocessing pipeline tailored to noisy, real-world conversational data",
    ],
    technicalDetails:
      "Leveraged Hugging Face Transformers library with BERT-base-uncased as the base model. Fine-tuned using PyTorch with custom data loaders handling conversation preprocessing. Used Unsloth for faster training and memory optimization. Implemented comprehensive text preprocessing including normalization, handling of special characters, and context preservation. Applied techniques like learning rate scheduling, gradient accumulation, and mixed precision training. Optimized inference pipeline for sub-100ms latency per prediction.",
  },
  {
    id: "blackjack",
    title: "Medieval BlackJack (Java)",
    outcome:
      "Collaboratively built a fully playable BlackJack game in Java with our own little twist and new cards. We emphasized clean object-oriented design, iterative development, and team-based software engineering practices.",
    role: "Java Developer, SCRUM Master (Team Project)",
    stack: [
      "Java",
      "Object-Oriented Programming (OOP)",
      "Agile Project Management",
      "Game Logic",
      "Git (Collaborative Version Control)",
    ],
    category: "Java/OOP",
    tags: ["Java", "OOP", "Game Development"],
    sceneId: "blackjack",
    detailedDescription:
      "Worked as part of a team following an AGILE development structure, delivering a complete BlackJack game through incremental iterations. The project focused on applying core object-oriented programming principles while coordinating tasks, reviewing code, and integrating features in a collaborative environment.",
    keyAchievements: [
      "Developed a fully functional BlackJack game using Java and standard gameplay rules",
      "Applied AGILE methodologies including backlog, sprints, and regular check-ins",
      "Designed a clean object-oriented architecture with clear class responsibilities",
      "Collaborated with teammates using Git for version control and structured code integration",
      "Delivered features incrementally while maintaining code quality and stability",
    ],
    technicalDetails:
      "Built using pure Java with object-oriented design principles. Created separate classes for Card, Deck, Hand, Player, Dealer, and GameController. Implemented proper encapsulation with private fields and public methods. Used inheritance and polymorphism for extensibility. Managed game state transitions and player actions through well-defined interfaces. Used Git for version control with feature branches and pull requests for code review.",
  },
  {
    id: "expense",
    title: "Expense Tracker Web Application",
    outcome:
      "Built a lightweight web application for tracking and managing personal expenses, focused on clean UI, client-side logic, and practical data persistence without external frameworks.",
    role: "Frontend / Full-Stack Developer",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    category: "Full-Stack",
    tags: ["Web App", "State Management"],
    sceneId: "expense",
    detailedDescription:
      "Developed a browser-based expense tracker that allows users to log and review spending. The project emphasizes strong fundamentals in frontend development, state management, and user-centric interface design using vanilla web technologies.",
    keyAchievements: [
      "Built a fully functional expense tracking application using HTML, CSS, and JavaScript",
      "Implemented category-based organization and filtering of expenses",
      "Designed a responsive, mobile-friendly UI with modern layout techniques",
      "Added client-side data persistence so expenses are retained across sessions",
      "Demonstrated strong understanding of frontend fundamentals without relying on frameworks",
    ],
    technicalDetails:
      "Pure HTML, CSS, and JavaScript implementation with no frameworks. Used vanilla JavaScript for DOM manipulation and event handling. Implemented custom state management pattern using JavaScript objects and functions. Created responsive design using CSS Grid and Flexbox. Used localStorage API for data persistence. Built custom chart visualizations using Canvas API for expense analytics. Implemented form validation and error handling for user input.",
  },
];
