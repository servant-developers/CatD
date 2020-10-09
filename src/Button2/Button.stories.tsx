import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { ButtonTypes } from './types';

const buttonPropsCase = [
  {
    title: 'Default',
  },
  {
    title: 'Disabled',
    props: {
      disabled: true,
    },
  },
  {
    title: 'Loading',
    props: {
      loading: true,
    },
  },
];

storiesOf('Button', module).add('default', () => (
  <table>
    <tbody>
      {buttonPropsCase.map((row) => (
        <tr key={`row-${row.title}`}>
          <th>{row.title}</th>
          {Object.keys(ButtonTypes).map((buttonType) => (
            <td key={`button-${buttonType}`}>
              <Button buttonType={buttonType} {...row.props}>
                {buttonType}
              </Button>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
));
