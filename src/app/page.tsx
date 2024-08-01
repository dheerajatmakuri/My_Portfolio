import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Dheeraj Atmakuri</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a versatile IT professional with expertise in <Highlight>Salesforce, Python, DevOps and Data Engineering</Highlight>. I love developing innovative solutions and web apps that drive business growth and impact millions of lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        At Accenture, I served as a software engineer for over 2 years, specializing in <Highlight>Salesforce.</Highlight> I am proficient in Sales Cloud, Service Cloud, and Lightning Web Components, with a proven track record of delivering custom applications and automation solutions that drive business growth.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}