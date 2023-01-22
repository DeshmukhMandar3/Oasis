import { Authcontext } from "../AllContexts/AuthContext";
import React from "react";
import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export default function PrivateRoutes({ children }) {
  const toast = useToast();
  const { auth } = React.useContext(Authcontext);
  if (!auth) {
    toast({
      title: `You Must Login to see other content`,
      status: "warning",
      isClosable: true,
      position: "top",
    });
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
