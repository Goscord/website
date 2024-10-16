"use client";

import { Notification } from "#/lib/components/molecules/notification";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren, ReactElement } from "react";

const queryClient = new QueryClient();

export function Provider({ children }: PropsWithChildren): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Notification />

      {children}
    </QueryClientProvider>
  );
}