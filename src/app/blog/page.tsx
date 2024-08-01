import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";

// export const metadata: Metadata = {
//   title: "Blogs | John Doe",
//   description:
//     "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
// };

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">Education</Heading>
      <Blogs blogs={data} />
    </Container>
  );
}
