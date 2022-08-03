import { render } from '@testing-library/react';

import RelibThree from './relib-three';

describe('RelibThree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelibThree />);
    expect(baseElement).toBeTruthy();
  });
});
