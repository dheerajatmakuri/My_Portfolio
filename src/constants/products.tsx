import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/solid"; // Adjust the import based on your icon library

export const products = [
  {
    href: "https://utdallas.vercel.app/",
    title: "UTD Explorer",
    description:
      "A responsive React application showcasing the University of Texas at Dallas. Features include detailed program information, a campus gallery, student testimonials, and a contact form. Designed for seamless use across all devices. ",
    thumbnail: "/images/utdfront.png", // Replace with your image path
    images: ["/path/to/your/image1.png", "/path/to/your/image2.png"], // Replace with your image paths
    stack: ["Reactjs", "Tailwindcss"],
    slug: "aceternity",
  },
  {
    href: "https://algochurn.com",
    title: "Algochurn",
    description:
      "Practice for technical interviews with hands on coding challenges.",
    thumbnail: "/images/utdfront.png", // Replace with your image path
    images: ["/path/to/your/image3.png", "/path/to/your/image4.png"], // Replace with your image paths
    stack: ["Nextjs", "Tailwindcss"],
    slug: "algochurn",
    content: (
      <div>
        <Link
          type="button"
          href="/projects" // Adjust the href to the correct path
          aria-label="Go back to previous page"
          className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition"
        >
          <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
        </Link>
        <p>Sit eiusmod ex mol</p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ull
        </p>
      </div>
    ),
  },
];
