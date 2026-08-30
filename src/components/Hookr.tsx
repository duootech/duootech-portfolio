import React from "react";
import Heading2 from "./Heading2";
import { ContainerScroll } from "./ui/container-scroll-animation";
import v from "../assests/hookr.png";
import Image from "next/image";
import Subheading from "./Subheading";

function Hookr() {
  return (
    <>
      <div className="mt-20 py-20" id="hookr">
        {/* <section>
          <Heading2>
            We Built Our <br /> Infrastructure Too.
          </Heading2>
        </section> */}

        <div className="mt-10">
          <ContainerScroll
            titleComponent={
              <>
                <h3 className="lg:mt-[-10rem] text-[10vw] font-bold">Hookr</h3>
                <p className="mt lg:mb-[5rem] text-3xl">
                  We build our own{" "}
                  <span className="text-sky-500">infrastructure</span> too.
                </p>
              </>
            }
          >
            <Image
              src={v}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>

          <div className="mt-10">
            <Subheading>
              A webhook delivery SaaS for teams that need every event to arrive
              reliably. It handles the messy middle so product teams can focus
              on what their systems do best.
            </Subheading>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hookr;
