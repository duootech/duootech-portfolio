import React from "react";

interface Props {
  children: React.ReactNode;
}

function Subheading({ children }: Props) {
  return (
    <>
      <p className="text-center text-balance text-base text-white/60 text-xl">
        {children}
      </p>
    </>
  );
}

export default Subheading;
