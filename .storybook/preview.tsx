import React, { Suspense } from 'react'
import { MemoryRouter } from 'react-router-dom'
import type { Preview } from '@storybook/react'
import { RecoilRoot } from 'recoil'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { GlobalStyle } from '../src/GlobalStyle'
import { ErrorBoundary } from 'react-error-boundary'
import NotFound from '../src/pages/NotFound'
import { LoadingSpinner } from '../src/components/@common/LoadingSpinner/LoadingSpinner'

let options = {}
if (location.hostname === 'regularpark.github.io') {
  options = {
    serviceWorker: {
      url: '/react-shopping-cart-prod/mockServiceWorker.js',
    },
  }
}

// Initialize MSW
initialize(options)

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '992px',
      height: '700px',
    },
  },
  Mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
}

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { ...customViewports },
      defaultViewport: 'Default',
    },
  },

  decorators: [
    (Story) => (
      <RecoilRoot>
        <ErrorBoundary FallbackComponent={NotFound}>
          <Suspense fallback={<LoadingSpinner />}>
            <GlobalStyle />
            <MemoryRouter initialEntries={['/']}>
              <Story />
            </MemoryRouter>
          </Suspense>
        </ErrorBoundary>
      </RecoilRoot>
    ),
    mswDecorator,
  ],
}

export default preview
