import React from "react";
import Cafe from "@/assests/cafe.png";
import Cloth from "@/assests/cloth.png";
import Gym from "@/assests/gym.png";
import Hookr from "@/assests/hookr.png";
import Image from "next/image";
import Heading2 from "./Heading2";
import Subheading from "./Subheading";

function FeaturedWork() {
  const products = [
    {
      title: "Gym Management Platform",
      desc: "A complete digital management system for handling members, subscriptions, member improvement tracking and daily operations.",
      tags: "Member management, Renewal subscription, Improvement tracking, Trainer management, Reports",
      img: Gym,
    },
    {
      title: "Café Management System",
      desc: "Software to manage multiple outlets with multiple staff, real-time monitoring, monthly report and fast billing process.",
      tags: "Real-time monitoring, Multiple outlet management, POS Billing, Auto report generation",
      img: Cafe,
    },
    {
      title: "E-commerce Platform",
      desc: "A flexible commerce foundation for managing products, customers and the full online buying journey.",
      tags: "Product management, Inventory, Payment Gateway integration, Auto-report generation, Product-based report generation, POS invoice generation",
      img: Cloth,
    },
    {
      title: "Hookr",
      desc: "Webhook Delivery SaaS with DLQ retry mechanism, AI automation and real-time delivery montoring.",
      tags: "DLQ, n8n, LLM, Real-time monitoring, SaaS, AI Automation, CRM Integration, Email & Slack Notification",
      img: Hookr,
    },
  ];

  return (
    <>
      <div
        className="pt-20 py-20 px-5 lg:px-10 bg-linear-to-br from-teal-500 to-sky-600 mt-20"
        id="our-products"
      >
        <section>
          <h2 className="text-center font-sans text-4xl font-black leading-[1.05] tracking-tight">
            Our <span className="text-black">Products</span>
          </h2>
          <p className="text-center text-balance text-base text-black text-xl mt-2">
            Real business systems, shaped around the people who use them every
            day.
          </p>
        </section>
        <div className="space-y-5 mt-20">
          {products.map((prod, i) => (
            <div
              key={prod?.title}
              className={`flex flex-col xl:flex-row items-start pb-5 border-black ${i === products.length - 1 ? "" : "border-b"} gap-5 xl:gap-0`}
            >
              <div className="w-full xl:w-[40%] xl:h-[320px]">
                <Image
                  src={prod?.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`w-full xl:w-[60%] pl-0 xl:pl-10`}>
                <section>
                  <p className="text-2xl xl:text-4xl font-semibold tracking-wide text-slate-900">
                    {prod?.title}
                  </p>
                  <p className="text-xl mt-5 text-black">{prod?.desc}</p>
                </section>
                <div className="flex mt-5 flex-wrap gap-5 text-sm">
                  {String(prod?.tags)
                    .split(", ")
                    .map((tag) => (
                      <section
                        key={tag}
                        className="border border-black py-2 px-5 text-black text-lg xl:text-xl font-semibold tracking-wide hover:bg-lime-700/30 cursor-pointer"
                      >
                        {tag}
                      </section>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedWork;
