import styled from 'styled-components/native';
import { COLORS } from '../../theme/colors';

interface PageContainerProps {
  padding: number;
}

export const PageContainer = styled.View<PageContainerProps>`
  flex: 1;
  background-color: ${COLORS.black};
  padding: ${props => `${props.padding}px`};
`;

export const PageSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
