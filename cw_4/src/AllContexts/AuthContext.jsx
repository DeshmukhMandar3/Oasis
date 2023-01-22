import React, { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext();

function Authcontextprovider({ children }) {
  const [auth, setauth] = useState(false);
  const [userdata, setuserdata] = useState([]);

  const [adminauth, setadminauth] = useState(false);
  const [adminuserdata, adminsetuserdata] = useState([]);

  return (
    <Authcontext.Provider
      value={{
        auth,
        setauth,
        userdata,
        setuserdata,
        adminauth,
        setadminauth,
        adminuserdata,
        adminsetuserdata,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
export default Authcontextprovider;
