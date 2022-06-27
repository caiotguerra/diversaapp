import styled from 'styled-components/native';

export type OrderStyleProps = {
  status: 'open' | 'closed';
};

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 5px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-style: solid;
  border-color: #eee;
  border-bottom-width: 1px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<OrderStyleProps>`
  width: 0px;
  height: 0px;
  background-color: ${({ theme, status }) => status === 'open' ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
`;


export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-left: 3px;
`;