import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <Container className="px-4 md:px-8 lg:px-12">
      <span className="text-4xl">👋</span>
      <Heading className="font-black">
        Hi, I'm Dheeraj Atmakuri
      </Heading>

      <br />
      <Paragraph className="mb-4">
        I am a passionate <Highlight>Cloud & DevOps Engineer</Highlight> with strong expertise in 
        <Highlight> AWS, Azure, Kubernetes, Salesforce, and Python automation</Highlight>. I specialize in designing scalable infrastructures, automating deployments, and delivering solutions that enhance operational efficiency and system reliability.
      </Paragraph>
      <Paragraph className="mb-4">
        I enjoy building <Highlight>CI/CD pipelines, cloud-native applications, web platforms, and data-driven solutions</Highlight> that create meaningful business impact.
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-xl md:text-1.5xl lg:text-3xl mt-7 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <SpeedInsights />
      <Analytics />
    </Container>
  );
}
