import React from "react";
import Header from "../../components/header/Header";
const layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
