import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import "./AllProducts.css";

const AllProducts = () => {
  return (
    <Box className="wrapper">
      <Box className="display_routes">
        {/* To be replaced by params later */}
        <Text>Home {" > "} Beauty & Fareness</Text>
      </Box>
      <Flex className="flex_filter-products">
        <Box className="category_wrapper">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at
          suscipit, numquam magni libero debitis deserunt. Beatae sit veniam qui
          voluptatem? Vitae veniam numquam qui iste optio. Quos, animi
          recusandae? Dolorem facere quisquam iste quidem? Et molestiae dolorum
          distinctio magni sapiente. Tempora molestias, accusantium doloribus ab
          aut enim omnis eos repellat corporis tempore! Fugit excepturi fuga
          perferendis quaerat, ipsam consequatur? Voluptates ducimus consectetur
          placeat nulla quam rerum voluptas unde id voluptate fugiat deleniti
          amet labore esse expedita distinctio, quis obcaecati quisquam?
          Doloremque, amet ea ullam reiciendis illum quam delectus perspiciatis.
          Voluptas sequi totam aliquid obcaecati dolor nihil, cumque sed nostrum
          minus? Optio nemo harum asperiores perferendis sunt obcaecati id,
          laborum exercitationem iure explicabo quis animi minima dolores
          repellat eligendi tempora!
        </Box>
        <Box className="products_wrapper">
          <Box className="Heading">
            {/* To be replaced by params later */}
            <Text className="category_name">Beauty Care Products</Text>
            <Flex>
              <Box className="subCategory">Category-1</Box>
              <Box className="subCategory">Category-2</Box>
            </Flex>
            <Flex>
              <Text>84 Products Found</Text>
              <Flex>
                <Text>High Price</Text>
                <a></a>
              </Flex>
            </Flex>
          </Box>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aliquid
          impedit, dolores blanditiis architecto rerum! Vel provident reiciendis
          sapiente! In porro numquam excepturi minus quam aperiam alias eos illo
          nobis. Tempora voluptatem earum illum voluptate vero odio, placeat at
          incidunt debitis repellat molestias, saepe tenetur. Animi dolorem amet
          ducimus cupiditate, corporis aspernatur laboriosam. Similique non
          culpa dignissimos quo quod natus. Repellat, suscipit quisquam rerum
          laborum delectus dolorem odit nobis est debitis. A, officia? Eligendi
          dignissimos officia quos excepturi voluptas, laudantium vitae modi
          assumenda mollitia minima numquam, corrupti eius quo porro. Velit
          nobis consectetur maxime dignissimos facere quam asperiores
          accusantium reprehenderit atque sapiente nihil corporis possimus odio
          in vero, numquam, harum itaque expedita quaerat voluptate! Corporis
          sed officiis nobis ipsam pariatur? Inventore eligendi temporibus,
          deserunt officia dolorem voluptatem incidunt. Voluptatem nobis
          eligendi deleniti reiciendis ad veritatis velit ex dolor vero sequi,
          corrupti fugit consectetur quis id reprehenderit at cupiditate ducimus
          magnam!
        </Box>
      </Flex>
    </Box>
  );
};

export default AllProducts;
