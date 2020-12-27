import React from 'react';
import { render } from '@testing-library/react';
import App from '../../src/features/App';

describe('when rendering the App', () => {
  it('should match the snapshot', () => {
    const sut = render(<App />);

    expect(sut.asFragment()).toMatchSnapshot();
  });
});
