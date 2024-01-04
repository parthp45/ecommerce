"use client";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import React, { ReactNode, createContext, useState } from "react";

interface ThemeProviderType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProviderType>({
  theme: "",
  toggleTheme() {},
});
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => {
      if (prevState === "light") {
        document.documentElement.classList.add("dark");
        return "dark";
      } else {
        document.documentElement.classList.remove("dark");
        return "light";
      }
    });
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: theme === "dark" ? "#1f1f1f" : "white",
            colorText: theme === "dark" ? "white" : "black",
            fontFamily: `var(--quick)`,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
