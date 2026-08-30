import React, { useEffect, useState } from "react";
import Heading2 from "./Heading2";
import Subheading from "./Subheading";

function SolveProblem() {
  const [animCounter, setAnimCounter] = useState(0);

  const steps = [
    "Understand",
    "Design",
    "Develop",
    "Deploy",
    "Monitor",
    "Scale",
  ];

  useEffect(() => {
    let counter = 0;
    const timer = setInterval(() => {
      setAnimCounter(counter);
      if (counter === steps.length - 1) {
        counter = 0;
      } else {
        counter++;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="mt-20 px-10">
        <section className="space-y-2">
          <Heading2>
            How We <span className="text-sky-500">Solve</span> Problems
          </Heading2>
          <Subheading>
            Good software starts with understanding the system, not opening the
            editor.
          </Subheading>
        </section>

        <div className="mt-10">
          <section className="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-0">
            {steps.map((step, i) => (
              <section
                key={i}
                className={`text-md sm:text-xl font-semibold px-5 pt-8 pb-3 relative border-t ${i === animCounter ? "border-sky-500 bg-slate-500/10 rounded-b-md" : "text-slate-500"}`}
              >
                <section
                  className={`border-2 w-10 h-10 text-md flex justify-center items-center rounded-full absolute top-[-20] left-0 bg-black ${animCounter === i ? "border-sky-500" : ""} transition duration-300`}
                >
                  {i + 1}
                </section>
                {step}
                <p></p>
              </section>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default SolveProblem;
