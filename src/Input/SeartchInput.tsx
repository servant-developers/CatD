import React from 'react';
import { InputDefaultProps } from './Input';

export type SearchInputProps = {} & InputDefaultProps;

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return <input type="search" />;
};

export default SearchInput;
