import * as React from 'react';

import { PageContainer, PageSafeAreaView } from './Page.styles';
import { Tappable } from '../Library/Tappable';

type Props = {
  padding: number;
  tappable?: boolean;
  onPress?: () => void;
};

export const Page: React.FC<Props> = ({
  children,
  padding,
  tappable = true,
  onPress,
}) => {
  return (
    <PageSafeAreaView>
      <PageContainer padding={padding}>
        <Tappable onPress={onPress} disabled={!tappable}>
          {children}
        </Tappable>
      </PageContainer>
    </PageSafeAreaView>
  );
};
