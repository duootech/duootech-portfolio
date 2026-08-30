import React from "react";
import Heading2 from "./Heading2";
import Subheading from "./Subheading";
import { RiRobot2Line } from "react-icons/ri";
import { LuLayers } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { IoLogoAndroid } from "react-icons/io";
import { MdOutlineCloud } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";

const services = [
  {
    title: "AI Automation & Workflows",
    desc: "Agents, integrations and process automation that move work forward without adding headcount.",
    tags: "AI Agents, API Integrations, Automation",
    icon: <RiRobot2Line size={25} className="text-sky-400" />,
  },
  {
    title: "SaaS Development",
    desc: "Production-ready MVPs and multi-tenant systems built around the way your business actually works.",
    tags: "Production-grade Systems, Dashboards, Backend Systems",
    icon: <LuLayers size={25} className="text-sky-400" />,
  },
  {
    title: "DevOps & Cloud",
    desc: "From a blank VPS to a monitored production environment, we keep the path to launch clear.",
    tags: "Docker & Kubernates, CI/CD, Monitoring",
    icon: <MdOutlineCloud size={25} className="text-sky-400" />,
  },
  {
    title: "Digital Infrastructure",
    desc: "The dependable layer beneath the product: architecture, observability, queues, security and scale.",
    tags: "Kafka, Message Queus, Security",
    icon: <FiDatabase size={25} className="text-sky-400" />,
  },
  {
    title: "Custom Software",
    desc: "The internal tools, platforms and APIs that turn your operational knowledge into leverage.",
    tags: "Business Platforms, Internal Tools, APIs",
    icon: <IoCodeSlash size={25} className="text-sky-400" />,
  },
  {
    title: "Android Applications",
    desc: "Production-ready React Native applications with seamless cross-platform experiences, real-time capabilities, and robust API integrations.",
    tags: "Deployment, Real-time, Cross-Platform",
    icon: <IoLogoAndroid size={25} className="text-sky-400" />,
  },
];

function WhatWeDo() {
  return (
    <>
      <div id="what-we-build">
        <div className="pt-30 px-5 lg:px-10">
          <div className="space-y-2">
            <Heading2 highlight="Build">What We</Heading2>
            <Subheading>
              Not an agency menu. A set of engineering capabilities for the
              problems that matter.
            </Subheading>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {services.map((svc, i) => (
                <section
                  className={`border border-slate-500/20 hover:border-sky-200 transition duration-300 cursor-pointer px-5 py-5 ${(i + 1) % 2 !== 0 ? "bg-slate-500/10" : ""}`}
                  key={svc.title}
                >
                  {svc.icon}
                  <section className="mt-7">
                    <p className="text-xl font-sans font-semibold">
                      {svc.title}
                    </p>
                    <p className="text-white/60 text-md mt-2">{svc.desc}</p>
                    <div className="flex mt-5 flex-wrap gap-3 text-sm">
                      {String(svc.tags)
                        .split(", ")
                        .map((tag) => (
                          <section
                            key={tag}
                            className="border px-3 py-2 rounded-sm"
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
      </div>
    </>
  );
}

export default WhatWeDo;
