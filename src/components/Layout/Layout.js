import React from "react";
import Wrapper from "../../hoc/Wrapper";
import classes from './Layout.css'
import NavigationItems from "../Toolbar/Toolbar";

const layout = (props) => {
  return (
    <Wrapper>
      <NavigationItems/>
      <main className={classes.Content}>
          {props.children}
      </main>
    </Wrapper>
  );
};
export default layout;
