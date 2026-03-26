import React, { useState } from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const user = {
    name: "Ranjit",
    mobile: "01300241001",
  };
  //   const user = null; // for test use this line

  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
