import appStore from "@/utils/store";
import React from "react";
import ThemeProvider from "../ThemeProvider";
import Header from "../Header";
import { Provider } from "react-redux";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={appStore}>
      <ThemeProvider>
        <Header />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default BaseLayout;
