import React from "react";
import Heading2 from "./Heading2";
import Subheading from "./Subheading";

function Technologies() {
  const tech = [
    {
      title: "Frontend",
      tech: "React.js, Next.js, React Native, Tailwind CSS, Aceternity UI, Shadcn UI",
    },
    {
      title: "Backend",
      tech: "Golang, Node.js, Express.js, Nest JS",
    },
    {
      title: "Database",
      tech: "PostgreSQL, MongoDB, Redis, Elasticsearch",
    },
    {
      title: "Infrastructure",
      tech: "Docker, Kubernates, AWS, Cloudflare, Linux",
    },
    {
      title: "Message Queues",
      tech: "Apacahe Kafka, RabbitMQ, NATS JetStream",
    },
    {
      title: "Observability",
      tech: "Kernel Events, Logs, Metrics, Alerts",
    },
  ];

  return (
    <>
      <div className="pt-20 px-5 lg:px-10" id="technologies">
        <section className="space-y-2">
          <Heading2>
            <span className="text-sky-500">Technology</span> Follows The Problem
          </Heading2>
          <Subheading>
            A focused stack, chosen for the job — not the trend.
          </Subheading>
        </section>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {tech.map((svc, i) => (
              <section
                className={`border-none border-slate-500/20 hover:border-sky-200 transition duration-300 cursor-pointer px-5 py-5 ${(i + 1) % 2 === 0 ? "bg-slate-500/10" : ""}`}
                key={svc.title}
              >
                <section className="mt-7">
                  <p className="text-md text-slate-500 font-sans font-semibold">
                    {svc.title}
                  </p>
                  <div className="flex mt-5 flex-wrap gap-5 text-sm">
                    {String(svc.tech)
                      .split(", ")
                      .map((tag) => (
                        <section
                          key={tag}
                          className="border-b py-2 text-xl font-semibold tracking-wide"
                        >
                          {tag}
                        </section>
                      ))}
                  </div>
                </section>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Technologies;
