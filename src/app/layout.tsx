"use client";

import { cabin, jakarta, monst, poppins, quicksand } from "@/common/fonts";
import BaseLayout from "@/components/BaseLayout";
import "./globals.css";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

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
        {/* <Provider store={appStore}>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </Provider> */}
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
