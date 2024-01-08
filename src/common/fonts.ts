import {
  Cabin,
  Montserrat,
  Plus_Jakarta_Sans,
  Poppins,
  Quicksand,
  Raleway,
} from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--jakarta",
  subsets: ["latin"],
});
const cabin = Cabin({
  variable: "--cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const quicksand = Quicksand({
  variable: "--quick",
  subsets: ["latin"],

  weight: ["400", "500", "600", "700"],
});
const monst = Montserrat({
  variable: "--monst",
  subsets: ["latin"],

  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  variable: "--poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--raleway",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export { jakarta, cabin, quicksand, monst, poppins, raleway };
