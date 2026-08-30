import React from "react";
import Logo from "@/assests/light_logo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const sections = [
    {
      title: "What is DuooTech",
      link: "#what-is-duootech",
    },
    {
      title: "What We Build",
      link: "#what-we-build",
    },
    {
      title: "Hookr",
      link: "#hookr",
    },
    {
      title: "Technologies",
      link: "#technologies",
    },
    {
      title: "Our Products",
      link: "#our-products",
    },
  ];

  const products = [
    {
      title: "Gym Management Platform",
      link: "/",
    },
    {
      title: "Café Management Platform",
      link: "/",
    },
    {
      title: "E-commerce Platform",
      link: "/",
    },
    {
      title: "Hookr",
      link: "/",
    },
  ];

  const social = [
    {
      title: "Instagram",
      link: "/",
    },
    {
      title: "X (Twitter)",
      link: "/",
    },
    {
      title: "Facebook",
      link: "/",
    },
  ];

  const contact = ["+91-8972512031", "+91-7478524191", "duootech2@gmail.com"];

  return (
    <>
      <div className="mt-20 bg-white/10 px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          <section className="space-y-3">
            <section className="flex items-center gap-5 flex-wrap">
              <section className="w-10 h-10 rounded-md">
                <Image
                  src={Logo}
                  alt="Logo"
                  className="w-full h-full object-cover rounded-md"
                />
              </section>
              <section>
                <p className="font-sans text-3xl font-black leading-[1.05] tracking-tight">
                  DuooTech
                </p>
              </section>
            </section>
            <p className="text-lg text-white/50">
              © Copyright DuooTech {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </section>
          <section></section>
          <section>
            <h3 className="text-xl font-semibold tracking-normal mb-3">
              Sections
            </h3>
            <section className="space-y-3 flex flex-col gap-0">
              {sections.map((sec) => (
                <Link
                  href={sec?.link}
                  className="text-lg text-white/50 hover:text-white transition duration-200"
                >
                  {sec?.title}
                </Link>
              ))}
            </section>
          </section>
          <section>
            <h3 className="text-xl font-semibold tracking-normal mb-3">
              Products
            </h3>
            <section className="space-y-3 flex flex-col gap-0">
              {products.map((sec) => (
                <Link
                  href={sec?.link}
                  className="text-lg text-white/50 hover:text-white transition duration-200"
                >
                  {sec?.title}
                </Link>
              ))}
            </section>
          </section>
          <section>
            <h3 className="text-xl font-semibold tracking-normal mb-3">
              Social
            </h3>
            <section className="space-y-3">
              <section className="space-y-3 flex flex-col gap-0">
                {social.map((sec) => (
                  <Link
                    href={sec?.link}
                    className="text-lg text-white/50 hover:text-white transition duration-200"
                  >
                    {sec?.title}
                  </Link>
                ))}
              </section>
            </section>
          </section>
          <section>
            <h3 className="text-xl font-semibold tracking-normal mb-3">
              Contact
            </h3>
            <section className="space-y-3">
              {contact.map((sec) => (
                <p className="text-lg text-white/50 hover:text-white transition duration-200">
                  {sec}
                </p>
              ))}
            </section>
          </section>
        </div>
        <div className="mt-10">
          <h1
            className="md:text-7xl bg-clip-text text-transparent bg-gradient-to-t from-white/[0.08] to-white/[0.01] text-center font-sans font-bold"
            style={{ fontSize: "min(16vw, 320px)" }}
          >
            DuooTech
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
