import React from "react";
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Image,
  Spinner,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  NumberInputStepper,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import "./AllProducts.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useParams } from "react-router-dom";
import { Authcontext } from "../../AllContexts/AuthContext";
import { useContext } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { AiOutlineFilter } from "react-icons/ai";

const AllProducts = () => {
  // Styling purpose
  const [Sort, setSort] = React.useState(null);

  //Loading Status
  const [isLoading, setisLoading] = React.useState(false);

  //  Product data
  const [Append, setAppend] = React.useState([]);

  // Total Products
  const [total, setTotal] = React.useState(0);

  //Pagination Page Count
  const [page, setPage] = React.useState(1);

  //filters
  const [Price, setPrice] = React.useState([0, 100000]);
  const [Discount, setDiscount] = React.useState([0, 100]);
  const [Rating, setRating] = React.useState([0, 5]);

  //fetching data from server
  const { category } = useParams();
  React.useEffect(() => {
    async function getData() {
      let type;
      if (Sort === "High Price") {
        type = "&_sort=discounted_price&_order=desc";
      } else if (Sort === "Low Price") {
        type = "&_sort=discounted_price&_order=asc";
      } else if (Sort === "New Arrival") {
        type = "&_sort=crawl_timestamp";
      } else if (Sort === "Ratings") {
        type = "&_sort=rating&_order=desc";
      } else {
        type = "";
      }
      setisLoading(true);
      let res = await fetch(
        `https://backend-cw-4.onrender.com/Products?product_category_tree_like=${category}${type}&_page=${page}&_limit=15&discounted_price_gte=${Price[0]}&discounted_price_lte=${Price[1]}&discount_gte=${Discount[0]}&discount_lte=${Discount[1]}&rating_gte=${Rating[0]}&rating_lte=${Rating[1]}`
      );

      let data = await res.json();
      let Total = res.headers.get("X-Total-Count");
      setTotal(Total);
      //finding the required category and setting the same to append
      setAppend(data);
      setisLoading(false);
    }
    getData();
  }, [category, page, Sort, Price, Discount, Rating]);

  //user disclosure for modal used in sorting and filtering for small screen
  const {
    isOpen: isSortOpen,
    onOpen: onSortOpen,
    onClose: onSortClose,
  } = useDisclosure();

  const {
    isOpen: isFilterOpen,
    onOpen: onFilterOpen,
    onClose: onFilterClose,
  } = useDisclosure();

  return (
    <Box className="wrapper">
      <>
        <Box
          className="display_routes"
          display={{ base: "none", md: "block", lg: "block" }}
        >
          {/* To be replaced by props later */}
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbLink href="#">{category}</BreadcrumbLink>
          </Breadcrumb>
        </Box>
        <Flex className="flex_filter-products">
          <Box
            className="category_wrapper"
            display={{ base: "none", md: "block", lg: "block" }}
          >
            <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
              {/* filter by price */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="filter-title"
                    >
                      Filter By Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Price[1] !== 500) {
                          setPrice([0, 500]);
                        } else {
                          setPrice([0, 100000]);
                        }
                      }}
                      checked={Price[1] === 500}
                    />
                    <label className="label"> Under 500</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Price[1] !== 1000) {
                          setPrice([501, 1000]);
                        } else {
                          setPrice([0, 100000]);
                        }
                      }}
                      checked={Price[1] === 1000}
                    />
                    <label className="label"> 501-1000</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Price[1] !== 2000) {
                          setPrice([1001, 2000]);
                        } else {
                          setPrice([0, 100000]);
                        }
                      }}
                      checked={Price[1] === 2000}
                    />
                    <label className="label"> 1001-2000</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Price[0] !== 2000) {
                          setPrice([2000, 100000]);
                        } else {
                          setPrice([0, 100000]);
                        }
                      }}
                      checked={Price[0] === 2000}
                    />
                    <label className="label"> above 2000</label>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              {/* filter by discount */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="filter-title"
                    >
                      Filter By Discount
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Discount[1] !== 20) {
                          setDiscount([0, 20]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[1] === 20}
                    />
                    <label className="label"> Upto 20%</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Discount[0] !== 21) {
                          setDiscount([21, 40]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[0] === 21}
                    />
                    <label className="label"> 21% - 40%</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Discount[0] !== 41) {
                          setDiscount([41, 50]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[0] === 41}
                    />
                    <label className="label"> 41% - 50%</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Discount[0] !== 51) {
                          setDiscount([51, 100]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[0] === 51}
                    />
                    <label className="label"> above 50%</label>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              {/* filter by Customer Rating */}
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="filter-title"
                    >
                      Filter by Rating
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Rating[0] !== 1) {
                          setRating([1, 5]);
                        } else {
                          setRating([0, 5]);
                        }
                      }}
                      checked={Rating[0] === 1}
                    />
                    <label className="label"> 1 & above</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Rating[0] !== 2) {
                          setRating([2, 5]);
                        } else {
                          setRating([0, 5]);
                        }
                      }}
                      checked={Rating[0] === 2}
                    />
                    <label className="label"> 2 & above</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Rating[0] !== 3) {
                          setRating([3, 5]);
                        } else {
                          setRating([0, 5]);
                        }
                      }}
                      checked={Rating[0] === 3}
                    />
                    <label className="label"> 3 & above</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Rating[0] !== 4) {
                          setRating([4, 5]);
                        } else {
                          setRating([0, 5]);
                        }
                      }}
                      checked={Rating[0] === 4}
                    />
                    <label className="label"> 4 & above</label>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box
            className="products_wrapper"
            width={{ base: "100%", md: "73%", lg: "73%" }}
          >
            {isLoading ? (
              <Box padding="100px">
                <Spinner
                  thickness="10px"
                  speed="1s"
                  emptyColor="gray.200"
                  color="rgb(36, 163, 181)"
                  size="xl"
                  padding={"50px"}
                />
              </Box>
            ) : (
              <>
                <Box className="Heading">
                  {/* To be replaced by props later */}
                  <Text className="category_name">{category}</Text>
                  <Flex
                    display={{
                      base: "none",
                      md: "flex",
                      lg: "flex",
                    }}
                  >
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
                      {total} Products Found
                    </Text>
                    <Flex
                      className="sort"
                      display={{ base: "none", md: "flex", lg: "flex" }}
                    >
                      <Text>Sort By:</Text>
                      <Text
                        className={
                          Sort === "High Price" ? "sort-select" : "sort-cat"
                        }
                        onClick={() => {
                          setSort("High Price");
                          setPage(1);
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
                          setPage(1);
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
                          setPage(1);
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
                          setPage(1);
                        }}
                      >
                        Customer Rating
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    display={{ base: "flex", md: "none", lg: "none" }}
                    className="sort-filter-buttons-wrapper"
                  >
                    <button
                      className="sort-filter-buttons"
                      onClick={onSortOpen}
                    >
                      <Flex className="button-flex">
                        sort &nbsp;
                        <BiSortAlt2 />
                      </Flex>
                    </button>
                    <button
                      className="sort-filter-buttons"
                      onClick={onFilterOpen}
                    >
                      {" "}
                      <Flex className="button-flex">
                        filter &nbsp;
                        <AiOutlineFilter />
                      </Flex>
                    </button>
                  </Flex>
                  {/* modal for sort*/}
                  <Modal
                    isOpen={isSortOpen}
                    onClose={onSortClose}
                    colorScheme="teal"
                  >
                    <ModalOverlay />
                    <ModalContent padding="10px" margin="200px 10px">
                      <ModalHeader>Sort By</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text
                          className={
                            Sort === "High Price" ? "sort-select" : "sort-cat"
                          }
                          onClick={() => {
                            setSort("High Price");
                            setPage(1);
                            onSortClose();
                          }}
                          margin="5px"
                          border="none"
                        >
                          High Price
                        </Text>
                        <Text
                          className={
                            Sort === "Low Price" ? "sort-select" : "sort-cat"
                          }
                          onClick={() => {
                            setSort("Low Price");
                            setPage(1);
                            onSortClose();
                          }}
                          margin="5px"
                          border="none"
                        >
                          Low Price
                        </Text>
                        <Text
                          className={
                            Sort === "New Arrival" ? "sort-select" : "sort-cat"
                          }
                          onClick={() => {
                            setSort("New Arrival");
                            setPage(1);
                            onSortClose();
                          }}
                          margin="5px"
                          border="none"
                        >
                          New Arrival
                        </Text>
                        <Text
                          className={
                            Sort === "Ratings" ? "sort-select" : "sort-cat"
                          }
                          onClick={() => {
                            setSort("Ratings");
                            setPage(1);
                            onSortClose();
                          }}
                          margin="5px"
                          border="none"
                        >
                          Customer Rating
                        </Text>
                      </ModalBody>
                    </ModalContent>
                  </Modal>

                  {/* modal for filter*/}
                  <Modal isOpen={isFilterOpen} onClose={onFilterClose}>
                    <ModalOverlay />
                    <ModalContent margin="50px 10px">
                      <ModalHeader>Filter Products</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
                          {/* filter by price */}
                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  className="filter-title"
                                >
                                  Filter By Price
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Price[1] !== 500) {
                                      setPrice([0, 500]);
                                    } else {
                                      setPrice([0, 100000]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Price[1] === 500}
                                />
                                <label className="label"> Under 500</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Price[1] !== 1000) {
                                      setPrice([501, 1000]);
                                    } else {
                                      setPrice([0, 100000]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Price[1] === 1000}
                                />
                                <label className="label"> 501-1000</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Price[1] !== 2000) {
                                      setPrice([1001, 2000]);
                                    } else {
                                      setPrice([0, 100000]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Price[1] === 2000}
                                />
                                <label className="label"> 1001-2000</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Price[0] !== 2000) {
                                      setPrice([2000, 100000]);
                                    } else {
                                      setPrice([0, 100000]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Price[0] === 2000}
                                />
                                <label className="label"> above 2000</label>
                              </Box>
                            </AccordionPanel>
                          </AccordionItem>
                          {/* filter by discount */}
                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  className="filter-title"
                                >
                                  Filter By Discount
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Discount[1] !== 20) {
                                      setDiscount([0, 20]);
                                    } else {
                                      setDiscount([0, 100]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Discount[1] === 20}
                                />
                                <label className="label"> Upto 20%</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Discount[0] !== 21) {
                                      setDiscount([21, 40]);
                                    } else {
                                      setDiscount([0, 100]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Discount[0] === 21}
                                />
                                <label className="label"> 21% - 40%</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Discount[0] !== 41) {
                                      setDiscount([41, 50]);
                                    } else {
                                      setDiscount([0, 100]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Discount[0] === 41}
                                />
                                <label className="label"> 41% - 50%</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Discount[0] !== 51) {
                                      setDiscount([51, 100]);
                                    } else {
                                      setDiscount([0, 100]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Discount[0] === 51}
                                />
                                <label className="label"> above 50%</label>
                              </Box>
                            </AccordionPanel>
                          </AccordionItem>
                          {/* filter by Customer Rating */}
                          <AccordionItem>
                            <h2>
                              <AccordionButton>
                                <Box
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  className="filter-title"
                                >
                                  Filter by Rating
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Rating[0] !== 1) {
                                      setRating([1, 5]);
                                    } else {
                                      setRating([0, 5]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Rating[0] === 1}
                                />
                                <label className="label"> 1 & above</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Rating[0] !== 2) {
                                      setRating([2, 5]);
                                    } else {
                                      setRating([0, 5]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Rating[0] === 2}
                                />
                                <label className="label"> 2 & above</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Rating[0] !== 3) {
                                      setRating([3, 5]);
                                    } else {
                                      setRating([0, 5]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Rating[0] === 3}
                                />
                                <label className="label"> 3 & above</label>
                              </Box>
                              <Box className="filter-checkbox">
                                <input
                                  type="checkbox"
                                  onChange={() => {
                                    if (Rating[0] !== 4) {
                                      setRating([4, 5]);
                                    } else {
                                      setRating([0, 5]);
                                    }
                                    onFilterClose();
                                  }}
                                  checked={Rating[0] === 4}
                                />
                                <label className="label"> 4 & above</label>
                              </Box>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                  {Append &&
                    Append.map((el) => {
                      if (el.discounted_price > 0) {
                        return <ProductCard key={el.id} card={el} />;
                      }
                    })}
                </SimpleGrid>

                {/* Pagination */}
                <Flex className="pagination">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="prev"
                  >
                    {"<"} Previous
                  </button>
                  <button className="page-button">
                    {page} OF {Math.ceil(total / 15)}
                  </button>
                  <button
                    disabled={page >= Math.ceil(total / 15)}
                    onClick={() => setPage(page + 1)}
                    className="next"
                  >
                    Next {">"}
                  </button>
                </Flex>
              </>
            )}
          </Box>
        </Flex>{" "}
      </>
    </Box>
  );
};

export default AllProducts;
