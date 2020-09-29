import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  it('button properly rendered with label', () => {
    render(<Button />);
  });
});
