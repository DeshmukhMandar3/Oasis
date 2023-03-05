import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

//drawer all products  for mobile view
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState("left");
 

  return (
    <>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
        <Image
          style={{ padding: "0px 05px", width: "40px" }}
          src="https://user-images.githubusercontent.com/107903370/220424087-fa4e1280-5e7e-4960-ad1e-eca6d083bf7a.png"
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
        onClick={() => setPlacement("left")}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>
         
          <Link onClick={onClose} to="/AllProducts/baby care" className="navbar_third_section_link">
          Baby Care
        </Link><br/>
        <Link onClick={onClose} to="/AllProducts/Clothing" className="navbar_third_section_link">
          Clothing
        </Link><br/>
        <Link
        onClick={onClose}
          to="/AllProducts/Home Cleaning"
          className="navbar_third_section_link"
        >
          Home Cleaning
        </Link><br/>
        <Link  onClick={onClose} to="/AllProducts/Home" className="navbar_third_section_link">
          Home Accessories
        </Link><br/>
        <Link
        onClick={onClose}
          to="/AllProducts/Kitchen & Dining"
          className="navbar_third_section_link"
        >
          Kitchen & Dining
        </Link><br/>
        <Link
        onClick={onClose}
          to="/AllProducts/Mobile Accessories"
          className="navbar_third_section_link"
        >
          Mobile Accessories
        </Link><br/>
        <Link
        onClick={onClose}
          to="/AllProducts/Automotive"
          className="navbar_third_section_link"
        >
          Automotive
        </Link><br/>
        <Link
        onClick={onClose}
          to="/AllProducts/Sports & Fitness"
          className="navbar_third_section_link"
        >
          Sports & Fitness
        </Link> <br/>
        

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
