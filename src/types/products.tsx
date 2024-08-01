import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string; // Allow both StaticImageData and string
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
