import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work Experience</Heading>
      <Paragraph className="max-w-xl mt-4">
      Currently mastering IT & Management at The University of Texas, with a focus on Business Analytics and Digital Product Management to sharpen my technical skills
      </Paragraph>
      <WorkHistory />
    </Container>
  );
}
