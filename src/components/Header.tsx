import React from "react";
import DarkLogo from "@/assests/dark_logo.png";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconPhone } from "@tabler/icons-react";
import Link from "next/link";

function Header() {
  const sections = [
    {
      title: "What is DuooTech",
      link: "#what-is-duootech",
    },
    {
      title: "Scoope",
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
      title: "Products",
      link: "#our-products",
    },
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 bg-black/10 backdrop-blur-md px-5 py-5 flex justify-between items-center z-[1000]">
        <Link href={"/"}>
          <section className="flex justify-start gap-3 items-center">
            <section className="w-10 h-10 rounded-md">
              <Image
                src={DarkLogo}
                alt="Logo"
                className="w-full h-full object-cover rounded-md"
              />
            </section>
            <p className="text-xl tracking-wide font-bold">DuooTech</p>
          </section>
        </Link>
        <section className="hidden lg:flex items-center gap-5">
          {sections.map((sec) => (
            <Link
              href={sec?.link}
              className="text-xl text-white/50 hover:text-white transition duration-200"
            >
              {sec?.title}
            </Link>
          ))}
        </section>
        <section>
          <Link href={"#contact-us"}>
            <HoverBorderGradient className="bg-sky-600 tracking-wide flex items-center gap-1 text-sm cursor-pointer">
              {/* <IconPhone size={20} /> */}
              Contact Us
            </HoverBorderGradient>
          </Link>
        </section>
      </header>
    </>
  );
}

export default Header;
