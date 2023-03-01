import { useToast } from "@chakra-ui/react";
import axios from "axios";

export async function handleAddToWishlist(
  wishList,
  Product,
  userMail,
  setToggle,
  toggle,
  toast
) {
  let flag = false;
  wishList.map((el) => {
    if (el.pid === Product[0].id && userMail === el.email) {
      toast({
        title: "Item already exists in the wishlist",
        status: "info",
        duration: 9000,
        isClosable: true,
      });

      flag = true;
    }
  });
  if (!flag) {
    let id = Date.now();
    let pid = Product[0].id;
    let email = userMail;
    let details = {
      id,
      pid,
      email,
    };
    let res = axios.post("https://backend-cw-4.onrender.com/wishlist", details);
    console.log(res);
    setToggle(!toggle);
    toast({
      title: "Product Added to the wishlist",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }
}

export async function handleAddToCart(
  cart,
  Product,
  userMail,
  setisLoading,
  toast,
  setToggle,
  toggle
) {
  let count = 1;
  let id = 0;
  cart.map((el) => {
    if (el.pid === Product[0].id && userMail === el.email) {
      count = el.count + 1;
      id = el.id;
    }
  });

  if (count > 1) {
    let updated = { id, count, email: userMail };
    setisLoading(true);
    let res = axios.patch(
      `https://backend-cw-4.onrender.com/cart/${id}`,
      updated
    );
    console.log(res);
    setisLoading(false);
    toast();
    setToggle(!toggle);
  } else {
    id = Date.now();
    let pid = Product[0].id;
    count = 1;
    let email = userMail;
    let details = {
      id,
      pid,
      count,
      email,
    };
    setisLoading(true);
    let res1 = axios.post("https://backend-cw-4.onrender.com/cart", details);
    console.log(res1);

    setisLoading(false);
    toast();
    setToggle(!toggle);
  }
}
