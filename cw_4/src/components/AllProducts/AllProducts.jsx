import React from "react";
import { Box, Text, Flex, SimpleGrid, Image, Spinner } from "@chakra-ui/react";
import "./AllProducts.css";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = ({ category }) => {
  // Styling purpose
  const [Sort, setSort] = React.useState(null);

  //Loading Status
  const [isLoading, setisLoading] = React.useState(false);

  //  Product data
  const [Append, setAppend] = React.useState([]);

  React.useEffect(() => {
    setAppend([]);
    async function getData() {
      setisLoading(true);
      let res = await fetch(
        `https://backend-cw-4.onrender.com/Products?product_category_tree_like=${category}`
      );
      let data = await res.json();
      console.log(data);
      //finding the required category and setting the same to append
      setAppend(data);
      setisLoading(false);
    }
    getData();
  }, [category]);

  //Sorting Functions
  async function sortData(type) {
    setisLoading(true);
    let res = await fetch(
      `https://backend-cw-4.onrender.com/Products?product_category_tree_like=${category}${type}`
    );
    let data = await res.json();
    console.log("sort", data);
    setAppend(data);
    setisLoading(false);
  }

  return (
    <Box className="wrapper">
      {isLoading ? (
        <Box padding="100px">
          <Spinner
            thickness="10px"
            speed="1s"
            emptyColor="gray.200"
            color="rgb(36, 163, 181)"
            size="xl"
            padding={"100px"}
          />
        </Box>
      ) : (
        <>
          <Box className="display_routes">
            {/* To be replaced by props later */}
            <Text>
              Home {" > "} {category}
            </Text>
          </Box>
          <Flex className="flex_filter-products">
            <Box className="category_wrapper">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at
              suscipit, numquam magni libero debitis deserunt. Beatae sit veniam
              qui voluptatem? Vitae veniam numquam qui iste optio. Quos, animi
              recusandae? Dolorem facere quisquam iste quidem? Et molestiae
              dolorum distinctio magni sapiente. Tempora molestias, accusantium
              doloribus ab aut enim omnis eos repellat corporis tempore! Fugit
              excepturi fuga perferendis quaerat, ipsam consequatur? Voluptates
              ducimus consectetur placeat nulla quam rerum voluptas unde id
              voluptate fugiat deleniti amet labore esse expedita distinctio,
              quis obcaecati quisquam? Doloremque, amet ea ullam reiciendis
              illum quam delectus perspiciatis. Voluptas sequi totam aliquid
              obcaecati dolor nihil, cumque sed nostrum minus? Optio nemo harum
              asperiores perferendis sunt obcaecati id, laborum exercitationem
              iure explicabo quis animi minima dolores repellat eligendi
              tempora!
            </Box>
            <Box className="products_wrapper">
              <Box className="Heading">
                {/* To be replaced by props later */}
                <Text className="category_name">{category}</Text>
                <Flex>
                  <Box className="subCategory">
                    {(Append &&
                      Append[0] &&
                      Append[0].product_category_tree[0]) ||
                      "Category-1"}
                  </Box>
                  <Box className="subCategory">
                    {(Append &&
                      Append[0] &&
                      Append[0].product_category_tree[2]) ||
                      "Category-2"}
                  </Box>
                  <Box className="subCategory">
                    {(Append &&
                      Append[0] &&
                      Append[0].product_category_tree[3]) ||
                      "Category-3"}
                  </Box>
                </Flex>
                <Flex className="prod-sort">
                  <Text className="total-products">
                    {(Append && Append.length) || 0} Products Found
                  </Text>
                  <Flex className="sort">
                    <Text>Sort By:</Text>
                    <Text
                      className={
                        Sort === "High Price" ? "sort-select" : "sort-cat"
                      }
                      onClick={() => {
                        setSort("High Price");
                        sortData("&_sort=discounted_price&_order=desc");
                      }}
                    >
                      High Price
                    </Text>
                    <Text>|</Text>
                    <Text
                      className={
                        Sort === "Low Price" ? "sort-select" : "sort-cat"
                      }
                      onClick={() => {
                        setSort("Low Price");
                        sortData("&_sort=discounted_price&_order=asc");
                      }}
                    >
                      Low Price
                    </Text>
                    <Text>|</Text>
                    <Text
                      className={
                        Sort === "New Arrival" ? "sort-select" : "sort-cat"
                      }
                      onClick={() => {
                        setSort("New Arrival");
                        sortData("&_sort=crawl_timestamp");
                      }}
                    >
                      New Arrival
                    </Text>
                    <Text>|</Text>
                    <Text
                      className={
                        Sort === "Ratings" ? "sort-select" : "sort-cat"
                      }
                      onClick={() => {
                        setSort("Ratings");
                        sortData("&_sort=rating&_order=desc");
                      }}
                    >
                      Rating
                    </Text>
                  </Flex>
                </Flex>
              </Box>
              <SimpleGrid columns={3} spacing={10}>
                {Append &&
                  Append.map((el, index) => {
                    if (index < 100 && index > 0 && el.discounted_price > 0) {
                      return <ProductCard card={el} />;
                    }
                  })}
              </SimpleGrid>
            </Box>
          </Flex>{" "}
        </>
      )}
    </Box>
  );
};

export default AllProducts;
