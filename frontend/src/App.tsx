import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<any>();

  console.log(products);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:5000/api/v1/products");
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <div>
      {products &&
        products.product.map((product: any) => (
          <>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <>
              <div>{product.name}</div>
              <img className="w-64 h-64 object-cover rounded-lg shadow-lg" src={product.images[0].url} alt="" />
            </>
            <br />
          </>
        ))}
    </div>
  );
}

export default App;