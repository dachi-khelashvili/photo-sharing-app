import React from 'react';
import {
  Container,
  Header,
  HeaderContainer,
  HeaderItem,
  Body,
  RowContainer,
  RowItem,
} from './style';

interface TableProps {
  headers: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  records: any[];
  columns: string[];
  renders?: Map<string, (column: string, value: unknown) => unknown>;
}

export const TableComponent: React.FC<TableProps> = (props) => {
  const { headers, columns, records } = props;

  return (
    <Container>
      <Header>
        <HeaderContainer>
          {headers.map((header) => (
            <HeaderItem key={header}>{header}</HeaderItem>
          ))}
        </HeaderContainer>
      </Header>
      <Body>
        {records.map((record, index) => (
          <RowContainer key={index}>
            {columns.map((column) => (
              <RowItem key={column}>{record[column]}</RowItem>
            ))}
          </RowContainer>
        ))}
      </Body>
    </Container>
  );
};
