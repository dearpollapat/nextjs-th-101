import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Dear Shop</h1>
      </div>
      <ul>
        <Link href="/">
          <li>homepage</li>
        </Link>
        <Link href="/products">
          <li>products</li>
        </Link>
        <Link href="/about">
          <li>about</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
