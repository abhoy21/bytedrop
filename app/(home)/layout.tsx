import React from "react";
import Navbar from "./_Components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full w-full overflow-hidden">{children}</main>
    </div>
  );
};

export default HomeLayout;
