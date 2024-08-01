import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import About from "@/components/About";


export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
