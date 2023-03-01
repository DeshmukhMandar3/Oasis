export async function getCart(setisLoading, setCart) {
  setisLoading(true);
  let res = await fetch("https://backend-cw-4.onrender.com/cart");
  let data = await res.json();
  setCart(data);
  setisLoading(false);
}

export async function getWishList(setisLoading, setWishList) {
  setisLoading(true);
  let res = await fetch("https://backend-cw-4.onrender.com/wishlist");
  let data = await res.json();
  setWishList(data);
  setisLoading(false);
}

export async function getDetails(setisLoading, setProduct, id) {
  setisLoading(true);
  let res = await fetch(`https://backend-cw-4.onrender.com/Products?id=${id}`);
  let data = await res.json();
  console.log(data);
  setProduct(data);
  setisLoading(false);
}
