import React from "react";
import { Helmet } from "react-helmet";

const PageHeader = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/6072/6072846.png"
        />
      </Helmet>
    </>
  );
};

export default PageHeader;
