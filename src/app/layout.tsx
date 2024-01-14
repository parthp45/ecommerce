import {
  cabin,
  inter,
  jakarta,
  monst,
  poppins,
  quicksand,
} from "@/common/fonts";
import BaseLayout from "@/components/BaseLayout";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-black dark:text-white ${jakarta.variable} ${cabin.variable} ${quicksand.variable} ${monst.variable} ${poppins.variable}`}
      >
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
