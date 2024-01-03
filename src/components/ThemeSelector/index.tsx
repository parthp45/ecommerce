"use client";

import React, { useContext } from "react";
import { Moon, MoonStars, SunDim } from "@phosphor-icons/react";

import { ThemeContext } from "../ThemeProvider";

const ThemeSelector = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={`relative ml-auto cursor-pointer p-2  rounded-md border border-transparent hover:border-neutral-200 text-black transition-colors dark:hover:border-neutral-700 dark:text-white hover:shadow-sm`}
      role="button"
    >
      {theme === "light" ? (
        <MoonStars size={24} />
      ) : (
        <SunDim size={24} color="white" />
      )}
    </div>
  );
};

export default ThemeSelector;
