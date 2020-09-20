import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('<Button />', () => {
  it('button properly rendered with label', () => {
    const utils = render(<Button text={'button'} />);
    utils.getByText('button');
  });
});
