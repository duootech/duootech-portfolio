import React from "react";

interface Heading2Props {
  children: React.ReactNode;
  highlight?: string;
}

function Heading2({ children, highlight }: Heading2Props) {
  return (
    <>
      <h2 className="text-center font-sans text-4xl font-black leading-[1.05] tracking-tight">
        {children}{" "}
        {highlight && <span className="text-sky-500">{highlight}</span>}
      </h2>
    </>
  );
}

export default Heading2;
