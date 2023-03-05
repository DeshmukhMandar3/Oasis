import Login from "./Login";

import { Authcontext } from "../../AllContexts/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
function Logout() {
  const navigate=useNavigate()
  const { auth, setauth, userdata, setuserdata } = useContext(Authcontext);

  useEffect(() => {
    usedatacheck();
  }, []);

  const usedatacheck = async () => {
    try {
      let resdata = await axios.get("http://localhost:8080/user/");
      let data = resdata.data;
      if (data.length === 0) {
        // setuserdata([])
        setauth(false);
      } else {
        setauth(true);

        setuserdata(data[0]);
      }
    } catch (error) {
      console.log("error");
    }
  };

  //delete data
  const deletedata = async () => {
    try {
      let resdata = await axios.get("http://localhost:8080/user/");
      let data = resdata.data;

      userdatadelete(data[0].id);
    } catch (error) {
      console.log("error");
    }
  };
  const userdatadelete = async (id) => {
    try {
      let userdelete = await axios.delete(`http://localhost:8080/user/${id}`);
      usedatacheck();
    } catch (error) {}
  };

  //logout
  const logoutfun=()=>{
    setauth(false)
    navigate("/")
  }

  let useremail = userdata.email;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    //<Login/>
    <div className="App">
      {auth ? (
        <Button onClick={deletedata}>Hi {useremail.substring(0, 7)}</Button>
      ) : (
        <Button onClick={onOpen}>Login</Button>
      )}
      {auth ? (
        <Button onClick={logoutfun}>Logout</Button>
      ) : (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Button onClose={onClose}>
                <Login />
              </Button>
              <a href="https://oasis-admin-panel.netlify.app/login">
                <Button onClick={onClose}>Admin Login</Button>
              </a>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {/* <GeneralRoutes /> */}

      {/* <GeneralRoutes /> */}
    </div>
  );
}

export default Logout;
