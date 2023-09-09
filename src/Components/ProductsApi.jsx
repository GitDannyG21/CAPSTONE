export default function ProductsApi() {
  // Api helper functions
  //   Testing at bottom

  const baseURL = "https://fakestoreapi.com";

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble fetching products", err);
    }
  };

  const getSingleProduct = async (id) => {
    try {
      const response = await fetch(`${baseURL}/products/${id}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble fetching product", err);
    }
  };

  //   What exactly is being limited here?

  const LimitResults = async (limit) => {
    try {
      const response = await fetch(`${baseURL}/products?limit=${limit}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble fetching products", err);
    }
  };

  //   desc or asc (ascending or descending order)
  const SortResults = async () => {
    try {
      const response = await fetch(`${baseURL}/products?sort=desc`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble sorting", err);
    }
  };

  const getAllCategories = async () => {
    try {
      const response = await fetch(`${baseURL}/products/categories`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble fetching products", err);
    }
  };

  const getACategory = async (category) => {
    try {
      const response = await fetch(`${baseURL}/products/category/${category}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble fetching products", err);
    }
  };

  const addNewProduct = async () => {
    try {
      const response = await fetch(`${baseURL}/products`, {
        method: "POST",
        body: JSON.stringify({
          title: "test",
          price: "test",
          description: "test",
          image: "test",
          category: "test",
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble adding", err);
    }
  };

  const updateProduct = async (id) => {
    try {
      const response = await fetch(`${baseURL}/products/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: "test",
          price: "test",
          description: "test",
          image: "test",
          category: "test",
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble updating products", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${baseURL}/products/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("trouble deleting product", err);
    }
  };

  const init = async () => {
    // const product = await deleteProduct(11);
  };

  init();
}
