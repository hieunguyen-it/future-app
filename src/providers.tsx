import * as React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { persistor, store } from '@store';
import { PersistGate } from "redux-persist/integration/react";

export function Providers(props: { children: React.ReactNode }) {
  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
            {props.children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
