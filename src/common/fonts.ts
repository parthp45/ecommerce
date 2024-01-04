import {
  Cabin,
  Montserrat,
  Plus_Jakarta_Sans,
  Poppins,
  Quicksand,
} from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--jakarta",
  subsets: ["latin"],
});
const cabin = Cabin({ variable: "--cabin", subsets: ["latin"] });
const quicksand = Quicksand({ variable: "--quick", subsets: ["latin"] });
const monst = Montserrat({ variable: "--monst", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--poppins",
  weight: "400",
  subsets: ["latin"],
});

export { jakarta, cabin, quicksand, monst, poppins };
