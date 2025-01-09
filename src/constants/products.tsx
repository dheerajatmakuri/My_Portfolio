export const products = [
  {
    href: "",
    title: "CI/CD Pipeline for 3-Tier Application",
    description: "Designed and implemented a robust CI/CD pipeline leveraging Azure Pipelines and ArgoCD for a 3-tier application, automating the entire build, test, and deployment process. The application, consisting of a Python front-end, Redis for real-time voting, a .NET worker for processing, Postgres for persistent storage, and a Node.js results app, was containerized using Docker. The pipeline utilized Azure Kubernetes Service (AKS) for scalable container orchestration, integrated Azure Container Registry for storing Docker images, and employed Azure VM and Agent Pools to manage resource allocation efficiently. The solution ensured seamless deployment, inter-service communication, and persistent data handling, with GitOps-based continuous delivery facilitated by ArgoCD for managing Kubernetes configurations.",
    thumbnail: "/images/cicd_pipeline.png",
    stack: ["Azure Pipelines", "ArgoCD", "Python", "Redis", ".NET", "Postgres", "Node.js", "Docker", "AKS"],
    slug: "ci-cd-pipeline"
  },
  
  {
    href: "https://yumrocket-frontend.onrender.com",
    title: "Yum Rocket",
    description:
      "A Food Delivery App built with the MERN stack, featuring an admin panel, JWT auth, and Stripe integration. This scalable, secure, and user-friendly solution combines MongoDB, Express.js, React, and Node.js.",
    thumbnail: "/images/yumrocket.png",
    stack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "JWT", "Stripe"],
    slug: "yumrocket",
  },
  {
    href: "https://utdallas.vercel.app/",
    title: "UTD Explorer",
    description:
      "Developed a responsive React application showcasing The University of Texas at Dallas, featuring detailed program information, a campus gallery, student testimonials, and a contact form optimized for all devices. Dockerized the application for consistent deployment across environments and deployed the Dockerized application on AWS, ensuring scalability and reliability.",
    thumbnail: "/images/utdfront.png", // Replace with your image path
    stack: ["Reactjs", "Tailwindcss"],
    slug: "utdexplorer",
  },
  {
    href: "https://public.tableau.com/views/Blinkit_17225251155680/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    title: "BLINK IT Grocery Delivery App Analysis",
    description:
    "BLINKIT Grocery Delivery App dashboard shows ₹1.21M in total sales, a 4.39 average rating, and 8.52K snack items. In 2019, sales topped ₹700K, with Zone A leading at ₹423.15K.",
    thumbnail: "/images/blinkit.png", // Replace with your image path
    stack: ["Data Visualization", "Tableau", "Data Analysis",  "Analytics"],
    slug: "blinkit",
  },
  {
    href: "https://dheeraj-store.vercel.app/",
    title: "Ecommerce Store",
    description:
      "Developed a responsive ecommerce store using HTML, CSS, and JavaScript, featuring a user-friendly interface, dynamic product listings, and seamless cart functionality. ",
    thumbnail: "/images/store.png", // Replace with your image path
    stack: ["Vanillajs", "HTML5", "CSS3", "UI/UX"],
    slug: "store",
  },
  {
    href: "https://public.tableau.com/views/Netflix_Data_Analysis_17184481523410/NETFLIXDataAnalysis?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    title: "Netflix Data Analysis",
    description:
      "This Tableau dashboard analyzes Netflix’s catalog, highlighting global distribution, genre breakdown, ratings, and yearly trends. It dashboard offers strategic insights.",
    thumbnail: "/images/netflix.png", // Replace with your image path
    stack: ["Data Visualization", "Tableau", "Data Analysis",  "Analytics"],
    slug: "netflix",
  },
  {
    href: "https://public.tableau.com/views/WorkplaceMobilityvs_COVID-19CasesinTexas/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    title: "Texas Mobility Reports Anaysis Using Tableau",
    description:
      "This project examines the impact of COVID-19 policies on human mobility in Texas counties using Google's anonymized data. It aims to understand behavioral changes due to these measures, informing future policy decisions.",
    thumbnail: "/images/covid.png", // Replace with your image path
    stack: ["Data Visualization", "Tableau", "Data Analysis",  "Analytics"],
    slug: "covid",
  },
  {
    href: "https://github.com/dheerajatmakuri/Registered_Vehicle_Management_Database_System.git",
    title: "Registered Vehicle Management System using SQL",
    description:
      "The Registered Vehicle Management System, using a SQL database, streamlines registration, enhances safety and compliance, reduces manual errors, and improves tracking and reporting for a more organized system.",
    thumbnail: "/images/sql.png", // Replace with your image path
    stack: ["MySQL", "Workbench", "TeamWork",  "Project Planning"],
    slug: "rvm",
  },
  {
    href: "https://github.com/dheerajatmakuri/Youtube-Manager-Using-SQLite",
    title: "YouTube Manager Using Python, SQLite3",
    description:
      "This Python script provides a simple command-line application to manage YouTube videos using an SQLite database. It lets you list, add, update, and delete video records.",
    thumbnail: "/images/python.png", // Replace with your image path
    stack: ["Python", "SQLite3"],
    slug: "yt",
  },

  
  
];
