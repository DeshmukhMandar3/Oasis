import Login from "./Login";

import { Authcontext } from "../../AllContexts/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";

function Logout() {
  const { auth, setauth, userdata, setuserdata } = useContext(Authcontext);

  useEffect(() => {
    usedatacheck();
  }, []);

  const usedatacheck = async () => {
    try {
      let resdata = await axios.get("https://backend-cw-4.onrender.com/user/");
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
      let resdata = await axios.get("https://backend-cw-4.onrender.com/user/");
      let data = resdata.data;

      userdatadelete(data[0].id);
    } catch (error) {
      console.log("error");
    }
  };
  const userdatadelete = async (id) => {
    try {
      let userdelete = await axios.delete(
        `https://backend-cw-4.onrender.com/user/${id}`
      );
      usedatacheck();
    } catch (error) {}
  };

  let useremail = userdata.email;
  return (
    <div className="App">
      {auth ? (
        <Button onClick={deletedata}>Hi {useremail.substring(0, 7)}</Button>
      ) : (
        <Login />
      )}

      {/* <GeneralRoutes /> */}

      {/* <GeneralRoutes /> */}
    </div>
  );
}

export default Logout;
