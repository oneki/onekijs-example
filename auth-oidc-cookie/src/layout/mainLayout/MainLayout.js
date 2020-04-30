import React from "react";
import Header from "../../component/header";
import Body from "../../component/body";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};



export default MainLayout;
