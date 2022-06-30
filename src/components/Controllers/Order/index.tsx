import React from 'react';
import { useTheme } from 'styled-components/native';


import {
  Container,
 // Status,
  Content,
  Header,
  Title,
  Label,
  OrderStyleProps
} from './styles';


export type OrderProps = OrderStyleProps & {
  id: string;
  amount: string;
  date: string;
  description: string;
}

type Props = {
  data: OrderProps;
};

export function Order({ data }: Props) {
  const theme = useTheme();

  return (
    <Container>
      {/*<Status status={data.status} />*/}

      <Content>
        <Header>
          <Title>{data.description}{'\n'}{data.date}</Title>
          <Label> {data.amount}</Label>
        </Header>

        

      
      </Content>
    </Container>
  );
}