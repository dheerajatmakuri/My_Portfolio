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
        Hello there, I am Dheeraj Atmakuri
      </Heading>

      <br />
      <Paragraph className="mb-4">
        I am a versatile IT professional with expertise in{" "}
        <Highlight>Salesforce, Python, DevOps and Data Engineering</Highlight>.
        I love developing innovative solutions and web apps that drive business
        growth and impact millions of lives.
      </Paragraph>
      <Paragraph>
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-xl md:text-1.5xl lg:text-3xl mt-7 mb-4"
      >
        What I&apos;have been working on
      </Heading>
      <Products />
      <SpeedInsights />
      <Analytics/>
    </Container>
  );
}
