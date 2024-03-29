import React from "react";
import "./Page.css";
import Box from "../box/Box";

class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <body className="page-body">
          <Box
            title={"This is box one"}
            subtitle={"This is subtitle one"}
            paragraph={"This is paragraph one"}
          ></Box>
          <Box
            title={"This is box one"}
            subtitle={"This is subtitle one"}
            paragraph={"This is paragraph one"}
          ></Box>
          <Box
            title={"This is box one"}
            subtitle={"This is subtitle one"}
            paragraph={"This is paragraph one"}
          ></Box>
        </body>
      </div>
    );
  }
}

export default Page;
