import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';

import Input from './Input';

describe('<Button />', () => {
  it('button properly rendered with label', () => {
    const utils = render(<Input />);
    utils.getByText('button');
  });
});
