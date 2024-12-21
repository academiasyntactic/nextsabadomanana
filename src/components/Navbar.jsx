import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <div>Logo</div>
      <Link href={"/about"}>Ir a about</Link>
    </div>
  );
};

export default Navbar;
