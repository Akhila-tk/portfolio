// Edit this file to change what appears on the portfolio.

export const profile = {
  name: "Akhila T K",
  location: "Kasaragod, Kerala",
  email: "akhilatk111@gmail.com",
  linkedin: "https://www.linkedin.com/in/akhila-t-k-5519372b6/",
  github: "https://github.com/Akhila-tk",
  summary:
    "I build responsive, user-friendly interfaces in React.js and connect them to Python FastAPI services.",
  summaryMuted:
    "I work with Redux Toolkit and Context API for state, and use Git, Postman and VS Code every day for version control, API testing and development.",
};

export const marquee = [
  "React.js", "JavaScript ES6+", "Redux Toolkit", "Tailwind CSS", "Python FastAPI",
  "REST APIs", "MySQL", "MongoDB", "Git & GitHub", "Postman",
];

export const stats = [
  { value: "2 yrs", label: "Building ERP software" },
  { value: "2", label: "Major projects" },
  { value: "7.18", label: "B.Tech CGPA" },
  { value: "3", label: "Languages spoken" },
];

export const projects = [
  {
    period: "Oct 2024 – Present",
    title: "CAERP: HR & Payroll Management System",
    points: [
      "HR and payroll modules covering employee management, attendance, recruitment, appraisal, transfer and promotion, and work orders.",
      "Responsive React.js interfaces integrated with asynchronous FastAPI services and REST APIs.",
      "Redux Toolkit, reusable components, dynamic form validation and keyboard navigation for easier maintenance and a smoother user experience.",
    ],
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "FastAPI", "REST APIs", "MySQL"],
    links: [], // e.g. [{ label: "Visit site", href: "https://..." }]
  },
  {
    period: "E-commerce platform",
    title: "IndiaTaxProfessionals.com",
    points: [
      "Built the Customer Module of a tax service e-commerce platform.",
      "Service browsing and purchase, location-based provider selection, document uploads, online payments and invoice downloads.",
      "Scalable RESTful APIs in Python FastAPI, with relational data managed in MySQL.",
    ],
    tags: ["React.js", "Tailwind CSS", "FastAPI", "MySQL"],
    links: [], // add { label: "Visit site", href: "https://your-site-url" }
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript (ES6+)", "Python", "SQL"] },
  { group: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive design", "SPA", "Component-based architecture", "Cross-browser compatibility"] },
  { group: "State management", items: ["Redux Toolkit", "Redux", "Context API"] },
  { group: "Backend & APIs", items: ["Python FastAPI", "Node.js", "Express.js", "RESTful APIs", "API integration", "JSON", "Async/Await"] },
  { group: "Databases", items: ["MySQL", "MongoDB", "Relational databases", "CRUD operations"] },
  { group: "Tools & platforms", items: ["Git", "GitHub", "Postman", "VS Code", "API testing"] },
  { group: "Also", items: ["Reusable UI components", "Form validation", "Debugging", "Performance optimization", "UI testing", "Payment integration", "ERP systems"] },
];

export const experience = [
  {
    when: "Oct 2024 – Present",
    title: "Software Developer",
    org: "BRQ Glob Tech Pvt Ltd",
    points: [
      "Developed responsive, modern web interfaces for an HR & Payroll ERP system using React.js and Tailwind CSS.",
      "Built and maintained feature modules including Employee Management, Attendance, Recruitment and Work Order Management.",
      "Integrated React front-end components with Python FastAPI backend services for seamless data communication and REST API consumption.",
      "Implemented Redux Toolkit for centralized state management, with reusable UI components and dynamic form validations.",
      "Debugged and resolved front-end issues to improve performance, responsiveness and user experience.",
    ],
  },
  {
    when: "July 2019 – July 2023",
    title: "B.Tech, Electronics and Communication Engineering",
    org: "LBS College of Engineering, Kasaragod · CGPA 7.18",
    points: [],
  },
];

export const certifications = [
  "Java Full Stack Developer Course · JSpiders",
  "Coding Skills · Additional Skill Acquisition Programme (ASAP)",
];

export const languages = ["English", "Malayalam", "Hindi"];
