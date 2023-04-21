import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoot } from '@dynatrace/strato-components-preview';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <AppRoot>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter basename='ui'>
      <App />
    </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </AppRoot>,
  document.getElementById('root'),
);
