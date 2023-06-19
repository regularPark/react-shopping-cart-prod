import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { worker } from './mocks/browsers';
import { LoadingSpinner } from './components/@common/LoadingSpinner/LoadingSpinner';
import { ErrorBoundary } from 'react-error-boundary';

const main = async () => {
  if (window.location.pathname === '/react-shopping-shop') {
    window.location.pathname = '/react-shopping-shop/';
    return;
  }

  await worker.start({
    serviceWorker: {
      url: '/react-shopping-shop/mockServiceWorker.js',
    },
  });

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <GlobalStyle />
      <ErrorBoundary fallback={<p>hi</p>}>
        <Suspense fallback={<LoadingSpinner />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>,
  );
};

main();
