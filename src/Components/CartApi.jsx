export default function CartApi() {
  const baseURL = "https://fakestoreapi.com/carts";

  const getAllCarts = async () => {
    try {
      const response = await fetch(`${baseURL}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Trouble fetching carts", err);
    }
  };

  const getSingleCart = async (id) => {
    try {
      const response = await fetch(`${baseURL}/${id}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Trouble fetching cart", err);
    }
  };

  const limitCartResults = async (limit) => {
    try {
      const response = await fetch(`${baseURL}?limit=${limit}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Trouble fetching cart", err);
    }
  };

  const sortCarts = async () => {
    try {
      const response = await fetch(`${baseURL}?sort=desc}`);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Trouble fetching cart", err);
    }
  };

  const init = async () => {
    const product = await limitCartResults(3);
  };

  init();
}
