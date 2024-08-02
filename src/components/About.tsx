"use client";
import { Paragraph } from "@/components/Paragraph";

export default function About() {
  return (
    <div>
      <div className="max-w-5xl">
        <Paragraph className="mt-4">
          Hey there, I am Dheeraj Atmakuri 👋
        </Paragraph>

        <Paragraph className="mt-4">
          I am pursuing a{" "}
          <span className="text-blue-500">
            Master’s in Information Technology and Management
          </span>{" "}
          at
          <span className="text-blue-500">
            {" "}
            The University of Texas at Dallas
          </span>
          , specializing in
          <span className="text-blue-500"> business analytics</span> and
          <span className="text-blue-500"> digital product management</span>.
          This coursework is designed to bolster both my management and
          technical expertise
        </Paragraph>

        <Paragraph className="mt-4">
          During my tenure at <span className="text-blue-500">Accenture</span>,
          I worked as a <span className="text-blue-500">software engineer</span>{" "}
          for over two years, focusing on{" "}
          <span className="text-blue-500">Salesforce</span>. I have expertise in{" "}
          <span className="text-blue-500">Sales Cloud</span>,{" "}
          <span className="text-blue-500">Service Cloud</span>, and{" "}
          <span className="text-blue-500">Lightning Web Components</span>, and I
          have successfully delivered{" "}
          <span className="text-blue-500">custom applications </span> and{" "}
          <span className="text-blue-500">automation solutions </span>
          that enhance <span className="text-blue-500">business growth</span>.
        </Paragraph>

        <Paragraph className="mt-4">
          I am actively seeking internship opportunities in fields of{" "}
          <span className="text-blue-500">DevOps</span>,{" "}
          <span className="text-blue-500">Data Engineering</span>,{" "}
          <span className="text-blue-500">Data Analysis</span>,{" "}
          <span className="text-blue-500">Salesforce</span>, and{" "}
          <span className="text-blue-500">QA</span>. I am available to start on{" "}
          <span className="text-orange-500">December 15</span> and am eager to
          enhance my skills and expand my knowledge in these areas.
        </Paragraph>

        <Paragraph className="mt-4">
          <strong>Technical Skills:</strong>
        </Paragraph>
        <div className="text-sm lg:text-base font-normal text-secondary mt-4">
          <ul>
            <li>
              <strong>Salesforce:</strong> Sales Cloud, Service Cloud,
              Experience Cloud
            </li>
            <li>
              <strong>Programming Languages:</strong> Python, JavaScript
            </li>
            <li>
              <strong>Database Technologies:</strong> MongoDB, MySQL
            </li>
            <li>
              <strong>Operating Systems:</strong> Windows, Linux
            </li>
            <li>
              <strong>Cloud:</strong> Amazon AWS (EC2, IAM, Amplify)
            </li>
            <li>
              <strong>Front-End Technologies:</strong> HTML, CSS, JavaScript,
              ReactJs
            </li>
            <li>
              <strong>Visualization Tools:</strong> Tableau, Power BI
            </li>
          </ul>
        </div>
        <Paragraph className="mt-4">
          Let’s Connect I’m eager to discuss how I can contribute to your
          organization’s success. Feel free to reach out to me at
          dxa230020@utdallas.edu or connect with me on LinkedIn. I look forward
          to the possibility of working together.
        </Paragraph>
      </div>
    </div>
  );
}
