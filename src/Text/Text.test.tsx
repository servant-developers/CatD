import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';

import Text from './Text';

describe('<Button />', () => {
  it('button properly rendered with label', () => {
    const utils = render(<Text />);
    utils.getByText('button');
  });
});
