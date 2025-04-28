"use client";

import { fetchListOfProducts } from "@/actions";
import { useEffect, useState } from "react";

{
  /*
  1. using server action in client component is useful when we are doing certain actions on  form and do api calls
  2. It is not much recommended to use server actions in client components

    */
}

function ClientActionExample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getListOfProducts() {
    setLoading(true);
    const data = await fetchListOfProducts();
    if (data) {
      setProducts(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    getListOfProducts();
  }, []);

  if (loading) return <h1>Loading poducts </h1>;

  return (
    <div>
      <ul>
        {products && products.length > 0 ? (
          products.map((item, index) => <li key={index}>{item.title}</li>)
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}

export default ClientActionExample;
