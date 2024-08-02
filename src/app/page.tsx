import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hello there, I am Dheeraj Atmakuri
      </Heading>

      <br />
      <Paragraph className="mb-4">
        I'm a versatile IT professional with expertise in{" "}
        <Highlight>Salesforce, Python, DevOps and Data Engineering</Highlight>.
        I love developing innovative solutions and web apps that drive business
        growth and impact millions of lives.
      </Paragraph>
      <Paragraph>
        At Accenture, I served as a software engineer for over 2 years,
        specializing in <Highlight>Salesforce.</Highlight> I am proficient in
        Sales Cloud, Service Cloud, and Lightning Web Components, with a proven
        track record of delivering custom applications and automation solutions
        that drive business growth.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-xl md:text-1.5xl lg:text-3xl mt-7 mb-4"
      >
        What I've been working on
      </Heading>
      <Products />
    </Container>
  );
}
