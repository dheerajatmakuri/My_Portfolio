import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";


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
