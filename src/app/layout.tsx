import Header from "@/components/Header";
import ThemeProvider from "@/components/ThemeProvider";
import type { Metadata } from "next";
import {
  Cabin,
  Montserrat,
  Plus_Jakarta_Sans,
  Poppins,
  Quicksand,
} from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} bg-white dark:bg-black dark:text-white ${jakarta.variable} ${cabin.variable} ${quicksand.variable} ${monst.variable} ${poppins.variable}`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
