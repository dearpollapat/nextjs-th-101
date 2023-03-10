import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">homepage</Link>
      <Link href="/products">products</Link>
      <Link href="/about">about</Link>
    </nav>
  );
};

export default Navbar;
