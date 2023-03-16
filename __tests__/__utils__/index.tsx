import React, { FC, ReactElement, ReactNode } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import { rootReducer } from '../../src/store/reducer';

const store = configureStore({ reducer: rootReducer });

const Providers: FC<{ children?: ReactNode }> = ({ children }: { children?: ReactNode }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(
  ui,
  {
    wrapper: Providers,
    ...options,
  },
);

export * from '@testing-library/react';
export { customRender as render };
