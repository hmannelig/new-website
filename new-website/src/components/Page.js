import React from "react";
import "../css/Page.css";
import Box from "./Box";

class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <body className="page-body">
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </body>
      </div>
    );
  }
}

export default Page;
