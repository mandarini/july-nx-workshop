import { render } from '@testing-library/react';

import RelibTwo from './relib-two';

describe('RelibTwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelibTwo />);
    expect(baseElement).toBeTruthy();
  });
});
