import React from "react";
import Header from "../../component/header";
import Body from "../../component/body";
import { layout } from 'onekijs';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white antialiased">
      <Header />
      <Body>{children}</Body>
    </div>
  );
};

export default layout(MainLayout);
