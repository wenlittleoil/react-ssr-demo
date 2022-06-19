import React from "react";

const Layout = (props) => {
  const {
    children
  } = props;
  return (
    <div className="app-wrapper">
      <div 
        className="header" 
        style={{
          color: 'red',
        }}
      >
        公共头部
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
