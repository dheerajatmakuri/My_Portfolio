import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/solid"; // Adjust the import based on your icon library

export const products = [
  {
    href: "https://utdallas.vercel.app/",
    title: "UTD Explorer",
    description:
      "A responsive React application showcasing the University of Texas at Dallas. Features include detailed program information, a campus gallery, student testimonials, and a contact form. Designed for seamless use across all devices. ",
    thumbnail: "/images/utdfront.png", // Replace with your image path
    stack: ["Reactjs", "Tailwindcss"],
    slug: "utdexplorer",
  },
  {
    href: "yumrocket-frontend.onrender.com",
    title: "Yum Rocket",
    description:
      "A Food delivery app built using Mern Stack featuring an admin panel, JWT auth, and Stripe payment integration. This application combines MongoDB, Express.js, React, and Node.js to offer a scalable, secure, and user-friendly solution. ",
    thumbnail: "/images/yumrocket.png", // Replace with your image path
    stack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "JWT", "Stripe"],
    slug: "yumrocket",
  },
];
