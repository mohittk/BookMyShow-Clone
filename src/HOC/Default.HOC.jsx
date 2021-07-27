import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;