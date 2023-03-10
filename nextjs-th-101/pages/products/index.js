import React from "react";
import Image from "next/image";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  console.log(data);
  return {
    props: { products: data.products },
  };
}

export default function Index({ products }) {
  //https://dummyjson.com/products?limit=12

  return (
    <>
      <h1>all products</h1>
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <Image
              src={item.thumbnail}
              width={300}
              height={300}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}
