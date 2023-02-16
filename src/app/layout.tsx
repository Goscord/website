"use client";

import "#/lib/styles/reset.css";
import "#/lib/styles/font.css";
import "#/lib/styles/tailwind.css";
import { Navbar } from "#/lib/components/navbar/navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, ReactElement } from "react";

const queryClient = new QueryClient();

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="en">
      <head />

      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />

          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}