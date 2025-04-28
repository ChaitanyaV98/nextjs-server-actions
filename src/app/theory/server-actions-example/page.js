import { fetchListOfProducts } from "@/actions";

async function ServerActionExample() {
  const products = await fetchListOfProducts();
  return (
    <div>
      <h1>Server actions example - server components</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
            </li>
          ))
        ) : (
          <h1>No products found</h1>
        )}
      </ul>
    </div>
  );
}

export default ServerActionExample;
