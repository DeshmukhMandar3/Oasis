import React from "react";
import {
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";

const ProdDetails = ({ Product }) => {
  return (
    <Box className="prod-middle">
      <Box>
        <Text className="head">Product Details</Text>
        <Text className="name">{Product && Product[0].product_name}</Text>
      </Box>
      <Box className="tabs">
        <Tabs colorScheme="cyan">
          <TabList>
            <Tab>Product Description</Tab>
            <Tab>Specification</Tab>
            <Tab>Legal Information</Tab>
          </TabList>

          <TabPanels textAlign={"left"} padding={"15px"} lineHeight={"30px"}>
            <TabPanel>
              <p>{Product && Product[0].description}</p>
            </TabPanel>
            <TabPanel>
              {Product &&
                Product &&
                Product[0].product_specifications.product_specification.map(
                  (el) => {
                    if (el.key) {
                      return (
                        <Flex>
                          <Text width="400px">{el.key}</Text>
                          <Text margin={"0px 4px"} color="black">
                            :
                          </Text>
                          <Text color="black">{el.value}</Text>
                        </Flex>
                      );
                    }
                  }
                )}
            </TabPanel>
            <TabPanel>
              <Flex>
                <Text width="400px">
                  Maximum Retail Price (inclusive of all taxes)
                </Text>
                <Text color="black">
                  : ₹{Product && Product[0].retail_price}
                </Text>
              </Flex>
              <Flex>
                <Text width="400px">Common or Generic Name</Text>
                <Text color="black">: -</Text>
              </Flex>
              <Flex>
                <Text width="400px">Net Contents / Net Quantity</Text>
                <Text color="black">: -</Text>
              </Flex>
              <Flex>
                <Text width="400px">Manufacturer's Name and Address</Text>
                <Text color="black">: -</Text>
              </Flex>
              <Flex>
                <Text width="400px">Packer's Name and Address</Text>
                <Text color="black">: -</Text>
              </Flex>
              <Flex>
                <Text width="400px">Importer's Name and Address</Text>
                <Text color="black">: -</Text>
              </Flex>
              <Flex>
                <Text width="400px">
                  Country of Origin / Manufacture / Assembly
                </Text>
                <Text color="black">: India</Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default ProdDetails;
