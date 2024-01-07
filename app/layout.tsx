"use client";

import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux/store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </ReduxProvider>
      </body>
    </html>
  );
}
