import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#EEE",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <h1>Hello world App</h1>
      </div>
      <div>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
