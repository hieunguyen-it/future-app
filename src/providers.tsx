import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export function Providers(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
  );
}
