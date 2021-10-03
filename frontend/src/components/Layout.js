import * as React from "react";
import { Link } from "gatsby";
import "./Layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/category">Categories</Link>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
