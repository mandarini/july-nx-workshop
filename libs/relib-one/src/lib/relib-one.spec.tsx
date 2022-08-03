import { render } from '@testing-library/react';

import RelibOne from './relib-one';

describe('RelibOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelibOne />);
    expect(baseElement).toBeTruthy();
  });
});
