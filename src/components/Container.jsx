import React from "react";
import * as containerStyles from "./Container.module.css";

// CSS Module is a CSS file in which all class names and animation names are scoped locally by default
// - no longer have to worry about selector name collisions and works out of the box with Gatsby
const Container = ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
);

export default Container;
