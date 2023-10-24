import React from 'react';
import { Flex, Label, Option, Input } from './styles';

export const Selector: React.FC = () => {
  return (
    <Flex>
      <Label>Sort by:</Label>
      <Input list="sorts" name="sort" id="sort" placeholder="Sort..." />
      <datalist id="sorts">
        <Option value="Date" key="Date" />
        <Option value="Uploader" key="Uploader" />
      </datalist>
    </Flex>
  );
};
