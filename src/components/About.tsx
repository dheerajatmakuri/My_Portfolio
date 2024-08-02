"use client";
import { Paragraph } from "@/components/Paragraph";

export default function About() {
  return (
    <div>
      <div className="max-w-5xl">
        <Paragraph className="mt-4">
          Hey there, I'm Dheeraj Atmakuri 👋
        </Paragraph>
        <Paragraph className="mt-4">
          I’m pursuing a Master’s in Information Technology and Management at
          The University of Texas at Dallas, specializing in business analytics
          and digital product management. This coursework is designed to bolster
          both my management and technical expertise.
        </Paragraph>
        <Paragraph className="mt-4">
          During my tenure at Accenture, I worked as a software engineer for
          over two years, focusing on Salesforce. I have expertise in Sales
          Cloud, Service Cloud, and Lightning Web Components, and I have
          successfully delivered custom applications and automation solutions
          that enhance business growth.
        </Paragraph>
        <Paragraph className="mt-4">
          I am actively seeking internship opportunities in fields of DevOps
          Engineering, Data Engineering, Data Analysis, Salesforce, and QA. I am
          available to start on December 15 and am eager to enhance my skills
          and expand my knowledge in these areas.
        </Paragraph>
        <Paragraph className="mt-4">
          <strong>Technical Skills:</strong>
        </Paragraph>
        <div className="text-sm lg:text-base font-normal text-secondary mt-4">
          <ul>
            <li>
              <strong>Salesforce:</strong> Sales Cloud, Service Cloud, Experience Cloud
            </li>
            <li><strong>Programming Languages:</strong> Python, JavaScript</li>
            <li><strong>Database Technologies:</strong> MongoDB, MySQL</li>
            <li><strong>Operating Systems:</strong> Windows, Linux</li>
            <li><strong>Cloud:</strong> Amazon AWS (EC2, IAM, Amplify)</li>
            <li><strong>Front-End Technologies:</strong> HTML, CSS, JavaScript, ReactJs</li>
            <li><strong>Visualization Tools:</strong> Tableau, Power BI</li>
          </ul>
        </div>
        <Paragraph className="mt-4">
          Let’s Connect
          I’m eager to discuss how I can contribute to your organization’s success. Feel free to reach out to me at dxa230020@utdallas.edu or connect with me on LinkedIn. I look forward to the possibility of working together.
        </Paragraph>
      </div>
    </div>
  );
}
